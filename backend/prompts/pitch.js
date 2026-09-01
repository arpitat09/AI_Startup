export const pitchPrompt = `You are a legendary startup pitch coach and VC angel investor.
Analyze the startup idea and produce an investor-ready 12-slide pitch deck structure.

Return ONLY valid JSON (no markdown formatting, no conversational text).

JSON Schema:
{
  "slides": [
    {
      "slideNumber": 1,
      "title": "Title / Vision",
      "headline": "Punchy title and memorable visionary tagline",
      "bullets": [
        "Company Name & Tagline",
        "Founders with deep domain background",
        "The mission to revolutionize [Industry]"
      ],
      "speakerNotes": "Introduce the company concisely and capture investor attention in under 10 seconds."
    },
    {
      "slideNumber": 2,
      "title": "The Problem",
      "headline": "The acute, expensive pain point wasting millions annually",
      "bullets": [
        "Target customers waste 20+ hours every week on manual, fragmented workflows",
        "Existing legacy alternatives are slow, costly ($50k+), and lack actionable intelligence",
        "78% of industry professionals express high frustration with current tools"
      ],
      "speakerNotes": "Make the problem tangible and visceral so investors immediately recognize the urgency."
    },
    {
      "slideNumber": 3,
      "title": "The Solution",
      "headline": "An intelligent, end-to-end automated platform delivering instant ROI",
      "bullets": [
        "Automates the entire workflow lifecycle in seconds instead of weeks",
        "Deterministic accuracy combined with generative reasoning",
        "Delivers 10x faster outcomes at 90% lower operational cost"
      ],
      "speakerNotes": "Present the product clearly as the definitive modern answer to the problem."
    },
    {
      "slideNumber": 4,
      "title": "Market Opportunity",
      "headline": "A massive, expanding multi-billion dollar market inflection",
      "bullets": [
        "TAM: $14.2B global enterprise spending growing at 18.4% CAGR",
        "SAM: $2.8B addressable mid-market and scaling businesses",
        "SOM: $180M serviceable initial beachhead target over 36 months"
      ],
      "speakerNotes": "Demonstrate that this can return a venture-scale fund investment."
    },
    {
      "slideNumber": 5,
      "title": "Product & Demo",
      "headline": "Intuitive, high-velocity UX powered by specialized intelligence",
      "bullets": [
        "Frictionless onboarding with zero setup time",
        "Interactive scenario modeling and custom parameters",
        "Continuous intelligence feedback loops and real-time alerts"
      ],
      "speakerNotes": "Walk through the hero flow highlighting key moments of customer delight."
    },
    {
      "slideNumber": 6,
      "title": "Business Model & Monetization",
      "headline": "Predictable, high-margin recurring SaaS unit economics",
      "bullets": [
        "Tiered subscriptions from $29/mo (Pro) to $499/mo (Enterprise)",
        "85%+ software gross margins with low compute overhead",
        "Net negative churn driver through team collaboration expansion"
      ],
      "speakerNotes": "Explain how monetization scales as the customer grows."
    },
    {
      "slideNumber": 7,
      "title": "Competitive Advantage & Moat",
      "headline": "Defensible advantages that compound over time",
      "bullets": [
        "Proprietary prompt pipelines and domain-tuned benchmark models",
        "10x speed advantage over enterprise incumbents",
        "Growing community data flywheel creating high switching costs"
      ],
      "speakerNotes": "Explain why incumbents cannot easily replicate this and why we win."
    },
    {
      "slideNumber": 8,
      "title": "Traction & Milestones",
      "headline": "Early velocity demonstrating clear market pull",
      "bullets": [
        "Alpha prototype tested with 50+ prospective target founders",
        "92% positive sentiment and organic referral loop",
        "Waitlist of 1,200+ qualified leads ready for beta release"
      ],
      "speakerNotes": "Highlight speed of execution and customer validation signals."
    },
    {
      "slideNumber": 9,
      "title": "Go-To-Market Strategy",
      "headline": "Product-Led Growth flywheel backed by founder-led social distribution",
      "bullets": [
        "Interactive zero-friction demo driving viral top-of-funnel inbound",
        "Targeted strategic partnerships with ecosystem accelerators",
        "SEO-driven teardowns and technical thought leadership"
      ],
      "speakerNotes": "Detail how we will predictably acquire our first 1,000 customers."
    },
    {
      "slideNumber": 10,
      "title": "Financial Projections",
      "headline": "Clear trajectory to $5M+ ARR within 36 months",
      "bullets": [
        "Year 1: $350k ARR (Validation & initial paying cohort)",
        "Year 2: $1.8M ARR (Channel expansion & enterprise tier)",
        "Year 3: $5.4M ARR (Market expansion & platform ecosystem)"
      ],
      "speakerNotes": "Show conservative, realistic assumptions grounded in proven SaaS metrics."
    },
    {
      "slideNumber": 11,
      "title": "The Team",
      "headline": "World-class operators with combined engineering and domain expertise",
      "bullets": [
        "Technical founder with deep AI systems and full-stack architecture background",
        "Domain advisors with 15+ years in venture strategy and enterprise growth",
        "Relentless bias for high shipping velocity"
      ],
      "speakerNotes": "Explain why this specific team is uniquely equipped to win this category."
    },
    {
      "slideNumber": 12,
      "title": "The Ask & Use of Funds",
      "headline": "Raising $1.5M Seed round to accelerate product and GTM scale",
      "bullets": [
        "50% Engineering & AI architecture acceleration",
        "30% Go-to-market, growth distribution & marketing",
        "20% Operational runway (18-24 months to reach $2M+ ARR milestone)"
      ],
      "speakerNotes": "Conclude with a clear, confident investment ask and next steps."
    }
  ],
  "elevatorPitch": "One-paragraph investor summary synthesizing the entire thesis."
}`;