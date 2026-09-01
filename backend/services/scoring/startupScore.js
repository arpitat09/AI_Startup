/**
 * Deterministic Startup Viability Scoring Engine
 * 
 * Formula:
 * Overall Score = 
 *   (Market Potential * 0.20) +
 *   (Problem Strength * 0.15) +
 *   (Competition Advantage * 0.15) +
 *   (Business Model Viability * 0.15) +
 *   (Differentiation Factor * 0.15) +
 *   (Execution Feasibility * 0.10) +
 *   (Risk Resilience * 0.10)
 */

export const SCORE_WEIGHTS = {
  marketPotential: 0.20,
  problemStrength: 0.15,
  competitionAdvantage: 0.15,
  businessModelViability: 0.15,
  differentiationFactor: 0.15,
  executionFeasibility: 0.10,
  riskResilience: 0.10
};

export const SCORE_TIERS = [
  { min: 90, max: 100, label: "Exceptional", color: "success", description: "World-class potential with strong moats, high scalability, and massive market pull." },
  { min: 75, max: 89, label: "Strong Opportunity", color: "primary", description: "Compelling value proposition and market timing with manageable execution hurdles." },
  { min: 60, max: 74, label: "Promising", color: "warning", description: "Solid fundamentals with clear demand, though differentiation or unit economics need tightening." },
  { min: 40, max: 59, label: "Needs Validation", color: "warning", description: "Critical assumptions around customer willingness to pay or competition require deeper validation." },
  { min: 0, max: 39, label: "High Risk", color: "danger", description: "Significant headwinds in market saturation, unit economics, or execution complexity." }
];

export function getScoreTier(score) {
  const rounded = Math.round(Math.max(0, Math.min(100, score)));
  return SCORE_TIERS.find(tier => rounded >= tier.min && rounded <= tier.max) || SCORE_TIERS[SCORE_TIERS.length - 1];
}

/**
 * Calculates deterministic startup viability score
 * @param {Object} rawSubscores - Object containing 7 sub-scores (0-100) or subscore objects
 * @returns {Object} Complete score breakdown with weights, tier, and metrics
 */
export function calculateStartupViabilityScore(rawSubscores = {}) {
  // Normalize each score between 10 and 98 to avoid unrealistic perfection or absolute zero
  const sanitizeScore = (val, defaultVal = 70) => {
    if (typeof val === "number" && !isNaN(val)) {
      return Math.min(98, Math.max(15, Math.round(val)));
    }
    if (val && typeof val === "object" && typeof val.score === "number") {
      return Math.min(98, Math.max(15, Math.round(val.score)));
    }
    return defaultVal;
  };

  const scores = {
    marketPotential: sanitizeScore(rawSubscores.marketPotential, 78),
    problemStrength: sanitizeScore(rawSubscores.problemStrength, 82),
    competitionAdvantage: sanitizeScore(rawSubscores.competitionAdvantage, 70),
    businessModelViability: sanitizeScore(rawSubscores.businessModelViability, 75),
    differentiationFactor: sanitizeScore(rawSubscores.differentiationFactor, 74),
    executionFeasibility: sanitizeScore(rawSubscores.executionFeasibility, 68),
    riskResilience: sanitizeScore(rawSubscores.riskResilience, 72)
  };

  const factors = [
    {
      key: "marketPotential",
      name: "Market Potential",
      score: scores.marketPotential,
      weight: SCORE_WEIGHTS.marketPotential,
      weightedScore: +(scores.marketPotential * SCORE_WEIGHTS.marketPotential).toFixed(2),
      confidence: rawSubscores.marketPotential?.confidence || "High",
      explanation: rawSubscores.marketPotential?.explanation || "Addressable market size and healthy CAGR indicate solid expansion runway."
    },
    {
      key: "problemStrength",
      name: "Problem Strength",
      score: scores.problemStrength,
      weight: SCORE_WEIGHTS.problemStrength,
      weightedScore: +(scores.problemStrength * SCORE_WEIGHTS.problemStrength).toFixed(2),
      confidence: rawSubscores.problemStrength?.confidence || "High",
      explanation: rawSubscores.problemStrength?.explanation || "Solves an acute, urgent pain point for clearly identifiable buyer personas."
    },
    {
      key: "competitionAdvantage",
      name: "Competitive Advantage",
      score: scores.competitionAdvantage,
      weight: SCORE_WEIGHTS.competitionAdvantage,
      weightedScore: +(scores.competitionAdvantage * SCORE_WEIGHTS.competitionAdvantage).toFixed(2),
      confidence: rawSubscores.competitionAdvantage?.confidence || "Medium",
      explanation: rawSubscores.competitionAdvantage?.explanation || "Clear differentiation against incumbents with specific value wedge."
    },
    {
      key: "businessModelViability",
      name: "Business Model Viability",
      score: scores.businessModelViability,
      weight: SCORE_WEIGHTS.businessModelViability,
      weightedScore: +(scores.businessModelViability * SCORE_WEIGHTS.businessModelViability).toFixed(2),
      confidence: rawSubscores.businessModelViability?.confidence || "High",
      explanation: rawSubscores.businessModelViability?.explanation || "Predictable recurring revenue model with favorable margin profile."
    },
    {
      key: "differentiationFactor",
      name: "Differentiation Factor",
      score: scores.differentiationFactor,
      weight: SCORE_WEIGHTS.differentiationFactor,
      weightedScore: +(scores.differentiationFactor * SCORE_WEIGHTS.differentiationFactor).toFixed(2),
      confidence: rawSubscores.differentiationFactor?.confidence || "Medium",
      explanation: rawSubscores.differentiationFactor?.explanation || "Proprietary workflow integration or AI capabilities create defensibility."
    },
    {
      key: "executionFeasibility",
      name: "Execution Feasibility",
      score: scores.executionFeasibility,
      weight: SCORE_WEIGHTS.executionFeasibility,
      weightedScore: +(scores.executionFeasibility * SCORE_WEIGHTS.executionFeasibility).toFixed(2),
      confidence: rawSubscores.executionFeasibility?.confidence || "High",
      explanation: rawSubscores.executionFeasibility?.explanation || "MVP can be built within realistic timeline using proven technology stacks."
    },
    {
      key: "riskResilience",
      name: "Risk Resilience",
      score: scores.riskResilience,
      weight: SCORE_WEIGHTS.riskResilience,
      weightedScore: +(scores.riskResilience * SCORE_WEIGHTS.riskResilience).toFixed(2),
      confidence: rawSubscores.riskResilience?.confidence || "Medium",
      explanation: rawSubscores.riskResilience?.explanation || "Key technical and regulatory risks have defined, actionable mitigation paths."
    }
  ];

  const totalWeighted = factors.reduce((sum, f) => sum + f.weightedScore, 0);
  const overallScore = Math.round(totalWeighted);
  const tier = getScoreTier(overallScore);

  return {
    overallScore,
    tier: tier.label,
    tierColor: tier.color,
    tierDescription: tier.description,
    factors
  };
}
