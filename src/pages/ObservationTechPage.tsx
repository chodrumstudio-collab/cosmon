import { PageHeader } from "../components/PageHeader";
import { ContentSection } from "../components/ContentSection";
import { InfoCard } from "../components/InfoCard";
import { Telescope, Eye, Waves, Radio, Microscope } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function ObservationTechPage() {
  const groundTelescopes = [
    {
      name: "GMT (거대마젤란망원경)",
      specs: "직경 25.4m 초거대 망원경",
      location: "칠레 라스 캄파나스",
      feature: "GMTNIRS 적외선 고분산 분광기",
      purpose: "외계행성 대기 성분 분석",
      koreanRole: "한국천문연구원 주도 개발"
    },
    {
      name: "KMTNet",
      specs: "50cm 망원경 3대 네트워크",
      location: "칠레, 남아공, 호주",
      feature: "24시간 연속 하늘 감시",
      purpose: "미시중력렌즈로 외계행성 탐색",
      koreanRole: "한국천문연구원 운영"
    },
    {
      name: "7차원 망원경 (7DT)",
      specs: "50cm 망원경 20대 배열",
      location: "칠레",
      feature: "TCSpy 다중 망원경 제어",
      purpose: "중력파 발생원 추적",
      koreanRole: "한국 주도 개발"
    }
  ];

  const spaceTelescopes = [
    {
      name: "제임스 웹 우주망원경 (JWST)",
      launched: "2021년 12월",
      type: "적외선 관측",
      mission: "최초의 별과 은하 탐색, 외계행성 대기 분석",
      highlight: "인류 역사상 가장 강력한 우주망원경"
    },
    {
      name: "허블 우주망원경",
      launched: "1990년 4월",
      type: "가시광선/자외선",
      mission: "우주의 나이 측정, 은하 진화 연구",
      highlight: "30년 이상 인류에게 우주를 보여준 전설"
    },
    {
      name: "SPHEREx",
      launched: "2025년 예정",
      type: "전천 적외선 분광",
      mission: "빅뱅 직후 급팽창 증거 탐색",
      highlight: "NASA-KASI 협력 프로젝트"
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        title="우주 관측 기술"
        subtitle="OBSERVATION TECHNOLOGY"
        description="인류가 우주를 보는 눈, 망원경의 모든 것"
        icon={Telescope}
        backgroundImage="https://images.unsplash.com/photo-1659986511515-4f6e36775788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYW1lcyUyMHdlYmIlMjB0ZWxlc2NvcGV8ZW58MXx8fHwxNzYyNDAzNTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Overview */}
      <ContentSection title="인류는 어떻게 우주를 볼까?">
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <InfoCard
            title="가시광선"
            description="우리 눈으로 볼 수 있는 빛. 대부분의 광학 망원경이 사용합니다."
            icon={Eye}
            color="cyan"
            index={0}
          />
          <InfoCard
            title="적외선"
            description="따뜻한 물체가 내는 빛. 먼지 너머를 볼 수 있고, 멀리 있는 은하를 관측합니다."
            icon={Waves}
            color="orange"
            index={1}
          />
          <InfoCard
            title="전파"
            description="가장 긴 파장의 빛. 별 사이의 가스와 분자를 연구합니다."
            icon={Radio}
            color="purple"
            index={2}
          />
          <InfoCard
            title="X선/감마선"
            description="가장 에너지가 높은 빛. 블랙홀과 초신성 폭발을 관측합니다."
            icon={Microscope}
            color="pink"
            index={3}
          />
        </div>
      </ContentSection>

      {/* Ground vs Space Telescopes */}
      <ContentSection title="지상 망원경 vs 우주 망원경">
        <Tabs defaultValue="ground" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="ground">지상 망원경</TabsTrigger>
            <TabsTrigger value="space">우주 망원경</TabsTrigger>
          </TabsList>

          <TabsContent value="ground">
            <div className="grid md:grid-cols-3 gap-6">
              {groundTelescopes.map((telescope, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border border-cyan-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-white">{telescope.name}</h3>
                    <Telescope className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">규모:</span>
                      <p className="text-gray-300">{telescope.specs}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">위치:</span>
                      <p className="text-gray-300">{telescope.location}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">특징:</span>
                      <p className="text-gray-300">{telescope.feature}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">목적:</span>
                      <p className="text-cyan-400">{telescope.purpose}</p>
                    </div>
                    <div className="pt-3 border-t border-gray-700">
                      <span className="text-purple-400">🇰🇷 {telescope.koreanRole}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-6">
              <h4 className="text-cyan-400 mb-3">지상 망원경의 장점</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
                <li>✓ 크기 제한이 없어 초대형 망원경 건설 가능</li>
                <li>✓ 유지보수와 업그레이드가 용이</li>
                <li>✓ 비용이 상대적으로 저렴</li>
                <li>✓ 적응광학 기술로 대기 왜곡 보정 가능</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="space">
            <div className="grid md:grid-cols-3 gap-6">
              {spaceTelescopes.map((telescope, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border border-purple-500/20">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-white">{telescope.name}</h3>
                    <Telescope className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-500">발사:</span>
                      <p className="text-gray-300">{telescope.launched}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">관측 파장:</span>
                      <p className="text-gray-300">{telescope.type}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">임무:</span>
                      <p className="text-gray-300">{telescope.mission}</p>
                    </div>
                    <div className="pt-3 border-t border-gray-700">
                      <p className="text-purple-400">{telescope.highlight}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
              <h4 className="text-purple-400 mb-3">우주 망원경의 장점</h4>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-300">
                <li>✓ 대기의 방해 없이 선명한 이미지</li>
                <li>✓ 지상에서 차단되는 파장 관측 가능</li>
                <li>✓ 24시간 관측 가능</li>
                <li>✓ 날씨의 영향 없음</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </ContentSection>

      {/* JWST Deep Dive */}
      <ContentSection title="제임스 웹: 인류 최강의 눈">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-white mb-4">왜 적외선인가?</h3>
            <p className="text-gray-300 mb-4">
              우주가 팽창하면서 멀리 있는 은하의 빛은 <span className="text-orange-400">적색편이</span>되어 
              적외선 영역으로 이동합니다. 제임스 웹은 바로 이 적외선을 볼 수 있어, 
              <span className="text-purple-400"> 138억 년 전 최초의 은하</span>를 관측할 수 있습니다.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white">주경 직경 6.5m</p>
                  <p className="text-sm text-gray-400">허블의 2.7배 크기</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white">100배 더 민감</p>
                  <p className="text-sm text-gray-400">허블보다 훨씬 어두운 천체 관측</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                <div>
                  <p className="text-white">-223°C 극저온</p>
                  <p className="text-sm text-gray-400">테니스 코트 크기의 선쉴드로 냉각</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1659986511515-4f6e36775788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYW1lcyUyMHdlYmIlMjB0ZWxlc2NvcGV8ZW58MXx8fHwxNzYyNDAzNTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="James Webb"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </ContentSection>

      {/* Korean Role */}
      <ContentSection title="🇰🇷 한국의 관측 기술">
        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-8">
          <h3 className="text-white mb-6">세계를 선도하는 한국의 기술</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-cyan-400 mb-3">하드웨어 기술</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>그린광학:</strong> 고해상도 비축 반사경 (다누리호 카메라)</li>
                <li>• <strong>센소허브:</strong> TDI 이미지센서</li>
                <li>• <strong>한화시스템:</strong> 위성 간 레이저 광통신</li>
                <li>• <strong>래디언트솔루션:</strong> 광학 디지털 엔지니어링</li>
              </ul>
            </div>
            <div>
              <h4 className="text-purple-400 mb-3">국제 협력</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>GMT:</strong> 10% 지분 투자, GMTNIRS 개발</li>
                <li>• <strong>SPHEREx:</strong> NASA와 공동 개발</li>
                <li>• <strong>KAGRA:</strong> 중력파 검출기 업그레이드</li>
                <li>• <strong>Einstein Telescope:</strong> 차세대 중력파 관측소</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* How Spectroscopy Works */}
      <ContentSection title="분광학: 빛을 나누어 우주를 읽다">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-300 mb-6">
            망원경으로 천체를 보는 것만으로는 충분하지 않습니다. 
            <span className="text-cyan-400"> 빛을 파장별로 나누어 분석</span>하면 
            천체의 온도, 화학 성분, 속도, 심지어 외계행성의 대기까지 알 수 있습니다.
          </p>
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6">
            <div className="text-center mb-4">
              <span className="text-2xl">🌈</span>
            </div>
            <h4 className="text-white text-center mb-4">분광학으로 알 수 있는 것들</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-cyan-400 mb-1">온도</div>
                <p className="text-xs text-gray-400">빛의 색으로 표면 온도 측정</p>
              </div>
              <div className="text-center">
                <div className="text-purple-400 mb-1">화학 성분</div>
                <p className="text-xs text-gray-400">흡수선 패턴으로 원소 분석</p>
              </div>
              <div className="text-center">
                <div className="text-pink-400 mb-1">속도</div>
                <p className="text-xs text-gray-400">도플러 효과로 이동 속도 계산</p>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
