export const competitorsPrompt = `You are a competitive intelligence strategist.
Analyze the startup idea and provide a comprehensive competitor landscape and 2x2 positioning map.

Return ONLY valid JSON (no markdown formatting, no conversational text).

JSON Schema:
{
  "directCompetitors": [
    {
      "name": "Competitor 1 Name",
      "product": "Product summary",
      "targetCustomer": "Their primary audience",
      "pricing": "e.g. $49-$299/mo or Enterprise Custom",
      "strength": "Key core strength",
      "weakness": "Major blindspot or customer frustration",
      "marketPosition": "Market Leader" | "Niche Player" | "Legacy Incumbent" | "Fast Follower",
      "threatLevel": "High" | "Medium" | "Low",
      "threatReason": "Why they represent this level of threat"
    },
    {
      "name": "Competitor 2 Name",
      "product": "Product summary",
      "targetCustomer": "Their primary audience",
      "pricing": "e.g. Free / Ad-supported",
      "strength": "Key core strength",
      "weakness": "Major blindspot or customer frustration",
      "marketPosition": "Niche Player",
      "threatLevel": "Medium",
      "threatReason": "Why they represent this level of threat"
    },
    {
      "name": "Competitor 3 Name",
      "product": "Product summary",
      "targetCustomer": "Their primary audience",
      "pricing": "e.g. $10k+/year",
      "strength": "Key core strength",
      "weakness": "Major blindspot or customer frustration",
      "marketPosition": "Legacy Incumbent",
      "threatLevel": "Low",
      "threatReason": "Slow to innovate, expensive implementation"
    }
  ],
  "positioningMap": {
    "xAxis": "Ease of Implementation & Speed (Left: Complex/Slow, Right: Instant/Simple)",
    "yAxis": "Domain Specialization & Intelligence (Bottom: Generic/Shallow, Top: Deep/Specialized)",
    "coordinates": [
      { "name": "Our Startup", "x": 65, "y": 80, "isOurStartup": true },
      { "name": "Competitor 1", "x": -40, "y": 50, "isOurStartup": false },
      { "name": "Competitor 2", "x": 70, "y": -30, "isOurStartup": false },
      { "name": "Competitor 3", "x": -75, "y": -60, "isOurStartup": false }
    ]
  },
  "competitiveMatrix": [
    { "feature": "AI Deep Domain Automation", "ourStartup": "Proprietary", "competitor1": "Basic", "competitor2": "None", "competitor3": "Manual" },
    { "feature": "Time-to-Value Setup", "ourStartup": "< 10 minutes", "competitor1": "2-4 weeks", "competitor2": "Instant", "competitor3": "3 months" },
    { "feature": "Pricing Accessibility", "ourStartup": "Usage/Tiered", "competitor1": "Expensive Enterprise", "competitor2": "Freemium", "competitor3": "High Capex" }
  ],
  "differentiationStrategy": [
    { "pillar": "Specific Differentiation Pillar 1", "execution": "How to execute this moat in practice" },
    { "pillar": "Specific Differentiation Pillar 2", "execution": "How to execute this moat in practice" },
    { "pillar": "Specific Differentiation Pillar 3", "execution": "How to execute this moat in practice" }
  ]
}`;