import { Card } from "../components/ui/card";
import { Handshake, Building2, Rocket, Globe, Award } from "lucide-react";

export function PartnershipPage() {
  const partners = [
    {
      name: "한국천문연구원",
      type: "연구 기관",
      description: "우주 관측 데이터 및 연구 자료 제공",
      logo: "KASI"
    },
    {
      name: "한국항공우주연구원",
      type: "연구 기관",
      description: "한국 우주 개발 정보 및 기술 자료 공유",
      logo: "KARI"
    },
    {
      name: "서울대학교 천문학과",
      type: "교육 기관",
      description: "학술 콘텐츠 검토 및 교육 자료 개발",
      logo: "SNU"
    },
    {
      name: "국립과천과학관",
      type: "교육 기관",
      description: "과학 교육 콘텐츠 협력 및 공동 프로젝트",
      logo: "Gwacheon"
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "기술 지원",
      description: "우주 관련 최신 기술 및 데이터 접근"
    },
    {
      icon: Globe,
      title: "글로벌 네트워크",
      description: "전 세계 우주 기관 및 전문가와의 연결"
    },
    {
      icon: Award,
      title: "브랜드 노출",
      description: "COSMOS 플랫폼을 통한 브랜드 가시성 향상"
    },
    {
      icon: Building2,
      title: "공동 개발",
      description: "혁신적인 우주 교육 콘텐츠 공동 개발"
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            파트너십
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            COSMOS는 우주 과학 발전을 위해 다양한 기관과 협력하고 있습니다.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Current Partners */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">주요 파트너</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {partners.map((partner, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 hover:border-cyan-500/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                          {partner.type}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{partner.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Partnership Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">파트너십 혜택</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-300 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Become a Partner */}
          <Card className="p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30">
            <div className="text-center">
              <Handshake className="w-16 h-16 text-orange-400 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">파트너가 되고 싶으신가요?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                COSMOS는 우주 과학, 교육, 기술 분야의 기관 및 기업과의 협력을 환영합니다. 
                함께 우주 지식의 접근성을 높이고 미래를 만들어 갑시다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:partnership@cosmos.kr"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/50 rounded-lg text-orange-400 transition-colors"
                >
                  <Handshake className="w-5 h-5" />
                  파트너십 문의
                </a>
                <a 
                  href="mailto:info@cosmos.kr"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg text-cyan-400 transition-colors"
                >
                  <Building2 className="w-5 h-5" />
                  일반 문의
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

