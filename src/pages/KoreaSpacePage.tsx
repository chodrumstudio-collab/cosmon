import { PageHeader } from "../components/PageHeader";
import { ContentSection } from "../components/ContentSection";
import { InfoCard } from "../components/InfoCard";
import { Flag, Rocket, Building2, Users, Trophy } from "lucide-react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function KoreaSpacePage() {
  const companies = [
    {
      name: "LIG넥스원",
      category: "대기업",
      field: "방위산업, 위성 시스템",
      products: ["레이더", "전술통신", "지휘통제시스템"]
    },
    {
      name: "한화시스템",
      category: "대기업",
      field: "위성 통신, 광학 기술",
      products: ["위성 간 레이저 광통신", "인공별 적응광학"]
    },
    {
      name: "그린광학",
      category: "강소기업",
      field: "고해상도 광학 시스템",
      products: ["비축 반사경 (다누리호 카메라)"]
    },
    {
      name: "센소허브",
      category: "강소기업",
      field: "이미지 센서",
      products: ["TDI 이미지센서"]
    },
    {
      name: "스페이스빔",
      category: "강소기업",
      field: "우주 광통신",
      products: ["위성 레이저 통신 단말"]
    },
    {
      name: "레오스페이스",
      category: "강소기업",
      field: "대형 광학 시스템",
      products: ["우주 망원경 개발"]
    }
  ];

  const milestones = [
    { year: "1992", event: "우리별 1호", desc: "최초의 인공위성" },
    { year: "2009", event: "나로호 1차 발사", desc: "독자 발사체 도전" },
    { year: "2013", event: "나로호 발사 성공", desc: "우주 발사국 진입" },
    { year: "2022.6", event: "누리호 발사 성공", desc: "세계 7위 우주 강국" },
    { year: "2022.12", event: "다누리 달 궤도 진입", desc: "최초의 달 탐사선" },
    { year: "2024", event: "우주항공청 출범", desc: "우주 전담 기관" }
  ];

  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        title="대한민국의 우주"
        subtitle="KOREA SPACE PROGRAM"
        description="세계 7위 우주 강국으로 도약하는 대한민국"
        icon={Flag}
        backgroundImage="https://images.unsplash.com/photo-1720214658819-2676e74b4c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2hlMjBzcGFjZXxlbnwxfHx8fDE3NjI0MDM1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Achievement Banner */}
      <section className="py-12 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🇰🇷</div>
            <h2 className="text-white mb-4">세계 7위 우주 강국</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              독자 개발 발사체로 1톤급 실용 위성을 궤도에 올릴 수 있는 능력을 보유한 
              전 세계 7개 국가 중 하나입니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl text-cyan-400 mb-2">7위</div>
              <p className="text-gray-400">독자 발사체 보유국</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-purple-400 mb-2">1.5톤</div>
              <p className="text-gray-400">누리호 탑재 능력</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-pink-400 mb-2">100%</div>
              <p className="text-gray-400">국산 기술</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuri Rocket */}
      <ContentSection title="누리호 (KSLV-II): 자랑스러운 대한민국 로켓">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4">순수 국내 기술로 개발</h3>
            <p className="text-gray-300 mb-6">
              2022년 6월 21일, 누리호는 <span className="text-cyan-400">1.5톤급 위성을 궤도에 안착</span>시키는 데 성공했습니다. 
              이는 12년간의 개발 기간과 2조 원의 투자 끝에 이룬 쾌거입니다.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-4">
                <h4 className="text-cyan-400 mb-3">기술 사양</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-gray-400">총 높이</div>
                    <div className="text-white">47.2m</div>
                  </div>
                  <div>
                    <div className="text-gray-400">총 중량</div>
                    <div className="text-white">200톤</div>
                  </div>
                  <div>
                    <div className="text-gray-400">추력</div>
                    <div className="text-white">300톤</div>
                  </div>
                  <div>
                    <div className="text-gray-400">엔진</div>
                    <div className="text-white">75톤급 × 4</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 border border-purple-500/30 rounded-lg p-4">
                <h4 className="text-purple-400 mb-3">3단 로켓 구조</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>• <strong>1단:</strong> 75톤급 액체 엔진 4기</div>
                  <div>• <strong>2단:</strong> 75톤급 액체 엔진 1기</div>
                  <div>• <strong>3단:</strong> 7톤급 액체 엔진 1기</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                ✓ 발사 성공
              </Badge>
              <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                100% 국산 기술
              </Badge>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30">
              <h4 className="text-white mb-4">발사 기록</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-400">1차 발사 (2021.10)</span>
                  <Badge variant="outline" className="text-yellow-400 border-yellow-400">부분 성공</Badge>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-gray-400">2차 발사 (2022.06)</span>
                  <Badge variant="outline" className="text-green-400 border-green-400">성공 ✓</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">3차 발사 (2023.05)</span>
                  <Badge variant="outline" className="text-green-400 border-green-400">성공 ✓</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30">
              <h4 className="text-white mb-4">향후 계획</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 2027년까지 4회 추가 발사</li>
                <li>• 성능 개량형 개발 (2톤급)</li>
                <li>• 차세대 발사체 개발 시작</li>
                <li>• 재사용 로켓 기술 연구</li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6">
          <h4 className="text-cyan-400 mb-3">왜 독자 발사체가 중요한가?</h4>
          <p className="text-gray-300 text-sm">
            자체 발사체를 보유하면 <strong>① 원하는 시기에</strong> <strong>② 원하는 궤도에</strong> <strong>③ 기밀 유지하며</strong> 위성을 쏘아 올릴 수 있습니다. 
            이는 국가 안보와 우주 산업 경쟁력의 핵심입니다.
          </p>
        </div>
      </ContentSection>

      {/* Danuri (reference) */}
      <ContentSection title="다누리호: 달에 간 대한민국">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            title="발사 및 궤도 진입"
            description="2022년 8월 SpaceX로 발사, 12월 달 궤도 진입 성공. 100km 고도에서 임무 수행 중."
            icon={Rocket}
            color="cyan"
            index={0}
          />
          <InfoCard
            title="세계 7번째"
            description="달 궤도에 탐사선을 보낸 7번째 국가. 미국, 러시아, 유럽, 중국, 일본, 인도에 이어."
            icon={Trophy}
            color="purple"
            index={1}
          />
          <InfoCard
            title="과학적 성과"
            description="고해상도 달 표면 촬영, 자기장 측정, 영구음영지역 관측 등 귀중한 데이터 수집."
            icon={Flag}
            color="pink"
            index={2}
          />
        </div>
      </ContentSection>

      {/* KASA */}
      <ContentSection title="우주항공청 (KASA): 한국판 NASA">
        <div className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-cyan-500/30 rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-8 h-8 text-cyan-400" />
                <h3 className="text-white">2024년 출범</h3>
              </div>
              <p className="text-gray-300 mb-6">
                한국의 우주 개발을 총괄하는 전담 기관입니다. 
                기존에 흩어져 있던 우주 관련 업무를 통합하여 효율성을 높이고, 
                <span className="text-cyan-400"> 2045년까지 달 착륙</span>을 목표로 합니다.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <div>
                    <div className="text-white">발사체 개발</div>
                    <p className="text-sm text-gray-400">누리호 후속 및 차세대 로켓</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <div>
                    <div className="text-white">위성 개발</div>
                    <p className="text-sm text-gray-400">통신, 관측, 탐사 위성</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                  <div>
                    <div className="text-white">국제 협력</div>
                    <p className="text-sm text-gray-400">NASA, ESA 등과 파트너십</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-purple-400 mb-4">주요 목표</h4>
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">2031년</div>
                  <div className="text-white">달 착륙선 발사</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">2032년</div>
                  <div className="text-white">차세대 발사체 개발</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-1">2045년</div>
                  <div className="text-white">한국인 달 착륙</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Korean Space Companies */}
      <ContentSection title="한국의 우주 기업 생태계">
        <p className="text-gray-300 mb-8 max-w-3xl">
          한국의 우주 산업은 대기업부터 강소기업, 스타트업까지 다양한 플레이어들이 
          각자의 전문성을 발휘하며 성장하고 있습니다.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {companies.map((company, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-white">{company.name}</h4>
                <Badge variant="outline" className="text-xs">
                  {company.category}
                </Badge>
              </div>
              <p className="text-sm text-cyan-400 mb-3">{company.field}</p>
              <div className="space-y-1">
                {company.products.map((product, idx) => (
                  <div key={idx} className="text-xs text-gray-400">
                    • {product}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-8">
          <h4 className="text-white mb-4">🚀 스타트업 생태계</h4>
          <p className="text-gray-300 mb-4">
            SpaceSCANeR (큐브위성 편대비행), 페리지항공우주 (소형 발사체), 
            나라스페이스 (위성 데이터) 등 혁신적인 우주 스타트업들이 속속 등장하고 있습니다.
          </p>
          <div className="text-sm text-gray-400">
            정부의 뉴스페이스 육성 정책으로 2030년까지 민간 우주 시장 10배 성장 목표
          </div>
        </div>
      </ContentSection>

      {/* International Cooperation */}
      <ContentSection title="국제 협력: 세계와 함께하는 한국">
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard
            title="NASA 협력"
            description="다누리 섀도캠 탑재, SPHEREx 공동 개발, CODEX 태양 코로나그래프, CIBER 적외선 우주배경복사 등 다수 프로젝트 진행."
            icon={Users}
            color="cyan"
            index={0}
          />
          <InfoCard
            title="GMT 참여"
            description="10% 지분으로 참여. GMTNIRS 적외선 분광기를 한국 주도로 개발. 2029년 완공 예정."
            icon={Rocket}
            color="purple"
            index={1}
          />
          <InfoCard
            title="중력파 검출기"
            description="일본 KAGRA 업그레이드 참여, 유럽 Einstein Telescope 계획에도 관심 표명."
            icon={Building2}
            color="orange"
            index={2}
          />
          <InfoCard
            title="아르테미스 협정"
            description="미국 주도 달 탐사 국제 협약에 서명. 달 게이트웨이 참여 가능성."
            icon={Flag}
            color="pink"
            index={3}
          />
        </div>
      </ContentSection>

      {/* Milestones Timeline */}
      <ContentSection title="한국 우주 개발 발자취">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 text-cyan-400">{milestone.year}</div>
                <div className="flex-1 bg-gray-900/50 border border-cyan-500/20 rounded-lg p-4">
                  <h4 className="text-white mb-1">{milestone.event}</h4>
                  <p className="text-sm text-gray-400">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
