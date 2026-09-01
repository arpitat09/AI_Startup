import { CheckCircle2, Sparkles } from "lucide-react";
import { Card } from "../common/Card";
import { Badge } from "../common/Badge";

export function PricingTiers({ pricing = {} }) {
  const tiers = pricing.pricingTiers || [];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Monetization Strategy Banner */}
      {pricing.monetizationStrategy && (
        <Card glass className="border-[#E76F3C]/30 bg-[#FCE8DF]/20 dark:bg-[#241B17]/40 shadow-sm">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#E76F3C] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-[#1C1C1A] dark:text-[#F5F5F0]">
                Monetization Architecture & Strategy
              </h4>
              <p className="text-xs sm:text-sm text-[#66635D] dark:text-[#B6B6AE] mt-1 leading-relaxed">
                {pricing.monetizationStrategy}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Pricing Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-3xl relative flex flex-col justify-between transition-all ${
              tier.isPopular
                ? "bg-white dark:bg-[#1A1A18] border-2 border-[#E76F3C] shadow-[0_8px_30px_rgba(231,111,60,0.18)]"
                : "bg-white dark:bg-[#1A1A18] border border-[#E3DED6] dark:border-[#34342F] shadow-sm"
            }`}
          >
            {tier.isPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <Badge variant="primary" size="sm" className="shadow-md">
                  ★ Most Popular Plan
                </Badge>
              </div>
            )}

            <div>
              <div className="mb-4">
                <h4 className="text-base font-extrabold text-[#1C1C1A] dark:text-[#F5F5F0]">
                  {tier.name}
                </h4>
                <p className="text-xs text-[#66635D] dark:text-[#85857E] mt-0.5">
                  {tier.targetSegment || "Target Audience"}
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-4 pb-4 border-b border-[#EAE6DE] dark:border-[#34342F]">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1A] dark:text-[#F5F5F0] font-mono">
                  {tier.price}
                </span>
                <span className="text-xs text-[#85857E] font-semibold">
                  /{tier.billingPeriod || "month"}
                </span>
              </div>

              {/* Feature List */}
              <ul className="space-y-2.5 text-xs text-[#66635D] dark:text-[#B6B6AE] mb-6">
                {(tier.features || []).map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E76F3C] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {tier.rationale && (
              <div className="pt-3 border-t border-[#EAE6DE] dark:border-[#34342F] text-[11px] text-[#66635D] dark:text-[#85857E] italic">
                <strong>Strategy:</strong> {tier.rationale}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
