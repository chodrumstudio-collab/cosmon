import { Hero } from "../components/Hero";
import { SectionCard } from "../components/SectionCard";
import { StatsCounter } from "../components/StatsCounter";
import { LiveData } from "../components/LiveData";
import { PageType } from "../App";
import { 
  Sparkles, 
  Telescope, 
  Rocket, 
  Flag,
  HelpCircle,
  AlertTriangle,
  BookOpen,
  Users
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const sections = [
    {
      title: "🌟 우주의 탄생과 역사",
      description: "138억 년 전 빅뱅부터 현재까지, 우주의 진화 과정을 탐험합니다. 우리는 모두 별의 먼지입니다.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1744138207230-9b5f9bd09557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MjQwMzMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: [
        "빅뱅 이론과 우주 팽창",
        "별의 탄생과 죽음 시뮬레이션",
        "우주 진화 타임라인"
      ],
      page: "universe-history" as PageType
    },
    {
      title: "🔭 우주 관측 기술",
      description: "GMT, 제임스 웹, 허블까지. 인류가 우주를 보는 눈, 망원경의 모든 것을 알아봅니다.",
      icon: Telescope,
      image: "https://images.unsplash.com/photo-1727034393564-dc7b0275686d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlc2NvcGUlMjBvYnNlcnZhdG9yeSUyMG5pZ2h0fGVufDF8fHx8MTc2MjM4OTIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: [
        "제임스 웹 우주망원경 (JWST)",
        "GMT 거대마젤란망원경",
        "한국의 KMTNet 외계행성 탐색"
      ],
      page: "observation-tech" as PageType
    },
    {
      title: "🚀 우주 탐사",
      description: "다누리호의 달 여행, 화성 탐사, 그리고 심우주로의 인류의 도전을 따라갑니다.",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1720214658819-2676e74b4c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBsYXVuY2glMjBzcGFjZXxlbnwxfHx8fDE3NjIyOTQ2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: [
        "다누리호 달 탐사 실시간 추적",
        "화성 로버 퍼서비어런스",
        "아르테미스 달 기지 계획"
      ],
      page: "space-exploration" as PageType
    },
    {
      title: "🇰🇷 대한민국의 우주",
      description: "누리호 발사 성공, 우주항공청 설립. 대한민국이 세계 7위 우주 강국으로 도약합니다.",
      icon: Flag,
      image: "https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb29uJTIwc3VyZmFjZXxlbnwxfHx8fDE3NjIzNTYwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: [
        "누리호 (KSLV-II) 독자 발사체",
        "다누리 달 궤도선 성과",
        "한국 우주 기업 생태계"
      ],
      page: "korea-space" as PageType
    },
    {
      title: "🌌 우주의 미스터리",
      description: "허블 텐션, 암흑물질, 블랙홀, 외계생명체... 아직 풀리지 않은 우주의 수수께끼들.",
      icon: HelpCircle,
      image: "https://images.unsplash.com/photo-1670884307315-eb843e5c3829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGhvbGUlMjBzcGFjZXxlbnwxfHx8fDE3NjIzNDM4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: [
        "허블 텐션: 우주 팽창의 수수께끼",
        "암흑물질과 암흑에너지 (95%)",
        "블랙홀과 사건의 지평선"
      ],
      page: "mysteries" as PageType
    },
    {
      title: "🛸 현대 우주의 도전과제",
      description: "우주 쓰레기, 케슬러 증후군, 뉴스페이스 시대... 인류가 직면한 우주의 현실적 문제들.",
      icon: AlertTriangle,
      image: "https://images.unsplash.com/photo-1761212534376-a8b8d7c56669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBlYXJ0aCUyMG9yYml0fGVufDF8fHx8MTc2MjQwMzMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: [
        "우주 쓰레기 2.5만개 추적",
        "케슬러 증후군 위험",
        "SpaceX 시장 독점 문제"
      ],
      page: "challenges" as PageType
    },
    {
      title: "📚 과학 이야기",
      description: "실수로부터의 위대한 발견, 과학자 인터뷰, 과학의 본질에 대한 깊이 있는 이야기.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1527826507412-72e447368aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJzJTIwcGxhbmV0JTIwc3VyZmFjZXxlbnwxfHx8fDE3NjIzMDU0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: [
        "화성 탐사선 추락 단위 혼동 사건",
        "페리톤 신호의 정체는 전자레인지",
        "지웅배 박사의 우주먼지 이야기"
      ],
      page: "science-stories" as PageType
    },
    {
      title: "🎓 학습 센터",
      description: "초등학생부터 전문가까지, 난이도별 맞춤 콘텐츠와 인터랙티브 시뮬레이션으로 배웁니다.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1666601526574-4c2404435361?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwc3BhY2UlMjBnYWxheHklMjBzdGFyc3xlbnwxfHx8fDE3NjI0MDMzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: [
        "3D 우주 시뮬레이터",
        "블랙홀 중력 체험",
        "퀴즈 & 도전과제"
      ],
      page: "learning-center" as PageType
    },
    {
      title: "👥 커뮤니티",
      description: "우주를 사랑하는 사람들의 만남. 천체 사진 공유, Q&A, 관측 후기를 나눕니다.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1744138207230-9b5f9bd09557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MjQwMzMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      highlights: [
        "천체 사진 갤러리",
        "전문가 Q&A 게시판",
        "관측 챌린지 이벤트"
      ],
      page: "community" as PageType
    }
  ];

  return (
    <>
      <Hero />
      <StatsCounter />

      {/* Main Sections */}
      <section id="main-sections" className="relative py-20 px-4">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">탐험할 우주</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              빅뱅부터 현대 우주 산업까지, 우주에 대한 모든 지식을 담았습니다
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {sections.map((section, index) => (
              <div key={index} onClick={() => onNavigate(section.page)}>
                <SectionCard {...section} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <LiveData />

      {/* Quote Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="text-4xl md:text-6xl mb-6 text-cyan-400">"</div>
          <p className="text-xl md:text-3xl text-gray-300 mb-8">
            우리는 모두 별의 먼지입니다
          </p>
          <p className="text-gray-500">
            - 인체를 구성하는 모든 원소는 별에서 만들어졌습니다 -
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-white mb-4">우주 뉴스레터</h2>
          <p className="text-gray-400 mb-8">
            주간 우주 소식, 관측 추천, 새로운 발견을 이메일로 받아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="이메일 주소 입력"
              className="px-6 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              구독하기
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
