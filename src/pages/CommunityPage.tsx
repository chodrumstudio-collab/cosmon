import { PageHeader } from "../components/PageHeader";
import { ContentSection } from "../components/ContentSection";
import { Users, MessageSquare, Image as ImageIcon, Calendar, ThumbsUp, MessageCircle, Share2, Trophy } from "lucide-react";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Avatar } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CommunityPage() {
  const qaPosts = [
    {
      author: "우주탐험가123",
      avatar: "👤",
      question: "블랙홀 안에 들어가면 정말 시간이 멈추나요?",
      answer: "사건의 지평선을 넘어가는 순간, 외부 관찰자에게는 시간이 멈춘 것처럼 보입니다...",
      replies: 15,
      likes: 42,
      solved: true,
      time: "2시간 전"
    },
    {
      author: "별빛소녀",
      avatar: "👧",
      question: "다누리호가 찍은 사진은 어디서 볼 수 있나요?",
      answer: "한국항공우주연구원(KARI) 공식 웹사이트에서 확인하실 수 있습니다...",
      replies: 8,
      likes: 23,
      solved: true,
      time: "5시간 전"
    },
    {
      author: "천문학도",
      avatar: "🎓",
      question: "망원경 추천 부탁드립니다 (예산 50만원)",
      answer: "",
      replies: 12,
      likes: 18,
      solved: false,
      time: "1일 전"
    }
  ];

  const galleryPhotos = [
    {
      title: "안드로메다 은하 M31",
      author: "별사진가",
      location: "강원도 영월",
      equipment: "Canon EOS R6 + 200mm",
      likes: 156,
      comments: 23,
      image: "https://images.unsplash.com/photo-1666601526574-4c2404435361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwc3BhY2UlMjBnYWxheHklMjBzdGFyc3xlbnwxfHx8fDE3NjI0MDMzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "오리온 대성운",
      author: "밤하늘러버",
      location: "충남 천안",
      equipment: "Nikon D850 + 망원경",
      likes: 203,
      comments: 31,
      image: "https://images.unsplash.com/photo-1744138207230-9b5f9bd09557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MjQwMzMyNnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "달 크레이터 (코페르니쿠스)",
      author: "달관측러",
      location: "서울 광진구",
      equipment: "SKY-WATCHER 150mm",
      likes: 89,
      comments: 12,
      image: "https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uJTIwc3VyZmFjZXxlbnwxfHx8fDE3NjIzNTYwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "은하수 파노라마",
      author: "풍경천문가",
      location: "제주도 성산일출봉",
      equipment: "Sony A7S III + 14mm",
      likes: 312,
      comments: 45,
      image: "https://images.unsplash.com/photo-1711994872326-a8182acd98a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcm5vdmElMjBleHBsb3Npb24lMjBzdGFyc3xlbnwxfHx8fDE3NjI0MDM1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const events = [
    {
      title: "페르세우스 유성우 관측 모임",
      date: "2025년 8월 12일",
      location: "경기도 가평",
      participants: 24,
      maxParticipants: 30,
      type: "관측"
    },
    {
      title: "천체 사진 워크숍",
      date: "2025년 7월 5일",
      location: "온라인 (Zoom)",
      participants: 48,
      maxParticipants: 50,
      type: "교육"
    },
    {
      title: "망원경 조립 실습",
      date: "2025년 6월 20일",
      location: "서울 과학관",
      participants: 15,
      maxParticipants: 20,
      type: "실습"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "우주마스터", points: 2450, badge: "🏆" },
    { rank: 2, name: "별빛수집가", points: 2180, badge: "🥈" },
    { rank: 3, name: "천문학자99", points: 1920, badge: "🥉" },
    { rank: 4, name: "달탐험가", points: 1750, badge: "⭐" },
    { rank: 5, name: "코스모스", points: 1680, badge: "⭐" }
  ];

  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        title="커뮤니티"
        subtitle="COMMUNITY"
        description="우주를 사랑하는 사람들의 만남"
        icon={Users}
        backgroundImage="https://images.unsplash.com/photo-1632580254134-94c4a73dab76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBjb21tdW5pdHklMjBkaXNjdXNzaW9ufGVufDF8fHx8MTc2MjMxMjM0OXww&ixlib=rb-4.1.0&q=80&w=1080"
      />

      {/* Stats Banner */}
      <section className="py-12 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl text-cyan-400 mb-2">2,450</div>
              <p className="text-gray-400">활성 회원</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-purple-400 mb-2">856</div>
              <p className="text-gray-400">Q&A 게시글</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-pink-400 mb-2">1,234</div>
              <p className="text-gray-400">천체 사진</p>
            </div>
            <div className="text-center">
              <div className="text-3xl text-orange-400 mb-2">42</div>
              <p className="text-gray-400">이번 달 이벤트</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <ContentSection title="커뮤니티 활동">
        <Tabs defaultValue="qa" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="qa">Q&A</TabsTrigger>
            <TabsTrigger value="gallery">갤러리</TabsTrigger>
            <TabsTrigger value="events">이벤트</TabsTrigger>
            <TabsTrigger value="leaderboard">랭킹</TabsTrigger>
          </TabsList>

          {/* Q&A Tab */}
          <TabsContent value="qa">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all">
                  + 질문하기
                </button>
              </div>

              <div className="space-y-4">
                {qaPosts.map((post, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-2xl">
                          {post.avatar}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-white">{post.author}</span>
                              <span className="text-xs text-gray-500">{post.time}</span>
                              {post.solved && (
                                <Badge className="bg-green-500/20 text-green-400 text-xs">
                                  ✓ 해결됨
                                </Badge>
                              )}
                            </div>
                            <h4 className="text-white mb-2">{post.question}</h4>
                          </div>
                        </div>

                        {post.answer && (
                          <div className="bg-cyan-900/20 border-l-2 border-cyan-500 pl-4 py-2 mb-3">
                            <p className="text-sm text-gray-300">{post.answer}</p>
                          </div>
                        )}

                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            {post.likes}
                          </button>
                          <button className="flex items-center gap-1 hover:text-purple-400 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            {post.replies}개 답변
                          </button>
                          <button className="flex items-center gap-1 hover:text-pink-400 transition-colors">
                            <Share2 className="w-4 h-4" />
                            공유
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery">
            <div className="mb-6 text-center">
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all">
                <ImageIcon className="w-4 h-4 inline mr-2" />
                사진 업로드
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryPhotos.map((photo, index) => (
                <Card key={index} className="overflow-hidden bg-gradient-to-br from-gray-900/90 to-black/90 border border-purple-500/20 hover:border-purple-500/50 transition-all group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center gap-3 text-white text-sm">
                          <span className="flex items-center gap-1">
                            <ThumbsUp className="w-4 h-4" />
                            {photo.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {photo.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-white mb-2">{photo.title}</h4>
                    <div className="space-y-1 text-xs text-gray-400">
                      <p>by {photo.author}</p>
                      <p>📍 {photo.location}</p>
                      <p>📷 {photo.equipment}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/30 rounded-xl p-6 text-center">
                <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white mb-2">다가오는 이벤트</h3>
                <p className="text-gray-400">우주를 함께 탐험할 동료들을 만나보세요</p>
              </div>

              <div className="space-y-4">
                {events.map((event, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-br from-gray-900/90 to-black/90 border border-cyan-500/20">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{event.type}</Badge>
                          <h4 className="text-white">{event.title}</h4>
                        </div>
                        <div className="space-y-1 text-sm text-gray-400">
                          <p>📅 {event.date}</p>
                          <p>📍 {event.location}</p>
                          <p>👥 {event.participants}/{event.maxParticipants}명 참여</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <div className="text-right text-sm">
                          <div className="text-cyan-400 mb-1">
                            {Math.round((event.participants / event.maxParticipants) * 100)}% 차있음
                          </div>
                          <div className="w-32 bg-gray-800 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                              style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <button className="px-6 py-2 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all text-sm">
                          참가하기
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all">
                  + 이벤트 제안하기
                </button>
              </div>
            </div>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 text-center">
                <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-white mb-2">이달의 우주 탐험가</h3>
                <p className="text-gray-400">활동 포인트 기준 상위 랭킹</p>
              </div>

              <div className="space-y-3">
                {leaderboard.map((user, index) => (
                  <Card
                    key={index}
                    className={`p-4 bg-gradient-to-r transition-all ${
                      user.rank === 1
                        ? "from-yellow-900/30 to-orange-900/30 border-yellow-500/50"
                        : user.rank === 2
                        ? "from-gray-700/30 to-gray-600/30 border-gray-400/50"
                        : user.rank === 3
                        ? "from-orange-900/30 to-yellow-900/30 border-orange-500/50"
                        : "from-gray-900/50 to-black/50 border-cyan-500/20"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 text-4xl">{user.badge}</div>
                      <div className="flex-shrink-0 w-8 text-center">
                        <div className="text-white text-xl">#{user.rank}</div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white mb-1">{user.name}</div>
                        <div className="text-sm text-gray-400">{user.points} 포인트</div>
                      </div>
                      {user.rank <= 3 && (
                        <div className="text-right">
                          <Badge className="bg-yellow-500/20 text-yellow-400">
                            명예의 전당
                          </Badge>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6">
                <h4 className="text-cyan-400 mb-3 text-center">포인트 획득 방법</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <ul className="space-y-2">
                      <li>• 질문하기: <span className="text-cyan-400">10p</span></li>
                      <li>• 답변하기: <span className="text-cyan-400">20p</span></li>
                      <li>• 채택된 답변: <span className="text-cyan-400">+50p</span></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-2">
                      <li>• 사진 업로드: <span className="text-purple-400">15p</span></li>
                      <li>• 이벤트 참여: <span className="text-purple-400">30p</span></li>
                      <li>• 도전과제 완료: <span className="text-purple-400">50p</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </ContentSection>

      {/* Community Guidelines */}
      <section className="py-12 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-3xl">
          <Card className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
            <h3 className="text-white mb-4 text-center">커뮤니티 가이드라인</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-300">
              <div>
                <h4 className="text-green-400 mb-2">✓ 권장 행동</h4>
                <ul className="space-y-1">
                  <li>• 서로 존중하고 배려하기</li>
                  <li>• 건설적이고 도움이 되는 답변</li>
                  <li>• 출처를 명확히 밝히기</li>
                  <li>• 초보자 친화적인 설명</li>
                </ul>
              </div>
              <div>
                <h4 className="text-red-400 mb-2">✗ 금지 행동</h4>
                <ul className="space-y-1">
                  <li>• 욕설, 비방, 차별적 발언</li>
                  <li>• 스팸, 광고성 게시물</li>
                  <li>• 허위 정보 유포</li>
                  <li>• 타인의 지적 재산권 침해</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center text-xs text-gray-500">
              위반 시 경고 없이 게시물 삭제 및 계정 정지될 수 있습니다
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
