import { Card } from "../components/ui/card";
import { Rocket, Globe, Users, Target, Award } from "lucide-react";

export function AboutPage() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            소개
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            COSMOS는 우주에 대한 모든 지식을 한 곳에서 누구나 쉽게 탐험할 수 있는 플랫폼입니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Mission */}
          <Card className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">우리의 미션</h2>
                <p className="text-gray-300 leading-relaxed">
                  COSMOS는 우주에 대한 지식을 민주화하고, 초보자부터 전문가까지 모두가 우주를 탐험하고 배울 수 있는 포괄적인 플랫폼을 제공합니다. 
                  우리는 복잡한 우주 과학을 이해하기 쉽고 접근 가능한 방식으로 전달하여, 모든 사람이 우주의 경이로움을 경험할 수 있도록 합니다.
                </p>
              </div>
            </div>
          </Card>

          {/* Vision */}
          <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">우리의 비전</h2>
                <p className="text-gray-300 leading-relaxed">
                  우주의 모든 지식을 한 곳에서, 누구나 쉽게. 
                  COSMOS는 우주 탐험의 새로운 시대를 열어가며, 사람들이 우주에 대한 호기심을 키우고 과학적 사고를 발전시킬 수 있는 생태계를 구축합니다.
                </p>
              </div>
            </div>
          </Card>

          {/* Values */}
          <Card className="p-6 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">핵심 가치</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Rocket className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">접근성</h3>
                  <p className="text-gray-300 text-sm">복잡한 개념을 누구나 이해할 수 있도록 쉽게 설명합니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">전문성</h3>
                  <p className="text-gray-300 text-sm">정확하고 최신의 우주 과학 정보를 제공합니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-pink-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">커뮤니티</h3>
                  <p className="text-gray-300 text-sm">우주를 사랑하는 사람들이 함께 성장하는 공간입니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-semibold mb-2">한국의 우주</h3>
                  <p className="text-gray-300 text-sm">한국의 우주 개발과 성과를 세계에 알립니다.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* What We Offer */}
          <Card className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-6">제공하는 서비스</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">우주의 탄생부터 현대 우주 탐사까지 포괄적인 콘텐츠</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">인터랙티브한 3D 시뮬레이션과 시각화</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">실시간 우주 데이터 및 관측 정보</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">학습 자료 및 교육 콘텐츠</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">우주 애호가 커뮤니티 및 Q&A</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

