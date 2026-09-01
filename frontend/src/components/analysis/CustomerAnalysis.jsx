import { Users, UserCheck, Target, Compass } from "lucide-react";
import { Card } from "../common/Card";
import { Badge } from "../common/Badge";

export function CustomerAnalysis({ customer = {} }) {
  const personas = customer.personas || [];
  const jtbd = customer.jobsToBeDone || [];
  const journey = customer.customerJourney || [];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Customer Personas */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 text-[#E76F3C]" />
          <h3 className="text-lg font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">
            Target Customer Personas
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {personas.map((p, idx) => (
            <Card
              key={idx}
              glass
              title={p.name}
              subtitle={`${p.role || "Target Buyer"} • ${p.segment || "Market Segment"}`}
              icon={UserCheck}
            >
              <div className="space-y-3 pt-2 text-xs">
                {p.demographics && (
                  <p className="text-[#66635D] dark:text-[#85857E] italic">
                    {p.demographics}
                  </p>
                )}

                {/* Pain Points */}
                <div>
                  <span className="font-bold text-[#D05A50] block mb-1">
                    Acute Pain Points:
                  </span>
                  <ul className="space-y-1 list-disc list-inside text-[#66635D] dark:text-[#B6B6AE]">
                    {(p.painPoints || []).map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>

                {/* Goals */}
                <div>
                  <span className="font-bold text-[#65A77A] block mb-1">
                    Primary Goals:
                  </span>
                  <ul className="space-y-1 list-disc list-inside text-[#66635D] dark:text-[#B6B6AE]">
                    {(p.goals || []).map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#EAE6DE] dark:border-[#292925]">
                  <div className="p-2 rounded-lg bg-[#FAF8F5] dark:bg-[#171717]">
                    <span className="text-[#85857E] block text-[10px]">Willingness to Pay</span>
                    <span className="font-bold font-mono text-[#1C1C1A] dark:text-[#F5F5F0]">
                      {p.willingnessToPay || "SaaS pricing"}
                    </span>
                  </div>

                  <div className="p-2 rounded-lg bg-[#FAF8F5] dark:bg-[#171717]">
                    <span className="text-[#85857E] block text-[10px]">Buying Trigger</span>
                    <span className="font-semibold text-[#1C1C1A] dark:text-[#F5F5F0] line-clamp-1">
                      {p.buyingMotivation || "ROI & speed"}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Jobs To Be Done (JTBD) */}
      {jtbd.length > 0 && (
        <Card
          glass
          title="Jobs To Be Done (JTBD Framework)"
          subtitle="Clayton Christensen framework: When [Situation], I want to [Motivation], so I can [Outcome]."
          icon={Compass}
        >
          <div className="space-y-3 pt-2">
            {jtbd.map((job, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] text-xs sm:text-sm space-y-1.5"
              >
                <div>
                  <strong className="text-[#E76F3C]">Situation:</strong>{" "}
                  <span className="text-[#66635D] dark:text-[#B6B6AE]">{job.situation}</span>
                </div>
                <div>
                  <strong className="text-[#D5A33A]">Motivation:</strong>{" "}
                  <span className="text-[#66635D] dark:text-[#B6B6AE]">{job.motivation}</span>
                </div>
                <div>
                  <strong className="text-[#65A77A]">Expected Outcome:</strong>{" "}
                  <span className="text-[#1C1C1A] dark:text-[#F5F5F0] font-semibold">{job.outcome}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Customer Journey */}
      {journey.length > 0 && (
        <Card
          glass
          title="Customer Journey & Friction Map"
          subtitle="Lifecycle stages from initial problem discovery to advocacy."
          icon={Target}
        >
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
            {journey.map((st, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] flex flex-col justify-between text-xs space-y-2"
              >
                <div>
                  <Badge variant="primary" size="sm" className="mb-1.5">
                    {st.stage}
                  </Badge>
                  <p className="font-bold text-[#1C1C1A] dark:text-[#F5F5F0] line-clamp-2">
                    {st.userAction}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#EAE6DE] dark:border-[#292925] text-[11px] text-[#66635D] dark:text-[#85857E]">
                  <span className="text-[#D05A50] font-medium">Friction:</span> {st.friction}
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
