import { Rocket, Mail, Github, Twitter } from "lucide-react";
import { PageType } from "../App";

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerSections: { title: string; links: { label: string; page: PageType }[] }[] = [
    {
      title: "탐험하기",
      links: [
        { label: "우주의 탄생", page: "universe-history" },
        { label: "관측 기술", page: "observation-tech" },
        { label: "우주 탐사", page: "space-exploration" },
        { label: "대한민국의 우주", page: "korea-space" }
      ]
    },
    {
      title: "배우기",
      links: [
        { label: "학습 센터", page: "learning-center" },
        { label: "과학 이야기", page: "science-stories" },
        { label: "미스터리", page: "mysteries" },
        { label: "도전과제", page: "challenges" }
      ]
    },
    {
      title: "참여하기",
      links: [
        { label: "커뮤니티", page: "community" },
        { label: "Q&A", page: "community" },
        { label: "갤러리", page: "community" },
        { label: "이벤트", page: "community" }
      ]
    },
    {
      title: "정보",
      links: [
        { label: "소개", page: "home" },
        { label: "팀", page: "home" },
        { label: "파트너십", page: "home" },
        { label: "문의하기", page: "home" }
      ]
    }
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-cyan-500/20">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button 
              onClick={() => handleNavClick("home")}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <Rocket className="w-8 h-8 text-cyan-400" />
              <div>
                <h3 className="text-white">COSMOS</h3>
                <p className="text-xs text-cyan-300">우주에 대한 모든 것</p>
              </div>
            </button>
            <p className="text-sm text-gray-400 mb-4">
              우주의 모든 지식을 한 곳에서, 누구나 쉽게
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/20 transition-colors">
                <Mail className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/20 transition-colors">
                <Github className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500/20 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button 
                      onClick={() => handleNavClick(link.page)}
                      className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 COSMOS. All rights reserved. Made with ❤️ for space enthusiasts.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <button 
                onClick={() => handleNavClick("privacy-policy")}
                className="hover:text-cyan-400 transition-colors"
              >
                개인정보처리방침
              </button>
              <button 
                onClick={() => handleNavClick("terms-of-service")}
                className="hover:text-cyan-400 transition-colors"
              >
                이용약관
              </button>
              <button 
                onClick={() => handleNavClick("cookie-policy")}
                className="hover:text-cyan-400 transition-colors"
              >
                쿠키 정책
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
