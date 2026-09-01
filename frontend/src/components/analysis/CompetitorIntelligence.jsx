import { Target, Crosshair, Zap } from "lucide-react";
import { Card } from "../common/Card";
import { Badge } from "../common/Badge";
import { getThreatBadge } from "../../utils/formatters";

export function CompetitorIntelligence({ competitors = {} }) {
  const list = competitors.directCompetitors || [];
  const mapData = competitors.positioningMap || {};
  const diffStrategy = competitors.differentiationStrategy || [];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Competitors List */}
      <Card
        glass
        title="Direct Competitor Landscape"
        subtitle="Key players, market positions, strengths, vulnerabilities, and threat levels."
        icon={Target}
      >
        <div className="space-y-4 pt-2">
          {list.map((comp, idx) => {
            const threat = getThreatBadge(comp.threatLevel);
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] transition-all hover:border-[#E76F3C]/40 space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE6DE] dark:border-[#292925] pb-2.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-extrabold text-sm sm:text-base text-[#1C1C1A] dark:text-[#F5F5F0]">
                      {comp.name}
                    </h4>
                    {comp.marketPosition && (
                      <Badge variant="primary" size="sm">
                        {comp.marketPosition}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${threat.color}`}>
                      {threat.label}
                    </span>
                    {comp.pricing && (
                      <span className="text-xs font-mono font-semibold text-[#66635D] dark:text-[#85857E]">
                        {comp.pricing}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#66635D] dark:text-[#B6B6AE]">
                  <strong>Product:</strong> {comp.product}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#172019] border border-[#65A77A]/40 text-[#8DD6A2]">
                    <strong>Core Strength:</strong> {comp.strength}
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#1F1716] border border-[#D05A50]/40 text-[#F5958E]">
                    <strong>Critical Vulnerability:</strong> {comp.weakness}
                  </div>
                </div>

                {comp.threatReason && (
                  <p className="text-[11px] text-[#85857E] italic">
                    Threat Assessment: {comp.threatReason}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* 2x2 Positioning Map */}
      <Card
        glass
        title="2x2 Competitive Positioning Map"
        subtitle={mapData.xAxis ? `X-Axis: ${mapData.xAxis} | Y-Axis: ${mapData.yAxis}` : "Market quadrant positioning"}
        icon={Crosshair}
      >
        <div className="p-6 rounded-2xl bg-[#171717] text-[#F5F5F0] relative min-h-[320px] flex items-center justify-center border border-[#34342F] shadow-2xl">
          {/* Axis lines */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-[1px] bg-[#34342F]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-full w-[1px] bg-[#34342F]" />
          </div>

          {/* Quadrant Labels */}
          <div className="absolute top-3 left-4 text-[10px] uppercase font-bold text-[#85857E]">
            Niche / High Friction
          </div>
          <div className="absolute top-3 right-4 text-[10px] uppercase font-bold text-[#E76F3C]">
            ★ Market Leader / High Moat
          </div>
          <div className="absolute bottom-3 left-4 text-[10px] uppercase font-bold text-[#85857E]">
            Legacy Incumbents
          </div>
          <div className="absolute bottom-3 right-4 text-[10px] uppercase font-bold text-[#85857E]">
            Commodity / General
          </div>

          {/* Plotted Coordinates */}
          {(mapData.coordinates || []).map((point, idx) => {
            const leftPercent = 50 + (point.x / 100) * 40;
            const topPercent = 50 - (point.y / 100) * 40;

            return (
              <div
                key={idx}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer"
                style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shadow-lg transition-transform group-hover:scale-125 ${
                    point.isOurStartup
                      ? "bg-[#E76F3C] text-white ring-4 ring-[#E76F3C]/40 animate-pulse"
                      : "bg-[#242421] text-[#B6B6AE] border border-[#34342F]"
                  }`}
                >
                  {point.isOurStartup ? "★" : idx + 1}
                </div>
                <span
                  className={`mt-1 text-[11px] font-bold px-2 py-0.5 rounded-md whitespace-nowrap shadow ${
                    point.isOurStartup
                      ? "bg-[#E76F3C] text-white font-extrabold shadow-[#E76F3C]/20"
                      : "bg-[#1A1A18] text-[#B6B6AE] border border-[#34342F]"
                  }`}
                >
                  {point.name}
                </span>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Differentiation Strategy */}
      {diffStrategy.length > 0 && (
        <Card
          glass
          title="How You Win: Strategic Differentiation Pillars"
          subtitle="Concrete competitive moats and execution wedges to win against incumbents."
          icon={Zap}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {diffStrategy.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] space-y-2"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#FCE8DF] dark:bg-[#241B17] text-[#C9542D] dark:text-[#E76F3C] flex items-center justify-center font-bold text-xs border border-[#E76F3C]/20">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#1C1C1A] dark:text-[#F5F5F0]">
                    {item.pillar}
                  </h4>
                </div>
                <p className="text-xs text-[#66635D] dark:text-[#B6B6AE] leading-relaxed">
                  {item.execution}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
