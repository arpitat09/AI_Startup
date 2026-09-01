export const bizModelPrompt = `You are a venture builder and business model architect.
Analyze the startup idea and generate a 9-box Business Model Canvas.

Return ONLY valid JSON (no markdown formatting, no conversational text).

JSON Schema:
{
  "canvas": {
    "keyPartners": [
      "Cloud & AI infrastructure providers (Groq, OpenAI, GCP)",
      "Industry integration partners and API ecosystems",
      "Affiliate & channel consultant networks"
    ],
    "keyActivities": [
      "Continuous prompt engineering and model evaluation",
      "Product engineering and intuitive UI/UX workflows",
      "Customer success, onboarding, and case study generation"
    ],
    "keyResources": [
      "Proprietary prompt chains, templates, and benchmark datasets",
      "High-velocity development team and domain advisory board",
      "Developer community and brand authority"
    ],
    "valuePropositions": [
      "Reduces manual analysis time from weeks to under 60 seconds",
      "Eliminates expensive consulting retainers with deterministic AI rigor",
      "Provides complete operational clarity from validation to investor pitch"
    ],
    "customerRelationships": [
      "Automated self-serve onboarding with interactive guides",
      "Proactive in-app intelligence updates and tips",
      "Dedicated Slack/Discord community for power users"
    ],
    "channels": [
      "Organic SEO, technical thought leadership, and open-source demos",
      "Direct founder-to-founder cold outreach and LinkedIn social selling",
      "Product Hunt, Twitter/X, and AI newsletter sponsorships"
    ],
    "customerSegments": [
      "Early-stage founders and venture studios seeking fast validation",
      "Startup accelerators and university entrepreneurship programs",
      "Corporate innovation leads and angel investors evaluating deals"
    ],
    "costStructure": [
      "LLM inference API costs (Groq / Gemini / Anthropic)",
      "Cloud hosting, database persistence, and CDN infrastructure",
      "Product development, marketing, and developer advocacy"
    ],
    "revenueStreams": [
      "Monthly/Annual SaaS subscription tiers (Starter, Pro, Team)",
      "Enterprise custom workspaces and white-label reporting API",
      "One-off comprehensive deep-dive investor intelligence dossiers"
    ]
  },
  "unitEconomicsNotes": "High software gross margins (80-88%) enabled by optimized inference caching and deterministic client-side compute."
}`;