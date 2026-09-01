import { Cpu, Server, Database, Sparkles, Key, CreditCard, Cloud, BarChart2 } from "lucide-react";
import { Card } from "../common/Card";

export function TechRecommendations({ techStack = {} }) {
  const recs = techStack.recommendations || [];

  const getCategoryIcon = (cat) => {
    const c = (cat || "").toLowerCase();
    if (c.includes("front")) return Cpu;
    if (c.includes("back") || c.includes("api")) return Server;
    if (c.includes("data") || c.includes("persist")) return Database;
    if (c.includes("ai") || c.includes("llm")) return Sparkles;
    if (c.includes("auth")) return Key;
    if (c.includes("pay") || c.includes("bill")) return CreditCard;
    if (c.includes("host") || c.includes("cloud")) return Cloud;
    return BarChart2;
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Summary */}
      {techStack.architectureSummary && (
        <Card glass className="border-[#E76F3C]/30 bg-[#FCE8DF]/20 dark:bg-[#241B17]/40">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#FCE8DF] dark:bg-[#241B17] text-[#C9542D] dark:text-[#E76F3C] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#E76F3C]/20">
              <Cpu className="w-4 h-4 text-[#E76F3C]" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#1C1C1A] dark:text-[#F5F5F0]">
                Recommended System Architecture
              </h4>
              <p className="text-xs sm:text-sm text-[#66635D] dark:text-[#B6B6AE] mt-1 leading-relaxed">
                {techStack.architectureSummary}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Grid of Recommendations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recs.map((item, idx) => {
          const Icon = getCategoryIcon(item.category);
          return (
            <Card
              key={idx}
              glass
              title={item.category}
              subtitle={item.technology}
              icon={Icon}
            >
              <div className="space-y-3 pt-2 text-xs">
                <p className="text-[#66635D] dark:text-[#B6B6AE] leading-relaxed">
                  <strong>Why Selected:</strong> {item.why}
                </p>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#EAE6DE] dark:border-[#292925]">
                  <div className="p-2 rounded-lg bg-[#FAF8F5] dark:bg-[#171717]">
                    <span className="text-[#85857E] block text-[10px]">Estimated Cost</span>
                    <span className="font-semibold text-[#1C1C1A] dark:text-[#F5F5F0] font-mono text-[11px] truncate block">
                      {item.cost || "Free"}
                    </span>
                  </div>

                  <div className="p-2 rounded-lg bg-[#FAF8F5] dark:bg-[#171717]">
                    <span className="text-[#85857E] block text-[10px]">Complexity</span>
                    <span className="font-semibold text-[#1C1C1A] dark:text-[#F5F5F0] text-[11px] block">
                      {item.complexity || "Low"}
                    </span>
                  </div>

                  <div className="p-2 rounded-lg bg-[#FAF8F5] dark:bg-[#171717]">
                    <span className="text-[#85857E] block text-[10px]">Alternative</span>
                    <span className="font-semibold text-[#1C1C1A] dark:text-[#F5F5F0] text-[11px] truncate block">
                      {item.alternative || "None"}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
