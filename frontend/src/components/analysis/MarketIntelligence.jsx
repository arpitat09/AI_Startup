import { TrendingUp, Globe2 } from "lucide-react";
import { Card } from "../common/Card";
import { Badge } from "../common/Badge";

export function MarketIntelligence({ market = {} }) {
  const tam = market.tam || {};
  const sam = market.sam || {};
  const som = market.som || {};
  const drivers = market.growthDrivers || [];
  const trends = market.marketTrends || [];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* TAM / SAM / SOM Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* TAM */}
        <Card glass className="border-[#E3DED6] dark:border-[#34342F] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="primary" size="sm">TAM (Total Market)</Badge>
            <span className="text-[11px] font-medium text-[#85857E]">{tam.geography || "Global"}</span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#C9542D] dark:text-[#E76F3C] tracking-tight mb-1 font-mono">
            {tam.value || "$10B+"}
          </div>
          <p className="text-xs text-[#66635D] dark:text-[#B6B6AE] mb-3 line-clamp-2">
            {tam.methodology || "Top-down global spend"}
          </p>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] text-[11px] text-[#66635D] dark:text-[#B6B6AE] space-y-1 border border-[#E3DED6] dark:border-[#292925]">
            <div><strong>Assumptions:</strong> {tam.assumptions || "Industry wide addressable spend"}</div>
            {tam.sourceEstimate && (
              <div className="text-[10px] text-[#E76F3C] truncate font-semibold">
                Source: {tam.sourceEstimate}
              </div>
            )}
          </div>
        </Card>

        {/* SAM */}
        <Card glass className="border-[#E3DED6] dark:border-[#34342F] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="primary" size="sm">SAM (Serviceable)</Badge>
            <span className="text-[11px] font-medium text-[#85857E]">{sam.geography || "Target Region"}</span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#C9542D] dark:text-[#E76F3C] tracking-tight mb-1 font-mono">
            {sam.value || "$2.5B"}
          </div>
          <p className="text-xs text-[#66635D] dark:text-[#B6B6AE] mb-3 line-clamp-2">
            {sam.methodology || "Filtered by target customer profile"}
          </p>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] text-[11px] text-[#66635D] dark:text-[#B6B6AE] space-y-1 border border-[#E3DED6] dark:border-[#292925]">
            <div><strong>Assumptions:</strong> {sam.assumptions || "Mid-market buyer segment"}</div>
            {sam.sourceEstimate && (
              <div className="text-[10px] text-[#E76F3C] truncate font-semibold">
                Source: {sam.sourceEstimate}
              </div>
            )}
          </div>
        </Card>

        {/* SOM */}
        <Card glass className="border-[#E3DED6] dark:border-[#34342F] shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="primary" size="sm">SOM (Obtainable)</Badge>
            <span className="text-[11px] font-medium text-[#85857E]">{som.year || "Years 1-3"}</span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-[#C9542D] dark:text-[#E76F3C] tracking-tight mb-1 font-mono">
            {som.value || "$150M"}
          </div>
          <p className="text-xs text-[#66635D] dark:text-[#B6B6AE] mb-3 line-clamp-2">
            {som.methodology || "Realistic initial 36-month penetration"}
          </p>
          <div className="p-2.5 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] text-[11px] text-[#66635D] dark:text-[#B6B6AE] space-y-1 border border-[#E3DED6] dark:border-[#292925]">
            <div><strong>Assumptions:</strong> {som.assumptions || "Direct inbound & outbound velocity"}</div>
            {som.sourceEstimate && (
              <div className="text-[10px] text-[#E76F3C] truncate font-semibold">
                Source: {som.sourceEstimate}
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* CAGR & Market Growth Drivers */}
      <Card
        glass
        title="Market Expansion & Growth Rate (CAGR)"
        subtitle={market.cagr ? `Projected Annual Growth Rate: ${market.cagr}` : "Industry growth catalysts"}
        icon={TrendingUp}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
          {drivers.map((driver, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F]"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-bold text-xs sm:text-sm text-[#1C1C1A] dark:text-[#F5F5F0]">
                  {driver.driver || "Driver"}
                </span>
                <Badge variant={driver.impact === "Critical" || driver.impact === "High" ? "success" : "primary"} size="sm">
                  {driver.impact || "High"} Impact
                </Badge>
              </div>
              <p className="text-xs text-[#66635D] dark:text-[#B6B6AE] leading-relaxed">
                {driver.description}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Market Trends */}
      {trends.length > 0 && (
        <Card
          glass
          title="Macro Market Shifts & Trends"
          subtitle="Structural tailwinds supporting this startup."
          icon={Globe2}
        >
          <div className="space-y-3 pt-1">
            {trends.map((t, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="font-bold text-xs sm:text-sm text-[#1C1C1A] dark:text-[#F5F5F0]">
                    {t.trend}
                  </div>
                  <div className="text-xs text-[#66635D] dark:text-[#B6B6AE]">
                    <strong>Implication:</strong> {t.implication}
                  </div>
                </div>
                <Badge variant="primary" size="sm" className="self-start sm:self-auto flex-shrink-0">
                  {t.timeframe || "Active Now"}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
