import { SlidersHorizontal, Calendar } from "lucide-react";
import { Card } from "../common/Card";
import { Badge } from "../common/Badge";

export function MVPPlanner({ mvp = {} }) {
  const moscow = mvp.moscow || {};
  const plan = mvp.thirtyDayPlan || [];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* MoSCoW Grid */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-[#E76F3C]" />
          <h3 className="text-lg font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">
            MVP Feature Scope (MoSCoW Framework)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Must Have */}
          <Card
            glass
            title="Must Have (Day 1 Non-Negotiables)"
            badge={<Badge variant="success" size="sm">Core Scope</Badge>}
            className="border-[#65A77A]/30"
          >
            <div className="space-y-3 pt-1">
              {(moscow.mustHave || []).map((f, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-[#172019]/60 dark:bg-[#172019] border border-[#65A77A]/40 text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">{f.feature}</span>
                    <span className="font-mono text-[11px] text-[#65A77A] font-semibold">
                      {f.estimatedEffort || "3 days"}
                    </span>
                  </div>
                  <p className="text-[#66635D] dark:text-[#B6B6AE] text-[11px]">{f.description}</p>
                  <div className="text-[10px] text-[#8DD6A2] font-medium">
                    <strong>User Value:</strong> {f.userValue}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Should Have */}
          <Card
            glass
            title="Should Have (Key Enhancements)"
            badge={<Badge variant="primary" size="sm">High Priority</Badge>}
            className="border-[#E76F3C]/30"
          >
            <div className="space-y-3 pt-1">
              {(moscow.shouldHave || []).map((f, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-[#FCE8DF]/40 dark:bg-[#241B17] border border-[#E76F3C]/40 text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">{f.feature}</span>
                    <span className="font-mono text-[11px] text-[#E76F3C] font-semibold">
                      {f.estimatedEffort || "4 days"}
                    </span>
                  </div>
                  <p className="text-[#66635D] dark:text-[#B6B6AE] text-[11px]">{f.description}</p>
                  <div className="text-[10px] text-[#F5B08C] font-medium">
                    <strong>User Value:</strong> {f.userValue}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Nice To Have */}
          <Card
            glass
            title="Nice To Have (Polishes)"
            badge={<Badge variant="warning" size="sm">Delight</Badge>}
            className="border-[#D5A33A]/30"
          >
            <div className="space-y-3 pt-1">
              {(moscow.niceToHave || []).map((f, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-[#201D17]/60 dark:bg-[#201D17] border border-[#D5A33A]/40 text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">{f.feature}</span>
                    <span className="font-mono text-[11px] text-[#D5A33A] font-semibold">
                      {f.estimatedEffort || "2 days"}
                    </span>
                  </div>
                  <p className="text-[#66635D] dark:text-[#B6B6AE] text-[11px]">{f.description}</p>
                  <div className="text-[10px] text-[#F0CA7A] font-medium">
                    <strong>User Value:</strong> {f.userValue}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Later */}
          <Card
            glass
            title="Later (Post-Validation Scale)"
            badge={<Badge variant="default" size="sm">Backlog</Badge>}
            className="border-[#34342F]"
          >
            <div className="space-y-3 pt-1">
              {(moscow.later || []).map((f, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1F1F1F] border border-[#E3DED6] dark:border-[#34342F] text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">{f.feature}</span>
                    <span className="font-mono text-[11px] text-[#85857E] font-semibold">
                      {f.estimatedEffort || "Post-MVP"}
                    </span>
                  </div>
                  <p className="text-[#66635D] dark:text-[#B6B6AE] text-[11px]">{f.description}</p>
                  <div className="text-[10px] text-[#85857E] font-medium">
                    <strong>Target:</strong> {f.userValue}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* 30-Day Launch Timeline */}
      {plan.length > 0 && (
        <Card
          glass
          title="MVP in 30 Days: Weekly Milestone Plan"
          subtitle="Agile sprint roadmap from architecture scaffolding to production launch."
          icon={Calendar}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            {plan.map((w, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] flex flex-col justify-between space-y-3 text-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-extrabold font-mono text-[#E76F3C]">
                      {w.week}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-[#1C1C1A] dark:text-[#F5F5F0] mb-2">
                    {w.focus}
                  </h4>
                  <ul className="space-y-1.5 list-disc list-inside text-[#66635D] dark:text-[#B6B6AE] text-[11px]">
                    {(w.deliverables || []).map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-[#EAE6DE] dark:border-[#292925] text-[11px] text-[#66635D] dark:text-[#85857E]">
                  <span className="font-semibold text-[#65A77A] block">Milestone:</span>
                  {w.milestone}
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
