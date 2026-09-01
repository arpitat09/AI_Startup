import { useRef } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Sidebar } from "./components/layout/Sidebar";
import { Footer } from "./components/layout/Footer";
import { LandingHero } from "./components/dashboard/LandingHero";
import { StartupInputForm } from "./components/dashboard/StartupInputForm";
import { AnalysisProgress } from "./components/dashboard/AnalysisProgress";
import { RecentProjects } from "./components/dashboard/RecentProjects";
import { ErrorState } from "./components/common/ErrorState";
import { Toast } from "./components/common/Toast";

import { ExecutiveSummary } from "./components/analysis/ExecutiveSummary";
import { MarketIntelligence } from "./components/analysis/MarketIntelligence";
import { CompetitorIntelligence } from "./components/analysis/CompetitorIntelligence";
import { CustomerAnalysis } from "./components/analysis/CustomerAnalysis";
import { SWOTAnalysis } from "./components/analysis/SWOTAnalysis";
import { BusinessModelCanvas } from "./components/analysis/BusinessModelCanvas";
import { PricingTiers } from "./components/analysis/PricingTiers";
import { FinancialModeler } from "./components/analysis/FinancialModeler";
import { MVPPlanner } from "./components/analysis/MVPPlanner";
import { TechRecommendations } from "./components/analysis/TechRecommendations";
import { GTMStrategy } from "./components/analysis/GTMStrategy";
import { RiskEngine } from "./components/analysis/RiskEngine";
import { RoadmapView } from "./components/analysis/RoadmapView";
import { InvestorPitchDeck } from "./components/analysis/InvestorPitchDeck";
import { ResearchSources } from "./components/analysis/ResearchSources";
import { AICoFounderChat } from "./components/chat/AICoFounderChat";

import { useProject } from "./context/ProjectContext";

function App() {
  const {
    currentReport,
    isAnalyzing,
    analysisStep,
    analysisProgressText,
    error,
    activeTab,
    toastMessage,
    triggerDemo
  } = useProject();

  const formSectionRef = useRef(null);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const renderActiveTabContent = () => {
    if (!currentReport) return null;

    switch (activeTab) {
      case "overview":
        return <ExecutiveSummary report={currentReport} />;
      case "market":
        return <MarketIntelligence market={currentReport.market} />;
      case "competitors":
        return <CompetitorIntelligence competitors={currentReport.competitors} />;
      case "customer":
        return <CustomerAnalysis customer={currentReport.customer} />;
      case "swot":
        return <SWOTAnalysis swot={currentReport.swot} />;
      case "bizModel":
        return <BusinessModelCanvas bizModel={currentReport.bizModel} />;
      case "pricing":
        return <PricingTiers pricing={currentReport.pricing} />;
      case "financials":
        return <FinancialModeler initialData={currentReport.financialModel} />;
      case "mvp":
        return <MVPPlanner mvp={currentReport.mvp} />;
      case "techStack":
        return <TechRecommendations techStack={currentReport.techStack} />;
      case "gtm":
        return <GTMStrategy gtm={currentReport.gtm} />;
      case "risks":
        return <RiskEngine risks={currentReport.risks} />;
      case "roadmap":
        return <RoadmapView roadmap={currentReport.roadmap} />;
      case "pitch":
        return <InvestorPitchDeck pitch={currentReport.pitch} report={currentReport} />;
      case "sources":
        return <ResearchSources sources={currentReport.researchSources} />;
      default:
        return <ExecutiveSummary report={currentReport} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070a12] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Toast Notification Container */}
      <Toast toast={toastMessage} />

      {/* Main Header / Navigation */}
      <Navbar />

      {/* Main App Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* State 1: Active Live Analysis in Progress */}
        {isAnalyzing && (
          <AnalysisProgress currentStep={analysisStep} progressText={analysisProgressText} />
        )}

        {/* State 2: Error State when no report is loaded */}
        {!isAnalyzing && error && !currentReport && (
          <ErrorState
            message={error}
            onRetry={scrollToForm}
            onDemo={triggerDemo}
          />
        )}

        {/* State 3: Landing Home & Input Screen */}
        {!isAnalyzing && !currentReport && (
          <div className="space-y-4">
            <LandingHero onStartAnalysis={scrollToForm} />
            <div ref={formSectionRef}>
              <StartupInputForm />
            </div>
            <RecentProjects />
          </div>
        )}

        {/* State 4: Interactive Startup Intelligence Dashboard */}
        {!isAnalyzing && currentReport && (
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Left / Mobile Tab Sidebar */}
            <Sidebar />

            {/* Right Main Intelligence Tab Content */}
            <div className="flex-1 w-full min-w-0">
              {renderActiveTabContent()}
            </div>
          </div>
        )}
      </main>

      {/* Floating AI Co-Founder Chat Drawer */}
      <AICoFounderChat />

      {/* Global SaaS Footer */}
      <Footer />
    </div>
  );
}

export default App;
