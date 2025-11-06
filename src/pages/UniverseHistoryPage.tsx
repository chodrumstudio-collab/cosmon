import { PageHeader } from "../components/PageHeader";
import { ContentSection } from "../components/ContentSection";
import { InfoCard } from "../components/InfoCard";
import { Timeline } from "../components/Timeline";
import { Sparkles, Star, Atom, Zap, Circle } from "lucide-react";
import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function UniverseHistoryPage() {
  const timelineItems = [
    {
      time: "0초",
      title: "빅뱅",
      description: "우주가 탄생한 순간. 시간과 공간이 시작되었습니다.",
      icon: <Zap className="w-4 h-4 text-white" />
    },
    {
      time: "10⁻⁴³초",
      title: "플랑크 시대",
      description: "양자 중력이 지배하는 시대. 현대 물리학으로는 설명할 수 없는 영역입니다.",
    },
    {
      time: "10⁻⁶초",
      title: "쿼크 시대",
      description: "쿼크와 글루온이 자유롭게 존재하던 시기입니다.",
    },
    {
      time: "3분",
      title: "최초 원자핵 형성",
      description: "수소와 헬륨 원자핵이 만들어졌습니다.",
      icon: <Atom className="w-4 h-4 text-white" />
    },
    {
      time: "38만 년",
      title: "최초의 원자",
      description: "전자가 원자핵과 결합하여 최초의 원자가 탄생했습니다. 우주가 투명해진 순간입니다.",
    },
    {
      time: "2억 년",
      title: "최초의 별 탄생",
      description: "우주 암흑시대가 끝나고 첫 번째 별들이 빛나기 시작했습니다.",
      icon: <Star className="w-4 h-4 text-white" />
    },
    {
      time: "10억 년",
      title: "최초의 은하",
      description: "별들이 모여 은하를 이루기 시작했습니다.",
      icon: <Circle className="w-4 h-4 text-white" />
    },
    {
      time: "138억 년",
      title: "현재",
      description: "우주는 계속 팽창하고 있으며, 우리는 이 장대한 역사의 한 순간에 존재합니다.",
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      <PageHeader
        title="우주의 탄생과 역사"
        subtitle="THE BIRTH OF THE UNIVERSE"
        description="138억 년 전 빅뱅부터 현재까지, 우주의 진화 과정을 탐험합니다"
        icon={Sparkles}
        backgroundImage="https://images.unsplash.com/photo-1736678595826-2d3e0b94638c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWclMjBiYW5nJTIwdW5pdmVyc2UlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NjI0MDM1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />

      {/* Big Bang Section */}
      <ContentSection title="빅뱅과 우주의 시작">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-gray-300 mb-4">
              138억 년 전, 우주는 상상할 수 없이 뜨겁고 밀도가 높은 상태에서 시작되었습니다. 
              이것이 바로 <span className="text-cyan-400">빅뱅</span>입니다.
            </p>
            <p className="text-gray-300 mb-4">
              많은 사람들이 빅뱅을 "하나의 점이 폭발한 것"으로 오해하지만, 
              실제로는 공간 자체가 팽창하기 시작한 순간입니다. 
              우주 밖에서 일어난 폭발이 아니라, <span className="text-purple-400">우주 자체가 팽창</span>하는 것입니다.
            </p>
            <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-6 mt-6">
              <h4 className="text-cyan-400 mb-3">핵심 증거</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• <strong>적색편이:</strong> 멀리 있는 은하일수록 더 빠르게 멀어지고 있습니다</li>
                <li>• <strong>우주 배경 복사:</strong> 빅뱅의 잔광이 전 우주에 퍼져있습니다</li>
                <li>• <strong>원소 비율:</strong> 수소와 헬륨의 비율이 예측과 정확히 일치합니다</li>
              </ul>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1744138207230-9b5f9bd09557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MjQwMzMyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Nebula"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </ContentSection>

      {/* Timeline */}
      <ContentSection title="우주의 진화 타임라인">
        <Timeline items={timelineItems} />
      </ContentSection>

      {/* Stars Life Cycle */}
      <ContentSection title="별의 탄생과 죽음">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <InfoCard
            title="별의 탄생"
            description="거대한 가스 구름이 중력으로 수축하면서 중심부의 온도가 올라갑니다. 핵융합이 시작되는 순간, 별이 탄생합니다."
            icon={Star}
            color="cyan"
            index={0}
          />
          <InfoCard
            title="별의 일생"
            description="수소를 헬륨으로 융합하며 수십억 년을 빛냅니다. 태양은 현재 이 단계에 있으며, 앞으로 50억 년을 더 살 것입니다."
            icon={Sparkles}
            color="yellow"
            index={1}
          />
          <InfoCard
            title="별의 죽음"
            description="연료가 다하면 별은 적색거성이 되거나 초신성으로 폭발합니다. 질량이 큰 별은 블랙홀이나 중성자별로 변합니다."
            icon={Zap}
            color="orange"
            index={2}
          />
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-8">
          <h3 className="text-white mb-4">초신성 폭발의 중요성</h3>
          <p className="text-gray-300 mb-4">
            초신성 폭발은 우주에서 가장 극적인 사건 중 하나입니다. 
            이 폭발에서 <span className="text-purple-400">탄소, 산소, 철 등 무거운 원소들이 만들어집니다</span>.
          </p>
          <p className="text-gray-300">
            이 원소들이 우주 공간에 퍼져 새로운 별과 행성을 만들고, 
            결국 생명체를 구성하는 재료가 됩니다.
          </p>
        </div>
      </ContentSection>

      {/* We Are Stardust */}
      <ContentSection title="우리는 별의 먼지">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 border border-cyan-500/30 rounded-xl p-8 md:p-12 text-center"
          >
            <div className="text-6xl mb-6">✨</div>
            <h3 className="text-2xl md:text-3xl text-white mb-6">
              "우리는 별의 먼지로 만들어졌습니다"
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              우리 몸을 구성하는 탄소, 질소, 산소... 이 모든 원소는 
              수십억 년 전 별의 내부에서 만들어졌습니다. 
              별이 폭발하면서 우주 공간에 퍼진 원소들이 모여 지구를 만들고, 
              결국 우리가 되었습니다.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-cyan-400 mb-2">산소 65%</div>
                <p className="text-xs text-gray-400">거대한 별의 내부에서 생성</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-purple-400 mb-2">탄소 18%</div>
                <p className="text-xs text-gray-400">모든 생명의 기본 원소</p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-pink-400 mb-2">기타 17%</div>
                <p className="text-xs text-gray-400">질소, 칼슘, 인 등</p>
              </div>
            </div>
          </motion.div>
        </div>
      </ContentSection>

      {/* Hubble Tension Preview */}
      <ContentSection title="우주의 수수께끼: 허블 텐션">
        <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-8">
          <p className="text-gray-300 mb-4">
            우주가 얼마나 빠르게 팽창하는지 측정하는 두 가지 방법이 있습니다. 
            그런데 이 두 방법의 결과가 <span className="text-orange-400">9% 차이</span>가 납니다.
          </p>
          <p className="text-gray-300">
            이것은 단순한 오차가 아닐 수 있습니다. 
            우리가 모르는 새로운 물리 법칙이 숨어있을지도 모릅니다.
          </p>
        </div>
      </ContentSection>
    </div>
  );
}
