import { PageHeader } from "../components/PageHeader";
import { ContentSection } from "../components/ContentSection";
import { InfoCard } from "../components/InfoCard";
import { BookOpen, GraduationCap, Gamepad2, Award, Target, Brain } from "lucide-react";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";

export function LearningCenterPage() {
  const quizzes = [
    { title: "빅뱅과 우주의 탄생", difficulty: "초급", questions: 10, completed: false },
    { title: "태양계 행성 마스터", difficulty: "초급", questions: 15, completed: true },
    { title: "별의 진화 과정", difficulty: "중급", questions: 12, completed: false },
    { title: "블랙홀과 상대성 이론", difficulty: "고급", questions: 20, completed: false }
  ];

  const challenges = [
    {
      title: "이번 주 달 관측",
      description: "달의 위상을 관찰하고 사진을 찍어보세요",
      reward: "50 포인트",
      deadline: "3일 남음"
    },
    {
      title: "별자리 5개 찾기",
      description: "밤하늘에서 별자리를 찾아 인증하세요",
      reward: "100 포인트",
      deadline: "7일 남음"
    },
    {
      title: "우주 뉴스 요약",
      description: "최근 우주 뉴스 1개를 읽고 요약해보세요",
      reward: "30 포인트",
      deadline: "5일 남음"
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        title="학습 센터"
        subtitle="LEARNING CENTER"
        description="초등학생부터 전문가까지, 우주를 배우는 모든 사람을 위한 공간"
        icon={BookOpen}
        backgroundImage="https://images.unsplash.com/photo-1758685733737-71f8945decf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwc2NpZW5jZXxlbnwxfHx8fDE3NjI0MDM1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Learning Paths */}
      <ContentSection title="난이도별 학습 경로">
        <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
          당신의 수준에 맞는 콘텐츠로 우주를 배워보세요. 
          각 단계를 완료하면 배지를 획득할 수 있습니다!
        </p>

        <Tabs defaultValue="elementary" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="elementary">초등학생</TabsTrigger>
            <TabsTrigger value="secondary">중고등학생</TabsTrigger>
            <TabsTrigger value="adult">성인/전문가</TabsTrigger>
          </TabsList>

          <TabsContent value="elementary">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white">우주는 뭐야?</h4>
                    <Badge className="mt-1 bg-green-500/20 text-green-400">완료 가능</Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  우주가 무엇인지, 얼마나 큰지 쉽게 배워요. 
                  그림과 영상으로 재미있게!
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>⏱️ 15분</span>
                  <span>📚 5개 레슨</span>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white">별은 어떻게 반짝일까?</h4>
                    <Badge className="mt-1 bg-yellow-500/20 text-yellow-400">진행중</Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  별이 어떻게 빛나는지, 왜 색깔이 다른지 알아봐요.
                </p>
                <div className="mb-2">
                  <Progress value={60} className="h-2" />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>⏱️ 20분</span>
                  <span>📚 6개 레슨 중 3개 완료</span>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <Brain className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-white">달은 왜 모양이 바뀔까?</h4>
                    <Badge className="mt-1 bg-gray-500/20 text-gray-400">잠김</Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  달의 위상 변화를 배우고 직접 관찰해봐요.
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>⏱️ 25분</span>
                  <span>🔒 이전 코스 완료 필요</span>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-pink-900/30 to-purple-900/30 border border-pink-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center">
                    <Gamepad2 className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="text-white">우주 탐험 게임</h4>
                    <Badge className="mt-1 bg-green-500/20 text-green-400">인기</Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  태양계를 탐험하며 행성을 만나보세요!
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>🎮 인터랙티브</span>
                  <span>⭐ 4.8 / 5.0</span>
                </div>
              </Card>
            </div>

            <div className="mt-8 bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-6 text-center">
              <h4 className="text-cyan-400 mb-2">보너스 활동</h4>
              <p className="text-sm text-gray-300">
                색칠하기, 종이 우주선 만들기, 별자리 카드 놀이
              </p>
            </div>
          </TabsContent>

          <TabsContent value="secondary">
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border border-cyan-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-white mb-2">빅뱅 이론 심화</h4>
                    <p className="text-sm text-gray-400">
                      우주의 탄생과 진화를 과학적으로 이해합니다. 
                      적색편이, 우주 배경 복사, 팽창 이론까지.
                    </p>
                  </div>
                  <Badge>중급</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="bg-black/30 rounded p-3">
                    <div className="text-gray-400 mb-1">소요 시간</div>
                    <div className="text-white">45분</div>
                  </div>
                  <div className="bg-black/30 rounded p-3">
                    <div className="text-gray-400 mb-1">난이도</div>
                    <div className="text-cyan-400">★★★☆☆</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border border-purple-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-white mb-2">특수 상대성 이론 입문</h4>
                    <p className="text-sm text-gray-400">
                      빛의 속도는 항상 일정하다? 시간이 느려진다? 
                      아인슈타인의 혁명적 아이디어를 배웁니다.
                    </p>
                  </div>
                  <Badge>고급</Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="bg-black/30 rounded p-3">
                    <div className="text-gray-400 mb-1">소요 시간</div>
                    <div className="text-white">60분</div>
                  </div>
                  <div className="bg-black/30 rounded p-3">
                    <div className="text-gray-400 mb-1">난이도</div>
                    <div className="text-purple-400">★★★★☆</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border border-orange-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-white mb-2">천체 관측 실습 가이드</h4>
                    <p className="text-sm text-gray-400">
                      망원경 사용법부터 천체 사진 촬영까지. 
                      실제로 별을 관찰하는 방법을 배웁니다.
                    </p>
                  </div>
                  <Badge>실습</Badge>
                </div>
                <div className="bg-orange-900/20 border border-orange-500/30 rounded p-4 mt-4">
                  <p className="text-sm text-orange-400">
                    💡 준비물: 쌍안경 또는 입문용 망원경 (필수 아님)
                  </p>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="adult">
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border border-cyan-500/20">
                <h4 className="text-white mb-2">일반 상대성 이론</h4>
                <p className="text-sm text-gray-300 mb-4">
                  중력을 시공간의 휘어짐으로 설명하는 아인슈타인의 이론. 
                  수학적 기초부터 블랙홀, 중력파까지.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge>전문가</Badge>
                  <Badge variant="outline">수학 필요</Badge>
                  <Badge variant="outline">120분</Badge>
                </div>
                <button className="w-full py-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all text-sm">
                  학습 시작 →
                </button>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border border-purple-500/20">
                <h4 className="text-white mb-2">우주론 수학적 기초</h4>
                <p className="text-sm text-gray-300 mb-4">
                  프리드만 방정식, 우주 거리 척도, 적색편이 계산 등 
                  우주론을 이해하기 위한 수학적 도구들.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge>전문가</Badge>
                  <Badge variant="outline">미적분학 필요</Badge>
                  <Badge variant="outline">90분</Badge>
                </div>
                <button className="w-full py-2 bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/30 transition-all text-sm">
                  학습 시작 →
                </button>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border border-pink-500/20">
                <h4 className="text-white mb-2">최신 연구 논문 해설</h4>
                <p className="text-sm text-gray-300 mb-4">
                  매주 업데이트되는 최신 천문학/우주론 논문을 전문가가 쉽게 풀어 설명합니다.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge>연구</Badge>
                  <Badge variant="outline">주간 업데이트</Badge>
                </div>
                <button className="w-full py-2 bg-pink-500/20 border border-pink-500/30 text-pink-400 rounded-lg hover:bg-pink-500/30 transition-all text-sm">
                  최신 논문 보기 →
                </button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </ContentSection>

      {/* Interactive Simulations */}
      <ContentSection title="인터랙티브 시뮬레이션">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard
            title="태양계 시뮬레이터"
            description="행성의 궤도를 조작하고, 시간을 빨리/느리게 하며 태양계를 탐험하세요. 3D 시각화로 직관적으로 이해할 수 있습니다."
            icon={Gamepad2}
            color="cyan"
          />
          <InfoCard
            title="블랙홀 중력 체험"
            description="블랙홀 주변에서 시간이 느려지고 빛이 휘어지는 현상을 시뮬레이션으로 체험하세요."
            icon={Target}
            color="purple"
          />
          <InfoCard
            title="우주 팽창 시뮬레이터"
            description="빅뱅부터 현재까지 우주가 어떻게 팽창했는지 시각적으로 확인하세요."
            icon={Brain}
            color="orange"
          />
        </div>

        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
            모든 시뮬레이션 보기 →
          </button>
        </div>
      </ContentSection>

      {/* Quiz Section */}
      <ContentSection title="퀴즈 & 도전과제">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white mb-4">주간 퀴즈</h3>
            <div className="space-y-4">
              {quizzes.map((quiz, index) => (
                <Card key={index} className="p-4 bg-gradient-to-br from-gray-900/90 to-black/90 border border-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-pointer">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-white text-sm mb-1">{quiz.title}</h4>
                      <div className="flex gap-2 items-center">
                        <Badge variant="outline" className="text-xs">
                          {quiz.difficulty}
                        </Badge>
                        <span className="text-xs text-gray-400">
                          {quiz.questions}문제
                        </span>
                      </div>
                    </div>
                    {quiz.completed && (
                      <Award className="w-5 h-5 text-yellow-400" />
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">이번 주 도전과제</h3>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-4 bg-gradient-to-br from-gray-900/90 to-black/90 border border-purple-500/20">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="text-white text-sm mb-1">{challenge.title}</h4>
                      <p className="text-xs text-gray-400 mb-2">{challenge.description}</p>
                      <div className="flex items-center gap-3 text-xs">
                        <span className="text-yellow-400">🏆 {challenge.reward}</span>
                        <span className="text-gray-500">⏰ {challenge.deadline}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full mt-3 py-2 bg-purple-500/20 border border-purple-500/30 text-purple-400 rounded text-xs hover:bg-purple-500/30 transition-all">
                    참여하기
                  </button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>

      {/* Teacher Resources */}
      <ContentSection title="교사용 자료실">
        <div className="grid md:grid-cols-3 gap-6">
          <InfoCard
            title="수업 계획안"
            description="우주 관련 다양한 주제의 수업 계획안. 학년별, 난이도별로 정리되어 있습니다."
            icon={BookOpen}
            color="cyan"
          />
          <InfoCard
            title="실험 가이드"
            description="교실에서 할 수 있는 우주 관련 실험과 활동. 준비물 리스트와 안전 주의사항 포함."
            icon={GraduationCap}
            color="purple"
          />
          <InfoCard
            title="평가 문제"
            description="퀴즈, 시험 문제, 프로젝트 아이디어. 다운로드하여 수업에 바로 사용할 수 있습니다."
            icon={Award}
            color="pink"
          />
        </div>
      </ContentSection>

      {/* Achievements */}
      <section className="py-12 px-4 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-white text-center mb-8">나의 학습 현황</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 text-center">
              <Award className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">8</div>
              <div className="text-sm text-gray-400">획득 배지</div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 text-center">
              <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">350</div>
              <div className="text-sm text-gray-400">총 포인트</div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 text-center">
              <Brain className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">12</div>
              <div className="text-sm text-gray-400">완료한 코스</div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-yellow-900/30 to-amber-900/30 border border-yellow-500/30 text-center">
              <Gamepad2 className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl text-white mb-1">25</div>
              <div className="text-sm text-gray-400">플레이 시간</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
