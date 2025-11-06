import { PageHeader } from "../components/PageHeader";
import { ContentSection } from "../components/ContentSection";
import { BookOpen, Lightbulb, Users, Quote } from "lucide-react";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function ScienceStoriesPage() {
  const mistakes = [
    {
      title: "화성 탐사선 추락 (1999)",
      subtitle: "단위 혼동이 부른 1억 달러 손실",
      story: "NASA의 화성 기후 궤도선(MCO)이 화성 대기권에서 소실되었습니다. 원인은 너무나 허무했습니다. 록히드 마틴은 야드파운드법을, NASA는 미터법을 사용했던 것입니다. 이 간단한 실수로 1억 2천5백만 달러가 우주 먼지가 되었습니다.",
      lesson: "가장 기본적인 것이 가장 중요합니다. 의사소통과 표준화의 중요성."
    },
    {
      title: "페리톤 신호 (2010년대)",
      subtitle: "10년 미스터리의 정체는 전자레인지",
      story: "호주 파크스 전파망원경에서 10년 넘게 정체불명의 강력한 전파 신호가 감지되었습니다. 과학자들은 새로운 천체 현상일까 기대했습니다. 그러나 2015년, 진실이 밝혀졌습니다. 직원들이 점심 데우다 전자레인지 문을 급하게 열면서 발생한 전파였습니다.",
      lesson: "당연하다고 생각하는 것을 의심하라. 가장 평범한 곳에 답이 있을 수 있습니다."
    },
    {
      title: "페니실린 발견 (1928)",
      subtitle: "뚜껑을 닫지 않은 배양 접시",
      story: "알렉산더 플레밍은 휴가를 떠나면서 실험실을 정리하지 않았습니다. 돌아와 보니 세균 배양 접시에 곰팡이가 자랐고, 그 주변에는 세균이 죽어있었습니다. 이 '실수'로 인류는 항생제를 얻었고, 수억 명의 생명을 구했습니다.",
      lesson: "예상치 못한 결과를 그냥 지나치지 마세요. 우연한 발견(serendipity)이 과학을 발전시킵니다."
    },
    {
      title: "우주 배경 복사 발견 (1965)",
      subtitle: "안테나 노이즈의 정체",
      story: "벨 연구소의 펜지어스와 윌슨은 전파 안테나에서 제거할 수 없는 노이즈를 발견했습니다. 비둘기 배설물을 청소해도, 안테나를 재조정해도 소음은 사라지지 않았습니다. 이것이 바로 빅뱅의 잔광, 우주 배경 복사였습니다. 두 사람은 노벨상을 받았습니다.",
      lesson: "성가신 문제가 위대한 발견의 시작일 수 있습니다."
    },
    {
      title: "X-레이 발견 (1895)",
      subtitle: "형광 현상을 우연히 관찰",
      story: "뢴트겐은 음극선관 실험 중 우연히 멀리 떨어진 형광 물질이 빛나는 것을 발견했습니다. 그는 즉시 이 '알 수 없는 광선(X-ray)'을 연구했고, 몇 주 만에 최초의 X선 사진을 찍었습니다. 의학에 혁명을 가져온 발견이었습니다.",
      lesson: "호기심을 가지고 관찰하세요. 예상 밖의 현상이 새로운 세계를 열 수 있습니다."
    }
  ];

  const scientists = [
    {
      name: "지웅배",
      title: "천문학자, 과학 커뮤니케이터",
      affiliation: "연세대학교",
      quote: "우리는 모두 우주 먼지입니다",
      story: "유튜브 '우주먼지 현자타임즈'를 통해 어려운 천문학을 쉽고 재미있게 전달합니다. '우리 몸을 구성하는 원소는 별에서 만들어졌다'는 메시지로 우주와 인간의 연결을 강조합니다.",
      message: "과학은 단순한 지식이 아니라 우리 존재에 대한 깊은 통찰입니다."
    },
    {
      name: "김상욱",
      title: "물리학자, 작가",
      affiliation: "경희대학교",
      quote: "죽음은 원자의 재배치일 뿐",
      story: "양자역학과 우주론을 삶과 철학에 연결합니다. '떨림과 울림'등의 저서로 과학과 인문학의 경계를 허물었습니다.",
      message: "물리학적 관점에서 보면 삶과 죽음은 다른 형태의 존재일 뿐입니다."
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        title="과학 이야기"
        subtitle="SCIENCE STORIES"
        description="실수, 우연, 그리고 위대한 발견들"
        icon={BookOpen}
        backgroundImage="https://images.unsplash.com/photo-1707944745899-104a4b12d945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbnRpc3QlMjBsYWJvcmF0b3J5JTIwcmVzZWFyY2h8ZW58MXx8fHwxNzYyNDAzNTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Main Quote */}
      <section className="py-12 px-4 bg-gradient-to-b from-cyan-900/20 to-black">
        <div className="container mx-auto max-w-3xl text-center">
          <Quote className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl text-white mb-6">
            "과학은 완벽함에서 나오지 않는다<br/>실수와 우연에서 발전한다"
          </h2>
          <p className="text-gray-400">
            역사상 가장 위대한 과학적 발견들 중 많은 것이 예상치 못한 실수나 우연에서 시작되었습니다.
          </p>
        </div>
      </section>

      {/* Mistakes Lead to Discoveries */}
      <ContentSection title="실수로부터의 위대한 발견">
        <p className="text-gray-300 mb-8 max-w-3xl mx-auto text-center">
          과학의 역사는 실패와 우연의 역사입니다. 
          계획대로 되지 않았던 순간들이 오히려 새로운 문을 열어주었습니다.
        </p>

        <div className="space-y-6">
          {mistakes.map((mistake, index) => (
            <Card key={index} className="p-6 md:p-8 bg-gradient-to-br from-gray-900/90 to-black/90 border border-cyan-500/20">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white mb-1">{mistake.title}</h3>
                  <p className="text-sm text-cyan-400">{mistake.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {mistake.story}
              </p>
              
              <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
                <p className="text-sm text-cyan-400">
                  <strong>교훈:</strong> {mistake.lesson}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-white mb-4">과학의 진정한 모습</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            과학은 항상 옳은 답을 아는 것이 아닙니다. 
            <span className="text-purple-400"> 틀릴 수 있는 용기</span>, 
            <span className="text-cyan-400"> 예상 밖을 받아들이는 유연성</span>, 
            그리고 <span className="text-pink-400">끈질긴 호기심</span>이 
            과학을 발전시킵니다.
          </p>
        </div>
      </ContentSection>

      {/* Scientist Interviews */}
      <ContentSection title="과학자 인터뷰 & 칼럼">
        <Tabs defaultValue="scientist-0" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            {scientists.map((_, index) => (
              <TabsTrigger key={index} value={`scientist-${index}`}>
                {scientists[index].name}
              </TabsTrigger>
            ))}
          </TabsList>

          {scientists.map((scientist, index) => (
            <TabsContent key={index} value={`scientist-${index}`}>
              <Card className="p-8 bg-gradient-to-br from-gray-900/90 to-black/90 border border-cyan-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white">{scientist.name}</h3>
                    <p className="text-sm text-gray-400">{scientist.title}</p>
                    <p className="text-xs text-gray-500">{scientist.affiliation}</p>
                  </div>
                </div>

                <div className="bg-cyan-900/20 border-l-4 border-cyan-500 p-6 mb-6">
                  <Quote className="w-8 h-8 text-cyan-400 mb-3" />
                  <p className="text-xl text-white italic">"{scientist.quote}"</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-purple-400 mb-2">소개</h4>
                    <p className="text-gray-300 text-sm">{scientist.story}</p>
                  </div>
                  <div>
                    <h4 className="text-cyan-400 mb-2">메시지</h4>
                    <p className="text-gray-300 text-sm italic">{scientist.message}</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </ContentSection>

      {/* Nature of Science */}
      <ContentSection title="과학의 본질">
        <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-4xl mx-auto">
          <Card className="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30">
            <h4 className="text-cyan-400 mb-4">과학적 방법</h4>
            <ol className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">1.</span>
                <div>
                  <strong>관찰:</strong> 현상을 주의 깊게 살핀다
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">2.</span>
                <div>
                  <strong>가설:</strong> 설명 가능한 이론을 세운다
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">3.</span>
                <div>
                  <strong>실험:</strong> 가설을 검증한다
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-400 flex-shrink-0">4.</span>
                <div>
                  <strong>결론:</strong> 결과를 분석하고 수정한다
                </div>
              </li>
            </ol>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30">
            <h4 className="text-purple-400 mb-4">재현 가능성</h4>
            <p className="text-sm text-gray-300 mb-4">
              과학적 발견은 누가 실험해도 같은 결과가 나와야 합니다. 
              이것이 과학을 <strong>믿음</strong>과 구별하는 핵심입니다.
            </p>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-xs text-gray-400">
                2000년대 "재현 위기(Replication Crisis)": 
                심리학, 의학 연구의 많은 부분이 재현되지 않아 과학계에 경종을 울렸습니다.
              </p>
            </div>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30">
            <h4 className="text-orange-400 mb-4 text-center">과학의 한계</h4>
            <p className="text-gray-300 mb-4 text-center">
              과학은 강력하지만 만능은 아닙니다.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="text-white mb-2">과학이 답할 수 있는 것</h5>
                <ul className="space-y-1 text-gray-300">
                  <li>• 어떻게 (How)?</li>
                  <li>• 우주는 어떻게 생겼나?</li>
                  <li>• 별은 어떻게 빛나나?</li>
                  <li>• 생명은 어떻게 진화했나?</li>
                </ul>
              </div>
              <div>
                <h5 className="text-white mb-2">과학이 답하기 어려운 것</h5>
                <ul className="space-y-1 text-gray-300">
                  <li>• 왜 (Why)?</li>
                  <li>• 우주는 왜 존재하나?</li>
                  <li>• 삶의 의미는 무엇인가?</li>
                  <li>• 무엇이 옳고 그른가?</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </ContentSection>

      {/* Science and Society */}
      <ContentSection title="과학과 사회">
        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-6 bg-gray-900/50 border border-cyan-500/20">
            <h4 className="text-cyan-400 mb-3">과학 대중화의 중요성</h4>
            <p className="text-gray-300 mb-4">
              과학은 소수 전문가의 것이 아닙니다. 
              민주주의 사회에서 시민들은 기후 변화, 백신, 우주 개발 등 
              과학과 관련된 정책을 이해하고 판단해야 합니다.
            </p>
            <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
              <p className="text-sm text-gray-300">
                <strong>칼 세이건:</strong> "우리는 과학에 의존하는 사회에 살면서, 
                거의 아무도 과학에 대해 모른다. 이것은 재앙의 레시피다."
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-gray-900/50 border border-purple-500/20">
            <h4 className="text-purple-400 mb-3">청소년 과학 교육</h4>
            <p className="text-gray-300 mb-4">
              암기식 교육이 아닌, <strong>호기심과 질문</strong>을 키우는 교육이 필요합니다.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• 실험과 관찰 중심 수업</li>
              <li>• 실패를 두려워하지 않는 문화</li>
              <li>• 과학자와의 만남</li>
              <li>• 과학 콘텐츠 (유튜브, 팟캐스트) 활용</li>
            </ul>
          </Card>

          <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-xl p-8 text-center">
            <h4 className="text-white mb-4">추천 콘텐츠</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-black/30 rounded-lg p-4">
                <h5 className="text-pink-400 mb-2">도서</h5>
                <ul className="space-y-1 text-gray-300">
                  <li>코스모스 - 칼 세이건</li>
                  <li>엘러건트 유니버스</li>
                  <li>하리하라의 과학 24시</li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h5 className="text-purple-400 mb-2">유튜브</h5>
                <ul className="space-y-1 text-gray-300">
                  <li>우주먼지 현자타임즈</li>
                  <li>안될과학</li>
                  <li>긱블</li>
                </ul>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <h5 className="text-cyan-400 mb-2">다큐멘터리</h5>
                <ul className="space-y-1 text-gray-300">
                  <li>Cosmos (2014)</li>
                  <li>Planet Earth</li>
                  <li>The Universe</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
