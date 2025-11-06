import { PageHeader } from "../components/PageHeader";
import { ContentSection } from "../components/ContentSection";
import { InfoCard } from "../components/InfoCard";
import { AlertTriangle, Trash2, TrendingUp, Shield, Scale, Zap, Rocket } from "lucide-react";
import { Card } from "../components/ui/card";
import { Alert, AlertDescription } from "../components/ui/alert";
import { Progress } from "../components/ui/progress";

export function ChallengesPage() {
  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        title="현대 우주의 도전과제"
        subtitle="SPACE CHALLENGES"
        description="인류가 직면한 우주의 현실적 문제들"
        icon={AlertTriangle}
        backgroundImage="https://images.unsplash.com/photo-1712512161479-3d78afd4d2ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGRlYnJpcyUyMHNhdGVsbGl0ZXxlbnwxfHx8fDE3NjI0MDM1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Space Debris */}
      <ContentSection title="우주 쓰레기: 케슬러 증후군의 위협">
        <Alert className="mb-8 bg-red-900/20 border-red-500/30">
          <AlertTriangle className="h-5 w-5 text-red-400" />
          <AlertDescription className="text-gray-300">
            현재 지구 궤도에는 <strong className="text-red-400">2만 5천개 이상</strong>의 
            추적 가능한 우주 쓰레기가 있습니다. (10cm 이상 크기)
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4">위험한 속도</h3>
            <p className="text-gray-300 mb-6">
              우주 쓰레기는 <span className="text-red-400">초속 7~8km</span>로 움직입니다. 
              이는 총알보다 10배 빠른 속도로, 1cm 크기 파편도 
              <strong> 다이너마이트급 파괴력</strong>을 가집니다.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">10cm 이상 (추적 가능)</span>
                  <span className="text-red-400">25,000개</span>
                </div>
                <Progress value={100} className="h-2 bg-gray-800" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">1~10cm (일부 추적)</span>
                  <span className="text-orange-400">500,000개</span>
                </div>
                <Progress value={80} className="h-2 bg-gray-800" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">1mm~1cm (추적 불가)</span>
                  <span className="text-yellow-400">수백만 개</span>
                </div>
                <Progress value={60} className="h-2 bg-gray-800" />
              </div>
            </div>

            <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
              <h4 className="text-orange-400 mb-3">주요 원인</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>위성 급증:</strong> 스타링크 등 민간 위성 수천 개 발사</li>
                <li>• <strong>ASAT 무기:</strong> 2007 중국, 2021 러시아 위성 파괴 실험</li>
                <li>• <strong>충돌 사고:</strong> 2009년 이리듐-코스모스 충돌</li>
                <li>• <strong>폐기 위성:</strong> 수명 다한 위성들이 궤도에 방치</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/30">
              <h3 className="text-white mb-4">케슬러 증후군</h3>
              <p className="text-gray-300 mb-4">
                1978년 NASA 과학자 도날드 케슬러가 예측한 시나리오:
              </p>
              <div className="bg-black/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-300">
                  쓰레기 밀도가 임계점을 넘으면 
                  <strong className="text-red-400"> 연쇄 충돌</strong>이 시작됩니다. 
                  충돌로 생긴 파편이 또 다른 충돌을 일으키고, 
                  결국 지구 저궤도 전체가 사용 불가능해집니다.
                </p>
              </div>
              <div className="text-sm text-red-400">
                ⚠️ 한 번 시작되면 되돌릴 수 없습니다
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30">
              <h4 className="text-cyan-400 mb-4">해결책: 능동적 제거 (ADR)</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">•</span>
                  <div>
                    <strong>로봇팔:</strong> ESA ClearSpace-1 (2026년 발사 예정)
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <div>
                    <strong>그물/작살:</strong> RemoveDEBRIS 실험 성공
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400">•</span>
                  <div>
                    <strong>레이저 ablation:</strong> 지상에서 레이저로 궤도 변경
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
          <h4 className="text-yellow-400 mb-3">문제: ADR의 이중 용도 (Dual-use)</h4>
          <p className="text-gray-300 text-sm">
            쓰레기를 제거하는 기술은 다른 나라의 위성을 공격하는 데도 사용될 수 있습니다. 
            국제 규범이 필요하지만 합의가 어렵습니다.
          </p>
        </div>
      </ContentSection>

      {/* New Space Era */}
      <ContentSection title="뉴스페이스 시대: 민간 주도 우주 개발">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <InfoCard
            title="SpaceX"
            description="재사용 로켓으로 발사 비용을 혁신. 스타십으로 화성 이주 목표. 현재 시장 점유율 66%."
            icon={Rocket}
            color="cyan"
          />
          <InfoCard
            title="Blue Origin"
            description="아마존 창업자 제프 베이조스 설립. 우주 관광과 달 착륙선 개발 중."
            icon={TrendingUp}
            color="purple"
          />
          <InfoCard
            title="소형 위성 혁명"
            description="큐브위성으로 진입장벽 하락. 대학이나 스타트업도 위성 발사 가능."
            icon={Zap}
            color="orange"
          />
          <InfoCard
            title="군집 위성"
            description="스타링크 6,000개 이상. 통신, 관측, GPS 등 다양한 서비스 제공."
            icon={TrendingUp}
            color="pink"
          />
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-8">
          <h3 className="text-white mb-4">올드 스페이스 vs 뉴스페이스</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-gray-400 mb-3">올드 스페이스 (정부 주도)</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 국가 예산으로 운영</li>
                <li>• 높은 신뢰성, 긴 개발 기간</li>
                <li>• 일회용 로켓</li>
                <li>• 과학 탐사 중심</li>
              </ul>
            </div>
            <div>
              <h4 className="text-purple-400 mb-3">뉴스페이스 (민간 주도)</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 민간 투자로 운영</li>
                <li>• 빠른 개발, '실패는 옵션'</li>
                <li>• 재사용 로켓</li>
                <li>• 상업적 수익 추구</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Space Security */}
      <ContentSection title="우주 안보: 새로운 전장">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <InfoCard
            title="위성 요격 무기 (ASAT)"
            description="중국, 러시아, 미국, 인도가 보유. 상대국 위성을 파괴하는 무기이지만 막대한 쓰레기를 만듭니다."
            icon={AlertTriangle}
            color="red"
          />
          <InfoCard
            title="GPS 의존성"
            description="군사, 금융, 통신, 교통이 모두 GPS에 의존. GPS 위성이 공격받으면 현대 사회가 마비됩니다."
            icon={Shield}
            color="orange"
          />
          <InfoCard
            title="사이버 공격"
            description="위성 통신을 해킹하거나 방해 전파로 무력화. 물리적 파괴 없이도 위성을 공격할 수 있습니다."
            icon={Zap}
            color="yellow"
          />
        </div>

        <Alert className="bg-red-900/20 border-red-500/30">
          <Shield className="h-5 w-5 text-red-400" />
          <AlertDescription className="text-gray-300">
            우주는 더 이상 '평화로운 공간'이 아닙니다. 
            우주 자산이 국가 안보의 핵심이 되면서 <strong>우주 군사화</strong>가 가속화되고 있습니다.
          </AlertDescription>
        </Alert>
      </ContentSection>

      {/* Space Resources */}
      <ContentSection title="우주 자원: 새로운 골드러시">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4">달과 소행성의 자원</h3>
            <div className="space-y-4">
              <Card className="p-6 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/30">
                <h4 className="text-yellow-400 mb-2">헬륨-3</h4>
                <p className="text-sm text-gray-300 mb-2">
                  달 토양에 풍부. 핵융합 연료로 사용 가능. 
                  이론적으로 1톤이면 미국 1년 전력 소비량.
                </p>
                <div className="text-xs text-gray-400">
                  문제: 핵융합 기술이 아직 미완성
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30">
                <h4 className="text-cyan-400 mb-2">희토류 광물</h4>
                <p className="text-sm text-gray-300 mb-2">
                  소행성에는 백금, 금, 희토류가 풍부. 
                  일부 소행성의 가치는 수조 달러로 추정.
                </p>
                <div className="text-xs text-gray-400">
                  문제: 채굴 및 운송 기술, 경제성
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30">
                <h4 className="text-purple-400 mb-2">물 (H₂O)</h4>
                <p className="text-sm text-gray-300 mb-2">
                  달 극지방 영구음영지역의 얼음. 
                  음용수, 산소, 로켓 연료로 분해 가능.
                </p>
                <div className="text-xs text-gray-400">
                  이점: 우주에서 연료 보급 가능
                </div>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">법적 · 윤리적 문제</h3>
            <div className="space-y-6">
              <div className="bg-gray-900/50 border border-cyan-500/20 rounded-lg p-6">
                <h4 className="text-cyan-400 mb-3">아르테미스 협정 (2020)</h4>
                <p className="text-sm text-gray-300 mb-3">
                  미국 주도. 우주 자원 채굴 허용, 
                  "안전 구역" 설정 가능.
                </p>
                <div className="text-xs text-gray-400">
                  참여국: 한국, 일본, 유럽 등 30개국 이상
                </div>
              </div>

              <div className="bg-gray-900/50 border border-purple-500/20 rounded-lg p-6">
                <h4 className="text-purple-400 mb-3">우주조약 (1967)</h4>
                <p className="text-sm text-gray-300 mb-3">
                  "천체는 어느 나라의 소유도 될 수 없다"
                </p>
                <div className="text-xs text-gray-400">
                  문제: 자원 채굴에 대한 명확한 규정 없음
                </div>
              </div>

              <Alert className="bg-orange-900/20 border-orange-500/30">
                <Scale className="h-5 w-5 text-orange-400" />
                <AlertDescription className="text-gray-300 text-sm">
                  <strong>누가 우주 자원을 소유할 수 있는가?</strong>
                  <br />
                  국가? 기업? 인류 전체? 아직 국제적 합의가 없습니다.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Market Competition */}
      <ContentSection title="시장 독점과 공정 경쟁">
        <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-8 mb-8">
          <h3 className="text-white mb-4">SpaceX의 압도적 시장 지배</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-4xl text-red-400 mb-2">66%</div>
              <p className="text-gray-400">글로벌 발사 시장 점유율</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-orange-400 mb-2">$5,000</div>
              <p className="text-gray-400">kg당 발사 비용 (달러)</p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-yellow-400 mb-2">100+</div>
              <p className="text-gray-400">연간 발사 횟수</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm">
            SpaceX는 재사용 로켓으로 발사 비용을 1/10로 낮추며 시장을 장악했습니다. 
            경쟁사들은 따라잡기 어려운 상황입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gray-900/50 border border-orange-500/20">
            <h4 className="text-orange-400 mb-3">문제점</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• 출혈 가격 경쟁으로 후발 주자 진입 차단</li>
              <li>• 반경쟁적 계약 조항 (재판매 금지 등)</li>
              <li>• 시장 독점으로 혁신 저하 우려</li>
              <li>• 국가 안보 자산이 한 기업에 의존</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gray-900/50 border border-cyan-500/20">
            <h4 className="text-cyan-400 mb-3">필요한 것</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• 공정 경쟁을 위한 국제 규제</li>
              <li>• 정부의 다양한 발사체 지원</li>
              <li>• 기술 개발 투자 확대</li>
              <li>• 국제 협력 강화</li>
            </ul>
          </Card>
        </div>
      </ContentSection>

      {/* Call to Action */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border border-cyan-500/30 rounded-xl p-8">
            <h3 className="text-white mb-4">우주는 인류 공동의 자산입니다</h3>
            <p className="text-gray-300 mb-6">
              쓰레기 문제, 안보 위협, 자원 경쟁... 
              이 모든 문제는 <span className="text-cyan-400">국제 협력</span>과 
              <span className="text-purple-400"> 책임 있는 개발</span>로만 해결할 수 있습니다.
            </p>
            <p className="text-sm text-gray-400">
              우리가 지금 내리는 결정이 수백 년 후 우주 환경을 결정합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
