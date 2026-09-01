import assert from "assert";
import { calculateStartupViabilityScore, getScoreTier, SCORE_TIERS } from "../services/scoring/startupScore.js";

console.log("▶ Running Viability Score Tests...");

// Test 1: Default / balanced subscores
const score1 = calculateStartupViabilityScore({
  marketPotential: 80,
  problemStrength: 80,
  competitionAdvantage: 80,
  businessModelViability: 80,
  differentiationFactor: 80,
  executionFeasibility: 80,
  riskResilience: 80
});

assert.strictEqual(score1.overallScore, 80, "Score should equal 80 for all 80s");
assert.strictEqual(score1.tier, "Strong Opportunity", "Tier for 80 should be Strong Opportunity");
assert.strictEqual(score1.factors.length, 7, "Should have 7 factor breakdowns");

// Test 2: Low scores / High risk
const score2 = calculateStartupViabilityScore({
  marketPotential: 25,
  problemStrength: 30,
  competitionAdvantage: 20,
  businessModelViability: 35,
  differentiationFactor: 25,
  executionFeasibility: 30,
  riskResilience: 20
});

assert.ok(score2.overallScore < 40, "Score should be < 40 for low inputs");
assert.strictEqual(score2.tier, "High Risk", "Tier should be High Risk");

// Test 3: Score tiers coverage
assert.strictEqual(getScoreTier(95).label, "Exceptional");
assert.strictEqual(getScoreTier(80).label, "Strong Opportunity");
assert.strictEqual(getScoreTier(65).label, "Promising");
assert.strictEqual(getScoreTier(50).label, "Needs Validation");
assert.strictEqual(getScoreTier(20).label, "High Risk");

console.log("✔ Viability Score Tests Passed!");
