import { Rocket, Menu, X } from "lucide-react";
import { useState } from "react";
import { PageType } from "../App";

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; page: PageType }[] = [
    { label: "홈", page: "home" },
    { label: "우주의 탄생", page: "universe-history" },
    { label: "관측 기술", page: "observation-tech" },
    { label: "우주 탐사", page: "space-exploration" },
    { label: "한국의 우주", page: "korea-space" },
    { label: "미스터리", page: "mysteries" },
    { label: "도전과제", page: "challenges" },
    { label: "학습 센터", page: "learning-center" },
    { label: "커뮤니티", page: "community" }
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-2 md:gap-3"
          >
            <Rocket className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
            <div>
              <h1 className="text-white">COSMOS</h1>
              <p className="text-xs text-cyan-300 hidden md:block">우주에 대한 모든 것</p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`px-3 py-2 text-sm rounded-md ${
                  currentPage === item.page
                    ? "text-white bg-white/5"
                    : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-4 py-3 text-sm text-left rounded-md ${
                    currentPage === item.page
                      ? "text-white bg-white/5"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
