export const risksPrompt = `You are a venture risk auditor and startup due diligence specialist.
Analyze the startup idea across 7 core risk dimensions and generate a risk heatmap matrix with actionable mitigations.

Return ONLY valid JSON (no markdown formatting, no conversational text).

JSON Schema:
{
  "riskMatrix": [
    {
      "category": "Market Risk",
      "risk": "Target customers may be slower to adopt than anticipated or market size may be narrower",
      "probability": "Medium",
      "impact": "High",
      "severityScore": 15,
      "mitigation": "Focus on high-pain niche beachhead first before horizontal expansion."
    },
    {
      "category": "Product Risk",
      "risk": "Feature creep distracting from the core value proposition",
      "probability": "High",
      "impact": "Medium",
      "severityScore": 16,
      "mitigation": "Enforce strict MoSCoW prioritization and measure weekly active usage of the primary feature."
    },
    {
      "category": "Technology Risk",
      "risk": "AI hallucination, API latency, or third-party provider rate limits",
      "probability": "Medium",
      "impact": "Medium",
      "severityScore": 12,
      "mitigation": "Implement deterministic calculations for numbers, multi-provider fallbacks, and aggressive caching."
    },
    {
      "category": "Financial Risk",
      "risk": "CAC exceeding LTV during early customer acquisition experimentation",
      "probability": "Medium",
      "impact": "High",
      "severityScore": 15,
      "mitigation": "Rely heavily on organic founder-led content and PLG before scaling paid channels."
    },
    {
      "category": "Competition Risk",
      "risk": "Well-funded incumbent cloning key features as an add-on",
      "probability": "High",
      "impact": "High",
      "severityScore": 20,
      "mitigation": "Build proprietary workflow integrations and direct community loyalty that enterprise incumbents cannot easily duplicate."
    },
    {
      "category": "Regulatory Risk",
      "risk": "Data privacy regulations (GDPR/CCPA/SOC-2) regarding AI data handling",
      "probability": "Low",
      "impact": "High",
      "severityScore": 10,
      "mitigation": "Do not train on customer proprietary data; ensure zero data retention flags on foundational AI APIs."
    },
    {
      "category": "Execution Risk",
      "risk": "Key team burnout or slow development cadence in early months",
      "probability": "Medium",
      "impact": "Medium",
      "severityScore": 12,
      "mitigation": "Maintain clear weekly sprint goals and automate repetitive build/test pipelines."
    }
  ],
  "topThreatSummary": "The most urgent focus must be on defending against incumbent fast-followers by winning the beachhead user community."
}`;
