import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Target,
  Zap,
  Clock,
  ShieldAlert
} from "lucide-react";
import { Card } from "../common/Card";
import { Badge } from "../common/Badge";
import { ScoreRing } from "../common/ScoreRing";
import { ScoreBreakdown } from "./ScoreBreakdown";

export function ExecutiveSummary({ report }) {
  if (!report) return null;

  const { executive, score, meta, input } = report;
  const verdict = executive?.aiVerdict || {};

  const verdictConfig = {
    YES: {
      color: "success",
      bg: "bg-[#172019] border-[#65A77A] text-[#8DD6A2]",
      icon: CheckCircle2,
      label: "STRONG BUILD RECOMMENDATION (YES)"
    },
    MAYBE: {
      color: "warning",
      bg: "bg-[#201D17] border-[#D5A33A] text-[#F0CA7A]",
      icon: AlertTriangle,
      label: "PROCEED WITH CAUTION (MAYBE)"
    },
    NO: {
      color: "danger",
      bg: "bg-[#1F1716] border-[#D05A50] text-[#F5958E]",
      icon: XCircle,
      label: "HIGH FAILURE RISK (NO)"
    }
  };

  const currentVerdict = verdictConfig[verdict.recommendation?.toUpperCase()] || verdictConfig.YES;
  const VerdictIcon = currentVerdict.icon;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Hero Banner */}
      <div className="p-6 rounded-3xl bg-white dark:bg-[#1A1A18] border border-[#E3DED6] dark:border-[#34342F] relative overflow-hidden shadow-sm">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="primary" size="sm">
                {meta?.industry || "SaaS"}
              </Badge>
              <Badge variant="default" size="sm">
                Stage: {meta?.stage || "Idea"}
              </Badge>
              <Badge variant="default" size="sm">
                Region: {meta?.geography || "Global"}
              </Badge>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1C1A] dark:text-[#F5F5F0] tracking-tight">
              {meta?.startupName || "Startup Intelligence Report"}
            </h2>

            <p className="text-sm sm:text-base text-[#C9542D] dark:text-[#E76F3C] font-semibold">
              "{meta?.tagline || "Validating the next generation of high-growth ventures."}"
            </p>

            <p className="text-xs sm:text-sm text-[#66635D] dark:text-[#B6B6AE] pt-1 leading-relaxed">
              {executive?.opportunityOverview || input?.idea || ""}
            </p>
          </div>

          {/* Score Indicator */}
          <div className="flex-shrink-0 flex items-center justify-center p-4 rounded-2xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] shadow-inner">
            <ScoreRing
              score={score?.overallScore || 0}
              size={130}
              strokeWidth={11}
              subtitle={score?.tier || "Viability Score"}
            />
          </div>
        </div>
      </div>

      {/* AI Verdict Card */}
      <Card
        className={`border-2 ${currentVerdict.bg}`}
        title="AI Co-Founder Verdict"
        icon={VerdictIcon}
        badge={
          <Badge variant={currentVerdict.color} size="md">
            {currentVerdict.label}
          </Badge>
        }
      >
        <div className="space-y-3">
          <h4 className="text-base font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">
            {verdict.headline || "Strong potential with clear execution path"}
          </h4>
          <p className="text-sm text-[#66635D] dark:text-[#B6B6AE] leading-relaxed">
            {verdict.rationale || "The core value proposition addresses an acute market bottleneck."}
          </p>
          {verdict.keyCondition && (
            <div className="p-3 rounded-xl bg-white/80 dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] flex items-start gap-2 text-xs text-[#1C1C1A] dark:text-[#F5F5F0]">
              <Zap className="w-4 h-4 text-[#E76F3C] flex-shrink-0 mt-0.5" />
              <span>
                <strong>Primary Milestone Condition:</strong> {verdict.keyCondition}
              </span>
            </div>
          )}
        </div>
      </Card>

      {/* Core Strategy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Problem */}
        <Card title="The Problem" icon={AlertTriangle} glass>
          <p className="text-sm text-[#66635D] dark:text-[#B6B6AE] leading-relaxed">
            {executive?.problemStatement || "High friction and manual operational overhead."}
          </p>
        </Card>

        {/* Solution */}
        <Card title="The Solution & Wedge" icon={Zap} glass>
          <p className="text-sm text-[#66635D] dark:text-[#B6B6AE] leading-relaxed">
            {executive?.solutionStatement || "Automated intelligence platform delivering rapid time-to-value."}
          </p>
        </Card>

        {/* Value Proposition */}
        <Card title="Core Value Proposition" icon={Target} glass>
          <p className="text-sm text-[#66635D] dark:text-[#B6B6AE] leading-relaxed">
            {executive?.valueProposition || "Measurable ROI through efficiency and downtime elimination."}
          </p>
        </Card>

        {/* Why Now */}
        <Card title="Why Now (Market Timing)" icon={Clock} glass>
          <p className="text-sm text-[#66635D] dark:text-[#B6B6AE] leading-relaxed">
            {executive?.whyNow || "Recent advancements in specialized AI models and lowering infrastructure costs."}
          </p>
        </Card>
      </div>

      {/* Biggest Risk */}
      {executive?.biggestRisk && (
        <Card title="Critical Existential Risk" icon={ShieldAlert} glass className="border-[#D05A50]/40">
          <p className="text-sm text-[#D05A50] dark:text-[#F5958E] leading-relaxed">
            {executive.biggestRisk}
          </p>
        </Card>
      )}

      {/* Factor Score Breakdown */}
      <ScoreBreakdown factors={score?.factors || []} />
    </div>
  );
}
