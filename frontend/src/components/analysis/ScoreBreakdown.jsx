import { Gauge } from "lucide-react";
import { Card } from "../common/Card";
import { getScoreColor, getConfidenceBadge } from "../../utils/formatters";

export function ScoreBreakdown({ factors = [] }) {
  if (!factors || factors.length === 0) return null;

  return (
    <Card
      glass
      title="Startup Viability Score Breakdown"
      subtitle="Deterministic weighted calculation across 7 core startup fundamentals."
      icon={Gauge}
    >
      <div className="space-y-4 pt-2">
        {factors.map((factor) => {
          const colors = getScoreColor(factor.score);
          const confBadge = getConfidenceBadge(factor.confidence);

          return (
            <div
              key={factor.key}
              className="p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] transition-all hover:border-[#E76F3C]/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">
                    {factor.name}
                  </span>
                  <span className="text-[10px] text-[#85857E] font-mono">
                    ({Math.round(factor.weight * 100)}% weight)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono font-bold ${confBadge.color} px-2 py-0.5 rounded-full border`}>
                    {confBadge.label}
                  </span>
                  <span className={`text-xs sm:text-sm font-extrabold font-mono ${colors.text}`}>
                    {factor.score} / 100
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-[#EAE6DE] dark:bg-[#34342F] overflow-hidden mb-2">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${Math.min(100, Math.max(5, factor.score))}%`,
                    backgroundColor: colors.hex
                  }}
                />
              </div>

              {factor.explanation && (
                <p className="text-xs text-[#66635D] dark:text-[#B6B6AE] leading-relaxed">
                  {factor.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
