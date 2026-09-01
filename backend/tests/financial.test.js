import assert from "assert";
import { calculateFinancialModel } from "../services/scoring/financialCalculator.js";

console.log("▶ Running Financial Calculator Tests...");

const model = calculateFinancialModel({
  targetCustomers: 100,
  monthlyPrice: 100,
  grossMarginPct: 80,
  monthlyGrowthRatePct: 10,
  cac: 200,
  monthlyChurnPct: 4,
  monthlyBurn: 10000,
  initialCapital: 100000
});

// MRR = 100 * 100 = 10000
assert.strictEqual(model.metrics.mrr, 10000, "MRR should be 10,000");
// ARR = 10000 * 12 = 120000
assert.strictEqual(model.metrics.arr, 120000, "ARR should be 120,000");
// LTV = (100 * 0.8) / 0.04 = 80 / 0.04 = 2000
assert.strictEqual(model.metrics.ltv, 2000, "LTV should be 2,000");
// LTV/CAC = 2000 / 200 = 10.0
assert.strictEqual(model.metrics.ltvCacRatio, 10.0, "LTV/CAC should be 10.0");
// Break-even customers = 10000 / (100 * 0.8) = 125
assert.strictEqual(model.metrics.breakEvenCustomers, 125, "Break-even customers should be 125");

assert.strictEqual(model.monthlyProjections.length, 12, "Should project 12 months");
assert.strictEqual(model.monthlyProjections[0].month, "M1");

console.log("✔ Financial Calculator Tests Passed!");
