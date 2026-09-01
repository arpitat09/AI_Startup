/**
 * Deterministic Financial Calculations & Unit Economics Engine
 */

export function calculateFinancialModel(inputs = {}) {
  const targetCustomers = Math.max(1, Number(inputs.targetCustomers) || 100);
  const monthlyPrice = Math.max(1, Number(inputs.monthlyPrice) || 99);
  const grossMarginPct = Math.min(99, Math.max(10, Number(inputs.grossMarginPct) || 80));
  const monthlyGrowthRatePct = Math.max(0, Number(inputs.monthlyGrowthRatePct) || 12);
  const cac = Math.max(1, Number(inputs.cac) || 200);
  const monthlyChurnPct = Math.min(50, Math.max(0.5, Number(inputs.monthlyChurnPct) || 3.5));
  const monthlyBurn = Math.max(500, Number(inputs.monthlyBurn) || 8000);
  const initialCapital = Math.max(0, Number(inputs.initialCapital) || 50000);

  // Core metrics
  const mrr = Math.round(targetCustomers * monthlyPrice);
  const arr = mrr * 12;
  const marginDecimal = grossMarginPct / 100;
  const churnDecimal = monthlyChurnPct / 100;
  
  // Unit Economics
  const customerLifespanMonths = +(1 / churnDecimal).toFixed(1);
  const ltv = Math.round((monthlyPrice * marginDecimal) / churnDecimal);
  const ltvCacRatio = +(ltv / cac).toFixed(2);
  const cacPaybackMonths = +(cac / (monthlyPrice * marginDecimal)).toFixed(1);
  
  // Break-even & Runway
  const monthlyGrossProfit = Math.round(mrr * marginDecimal);
  const breakEvenCustomers = Math.ceil(monthlyBurn / (monthlyPrice * marginDecimal));
  const netBurn = Math.max(0, monthlyBurn - monthlyGrossProfit);
  const runwayMonths = netBurn > 0 ? +(initialCapital / netBurn).toFixed(1) : "Profitable";

  // 12-Month Projection
  const monthlyProjections = [];
  let currentCustomers = targetCustomers;
  let cumulativeRevenue = 0;

  for (let month = 1; month <= 12; month++) {
    const monthMrr = Math.round(currentCustomers * monthlyPrice);
    const monthGrossProfit = Math.round(monthMrr * marginDecimal);
    cumulativeRevenue += monthMrr;
    
    monthlyProjections.push({
      month: `M${month}`,
      monthName: `Month ${month}`,
      customers: Math.round(currentCustomers),
      mrr: monthMrr,
      arr: monthMrr * 12,
      grossProfit: monthGrossProfit,
      cumulativeRevenue: cumulativeRevenue
    });

    // Net growth with churn
    const newCustomers = currentCustomers * (monthlyGrowthRatePct / 100);
    const churnedCustomers = currentCustomers * churnDecimal;
    currentCustomers += (newCustomers - churnedCustomers);
  }

  // Health assessment
  let unitEconomicsHealth = "Good";
  if (ltvCacRatio >= 3.5 && cacPaybackMonths <= 12) {
    unitEconomicsHealth = "Excellent (Top Quartile)";
  } else if (ltvCacRatio < 2.0 || cacPaybackMonths > 18) {
    unitEconomicsHealth = "Warning: High Acquisition Cost";
  }

  return {
    inputs: {
      targetCustomers,
      monthlyPrice,
      grossMarginPct,
      monthlyGrowthRatePct,
      cac,
      monthlyChurnPct,
      monthlyBurn,
      initialCapital
    },
    metrics: {
      mrr,
      arr,
      ltv,
      cac,
      ltvCacRatio,
      cacPaybackMonths,
      customerLifespanMonths,
      monthlyGrossProfit,
      breakEvenCustomers,
      netMonthlyBurn: netBurn,
      runwayMonths,
      unitEconomicsHealth
    },
    monthlyProjections
  };
}
