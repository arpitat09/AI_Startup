import { BookOpen, ShieldCheck } from "lucide-react";
import { Card } from "../common/Card";
import { Badge } from "../common/Badge";

export function ResearchSources({ sources = [] }) {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Evidence Banner */}
      <Card glass className="border-[#65A77A]/40 bg-[#172019]/40">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#65A77A] flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-[#1C1C1A] dark:text-[#F5F5F0]">
              Evidence & Estimation Integrity
            </h4>
            <p className="text-xs text-[#66635D] dark:text-[#B6B6AE] leading-relaxed">
              We distinguish between verified industry datasets, deterministic economic calculations, and structured generative synthesis. Market estimates are benchmarked against historical enterprise data to avoid arbitrary hallucination.
            </p>
          </div>
        </div>
      </Card>

      {/* Sources List */}
      <Card
        glass
        title="Research Citations & Benchmark Evidence"
        subtitle="Referenced industry indices, SaaS metric benchmarks, and market sizing methodologies."
        icon={BookOpen}
      >
        <div className="space-y-4 pt-2">
          {sources.map((src, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] space-y-2 text-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h5 className="font-bold text-sm text-[#1C1C1A] dark:text-[#F5F5F0]">
                  {src.title}
                </h5>
                <div className="flex items-center gap-2">
                  <Badge variant="primary" size="sm">
                    {src.publisher || "Industry Research"}
                  </Badge>
                  {src.year && (
                    <span className="text-[11px] font-mono text-[#85857E]">
                      {src.year}
                    </span>
                  )}
                </div>
              </div>

              {src.insight && (
                <p className="text-[#66635D] dark:text-[#B6B6AE] leading-relaxed text-xs">
                  <strong>Key Insight:</strong> {src.insight}
                </p>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
