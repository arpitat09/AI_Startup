import { Rocket, Target, Users, Radio } from "lucide-react";
import { Card } from "../common/Card";
import { Badge } from "../common/Badge";

export function GTMStrategy({ gtm = {} }) {
  const icp = gtm.icp || {};
  const firstTen = gtm.firstTenCustomers || [];
  const firstHundred = gtm.firstHundredCustomers || [];
  const channels = gtm.marketingChannels || [];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* ICP Card */}
      <Card
        glass
        title="Ideal Customer Profile (ICP) & High-Pain Triggers"
        subtitle={icp.title || "The early adopter who feels 10x more pain"}
        icon={Target}
      >
        <div className="space-y-3 pt-2 text-xs sm:text-sm">
          <p className="text-[#66635D] dark:text-[#B6B6AE] leading-relaxed">
            {icp.description}
          </p>

          {icp.triggers && icp.triggers.length > 0 && (
            <div className="p-3 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] space-y-1.5">
              <span className="font-bold text-[#E76F3C] block text-xs">
                Immediate Urgent Triggers:
              </span>
              <ul className="space-y-1 list-disc list-inside text-xs text-[#66635D] dark:text-[#B6B6AE]">
                {icp.triggers.map((trig, i) => (
                  <li key={i}>{trig}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Card>

      {/* First 10 Customers Playbook */}
      {firstTen.length > 0 && (
        <Card
          glass
          title="Playbook: How to Get Your First 10 Customers"
          subtitle="Tactical founder-led outreach steps to land early validation partners."
          icon={Rocket}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {firstTen.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] space-y-2 text-xs"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#E76F3C] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                    {item.step || idx + 1}
                  </div>
                  <Badge variant="primary" size="sm">
                    {item.timeline || "Days 1-15"}
                  </Badge>
                </div>
                <h4 className="font-bold text-[#1C1C1A] dark:text-[#F5F5F0] text-sm">
                  {item.action}
                </h4>
                <p className="text-[#66635D] dark:text-[#B6B6AE] leading-relaxed text-[11px]">
                  {item.tactic}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* First 100 Customers Strategy */}
      {firstHundred.length > 0 && (
        <Card
          glass
          title="Scaling to 100 Customers: Channel Mix"
          subtitle="Structured distribution channels to predictably scale beyond founder network."
          icon={Users}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
            {firstHundred.map((ch, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] flex flex-col justify-between space-y-2 text-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-bold text-[#1C1C1A] dark:text-[#F5F5F0] text-xs line-clamp-1">
                      {ch.channel}
                    </span>
                    {ch.expectedShare && (
                      <span className="font-mono text-[#E76F3C] font-bold text-[11px]">
                        {ch.expectedShare}
                      </span>
                    )}
                  </div>
                  <p className="text-[#66635D] dark:text-[#85857E] text-[11px] leading-relaxed">
                    {ch.strategy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Marketing Channels */}
      {channels.length > 0 && (
        <Card
          glass
          title="Marketing Channel Comparison & ROI"
          subtitle="Evaluating acquisition channels by speed, scalability, and budget requirements."
          icon={Radio}
        >
          <div className="space-y-3 pt-1">
            {channels.map((c, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-1">
                  <div className="font-bold text-[#1C1C1A] dark:text-[#F5F5F0] text-sm">
                    {c.channel}
                  </div>
                  <p className="text-[#66635D] dark:text-[#85857E] text-xs">
                    {c.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <Badge variant="success" size="sm">
                    {c.effectiveness || "High"}
                  </Badge>
                  <Badge variant="default" size="sm">
                    Cost: {c.cost || "Low"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
