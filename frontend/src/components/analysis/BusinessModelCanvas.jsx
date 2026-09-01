import { Layers, CheckCircle2, DollarSign, Handshake, Cpu, Target, Radio, Users, PieChart } from "lucide-react";
import { Card } from "../common/Card";

export function BusinessModelCanvas({ bizModel = {} }) {
  const canvas = bizModel.canvas || {};

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Osterwalder 9-Box Grid */}
      <Card
        glass
        title="Business Model Canvas (9 Building Blocks)"
        subtitle="Standard Osterwalder framework mapping value creation, delivery, and capture."
        icon={Layers}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
          {/* Col 1: Key Partners */}
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#1C1C1A] dark:text-[#F5F5F0] border-b border-[#EAE6DE] dark:border-[#292925] pb-2">
              <Handshake className="w-3.5 h-3.5 text-[#E76F3C]" />
              <span>Key Partners</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#66635D] dark:text-[#B6B6AE]">
              {(canvas.keyPartners || []).map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-[#E76F3C] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Key Activities & Resources */}
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1C1C1A] dark:text-[#F5F5F0] border-b border-[#EAE6DE] dark:border-[#292925] pb-2">
                <Cpu className="w-3.5 h-3.5 text-[#E76F3C]" />
                <span>Key Activities</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#66635D] dark:text-[#B6B6AE]">
                {(canvas.keyActivities || []).map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#E76F3C] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1C1C1A] dark:text-[#F5F5F0] border-b border-[#EAE6DE] dark:border-[#292925] pb-2">
                <Layers className="w-3.5 h-3.5 text-[#E76F3C]" />
                <span>Key Resources</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#66635D] dark:text-[#B6B6AE]">
                {(canvas.keyResources || []).map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#E76F3C] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Value Propositions (Center) */}
          <div className="p-3.5 rounded-xl bg-[#FCE8DF]/40 dark:bg-[#241B17] border border-[#E76F3C]/50 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#C9542D] dark:text-[#F5B08C] border-b border-[#E76F3C]/30 pb-2">
              <Target className="w-3.5 h-3.5 text-[#E76F3C]" />
              <span>Value Propositions</span>
            </div>
            <ul className="space-y-2 text-xs text-[#1C1C1A] dark:text-[#F5F5F0] font-medium">
              {(canvas.valuePropositions || []).map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E76F3C] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Relationships & Channels */}
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1C1C1A] dark:text-[#F5F5F0] border-b border-[#EAE6DE] dark:border-[#292925] pb-2">
                <Users className="w-3.5 h-3.5 text-[#E76F3C]" />
                <span>Customer Relationships</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#66635D] dark:text-[#B6B6AE]">
                {(canvas.customerRelationships || []).map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#E76F3C] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#1C1C1A] dark:text-[#F5F5F0] border-b border-[#EAE6DE] dark:border-[#292925] pb-2">
                <Radio className="w-3.5 h-3.5 text-[#E76F3C]" />
                <span>Channels</span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#66635D] dark:text-[#B6B6AE]">
                {(canvas.channels || []).map((item, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#E76F3C] mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 5: Customer Segments */}
          <div className="p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-[#171717] border border-[#E3DED6] dark:border-[#34342F] space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#1C1C1A] dark:text-[#F5F5F0] border-b border-[#EAE6DE] dark:border-[#292925] pb-2">
              <Target className="w-3.5 h-3.5 text-[#65A77A]" />
              <span>Customer Segments</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#66635D] dark:text-[#B6B6AE]">
              {(canvas.customerSegments || []).map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-[#65A77A] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom 2 Blocks: Cost Structure & Revenue Streams */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
          {/* Cost Structure */}
          <div className="p-3.5 rounded-xl bg-[#1F1716]/60 dark:bg-[#1F1716] border border-[#D05A50]/40 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#D05A50] dark:text-[#F5958E] border-b border-[#D05A50]/30 pb-2">
              <PieChart className="w-3.5 h-3.5 text-[#D05A50]" />
              <span>Cost Structure</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#66635D] dark:text-[#B6B6AE]">
              {(canvas.costStructure || []).map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-[#D05A50] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Revenue Streams */}
          <div className="p-3.5 rounded-xl bg-[#172019]/60 dark:bg-[#172019] border border-[#65A77A]/40 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#65A77A] dark:text-[#8DD6A2] border-b border-[#65A77A]/30 pb-2">
              <DollarSign className="w-3.5 h-3.5 text-[#65A77A]" />
              <span>Revenue Streams</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#66635D] dark:text-[#B6B6AE]">
              {(canvas.revenueStreams || []).map((item, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-[#65A77A] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
