export const mvpPrompt = `You are a Chief Product Officer and agile engineering lead.
Analyze the startup idea and create an actionable MVP feature plan using MoSCoW prioritization and a 30-day weekly milestone plan.

Return ONLY valid JSON (no markdown formatting, no conversational text).

JSON Schema:
{
  "moscow": {
    "mustHave": [
      { "feature": "Core Feature 1 Name", "description": "Crisp description", "userValue": "Why it's non-negotiable for day 1", "complexity": "Medium", "estimatedEffort": "5 days" },
      { "feature": "Core Feature 2 Name", "description": "Crisp description", "userValue": "Immediate problem solver", "complexity": "Low", "estimatedEffort": "3 days" },
      { "feature": "Core Feature 3 Name", "description": "Crisp description", "userValue": "Core data loop", "complexity": "Medium", "estimatedEffort": "4 days" }
    ],
    "shouldHave": [
      { "feature": "Should Feature 1", "description": "Description", "userValue": "Significantly improves user retention", "complexity": "Medium", "estimatedEffort": "4 days" },
      { "feature": "Should Feature 2", "description": "Description", "userValue": "Streamlines onboarding workflow", "complexity": "Low", "estimatedEffort": "2 days" }
    ],
    "niceToHave": [
      { "feature": "Nice Feature 1", "description": "Description", "userValue": "Polishes user delight", "complexity": "Low", "estimatedEffort": "2 days" }
    ],
    "later": [
      { "feature": "Future Feature 1", "description": "Advanced capability for scale phase", "userValue": "Enterprise expansion", "complexity": "High", "estimatedEffort": "3 weeks" }
    ]
  },
  "thirtyDayPlan": [
    {
      "week": "Week 1",
      "focus": "Core Architecture & Data Contracts",
      "deliverables": [
        "Finalize data models, schemas, and AI prompt pipelines",
        "Set up frontend project scaffolding with design system and mock state",
        "Implement authentication and secure API gateway endpoints"
      ],
      "milestone": "Working end-to-end prototype with dummy/mock responses."
    },
    {
      "week": "Week 2",
      "focus": "Core Engine & Prompt Chaining",
      "deliverables": [
        "Connect live LLM pipelines with structured JSON validation and error recovery",
        "Implement deterministic scoring and calculation modules",
        "Build the core input-to-result dashboard views"
      ],
      "milestone": "Live functional AI pipeline generating complete reports."
    },
    {
      "week": "Week 3",
      "focus": "Interactive Modeler & UX Polish",
      "deliverables": [
        "Add interactive sliders for financial modeling and dynamic recalculation",
        "Integrate AI chat mentor drawer with context awareness",
        "Implement PDF and JSON export functionality"
      ],
      "milestone": "Feature-complete MVP ready for alpha user testing."
    },
    {
      "week": "Week 4",
      "focus": "Validation, Bug Fixes & Public Launch",
      "deliverables": [
        "Run end-to-end tests, load tests, and mobile responsiveness checks",
        "Onboard first 10 beta testers and gather qualitative feedback",
        "Deploy to production on Vercel/Render and launch on Product Hunt"
      ],
      "milestone": "Production launch with initial active user cohort."
    }
  ]
}`;
