export const customerPrompt = `You are a product management and user research expert.
Analyze the startup idea and produce detailed customer personas, Jobs To Be Done (JTBD), and customer journey.

Return ONLY valid JSON (no markdown formatting, no conversational text).

JSON Schema:
{
  "personas": [
    {
      "name": "Persona 1 (e.g., Sarah the Head of Engineering / Operations)",
      "segment": "Mid-market & Scaling Startups",
      "demographics": "Age 30-45, Tech-forward, Decision Maker",
      "role": "VP of Engineering / Operations Manager",
      "painPoints": [
        "Wasting 15+ hours weekly on manual diagnostics and patchwork tools",
        "Lack of visibility into critical failure points before incidents occur",
        "Difficulty justifying software ROI to finance leadership"
      ],
      "goals": [
        "Automate repetitive operational oversight with 99.9% reliability",
        "Accelerate deployment velocity by 3x without increasing headcount"
      ],
      "buyingMotivation": "Immediate cost savings and reducing high-severity downtime events",
      "objections": [
        "Will integration require custom engineering resources?",
        "How is our confidential data protected?"
      ],
      "willingnessToPay": "$199 - $799 / month",
      "acquisitionChannels": ["LinkedIn targeted outreach", "Tech blogs / Reddit / Dev communities", "Webinars & Case studies"]
    },
    {
      "name": "Persona 2 (e.g., Alex the Early Founder / Solo Operator)",
      "segment": "Early Stage / SMB Operators",
      "demographics": "Age 24-38, Resource-constrained, High velocity",
      "role": "Founder / Solo Product Lead",
      "painPoints": [
        "Cannot afford specialized enterprise consulting or expensive tooling",
        "Needs fast turnarounds with intuitive self-serve onboarding"
      ],
      "goals": [
        "Achieve parity with enterprise workflows at a fraction of the cost"
      ],
      "buyingMotivation": "Speed and ease of use",
      "objections": ["Worried about lock-in and high monthly commitments"],
      "willingnessToPay": "$29 - $99 / month",
      "acquisitionChannels": ["Product Hunt", "X/Twitter build in public", "Organic search & SEO"]
    }
  ],
  "jobsToBeDone": [
    {
      "situation": "When my team encounters operational bottlenecks during rapid growth...",
      "motivation": "I want to deploy automated intelligence workflows...",
      "outcome": "So that we eliminate downtime and save 20+ engineering hours per week."
    },
    {
      "situation": "When executive stakeholders demand proof of efficiency gains...",
      "motivation": "I want structured real-time analytics and clear reports...",
      "outcome": "So that I can demonstrate measurable ROI and justify resource allocation."
    }
  ],
  "customerJourney": [
    { "stage": "Awareness", "touchpoint": "Search, Social, or Word of mouth", "userAction": "Discovers content highlighting the core problem", "friction": "Skepticism about AI hype" },
    { "stage": "Consideration", "touchpoint": "Landing page & Interactive Demo", "userAction": "Tests demo mode or reads case study", "friction": "Evaluating implementation effort" },
    { "stage": "Trial / Onboarding", "touchpoint": "Self-serve signup & Instant setup", "userAction": "Configures first project in under 5 minutes", "friction": "Setup complexity" },
    { "stage": "Purchase / Conversion", "touchpoint": "In-app upgrade prompt upon seeing ROI", "userAction": "Enters credit card for premium tier", "friction": "Approval from billing owner" },
    { "stage": "Retention & Advocacy", "touchpoint": "Automated weekly value summaries", "userAction": "Invites team members and shares positive review", "friction": "Feature adoption fatigue" }
  ]
}`;
