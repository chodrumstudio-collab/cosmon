import { Card } from "../components/ui/card";
import { Users, Mail, Github, Linkedin } from "lucide-react";

export function TeamPage() {
  const teamMembers = [
    {
      name: "김우주",
      role: "프로젝트 리더",
      description: "우주 과학 전공, 10년 이상의 우주 교육 경험",
      email: "space@cosmos.kr",
      github: "spacekim",
      linkedin: "spacekim"
    },
    {
      name: "이별",
      role: "콘텐츠 개발자",
      description: "천체물리학 박사, 우주 콘텐츠 제작 전문가",
      email: "star@cosmos.kr",
      github: "starlee",
      linkedin: "starlee"
    },
    {
      name: "박은하",
      role: "UI/UX 디자이너",
      description: "우주 테마 웹 디자인 전문가, 시각화 전문",
      email: "galaxy@cosmos.kr",
      github: "galaxypark",
      linkedin: "galaxypark"
    },
    {
      name: "최네뷸라",
      role: "개발자",
      description: "풀스택 개발자, 3D 그래픽 및 인터랙션 전문",
      email: "nebula@cosmos.kr",
      github: "nebulachoi",
      linkedin: "nebulachoi"
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            팀
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            COSMOS를 만들어가는 열정적인 팀원들을 소개합니다.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className="p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 text-sm mb-2">{member.role}</p>
                    <p className="text-gray-300 text-sm">{member.description}</p>
                  </div>
                </div>
                <div className="flex gap-3 pt-4 border-t border-gray-700">
                  <a 
                    href={`mailto:${member.email}`}
                    className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/20 transition-colors"
                    title="이메일"
                  >
                    <Mail className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                  </a>
                  <a 
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/20 transition-colors"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                  </a>
                  <a 
                    href={`https://linkedin.com/in/${member.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/20 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Join Us */}
          <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">함께하고 싶으신가요?</h2>
              <p className="text-gray-300 mb-6">
                COSMOS는 우주를 사랑하는 다양한 분야의 전문가들을 환영합니다.
              </p>
              <a 
                href="mailto:careers@cosmos.kr"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                채용 문의
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

