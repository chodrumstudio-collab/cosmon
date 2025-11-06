#!/bin/bash

# OpenAI DALL-E 이미지 생성 스크립트
# 사용법: ./generate-image.sh "프롬프트" "출력파일명.png" "크기(1024x1024|512x512|256x256)"

PROMPT="$1"
OUTPUT_FILE="$2"
SIZE="${3:-1024x1024}"

if [ -z "$PROMPT" ] || [ -z "$OUTPUT_FILE" ]; then
    echo "사용법: $0 \"프롬프트\" \"출력파일명.png\" [크기]"
    exit 1
fi

API_KEY="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"

echo "이미지 생성 중: $PROMPT"
echo "출력 파일: $OUTPUT_FILE"

RESPONSE=$(curl -s -X POST "https://api.openai.com/v1/images/generations" \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d "{
    \"model\": \"dall-e-3\",
    \"prompt\": \"$PROMPT\",
    \"size\": \"$SIZE\",
    \"quality\": \"standard\",
    \"n\": 1
  }")

# JSON에서 URL 추출 (jq 사용 또는 Python 사용)
if command -v jq &> /dev/null; then
    URL=$(echo $RESPONSE | jq -r '.data[0].url // empty')
elif command -v python3 &> /dev/null; then
    URL=$(echo $RESPONSE | python3 -c "import sys, json; data=json.load(sys.stdin); print(data.get('data', [{}])[0].get('url', ''))")
else
    URL=$(echo $RESPONSE | grep -o '"url":"[^"]*' | head -1 | sed 's/"url":"//' | sed 's/"//')
fi

if [ -z "$URL" ] || [ "$URL" = "null" ]; then
    echo "오류: 이미지 생성 실패"
    echo "응답: $RESPONSE"
    exit 1
fi

echo "이미지 다운로드 중..."
curl -s -o "$OUTPUT_FILE" "$URL"

if [ $? -eq 0 ]; then
    echo "성공: $OUTPUT_FILE 저장됨"
else
    echo "오류: 이미지 다운로드 실패"
    exit 1
fi

