import { ShieldAlert } from "lucide-react";
import { Card } from "../common/Card";

export function RiskEngine({ risks = {} }) {
  const list = risks.riskMatrix || [];

  const getSeverityBadge = (score) => {
    const s = Number(score) || 10;
    if (s >= 16) return { label: "High Severity", color: "bg-[#1F1716] text-[#F5958E] border-[#D05A50]/60" };
    if (s >= 10) return { label: "Medium Severity", color: "bg-[#201D17] text-[#F0CA7A] border-[#D5A33A]/60" };
    return { label: "Low Severity", color: "bg-[#172019] text-[#8DD6A2] border-[#65A77A]/60" };
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Threat Alert */}
      {risks.topThreatSummary && (
        <Card glass className="border-[#D05A50]/40 bg-[#1F1716]/60 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#1F1716] text-[#D05A50] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#D05A50]/30">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#1C1C1A] dark:text-[#F5F5F0]">
                Primary Existential Threat & Focus
              </h4>
              <p className="text-xs sm:text-sm text-[#D05A50] dark:text-[#F5958E] mt-1 leading-relaxed font-medium">
                {risks.topThreatSummary}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* 7-Dimension Risk Heatmap Matrix */}
      <Card
        glass
        title="7-Dimension Startup Risk Heatmap & Mitigation Matrix"
        subtitle="Evaluating Probability × Impact with defensive playbooks for each risk category."
        icon={ShieldAlert}
      >
        <div className="space-y-4 pt-2">
          {list.map((item, idx) => {
            const badge = getSeverityBadge(item.severityScore);
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] transition-all hover:border-[#E76F3C]/40 space-y-2.5 text-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE6DE] dark:border-[#292925] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#1C1C1A] dark:text-[#F5F5F0]">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-[#85857E]">
                      Prob: <strong>{item.probability || "Med"}</strong> | Impact: <strong>{item.impact || "High"}</strong>
                    </span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${badge.color}`}>
                      {badge.label}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#1C1C1A] dark:text-[#F5F5F0] font-medium">
                  <strong>Risk:</strong> {item.risk}
                </p>

                <div className="p-3 rounded-xl bg-[#172019] border border-[#65A77A]/30 text-[#8DD6A2] space-y-0.5">
                  <span className="font-bold text-[#65A77A] block text-[11px]">
                    Actionable Mitigation Strategy:
                  </span>
                  <p className="text-xs text-[#8DD6A2]">{item.mitigation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
