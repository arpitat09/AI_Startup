import { Sparkles, CheckCircle2, Circle, Loader2 } from "lucide-react";
import { Card } from "../common/Card";

const STEPS = [
  { id: 1, label: "Understanding startup idea & core problem" },
  { id: 2, label: "Identifying customer personas & Jobs-To-Be-Done" },
  { id: 3, label: "Researching TAM / SAM / SOM & market CAGR" },
  { id: 4, label: "Analyzing competitor landscape & 2x2 positioning" },
  { id: 5, label: "Building 9-box business model & pricing tiers" },
  { id: 6, label: "Evaluating tech architecture & risk heatmap" },
  { id: 7, label: "Computing 7-factor viability score & 30/60/90 roadmap" }
];

export function AnalysisProgress({ currentStep = 1, progressText = "" }) {
  const percent = Math.min(100, Math.round((currentStep / STEPS.length) * 100));

  return (
    <div className="max-w-2xl mx-auto my-12 animate-in fade-in zoom-in-95 duration-300">
      <Card
        glass
        className="shadow-2xl border-[#34342F] overflow-hidden relative"
      >
        {/* Top Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#EAE6DE] dark:bg-[#111111]">
          <div
            className="h-full bg-[#E76F3C] transition-all duration-500 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="text-center pt-4 pb-6">
          <div className="w-16 h-16 rounded-2xl bg-[#FCE8DF] dark:bg-[#241B17] flex items-center justify-center text-[#C9542D] dark:text-[#E76F3C] mx-auto mb-4 shadow-xl border border-[#E76F3C]/40 animate-pulse">
            <Sparkles className="w-8 h-8 text-[#E76F3C]" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-[#1C1C1A] dark:text-[#F5F5F0] mb-2">
            Analyzing Your Startup
          </h3>
          
          <p className="text-sm font-semibold text-[#C9542D] dark:text-[#F5B08C] min-h-[20px] animate-fade-in">
            {progressText || "Coordinating multi-agent research pipelines..."}
          </p>
        </div>

        {/* Step List */}
        <div className="space-y-3 px-2 sm:px-6 pb-4">
          {STEPS.map((step) => {
            const isDone = step.id < currentStep;
            const isCurrent = step.id === currentStep;

            return (
              <div
                key={step.id}
                className={`flex items-center gap-3 p-2.5 rounded-xl transition-all ${
                  isCurrent
                    ? "bg-[#FAF8F5] dark:bg-[#1F1F1F] border border-[#E76F3C]/60 text-[#1C1C1A] dark:text-[#F5F5F0] font-semibold"
                    : isDone
                    ? "text-[#66635D] dark:text-[#B6B6AE] opacity-90"
                    : "text-[#85857E] opacity-50"
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-[#65A77A] flex-shrink-0" />
                ) : isCurrent ? (
                  <Loader2 className="w-5 h-5 text-[#E76F3C] animate-spin flex-shrink-0" />
                ) : (
                  <Circle className="w-5 h-5 text-[#85857E] flex-shrink-0" />
                )}
                <span className="text-xs sm:text-sm">{step.label}</span>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
