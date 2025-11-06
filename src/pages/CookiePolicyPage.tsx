import { Card } from "../components/ui/card";

export function CookiePolicyPage() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            쿠키 정책
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            COSMOS는 사용자 경험을 향상시키기 위해 쿠키를 사용합니다. 이 정책은 쿠키 사용에 대한 정보를 제공합니다.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">1. 쿠키란 무엇인가요?</h2>
            <p className="text-gray-300 mb-4">
              쿠키는 웹사이트를 방문할 때 브라우저에 저장되는 작은 텍스트 파일입니다. 쿠키는 웹사이트가 사용자의 기기를 인식하고, 사용자의 선호도와 설정을 기억하는 데 도움을 줍니다.
            </p>
            <p className="text-gray-300">
              COSMOS는 사용자 경험을 개선하고 서비스를 최적화하기 위해 쿠키를 사용합니다.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">2. 쿠키의 종류</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">필수 쿠키 (Essential Cookies)</h3>
                <p className="mb-2">웹사이트의 기본 기능을 제공하는 데 필요한 쿠키입니다. 이러한 쿠키 없이는 서비스를 제공할 수 없습니다.</p>
                <ul className="list-disc list-inside ml-4">
                  <li>세션 관리</li>
                  <li>로그인 상태 유지</li>
                  <li>보안 기능</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">성능 및 분석 쿠키 (Performance & Analytics Cookies)</h3>
                <p className="mb-2">웹사이트의 성능을 분석하고 개선하는 데 사용되는 쿠키입니다.</p>
                <ul className="list-disc list-inside ml-4">
                  <li>방문자 수 및 페이지 조회 수 추적</li>
                  <li>사용자 행동 분석</li>
                  <li>서비스 성능 측정</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-2">기능 쿠키 (Functional Cookies)</h3>
                <p className="mb-2">사용자의 선호도와 설정을 기억하여 향상된 개인화된 경험을 제공합니다.</p>
                <ul className="list-disc list-inside ml-4">
                  <li>언어 설정</li>
                  <li>테마 설정</li>
                  <li>알림 설정</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">3. 쿠키 사용 목적</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li><strong className="text-white">서비스 제공:</strong> 사용자에게 맞춤형 콘텐츠와 기능을 제공</li>
              <li><strong className="text-white">서비스 개선:</strong> 웹사이트 사용 방식을 분석하여 서비스 품질 향상</li>
              <li><strong className="text-white">보안:</strong> 사기 및 기타 악의적인 활동 방지</li>
              <li><strong className="text-white">편의성:</strong> 사용자의 설정과 선호도를 기억하여 반복 입력 불필요</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">4. 쿠키의 보유 기간</h2>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong className="text-white">세션 쿠키:</strong> 브라우저를 닫을 때까지 유지되며, 브라우저를 닫으면 자동으로 삭제됩니다.
              </p>
              <p>
                <strong className="text-white">영구 쿠키:</strong> 만료일까지 브라우저에 저장되며, 만료일이 지나거나 사용자가 삭제할 때까지 유지됩니다.
              </p>
              <p className="mt-4">
                대부분의 쿠키는 최대 2년 동안 유지되며, 필요에 따라 더 짧은 기간으로 설정될 수 있습니다.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">5. 쿠키 관리 방법</h2>
            <p className="text-gray-300 mb-4">
              사용자는 쿠키 설정을 변경할 수 있습니다. 대부분의 웹 브라우저는 쿠키를 자동으로 수락하도록 설정되어 있지만, 브라우저 설정을 변경하여 쿠키를 차단하거나 삭제할 수 있습니다.
            </p>
            <div className="space-y-3 text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">브라우저별 쿠키 설정 방법:</h3>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><strong className="text-white">Chrome:</strong> 설정 &gt; 개인정보 및 보안 &gt; 쿠키 및 기타 사이트 데이터</li>
                  <li><strong className="text-white">Firefox:</strong> 설정 &gt; 개인정보 보호 &gt; 쿠키 및 사이트 데이터</li>
                  <li><strong className="text-white">Safari:</strong> 환경설정 &gt; 개인정보 보호 &gt; 쿠키 및 웹 사이트 데이터</li>
                  <li><strong className="text-white">Edge:</strong> 설정 &gt; 쿠키 및 사이트 권한</li>
                </ul>
              </div>
              <p className="mt-4">
                <strong className="text-white">주의:</strong> 쿠키를 차단하면 일부 서비스 기능이 제대로 작동하지 않을 수 있습니다.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">6. 제3자 쿠키</h2>
            <p className="text-gray-300 mb-4">
              COSMOS는 서비스 개선 및 분석을 위해 신뢰할 수 있는 제3자 서비스를 사용할 수 있습니다. 이러한 서비스 제공자들은 자신의 쿠키 정책을 가지고 있으며, 다음 서비스들을 포함할 수 있습니다:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>Google Analytics (웹사이트 분석)</li>
              <li>Vercel Analytics (성능 모니터링)</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">7. 쿠키 정책 변경</h2>
            <p className="text-gray-300">
              COSMOS는 법률 및 규정의 변경이나 서비스 개선에 따라 쿠키 정책을 업데이트할 수 있습니다. 중요한 변경사항이 있는 경우 웹사이트를 통해 공지하거나 이메일로 알려드립니다. 변경된 정책은 공지된 날짜부터 적용됩니다.
            </p>
            <p className="text-gray-300 mt-4">
              <strong className="text-white">최종 업데이트:</strong> 2025년 1월 1일
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">8. 문의하기</h2>
            <p className="text-gray-300 mb-4">
              쿠키 정책에 대한 질문이나 우려사항이 있으시면 다음 연락처로 문의해 주세요:
            </p>
            <div className="bg-black/30 p-4 rounded-lg text-gray-300">
              <p className="mb-2"><strong className="text-white">이메일:</strong> privacy@cosmos.kr</p>
              <p><strong className="text-white">연락처:</strong> 1588-0000</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

