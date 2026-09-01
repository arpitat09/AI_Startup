import {
  LayoutDashboard,
  TrendingUp,
  Target,
  Users,
  Grid,
  CreditCard,
  Calculator,
  Layers,
  Cpu,
  Rocket,
  ShieldAlert,
  CalendarCheck,
  Presentation,
  BookOpen,
  SlidersHorizontal
} from "lucide-react";
import { useProject } from "../../context/ProjectContext";
import { ScoreRing } from "../common/ScoreRing";
import { Badge } from "../common/Badge";

const NAVIGATION_TABS = [
  { id: "overview", label: "Executive Summary", icon: LayoutDashboard, category: "Core Strategy" },
  { id: "market", label: "Market Intelligence", icon: TrendingUp, category: "Market & Users" },
  { id: "competitors", label: "Competitor Matrix", icon: Target, category: "Market & Users" },
  { id: "customer", label: "Personas & JTBD", icon: Users, category: "Market & Users" },
  { id: "swot", label: "SWOT Analysis", icon: Grid, category: "Strategy" },
  { id: "bizModel", label: "Business Model", icon: Layers, category: "Economics" },
  { id: "pricing", label: "Pricing Strategy", icon: CreditCard, category: "Economics" },
  { id: "financials", label: "Financial Modeler", icon: Calculator, category: "Economics", highlight: true },
  { id: "mvp", label: "MVP Feature Plan", icon: SlidersHorizontal, category: "Execution" },
  { id: "techStack", label: "Tech Stack", icon: Cpu, category: "Execution" },
  { id: "gtm", label: "Go-To-Market Playbook", icon: Rocket, category: "Execution" },
  { id: "risks", label: "Risk Heatmap", icon: ShieldAlert, category: "Execution" },
  { id: "roadmap", label: "30/60/90 Roadmap", icon: CalendarCheck, category: "Execution" },
  { id: "pitch", label: "Investor Pitch Deck", icon: Presentation, category: "Fundraising", highlight: true },
  { id: "sources", label: "Research Sources", icon: BookOpen, category: "Evidence" }
];

export function Sidebar() {
  const { activeTab, setActiveTab, currentReport } = useProject();

  if (!currentReport) return null;

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      {/* Mobile Horizontal Tabs */}
      <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto py-2 px-1 mb-4 no-scrollbar border-b border-[#E3DED6] dark:border-[#34342F]">
        {NAVIGATION_TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-[#E76F3C] text-white font-bold shadow-[0_4px_20px_rgba(231,111,60,0.2)]"
                  : "bg-white dark:bg-[#1F1F1F] text-[#66635D] dark:text-[#B6B6AE] border border-[#E3DED6] dark:border-[#34342F] hover:bg-[#F4F1EC] dark:hover:bg-[#242421]"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Desktop Sticky Vertical Sidebar */}
      <div className="hidden lg:block sticky top-20 space-y-4">
        {/* Score Quick Card */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1A1A18] border border-[#E3DED6] dark:border-[#34342F] text-center shadow-sm">
          <ScoreRing score={currentReport.score?.overallScore || 0} size={90} strokeWidth={8} showLabel={false} />
          <div className="mt-2">
            <Badge variant={currentReport.score?.overallScore >= 80 ? "success" : currentReport.score?.overallScore >= 60 ? "warning" : "primary"} size="sm">
              {currentReport.score?.tier || "Viability Score"}
            </Badge>
          </div>
          <p className="text-[11px] text-[#66635D] dark:text-[#85857E] mt-2 line-clamp-2">
            {currentReport.score?.tierDescription || ""}
          </p>
        </div>

        {/* Navigation Tab Links */}
        <nav className="p-2 rounded-2xl bg-white dark:bg-[#1A1A18] border border-[#E3DED6] dark:border-[#34342F] space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto shadow-sm">
          {NAVIGATION_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#E76F3C] text-white font-bold shadow-[0_4px_20px_rgba(231,111,60,0.2)]"
                    : "text-[#66635D] dark:text-[#B6B6AE] hover:bg-[#F4F1EC] dark:hover:bg-[#1F1F1F] hover:text-[#1C1C1A] dark:hover:text-[#F5F5F0]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : tab.highlight ? "text-[#E76F3C]" : "text-[#85857E]"}`} />
                  <span>{tab.label}</span>
                </div>
                {tab.highlight && !isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E76F3C]" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
