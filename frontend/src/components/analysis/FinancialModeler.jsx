import { useState } from "react";
import {
  Calculator,
  Percent,
  RotateCcw,
  BarChart3
} from "lucide-react";
import { Card } from "../common/Card";
import { Button } from "../common/Button";
import { formatCurrency, formatNumber } from "../../utils/formatters";
import { recalculateFinancials } from "../../utils/financialCalculations";

export function FinancialModeler({ initialData = {} }) {
  const defaultInputs = {
    targetCustomers: initialData.inputs?.targetCustomers || 100,
    monthlyPrice: initialData.inputs?.monthlyPrice || 99,
    grossMarginPct: initialData.inputs?.grossMarginPct || 80,
    monthlyGrowthRatePct: initialData.inputs?.monthlyGrowthRatePct || 12,
    cac: initialData.inputs?.cac || 250,
    monthlyChurnPct: initialData.inputs?.monthlyChurnPct || 3.5,
    monthlyBurn: initialData.inputs?.monthlyBurn || 8000,
    initialCapital: initialData.inputs?.initialCapital || 50000
  };

  const [inputs, setInputs] = useState(defaultInputs);

  const model = recalculateFinancials(inputs);
  const { metrics, monthlyProjections } = model;

  const handleChange = (field, val) => {
    setInputs((prev) => ({
      ...prev,
      [field]: Number(val)
    }));
  };

  const handleReset = () => {
    setInputs(defaultInputs);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-[#1A1A18] border border-[#E3DED6] dark:border-[#34342F] shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#E76F3C]" />
            <h3 className="text-base font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">
              Interactive Financial & Unit Economics Modeler
            </h3>
          </div>
          <p className="text-xs text-[#66635D] dark:text-[#85857E] mt-0.5">
            Adjust assumptions below to recalculate MRR, ARR, LTV/CAC, break-even, and runway in real time.
          </p>
        </div>
        <Button onClick={handleReset} variant="ghost" size="sm" icon={RotateCcw}>
          Reset Assumptions
        </Button>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* MRR */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1A1A18] border border-[#E3DED6] dark:border-[#34342F] shadow-sm">
          <span className="text-[11px] font-semibold text-[#85857E] block">Monthly Recurring Revenue</span>
          <span className="text-2xl font-extrabold text-[#E76F3C] font-mono">
            {formatCurrency(metrics.mrr)}
          </span>
          <span className="text-[10px] text-[#85857E] block mt-1">
            ARR: {formatCurrency(metrics.arr)}
          </span>
        </div>

        {/* LTV / CAC */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1A1A18] border border-[#E3DED6] dark:border-[#34342F] shadow-sm">
          <span className="text-[11px] font-semibold text-[#85857E] block">LTV / CAC Ratio</span>
          <span className={`text-2xl font-extrabold font-mono ${metrics.ltvCacRatio >= 3 ? "text-[#65A77A]" : "text-[#D5A33A]"}`}>
            {metrics.ltvCacRatio}x
          </span>
          <span className="text-[10px] text-[#85857E] block mt-1">
            LTV: {formatCurrency(metrics.ltv)} | CAC: {formatCurrency(metrics.cac)}
          </span>
        </div>

        {/* Payback */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1A1A18] border border-[#E3DED6] dark:border-[#34342F] shadow-sm">
          <span className="text-[11px] font-semibold text-[#85857E] block">CAC Payback Period</span>
          <span className="text-2xl font-extrabold text-[#F5B08C] font-mono">
            {metrics.cacPaybackMonths} mo
          </span>
          <span className="text-[10px] text-[#85857E] block mt-1">
            Target &lt; 12 months
          </span>
        </div>

        {/* Runway */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1A1A18] border border-[#E3DED6] dark:border-[#34342F] shadow-sm">
          <span className="text-[11px] font-semibold text-[#85857E] block">Runway / Break-even</span>
          <span className="text-2xl font-extrabold text-[#65A77A] font-mono">
            {typeof metrics.runwayMonths === "number" ? `${metrics.runwayMonths} mo` : metrics.runwayMonths}
          </span>
          <span className="text-[10px] text-[#85857E] block mt-1">
            Break-even at {formatNumber(metrics.breakEvenCustomers)} customers
          </span>
        </div>
      </div>

      {/* Sliders Grid */}
      <Card glass title="Tweak Model Assumptions" icon={Percent}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-2">
          {/* Monthly Price */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#66635D] dark:text-[#B6B6AE]">Monthly Price:</span>
              <span className="font-mono text-[#E76F3C] font-bold">${inputs.monthlyPrice}</span>
            </div>
            <input
              type="range"
              min="9"
              max="999"
              step="5"
              value={inputs.monthlyPrice}
              onChange={(e) => handleChange("monthlyPrice", e.target.value)}
              className="w-full accent-[#E76F3C] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#85857E] font-mono">
              <span>$9</span>
              <span>$999</span>
            </div>
          </div>

          {/* Paying Customers */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#66635D] dark:text-[#B6B6AE]">Target Customers:</span>
              <span className="font-mono text-[#E76F3C] font-bold">{inputs.targetCustomers}</span>
            </div>
            <input
              type="range"
              min="5"
              max="2000"
              step="10"
              value={inputs.targetCustomers}
              onChange={(e) => handleChange("targetCustomers", e.target.value)}
              className="w-full accent-[#E76F3C] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#85857E] font-mono">
              <span>5</span>
              <span>2,000</span>
            </div>
          </div>

          {/* CAC */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#66635D] dark:text-[#B6B6AE]">Acquisition Cost (CAC):</span>
              <span className="font-mono text-[#E76F3C] font-bold">${inputs.cac}</span>
            </div>
            <input
              type="range"
              min="20"
              max="2000"
              step="20"
              value={inputs.cac}
              onChange={(e) => handleChange("cac", e.target.value)}
              className="w-full accent-[#E76F3C] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#85857E] font-mono">
              <span>$20</span>
              <span>$2,000</span>
            </div>
          </div>

          {/* Monthly Churn */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#66635D] dark:text-[#B6B6AE]">Monthly Churn:</span>
              <span className="font-mono text-[#E76F3C] font-bold">{inputs.monthlyChurnPct}%</span>
            </div>
            <input
              type="range"
              min="1"
              max="15"
              step="0.5"
              value={inputs.monthlyChurnPct}
              onChange={(e) => handleChange("monthlyChurnPct", e.target.value)}
              className="w-full accent-[#E76F3C] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#85857E] font-mono">
              <span>1%</span>
              <span>15%</span>
            </div>
          </div>

          {/* Monthly Growth */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#66635D] dark:text-[#B6B6AE]">Monthly Growth Rate:</span>
              <span className="font-mono text-[#E76F3C] font-bold">{inputs.monthlyGrowthRatePct}%</span>
            </div>
            <input
              type="range"
              min="3"
              max="35"
              step="1"
              value={inputs.monthlyGrowthRatePct}
              onChange={(e) => handleChange("monthlyGrowthRatePct", e.target.value)}
              className="w-full accent-[#E76F3C] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#85857E] font-mono">
              <span>3%</span>
              <span>35%</span>
            </div>
          </div>

          {/* Gross Margin */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#66635D] dark:text-[#B6B6AE]">Gross Margin:</span>
              <span className="font-mono text-[#E76F3C] font-bold">{inputs.grossMarginPct}%</span>
            </div>
            <input
              type="range"
              min="40"
              max="95"
              step="1"
              value={inputs.grossMarginPct}
              onChange={(e) => handleChange("grossMarginPct", e.target.value)}
              className="w-full accent-[#E76F3C] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#85857E] font-mono">
              <span>40%</span>
              <span>95%</span>
            </div>
          </div>

          {/* Monthly Burn */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#66635D] dark:text-[#B6B6AE]">Monthly Fixed Burn:</span>
              <span className="font-mono text-[#E76F3C] font-bold">${inputs.monthlyBurn}</span>
            </div>
            <input
              type="range"
              min="2000"
              max="50000"
              step="1000"
              value={inputs.monthlyBurn}
              onChange={(e) => handleChange("monthlyBurn", e.target.value)}
              className="w-full accent-[#E76F3C] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#85857E] font-mono">
              <span>$2k</span>
              <span>$50k</span>
            </div>
          </div>

          {/* Initial Capital */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-[#66635D] dark:text-[#B6B6AE]">Initial Capital:</span>
              <span className="font-mono text-[#E76F3C] font-bold">${inputs.initialCapital}</span>
            </div>
            <input
              type="range"
              min="10000"
              max="300000"
              step="10000"
              value={inputs.initialCapital}
              onChange={(e) => handleChange("initialCapital", e.target.value)}
              className="w-full accent-[#E76F3C] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#85857E] font-mono">
              <span>$10k</span>
              <span>$300k</span>
            </div>
          </div>
        </div>
      </Card>

      {/* 12-Month Projections Table */}
      <Card glass title="12-Month Projections (Compounding Growth)" icon={BarChart3}>
        <div className="overflow-x-auto pt-2">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-[#E3DED6] dark:border-[#34342F] text-[#85857E] font-mono">
                <th className="py-2.5 px-3">Month</th>
                <th className="py-2.5 px-3">Active Customers</th>
                <th className="py-2.5 px-3">MRR</th>
                <th className="py-2.5 px-3">ARR Run Rate</th>
                <th className="py-2.5 px-3">Gross Profit</th>
                <th className="py-2.5 px-3">Cumulative Rev</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAE6DE] dark:divide-[#292925] font-mono">
              {monthlyProjections.map((p) => (
                <tr key={p.month} className="hover:bg-[#FAF8F5] dark:hover:bg-[#242421] transition-colors">
                  <td className="py-2.5 px-3 font-bold text-[#1C1C1A] dark:text-[#F5F5F0]">{p.monthName}</td>
                  <td className="py-2.5 px-3">{formatNumber(p.customers)}</td>
                  <td className="py-2.5 px-3 text-[#E76F3C] font-bold">{formatCurrency(p.mrr)}</td>
                  <td className="py-2.5 px-3">{formatCurrency(p.arr)}</td>
                  <td className="py-2.5 px-3 text-[#65A77A]">{formatCurrency(p.grossProfit)}</td>
                  <td className="py-2.5 px-3">{formatCurrency(p.cumulativeRevenue)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
