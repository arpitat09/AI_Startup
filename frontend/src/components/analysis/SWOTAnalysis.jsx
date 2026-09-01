import { ShieldCheck, AlertCircle, Sparkles, AlertTriangle, Lightbulb } from "lucide-react";
import { Card } from "../common/Card";
import { Badge } from "../common/Badge";

export function SWOTAnalysis({ swot = {} }) {
  const strengths = swot.strengths || [];
  const weaknesses = swot.weaknesses || [];
  const opportunities = swot.opportunities || [];
  const threats = swot.threats || [];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* 4 Quadrants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Strengths */}
        <Card
          glass
          title="Strengths (Internal)"
          icon={ShieldCheck}
          badge={<Badge variant="success" size="sm">{strengths.length} Factors</Badge>}
          className="border-[#65A77A]/30"
        >
          <div className="space-y-3 pt-1">
            {strengths.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#172019]/60 dark:bg-[#172019] border border-[#65A77A]/40 text-xs space-y-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">
                    {item.item || item}
                  </span>
                  {item.impact && (
                    <Badge variant="success" size="sm">
                      {item.impact} Impact
                    </Badge>
                  )}
                </div>
                {item.explanation && (
                  <p className="text-[#66635D] dark:text-[#B6B6AE] text-[11px]">
                    {item.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Weaknesses */}
        <Card
          glass
          title="Weaknesses (Internal)"
          icon={AlertCircle}
          badge={<Badge variant="warning" size="sm">{weaknesses.length} Factors</Badge>}
          className="border-[#D5A33A]/30"
        >
          <div className="space-y-3 pt-1">
            {weaknesses.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#201D17]/60 dark:bg-[#201D17] border border-[#D5A33A]/40 text-xs space-y-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">
                    {item.item || item}
                  </span>
                  {item.impact && (
                    <Badge variant="warning" size="sm">
                      {item.impact} Impact
                    </Badge>
                  )}
                </div>
                {item.explanation && (
                  <p className="text-[#66635D] dark:text-[#B6B6AE] text-[11px]">
                    {item.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Opportunities */}
        <Card
          glass
          title="Opportunities (External)"
          icon={Sparkles}
          badge={<Badge variant="primary" size="sm">{opportunities.length} Factors</Badge>}
          className="border-[#E76F3C]/30"
        >
          <div className="space-y-3 pt-1">
            {opportunities.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#FCE8DF]/40 dark:bg-[#241B17] border border-[#E76F3C]/40 text-xs space-y-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">
                    {item.item || item}
                  </span>
                  {item.impact && (
                    <Badge variant="primary" size="sm">
                      {item.impact} Impact
                    </Badge>
                  )}
                </div>
                {item.explanation && (
                  <p className="text-[#66635D] dark:text-[#B6B6AE] text-[11px]">
                    {item.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Threats */}
        <Card
          glass
          title="Threats (External)"
          icon={AlertTriangle}
          badge={<Badge variant="danger" size="sm">{threats.length} Factors</Badge>}
          className="border-[#D05A50]/30"
        >
          <div className="space-y-3 pt-1">
            {threats.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#1F1716]/60 dark:bg-[#1F1716] border border-[#D05A50]/40 text-xs space-y-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">
                    {item.item || item}
                  </span>
                  {item.impact && (
                    <Badge variant="danger" size="sm">
                      {item.impact} Impact
                    </Badge>
                  )}
                </div>
                {item.explanation && (
                  <p className="text-[#66635D] dark:text-[#B6B6AE] text-[11px]">
                    {item.explanation}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Strategic Takeaway */}
      {swot.strategicTakeaway && (
        <Card
          glass
          title="Strategic Synthesis & Tactical Takeaway"
          icon={Lightbulb}
          className="border-[#E76F3C]/40 bg-white dark:bg-[#1A1A18]"
        >
          <p className="text-sm text-[#1C1C1A] dark:text-[#F5F5F0] leading-relaxed font-medium">
            {swot.strategicTakeaway}
          </p>
        </Card>
      )}
    </div>
  );
}
