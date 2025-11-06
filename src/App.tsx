import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { UniverseHistoryPage } from "./pages/UniverseHistoryPage";
import { ObservationTechPage } from "./pages/ObservationTechPage";
import { SpaceExplorationPage } from "./pages/SpaceExplorationPage";
import { KoreaSpacePage } from "./pages/KoreaSpacePage";
import { MysteriesPage } from "./pages/MysteriesPage";
import { ChallengesPage } from "./pages/ChallengesPage";
import { ScienceStoriesPage } from "./pages/ScienceStoriesPage";
import { LearningCenterPage } from "./pages/LearningCenterPage";
import { CommunityPage } from "./pages/CommunityPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";
import { Footer } from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";

export type PageType = 
  | "home"
  | "universe-history"
  | "observation-tech"
  | "space-exploration"
  | "korea-space"
  | "mysteries"
  | "challenges"
  | "science-stories"
  | "learning-center"
  | "community"
  | "privacy-policy"
  | "terms-of-service"
  | "cookie-policy";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "universe-history":
        return <UniverseHistoryPage />;
      case "observation-tech":
        return <ObservationTechPage />;
      case "space-exploration":
        return <SpaceExplorationPage />;
      case "korea-space":
        return <KoreaSpacePage />;
      case "mysteries":
        return <MysteriesPage />;
      case "challenges":
        return <ChallengesPage />;
      case "science-stories":
        return <ScienceStoriesPage />;
      case "learning-center":
        return <LearningCenterPage />;
      case "community":
        return <CommunityPage />;
      case "privacy-policy":
        return <PrivacyPolicyPage />;
      case "terms-of-service":
        return <TermsOfServicePage />;
      case "cookie-policy":
        return <CookiePolicyPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0D3C] text-white overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-black to-purple-900/20 pointer-events-none"></div>
      
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="relative">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
