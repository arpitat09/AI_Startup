export const swotPrompt = `You are a strategic business analyst.
Analyze the startup idea and produce a comprehensive, nuanced SWOT analysis.

Return ONLY valid JSON (no markdown formatting, no conversational text).

JSON Schema:
{
  "strengths": [
    { "item": "Core technological or operational strength", "impact": "High", "confidence": "High", "explanation": "Why this gives a lasting advantage" },
    { "item": "Cost efficiency or architectural leverage", "impact": "Medium", "confidence": "High", "explanation": "Why this enhances margins" },
    { "item": "Founder-problem fit or specialized focus", "impact": "High", "confidence": "Medium", "explanation": "Why focus beats generalists" }
  ],
  "weaknesses": [
    { "item": "Lack of brand awareness and distribution legacy", "impact": "High", "confidence": "High", "explanation": "Requires aggressive initial acquisition motion" },
    { "item": "Reliance on foundational AI APIs or third-party infra", "impact": "Medium", "confidence": "High", "explanation": "Need caching, multi-model redundancy, and local fallbacks" },
    { "item": "Early limited data flywheel", "impact": "Medium", "confidence": "Medium", "explanation": "Initial insights must be high quality before user data accumulates" }
  ],
  "opportunities": [
    { "item": "Expanding into adjacent vertical markets", "impact": "High", "confidence": "High", "explanation": "Underlying architecture easily maps to related industries" },
    { "item": "Integration partnerships with mainstream ecosystem players", "impact": "High", "confidence": "Medium", "explanation": "Distribution leverage via marketplace listings" },
    { "item": "Proprietary fine-tuning and domain data moat", "impact": "High", "confidence": "High", "explanation": "Over time, accumulated workflows create switching costs" }
  ],
  "threats": [
    { "item": "Incumbents adding native lightweight AI features", "impact": "High", "confidence": "High", "explanation": "Must maintain 5x better depth, speed, and specialization" },
    { "item": "API pricing or platform policy shifts", "impact": "Medium", "confidence": "Medium", "explanation": "Mitigate with open-source local models and provider agility" },
    { "item": "Long enterprise sales cycles for upscale deals", "impact": "Medium", "confidence": "High", "explanation": "Mitigate with bottom-up product-led growth (PLG)" }
  ],
  "strategicTakeaway": "Key synthesis: How strengths should be leveraged to capture top opportunities while neutralizing primary threats."
}`;