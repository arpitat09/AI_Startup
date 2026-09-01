import { Sparkles, Play, ArrowRight, Zap, LineChart, Target, Layers } from "lucide-react";
import { Button } from "../common/Button";
import { useProject } from "../../context/ProjectContext";

export function LandingHero({ onStartAnalysis }) {
  const { triggerDemo } = useProject();

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 text-center">
      {/* Subtle Burnt Orange Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] hero-glow blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#E76F3C] bg-[#1A1A18] text-[#F5B08C] text-xs font-semibold mb-6 hover:shadow-[0_0_20px_rgba(231,111,60,0.25)] transition-all">
        <Sparkles className="w-3.5 h-3.5 text-[#E76F3C]" />
        <span>Next-Generation AI Co-Founder & Strategy Engine</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1C1C1A] dark:text-[#F5F5F0] max-w-4xl mx-auto leading-[1.1] mb-6">
        Turn one idea into a <br className="hidden sm:inline" />
        <span className="bg-gradient-to-r from-[#E76F3C] to-[#F5B08C] bg-clip-text text-transparent">
          validated startup strategy.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-xl text-[#66635D] dark:text-[#B6B6AE] max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
        Analyze your market, competitors, business model, risks, and growth playbook with a multi-agent startup intelligence engine.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
        <Button
          onClick={onStartAnalysis}
          variant="primary"
          size="lg"
          icon={ArrowRight}
        >
          Analyze My Startup
        </Button>

        <Button
          onClick={triggerDemo}
          variant="secondary"
          size="lg"
          icon={Play}
        >
          Explore Interactive Demo
        </Button>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
        <div className="p-3.5 rounded-2xl bg-white dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] hover:bg-[#F9F6F0] dark:hover:bg-[#242421] hover:border-[#E76F3C] dark:hover:border-[#E76F3C] transition-all flex items-center gap-3 group cursor-default">
          <div className="w-9 h-9 rounded-xl bg-[#FCE8DF] dark:bg-[#241B17] text-[#C9542D] dark:text-[#E76F3C] flex items-center justify-center flex-shrink-0 border border-[#E76F3C]/20 group-hover:bg-[#E76F3C]/20 transition-colors">
            <LineChart className="w-4 h-4 text-[#E76F3C]" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">TAM / SAM / SOM</div>
            <div className="text-[11px] text-[#66635D] dark:text-[#85857E]">Grounded Market Sizing</div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] hover:bg-[#F9F6F0] dark:hover:bg-[#242421] hover:border-[#E76F3C] dark:hover:border-[#E76F3C] transition-all flex items-center gap-3 group cursor-default">
          <div className="w-9 h-9 rounded-xl bg-[#FCE8DF] dark:bg-[#241B17] text-[#C9542D] dark:text-[#E76F3C] flex items-center justify-center flex-shrink-0 border border-[#E76F3C]/20 group-hover:bg-[#E76F3C]/20 transition-colors">
            <Target className="w-4 h-4 text-[#E76F3C]" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">2x2 Competitor Map</div>
            <div className="text-[11px] text-[#66635D] dark:text-[#85857E]">Positioning & Moats</div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] hover:bg-[#F9F6F0] dark:hover:bg-[#242421] hover:border-[#E76F3C] dark:hover:border-[#E76F3C] transition-all flex items-center gap-3 group cursor-default">
          <div className="w-9 h-9 rounded-xl bg-[#FCE8DF] dark:bg-[#241B17] text-[#C9542D] dark:text-[#E76F3C] flex items-center justify-center flex-shrink-0 border border-[#E76F3C]/20 group-hover:bg-[#E76F3C]/20 transition-colors">
            <Zap className="w-4 h-4 text-[#E76F3C]" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">Viability Score 0-100</div>
            <div className="text-[11px] text-[#66635D] dark:text-[#85857E]">7-Factor Weighted Math</div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] hover:bg-[#F9F6F0] dark:hover:bg-[#242421] hover:border-[#E76F3C] dark:hover:border-[#E76F3C] transition-all flex items-center gap-3 group cursor-default">
          <div className="w-9 h-9 rounded-xl bg-[#FCE8DF] dark:bg-[#241B17] text-[#C9542D] dark:text-[#E76F3C] flex items-center justify-center flex-shrink-0 border border-[#E76F3C]/20 group-hover:bg-[#E76F3C]/20 transition-colors">
            <Layers className="w-4 h-4 text-[#E76F3C]" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">Financial Modeler</div>
            <div className="text-[11px] text-[#66635D] dark:text-[#85857E]">MRR, CAC & Runway</div>
          </div>
        </div>
      </div>
    </section>
  );
}
