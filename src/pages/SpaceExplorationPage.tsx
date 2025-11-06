import { PageHeader } from "../components/PageHeader";
import { ContentSection } from "../components/ContentSection";
import { InfoCard } from "../components/InfoCard";
import { Rocket, Moon, Navigation, Satellite, Target } from "lucide-react";
import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function SpaceExplorationPage() {
  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        title="우주 탐사"
        subtitle="SPACE EXPLORATION"
        description="달, 화성, 그리고 그 너머로... 인류의 우주 탐험 여정"
        icon={Rocket}
        backgroundImage="https://images.unsplash.com/photo-1720214658819-2676e74b4c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2glMjBzcGFjZXxlbnwxfHx8fDE3NjIyOTQ2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Danuri Mission */}
      <ContentSection title="🇰🇷 다누리호: 대한민국의 달 여행">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="mb-6">
              <h3 className="text-white mb-3">대한민국 최초의 달 탐사선</h3>
              <p className="text-gray-300 mb-4">
                2022년 8월 5일 발사된 다누리호(KPLO)는 
                <span className="text-cyan-400"> 대한민국 최초의 달 궤도선</span>입니다. 
                2022년 12월 달 궤도 진입에 성공하여 현재 100km 고도에서 달을 관측하고 있습니다.
              </p>
              <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4 mb-4">
                <h4 className="text-cyan-400 mb-2">임무 현황</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">발사</span>
                    <span className="text-green-400">✓ 완료</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">달 궤도 진입</span>
                    <span className="text-green-400">✓ 완료</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">정상 운영</span>
                    <span className="text-yellow-400">● 진행중</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <Satellite className="w-5 h-5 text-purple-400" />
                  <h4 className="text-white">주요 탑재체</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-300 ml-8">
                  <li>• 고해상도 카메라 (그린광학)</li>
                  <li>• 자기장 측정기 (KMAG)</li>
                  <li>• 광시야 편광 카메라 (PolCam)</li>
                  <li>• NASA 섀도캠 (영구음영지역 촬영)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="relative h-64 mb-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uJTIwc3VyZmFjZXxlbnwxfHx8fDE3NjIzNTYwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Moon Surface"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <Card className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30">
              <h4 className="text-white mb-4">실시간 다누리 상태</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">현재 고도</span>
                    <span className="text-cyan-400">~100 km</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">궤도 주기</span>
                    <span className="text-purple-400">~2시간</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">임무 기간</span>
                    <span className="text-pink-400">1년 (연장 가능)</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-xl p-8">
          <h3 className="text-white mb-4">다누리의 과학적 목표</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-cyan-400 mb-2">🗺️ 달 지도 제작</div>
              <p className="text-sm text-gray-300">고해상도 카메라로 달 표면 정밀 촬영</p>
            </div>
            <div>
              <div className="text-purple-400 mb-2">🧲 자기장 측정</div>
              <p className="text-sm text-gray-300">달의 자기장 미스터리 규명</p>
            </div>
            <div>
              <div className="text-pink-400 mb-2">💧 물 탐사</div>
              <p className="text-sm text-gray-300">영구음영지역의 얼음 찾기</p>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Artemis Program */}
      <ContentSection title="아르테미스: 인류의 달 귀환">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white mb-4">2025년, 인류가 다시 달에 간다</h3>
            <p className="text-gray-300 mb-4">
              NASA 주도의 <span className="text-cyan-400">아르테미스 프로그램</span>은 
              1972년 아폴로 17호 이후 처음으로 인간을 달에 착륙시킵니다. 
              이번에는 <span className="text-purple-400">최초의 여성과 유색인종</span>이 포함됩니다.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                  <span className="text-cyan-400">I</span>
                </div>
                <div>
                  <div className="text-white mb-1">아르테미스 I (완료)</div>
                  <p className="text-sm text-gray-400">무인 시험 비행 성공</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
                  <span className="text-purple-400">II</span>
                </div>
                <div>
                  <div className="text-white mb-1">아르테미스 II (2025)</div>
                  <p className="text-sm text-gray-400">유인 달 궤도 비행</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center border border-pink-500/30">
                  <span className="text-pink-400">III</span>
                </div>
                <div>
                  <div className="text-white mb-1">아르테미스 III (2026)</div>
                  <p className="text-sm text-gray-400">달 착륙! 인류의 귀환</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <InfoCard
              title="달 게이트웨이"
              description="달 궤도 우주정거장. 달 착륙의 중간 기지이자 심우주 탐사의 전초기지가 됩니다."
              icon={Satellite}
              color="cyan"
            />
            <InfoCard
              title="한국의 참여"
              description="한국은 게이트웨이의 거주 모듈 개발에 참여하고, 차세대 발사체로 달 착륙선을 보낼 계획입니다."
              icon={Target}
              color="purple"
            />
          </div>
        </div>
      </ContentSection>

      {/* Mars Exploration */}
      <ContentSection title="화성 탐사: 붉은 행성의 비밀">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30">
            <h3 className="text-white mb-3">퍼서비어런스 로버</h3>
            <p className="text-sm text-gray-300 mb-4">
              2021년 착륙. 고대 미생물 흔적을 찾고 있으며, 샘플을 채취하여 지구로 보낼 예정입니다.
            </p>
            <div className="text-orange-400 text-xs">● 현재 활동 중</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30">
            <h3 className="text-white mb-3">인제뉴어티 헬기</h3>
            <p className="text-sm text-gray-300 mb-4">
              인류 최초의 외계 행성 비행체. 예정보다 훨씬 오래 비행하며 기록을 세웠습니다.
            </p>
            <div className="text-green-400 text-xs">✓ 72회 비행 성공</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30">
            <h3 className="text-white mb-3">큐리오시티 로버</h3>
            <p className="text-sm text-gray-300 mb-4">
              2012년부터 활동. 화성에 과거 물이 있었다는 결정적 증거를 발견했습니다.
            </p>
            <div className="text-cyan-400 text-xs">12년째 탐사 중</div>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-8">
          <h3 className="text-white mb-4">화성에 생명체가 있었을까?</h3>
          <p className="text-gray-300 mb-4">
            화성은 30억 년 전 따뜻하고 물이 풍부한 행성이었습니다. 
            하지만 자기장을 잃으면서 태양풍에 대기가 날아가 버렸습니다.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-orange-400 mb-2">생명체 존재 증거</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 과거 액체 물의 흔적</li>
                <li>• 유기 분자 발견</li>
                <li>• 메탄 가스 검출</li>
              </ul>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-red-400 mb-2">다음 단계</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• 샘플 회수 미션 (2030년대)</li>
                <li>• 지하 얼음 탐사</li>
                <li>• 유인 탐사 (2040년대?)</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Deep Space Exploration */}
      <ContentSection title="심우주 탐사: 태양계 너머로">
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard
            title="보이저 1호 & 2호"
            description="1977년 발사. 보이저 1호는 인류가 만든 가장 멀리 있는 물체로 성간 공간을 여행 중입니다. 지구에서 242억 km 떨어져 있습니다."
            icon={Rocket}
            color="cyan"
          />
          <InfoCard
            title="뉴 호라이즌스"
            description="2006년 발사. 2015년 명왕성을 최초로 근접 탐사했고, 2019년에는 카이퍼 벨트 천체 '아로코스'를 방문했습니다."
            icon={Navigation}
            color="purple"
          />
          <InfoCard
            title="외계행성 탐사"
            description="케플러와 TESS 위성이 5,000개 이상의 외계행성을 발견했습니다. 그 중 일부는 생명체가 살 수 있는 골디락스 존에 있습니다."
            icon={Target}
            color="pink"
          />
          <InfoCard
            title="SETI 프로젝트"
            description="외계 지적 생명체 탐사. 전파 망원경으로 우주에서 오는 신호를 분석하며, 아직 명확한 신호는 발견하지 못했습니다."
            icon={Satellite}
            color="yellow"
          />
        </div>
      </ContentSection>

      {/* Future Missions */}
      <ContentSection title="미래의 탐사 계획">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6">
            <h3 className="text-cyan-400 mb-4">🌙 한국 달 착륙선 (2031)</h3>
            <p className="text-gray-300 mb-4">
              대한민국이 독자 기술로 달에 착륙선을 보냅니다. 
              자기장 측정 장비를 탑재하여 다누리의 임무를 이어갑니다.
            </p>
            <div className="text-sm text-gray-400">
              차세대 발사체로 발사 예정
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
            <h3 className="text-purple-400 mb-4">🪐 유로파 클리퍼 (진행중)</h3>
            <p className="text-gray-300 mb-4">
              목성의 위성 유로파 탐사선. 얼음 껍질 아래 바다가 있고, 
              생명체가 존재할 가능성이 높습니다.
            </p>
            <div className="text-sm text-gray-400">
              2030년 도착 예정
            </div>
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
