import { PageHeader } from "../components/PageHeader";
import { ContentSection } from "../components/ContentSection";
import { InfoCard } from "../components/InfoCard";
import { HelpCircle, Moon, Atom, Zap, Wifi, Globe } from "lucide-react";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export function MysteriesPage() {
  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        title="우주의 미스터리"
        subtitle="COSMIC MYSTERIES"
        description="아직 풀리지 않은 우주의 수수께끼들"
        icon={HelpCircle}
        backgroundImage="https://images.unsplash.com/photo-1712510795950-5ac9970da62c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbWF0dGVyJTIwdW5pdmVyc2V8ZW58MXx8fHwxNzYyNDAzNTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Hubble Tension */}
      <ContentSection title="허블 텐션: 우주 팽창의 수수께끼">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4">우주는 얼마나 빠르게 팽창할까?</h3>
            <p className="text-gray-300 mb-4">
              우주가 팽창하는 속도를 <span className="text-cyan-400">허블 상수</span>라고 합니다. 
              문제는 이 값을 측정하는 두 가지 방법이 서로 다른 결과를 내놓는다는 것입니다.
            </p>

            <div className="space-y-4 mb-6">
              <Card className="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30">
                <h4 className="text-cyan-400 mb-3">방법 1: 초기 우주 관측</h4>
                <p className="text-sm text-gray-300 mb-3">
                  빅뱅 직후의 빛 (우주 배경 복사)을 분석하여 계산
                </p>
                <div className="text-3xl text-cyan-400">67 km/s/Mpc</div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30">
                <h4 className="text-purple-400 mb-3">방법 2: 현재 우주 관측</h4>
                <p className="text-sm text-gray-300 mb-3">
                  변광성과 초신성을 이용한 직접 측정
                </p>
                <div className="text-3xl text-purple-400">73 km/s/Mpc</div>
              </Card>
            </div>

            <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4">
              <h4 className="text-orange-400 mb-2">9% 차이, 그게 뭐가 문제인가요?</h4>
              <p className="text-sm text-gray-300">
                이 차이는 측정 오차 범위를 넘어섭니다. 
                우리가 <strong>우주에 대해 모르는 무언가</strong>가 있다는 뜻입니다.
              </p>
            </div>
          </div>

          <div>
            <div className="relative h-64 mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1670884307315-eb843e5c3829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvbGUlMjBzcGFjZXxlbnwxfHx8fDE3NjIzNDM4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Black Hole"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <h4 className="text-white mb-3">가능한 설명들</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white">표준 촛불의 재검토</div>
                  <p className="text-gray-400">변광성이나 초신성 측정에 오류가 있을 수 있습니다</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white">암흑 에너지의 진화</div>
                  <p className="text-gray-400">암흑 에너지가 시간에 따라 변했을 가능성</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                <div>
                  <div className="text-white">새로운 물리 법칙</div>
                  <p className="text-gray-400">우리가 모르는 새로운 입자나 힘이 존재할 수도</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Dark Matter and Dark Energy */}
      <ContentSection title="암흑 물질과 암흑 에너지: 우주의 95%">
        <div className="mb-8">
          <h3 className="text-white mb-4 text-center">우주의 구성</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <Card className="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 text-center">
              <div className="text-4xl mb-2 text-white">5%</div>
              <h4 className="text-cyan-400 mb-2">일반 물질</h4>
              <p className="text-sm text-gray-300">우리가 볼 수 있는 모든 것</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 text-center">
              <div className="text-4xl mb-2 text-white">27%</div>
              <h4 className="text-purple-400 mb-2">암흑 물질</h4>
              <p className="text-sm text-gray-300">보이지 않지만 중력을 미침</p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 text-center">
              <div className="text-4xl mb-2 text-white">68%</div>
              <h4 className="text-orange-400 mb-2">암흑 에너지</h4>
              <p className="text-sm text-gray-300">우주를 가속 팽창시킴</p>
            </Card>
          </div>

          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
            놀랍게도 우리가 아는 모든 것 - 별, 행성, 사람, 원자 - 은 
            우주의 <span className="text-cyan-400">단 5%</span>에 불과합니다. 
            나머지 95%는 정체불명입니다!
          </p>
        </div>

        <Tabs defaultValue="dark-matter" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="dark-matter">암흑 물질</TabsTrigger>
            <TabsTrigger value="dark-energy">암흑 에너지</TabsTrigger>
          </TabsList>

          <TabsContent value="dark-matter">
            <div className="space-y-6">
              <div>
                <h4 className="text-white mb-3">암흑 물질이란?</h4>
                <p className="text-gray-300 mb-4">
                  빛을 내지도, 흡수하지도, 반사하지도 않지만 중력은 미치는 신비한 물질입니다. 
                  우리는 그것의 <span className="text-purple-400">중력 효과</span>로만 존재를 알 수 있습니다.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <InfoCard
                  title="은하 회전 곡선"
                  description="은하 가장자리의 별들이 예상보다 빠르게 회전합니다. 보이지 않는 질량이 있어야만 설명이 됩니다."
                  icon={Globe}
                  color="cyan"
                />
                <InfoCard
                  title="중력 렌즈 효과"
                  description="빛이 보이지 않는 질량 근처를 지나가며 휘어집니다. 이를 통해 암흑 물질의 분포를 파악할 수 있습니다."
                  icon={Moon}
                  color="purple"
                />
              </div>

              <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                <h4 className="text-purple-400 mb-3">후보 입자들</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• <strong>WIMPs:</strong> 약하게 상호작용하는 무거운 입자 (아직 미발견)</li>
                  <li>• <strong>Axions:</strong> 가벼운 가상 입자 (탐색 중)</li>
                  <li>• <strong>원시 블랙홀:</strong> 빅뱅 직후 생성된 작은 블랙홀들?</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dark-energy">
            <div className="space-y-6">
              <div>
                <h4 className="text-white mb-3">암흑 에너지란?</h4>
                <p className="text-gray-300 mb-4">
                  우주를 <span className="text-orange-400">가속 팽창</span>시키는 신비한 힘입니다. 
                  1998년 초신성 관측으로 발견되어 노벨상을 받았습니다.
                </p>
              </div>

              <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6">
                <h4 className="text-orange-400 mb-3">왜 놀라운가?</h4>
                <p className="text-gray-300 mb-4">
                  중력은 모든 것을 끌어당기기 때문에, 우주 팽창은 <strong>느려져야</strong> 정상입니다. 
                  하지만 실제로는 <strong>빨라지고</strong> 있습니다! 
                  마치 떨어뜨린 공이 땅으로 가는 대신 하늘로 올라가는 것과 같습니다.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gray-900/50 border border-cyan-500/20">
                  <h4 className="text-cyan-400 mb-3">우주 상수 (Λ)</h4>
                  <p className="text-sm text-gray-300">
                    아인슈타인이 제안한 개념. 진공 자체가 에너지를 가진다는 아이디어입니다.
                  </p>
                </Card>
                <Card className="p-6 bg-gray-900/50 border border-purple-500/20">
                  <h4 className="text-purple-400 mb-3">퀸텟센스</h4>
                  <p className="text-sm text-gray-300">
                    시간에 따라 변하는 에너지장. 암흑 에너지가 진화할 가능성을 제시합니다.
                  </p>
                </Card>
              </div>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                <h4 className="text-red-400 mb-3">우주의 운명</h4>
                <p className="text-gray-300">
                  암흑 에너지가 계속 강해지면, 수백억 년 후 모든 은하가 서로 멀어져 
                  <strong> "빅 립(Big Rip)"</strong> - 우주가 찢어지는 종말을 맞을 수도 있습니다.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </ContentSection>

      {/* Black Holes */}
      <ContentSection title="블랙홀: 빛조차 탈출할 수 없는">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4">사건의 지평선</h3>
            <p className="text-gray-300 mb-4">
              블랙홀의 가장자리를 <span className="text-cyan-400">사건의 지평선</span>이라고 합니다. 
              이 경계를 넘어가면 <strong>빛조차도</strong> 탈출할 수 없습니다.
            </p>

            <div className="space-y-4">
              <InfoCard
                title="특이점 (Singularity)"
                description="블랙홀 중심. 모든 질량이 무한히 작은 점에 압축되어 있습니다. 현대 물리학으로는 설명할 수 없는 영역입니다."
                icon={Atom}
                color="cyan"
              />
              <InfoCard
                title="호킹 복사"
                description="스티븐 호킹이 발견. 블랙홀도 아주 천천히 에너지를 방출하며 '증발'합니다. 완전히 증발하려면 우주 나이보다 훨씬 긴 시간이 필요합니다."
                icon={Zap}
                color="purple"
              />
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/30">
              <h4 className="text-yellow-400 mb-4">블랙홀의 종류</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-white mb-1">항성 블랙홀</div>
                  <p className="text-gray-400">무거운 별이 폭발한 후 형성. 태양 질량의 3~수십 배</p>
                </div>
                <div>
                  <div className="text-white mb-1">중간 질량 블랙홀</div>
                  <p className="text-gray-400">태양 질량의 100~10만 배. 형성 과정은 미스터리</p>
                </div>
                <div>
                  <div className="text-white mb-1">초대질량 블랙홀</div>
                  <p className="text-gray-400">은하 중심. 태양 질량의 수백만~수십억 배</p>
                </div>
              </div>
            </Card>

            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-xl p-6">
              <h4 className="text-pink-400 mb-3">2019년, 인류가 블랙홀을 보다</h4>
              <p className="text-gray-300 text-sm">
                Event Horizon Telescope (EHT)가 5500만 광년 떨어진 
                M87 은하 중심의 블랙홀을 촬영했습니다. 
                태양 질량의 <strong>65억 배</strong>에 달하는 괴물입니다.
              </p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Alien Life */}
      <ContentSection title="외계 생명체: 우리는 혼자일까?">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-900/20 to-cyan-900/20 border border-green-500/30 rounded-xl p-8 mb-8">
            <h3 className="text-white mb-4 text-center">드레이크 방정식</h3>
            <p className="text-gray-300 text-center mb-6">
              우리 은하에 통신 가능한 외계 문명이 몇 개나 있을까를 추정하는 방정식
            </p>
            <div className="bg-black/30 rounded-lg p-6 text-center">
              <div className="text-green-400 text-xl mb-4">
                N = R* × fp × ne × fl × fi × fc × L
              </div>
              <p className="text-sm text-gray-400">
                별의 생성률 × 행성 보유 별 × 생명 가능 행성 × 실제 생명 발생 × 지적 생명 진화 × 통신 기술 개발 × 문명 수명
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <InfoCard
              title="골디락스 존"
              description="액체 물이 존재할 수 있는 '생명 가능 지대'. 너무 뜨겁지도 차갑지도 않은 적당한 거리."
              icon={Globe}
              color="cyan"
            />
            <InfoCard
              title="바이오시그니처"
              description="외계행성 대기에서 산소, 메탄 등 생명의 징후를 찾습니다. 제임스 웹이 이를 탐색 중입니다."
              icon={Atom}
              color="purple"
            />
            <InfoCard
              title="SETI 프로젝트"
              description="외계 지적 생명체가 보낸 전파 신호를 찾습니다. 60년 넘게 탐색 중이지만 아직 명확한 신호는 없습니다."
              icon={Wifi}
              color="pink"
            />
          </div>

          <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6">
            <h4 className="text-orange-400 mb-3">페르미 역설</h4>
            <p className="text-gray-300 mb-4">
              "우주가 이렇게 넓고 오래됐는데, 외계인은 어디 있는가?"
            </p>
            <p className="text-sm text-gray-400">
              수많은 별과 행성이 있다면 외계 문명도 많아야 합니다. 
              하지만 우리는 아무 신호도 받지 못했습니다. 
              혹시 지적 생명체는 극히 드물거나, 
              일정 수준에 도달하면 자멸하는 걸까요?
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Multiverse */}
      <ContentSection title="다중 우주론: 무한한 우주들">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 mb-8">
            우리 우주가 유일한 것일까요? 
            일부 이론 물리학자들은 <span className="text-cyan-400">무수히 많은 우주</span>가 
            존재할 가능성을 제시합니다.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30">
              <h4 className="text-cyan-400 mb-3">인플레이션 우주론</h4>
              <p className="text-sm text-gray-300">
                빅뱅 직후 급팽창 과정에서 '우주 거품'들이 계속 생성됩니다. 
                각 거품이 하나의 우주가 됩니다.
              </p>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30">
              <h4 className="text-purple-400 mb-3">끈 이론</h4>
              <p className="text-sm text-gray-300">
                10차원 또는 11차원 공간에서 수학적으로 가능한 우주가 
                10^500개 존재할 수 있다고 합니다.
              </p>
            </Card>
          </div>

          <div className="mt-8 bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
            <p className="text-gray-400 text-sm">
              ⚠️ 다중 우주는 흥미로운 아이디어지만, 
              <strong> 검증할 방법이 없다</strong>는 점에서 논쟁의 여지가 있습니다. 
              과학일까요, 철학일까요?
            </p>
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
