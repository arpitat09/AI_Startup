/**
 * High-Quality Realistic Demo Startup Dataset
 * Used for instant exploration, portfolio showcase, and offline demos
 */

export const DEMO_STARTUP_DATA = {
  id: "demo-manufacturing-ai",
  isDemo: true,
  timestamp: new Date().toISOString(),
  input: {
    idea: "AI-powered predictive and preventive maintenance platform with IoT sensor integration for mid-sized precision manufacturing plants.",
    industry: "Manufacturing",
    targetCustomer: "Plant Operations Managers & Maintenance Directors (50-500 employees)",
    geography: "North America & Europe",
    stage: "Pre-MVP",
    budget: "$25k - $50k",
    goal: "Validate market demand, secure 5 LOIs, and build MVP"
  },
  meta: {
    startupName: "PulseMach AI",
    tagline: "Zero-Downtime Intelligence for Modern Manufacturing Plants",
    industry: "Industrial AI / Manufacturing",
    stage: "Pre-MVP",
    geography: "North America & Europe"
  },
  score: {
    overallScore: 84,
    tier: "Strong Opportunity",
    tierColor: "primary",
    tierDescription: "Compelling value proposition and market timing with manageable execution hurdles.",
    factors: [
      {
        key: "marketPotential",
        name: "Market Potential",
        score: 88,
        weight: 0.20,
        weightedScore: 17.6,
        confidence: "High",
        explanation: "Industrial predictive maintenance is accelerating at 28.4% CAGR due to supply chain resilience demands."
      },
      {
        key: "problemStrength",
        name: "Problem Strength",
        score: 92,
        weight: 0.15,
        weightedScore: 13.8,
        confidence: "High",
        explanation: "Unplanned manufacturing downtime costs mid-sized facilities an average of $260,000 per hour."
      },
      {
        key: "competitionAdvantage",
        name: "Competitive Advantage",
        score: 78,
        weight: 0.15,
        weightedScore: 11.7,
        confidence: "Medium",
        explanation: "Incumbents (Siemens, PTC) require 6-month consulting setups; lightweight plug-and-play acoustic/vibration AI is an open beachhead."
      },
      {
        key: "businessModelViability",
        name: "Business Model Viability",
        score: 85,
        weight: 0.15,
        weightedScore: 12.75,
        confidence: "High",
        explanation: "Tiered subscription with hardware-as-a-service lease yields high net retention and strong LTV:CAC."
      },
      {
        key: "differentiationFactor",
        name: "Differentiation Factor",
        score: 80,
        weight: 0.15,
        weightedScore: 12.0,
        confidence: "Medium",
        explanation: "Proprietary acoustic anomaly models trained on generic machinery without requiring custom factory calibration."
      },
      {
        key: "executionFeasibility",
        name: "Execution Feasibility",
        score: 75,
        weight: 0.10,
        weightedScore: 7.5,
        confidence: "High",
        explanation: "Off-the-shelf wireless vibration/sound sensors combined with edge inference gateway reduce R&D risks."
      },
      {
        key: "riskResilience",
        name: "Risk Resilience",
        score: 86,
        weight: 0.10,
        weightedScore: 8.6,
        confidence: "High",
        explanation: "Clear ROI narrative (saving 1 downtime event pays for annual contract 5x over) defends against budget cuts."
      }
    ]
  },
  executive: {
    opportunityOverview: "Mid-market manufacturing plants lose over $50B annually to catastrophic unplanned machinery breakdowns. PulseMach AI democratizes predictive maintenance using non-invasive magnetic acoustic sensors and self-calibrating edge AI, bringing Tier-1 aerospace reliability to mid-market factory floors in under 30 minutes.",
    problemStatement: "Current industrial monitoring solutions are trapped between two extremes: complex multi-million dollar SCADA overhauls requiring months of specialized systems integration, or reactive clipboard maintenance that only catches failures after damage occurs.",
    solutionStatement: "A plug-and-play IoT acoustic sensor array coupled with an AI diagnostic dashboard that detects bearing wear, harmonic vibration shifts, and thermal stress 14-21 days before catastrophic failure.",
    targetCustomerSummary: "Plant Operations Directors, Reliability Engineers, and Maintenance Managers at CNC machining, automotive stamping, and plastic injection molding facilities with 10 to 80 active machines.",
    valueProposition: "Reduces unplanned downtime by 74%, cuts emergency repair overtime costs by 58%, and delivers measurable ROI within 45 days of installation.",
    whyNow: "Affordable high-frequency MEMS acoustic sensors combined with lightweight edge AI inference now make sub-$200 sensor nodes commercially viable for the first time.",
    biggestRisk: "Long pilot-to-contract conversion cycles in traditional manufacturing procurement.",
    aiVerdict: {
      recommendation: "YES",
      headline: "Strong Market Demand with Immediate Quantifiable ROI",
      rationale: "The value proposition has an unmistakable mathematical ROI: preventing a single CNC spindle failure ($35,000+ repair + 2 days lost output) pays for the entire annual software license instantly.",
      keyCondition: "Close 3 pilot deployments demonstrating zero false-positive alerts during initial 60-day runtime."
    }
  },
  market: {
    tam: {
      value: "$18.6 Billion",
      geography: "Global",
      year: "2025-2030",
      methodology: "Top-down global predictive maintenance market in manufacturing and industrial automation",
      confidence: "High",
      assumptions: "380,000 mid-sized precision manufacturing facilities worldwide with average ACV of $48,000",
      sourceEstimate: "MarketsandMarkets & Gartner Industrial IoT Research"
    },
    sam: {
      value: "$4.2 Billion",
      geography: "North America & Western Europe",
      year: "2026",
      methodology: "Filtered by CNC machining, plastics, food packaging, and metal stamping plants with 20-200 machines",
      confidence: "High",
      assumptions: "85,000 qualified target manufacturing facilities in modern industrial hubs",
      sourceEstimate: "US Census Bureau of Economic Analysis & Eurostat Manufacturing Census"
    },
    som: {
      value: "$165 Million",
      geography: "US Midwest & German Industrial Corridor",
      year: "Years 1-3",
      methodology: "Bottom-up sales model targeting 2,500 facilities through direct outbound and regional distributor partnerships",
      confidence: "High",
      assumptions: "Assumes 3% market penetration with $5,500/mo average plant subscription",
      sourceEstimate: "PulseMach Bottom-up Go-To-Market Financial Model"
    },
    cagr: "28.4% (2024-2030)",
    growthDrivers: [
      { driver: "Skilled Maintenance Labor Shortage", impact: "Critical", description: "Retiring master machinists leaving industrial plants without experienced diagnostic intuition." },
      { driver: "Supply Chain Just-In-Time Pressure", impact: "High", description: "Automotive and aerospace supply contracts enforce severe penalty clauses for delivery delays." },
      { driver: "Declining MEMS Hardware Sensor Costs", impact: "High", description: "Industrial sensor costs dropped 60% in 5 years, enabling dense non-invasive coverage." }
    ],
    marketTrends: [
      { trend: "Shift from Time-Based to Condition-Based Maintenance", implication: "Factories discarding rigid calendar maintenance schedules in favor of real-time sensor telemetry.", timeframe: "Active Now" },
      { trend: "Edge AI Diagnostics without Cloud Bandwidth Bottlenecks", implication: "Air-gapped factory networks require on-premise local inference gateways for cyber compliance.", timeframe: "Next 12-18 months" }
    ],
    sources: [
      {
        title: "Predictive Maintenance Global Market Sizing & Outlook 2024-2030",
        publisher: "MarketsandMarkets Industrial IoT Practice",
        year: "2024",
        insight: "Manufacturing plants deploying acoustic IoT monitoring reported 68% reduction in catastrophic downtime within 90 days."
      },
      {
        title: "The Industrial AI Revolution: Modernizing Mid-Market Manufacturing",
        publisher: "McKinsey & Company Digital Manufacturing Report",
        year: "2024",
        insight: "Small and mid-sized enterprises represent 72% of uncaptured industrial IoT software spend due to legacy integration friction."
      }
    ]
  },
  competitors: {
    directCompetitors: [
      {
        name: "Augury",
        product: "Enterprise Machine Health platform with proprietary sensors and managed diagnostic service",
        targetCustomer: "Global Fortune 500 manufacturing corporations",
        pricing: "$50,000 - $250,000+ / year (Multi-year enterprise contract)",
        strength: "Established enterprise brand, massive library of vibration machine signatures",
        weakness: "Prohibitively expensive for mid-sized plants; requires lengthy implementation cycles",
        marketPosition: "Market Leader",
        threatLevel: "Medium",
        threatReason: "Dominates large enterprise tier but ignores factories with under $50M revenue."
      },
      {
        name: "Nanoprecise Sci Corp",
        product: "Wireless 6-in-1 rotation vibration and temperature sensor with cellular gateway",
        targetCustomer: "Mining, oil & gas, and heavy manufacturing plants",
        pricing: "$120/sensor/month + hardware fee",
        strength: "Battery-powered wireless installation, multi-sensor hardware",
        weakness: "Complex interface, high false-alert rate requiring certified vibration analysts to interpret",
        marketPosition: "Niche Player",
        threatLevel: "Medium",
        threatReason: "Hardware is strong, but software lacks automated natural-language actionable guidance."
      },
      {
        name: "Legacy SCADA / Siemens MindSphere",
        product: "Heavy industrial automation telemetry suites hardwired into PLCs",
        targetCustomer: "Original Equipment Manufacturers (OEMs)",
        pricing: "Capex $100k+ with custom systems integration retainers",
        strength: "Deep PLC hardware integration and industrial protocol support",
        weakness: "Extremely difficult to retrofit on mixed-age legacy machinery fleets",
        marketPosition: "Legacy Incumbent",
        threatLevel: "Low",
        threatReason: "Slow development cycle and vendor lock-in create buyer resistance."
      }
    ],
    positioningMap: {
      xAxis: "Deployment Speed & Setup Simplicity (Left: Months of IT Overhaul, Right: Under 30 Mins Self-Serve)",
      yAxis: "Automated Diagnostic Intelligence (Bottom: Raw Waveform Graphs, Top: Plain-English Actionable Prescriptions)",
      coordinates: [
        { name: "PulseMach AI (Our Solution)", x: 75, y: 82, isOurStartup: true },
        { name: "Augury", x: -35, y: 70, isOurStartup: false },
        { name: "Nanoprecise", x: 20, y: -20, isOurStartup: false },
        { name: "Legacy SCADA / Siemens", x: -80, y: -65, isOurStartup: false }
      ]
    },
    competitiveMatrix: [
      { feature: "Time-to-Value Setup", ourStartup: "30-minute magnetic snap-on", competitor1: "3-6 months enterprise rollout", competitor2: "2 weeks configuration", competitor3: "6-12 months hardwired" },
      { feature: "Diagnostic Output", ourStartup: "Plain-English repair action steps", competitor1: "Expert analyst consultation", competitor2: "Raw FFT vibration charts", competitor3: "Alarm threshold triggers" },
      { feature: "Minimum Annual Commitment", ourStartup: "$12,000/year (10 machines)", competitor1: "$60,000/year minimum", competitor2: "$25,000/year", competitor3: "$100,000+ capex" },
      { feature: "Legacy Machine Retrofit", ourStartup: "100% non-invasive magnetic mount", competitor1: "Sensor hardware required", competitor2: "Stud-mount required", competitor3: "PLC wiring required" }
    ],
    differentiationStrategy: [
      { pillar: "Zero-Invasive Instant Magnetic Deployment", execution: "Sensors attach magnetically to machine casings in 60 seconds with zero machine shutdown or PLC rewiring." },
      { pillar: "Explainable Root-Cause Diagnostic Reports", execution: "Instead of complex frequency graphs, the AI tells maintenance staff: 'Replace Bearing #3 on Drive Spindle within 10 days; 85% lubrication breakdown detected.'" },
      { pillar: "Mid-Market Transparent Pricing", execution: "Predictable per-machine subscription tiers without hidden consulting surcharges." }
    ]
  },
  customer: {
    personas: [
      {
        name: "Marcus Vance — Director of Plant Operations",
        segment: "Mid-market Precision CNC & Automotive Stamping",
        demographics: "Age 46, 20+ years in manufacturing, manages 45 factory technicians",
        role: "Plant Operations Director",
        painPoints: [
          "Lost $180,000 last quarter when a main milling spindle seized during night shift",
          "Maintenance team spends all day putting out fires instead of preventive work",
          "Constantly under pressure from OEM clients regarding missed production deadlines"
        ],
        goals: [
          "Eliminate unexpected line stoppages and hit 98%+ on-time order fulfillment",
          "Empower younger junior technicians with automated diagnostic guidance"
        ],
        buyingMotivation: "Risk mitigation and peace of mind during unattended shifts",
        objections: [
          "Will this interfere with our plant wireless networks?",
          "Can our existing technicians use it without data science training?"
        ],
        willingnessToPay: "$1,500 - $4,500 / month per facility",
        acquisitionChannels: ["Modern Machine Shop magazine / trade shows", "Targeted LinkedIn outreach", "Machinery distributor partnerships"]
      },
      {
        name: "Elena Rostova — Chief Maintenance Engineer",
        segment: "Industrial Plastics & Packaging Plants",
        demographics: "Age 38, Mechanical Engineering background, hands-on troubleshooter",
        role: "Lead Reliability & Maintenance Specialist",
        painPoints: [
          "Tired of manual stethoscope checks and route-based handheld vibration testing",
          "Can't predict hydraulic pump degradation until overheating triggers emergency shutoff"
        ],
        goals: [
          "Receive clear mobile alerts with exact component failure timeframes",
          "Build a digital maintenance history log for each machine asset"
        ],
        buyingMotivation: "Ending stressful weekend emergency service calls",
        objections: ["Hates false alarms that waste technician hours"],
        willingnessToPay: "$50 - $120 / machine / month",
        acquisitionChannels: ["Industrial Engineering subreddits & forums", "Peer recommendations", "Case study webinars"]
      }
    ],
    jobsToBeDone: [
      {
        situation: "When critical CNC machinery runs unattended on high-volume production batches...",
        motivation: "I want continuous acoustic telemetry monitoring for micro-friction and bearing fatigue...",
        outcome: "So that we schedule component swaps during planned tooling changeovers without disrupting delivery commitments."
      },
      {
        situation: "When preparing the annual capital expenditure and equipment reliability budget...",
        motivation: "I want empirical health scorecards on each machine asset...",
        outcome: "So that I make data-backed refurbishment decisions and avoid premature equipment replacement."
      }
    ],
    customerJourney: [
      { stage: "1. Awareness", touchpoint: "LinkedIn case study showing $75k downtime savings", userAction: "Reads teardown on common spindle failure signatures", friction: "Skeptical of AI claims in physical manufacturing" },
      { stage: "2. Consideration", touchpoint: "PulseMach Interactive ROI Calculator & Demo", userAction: "Inputs plant machine count and receives custom ROI projection", friction: "Needs approval from plant VP" },
      { stage: "3. Trial / Pilot", touchpoint: "4-Machine Pilot Kit delivered in 48 hours", userAction: "Snaps sensors onto 4 highest-risk machines in 20 minutes", friction: "Verifying Bluetooth/cellular gateway connectivity" },
      { stage: "4. Conversion", touchpoint: "AI correctly detects bearing wear on Machine #2 on Day 18", userAction: "Plant VP signs annual contract for entire 40-machine fleet", friction: "Annual PO procurement process" },
      { stage: "5. Expansion", touchpoint: "Quarterly Executive Value Review", userAction: "Recommends PulseMach to two sister manufacturing facilities", friction: "None" }
    ]
  },
  swot: {
    strengths: [
      { item: "Non-invasive magnetic mounting allows 30-minute zero-downtime deployment", impact: "High", confidence: "High", explanation: "Removes the biggest objection from plant managers who refuse to halt production for installation." },
      { item: "Proprietary acoustic frequency AI trained on 500k+ industrial machine hours", impact: "High", confidence: "High", explanation: "Detects structural anomalies before traditional thermal sensors register temperature spikes." },
      { item: "Instant plain-English technician instructions instead of raw Fourier transform graphs", impact: "High", confidence: "High", explanation: "Enables general mechanics to act immediately without hiring scarce certified vibration analysts." }
    ],
    weaknesses: [
      { item: "Hardware supply chain dependency for custom sensor housings and MEMS microphones", impact: "Medium", confidence: "High", explanation: "Requires reliable hardware manufacturing partners and inventory buffer management." },
      { item: "Initial lack of enterprise multi-site dashboard features in Version 1.0", impact: "Medium", confidence: "Medium", explanation: "Limits day-1 appeal to massive multi-national conglomerates with 50+ locations." }
    ],
    opportunities: [
      { item: "Partnership distribution through industrial machinery distributors and lubricant suppliers", impact: "High", confidence: "High", explanation: "Distributors have trusted relationships with 10,000+ machine shops and seek software recurring margins." },
      { item: "Insurance premium reduction discounts for factories running verified continuous monitoring", impact: "High", confidence: "Medium", explanation: "Property and equipment breakdown underwriters offer up to 15% discount for IoT-monitored facilities." }
    ],
    threats: [
      { item: "Major machine builders (Haas, DMG Mori) embedding native IoT telemetry into new models", impact: "Medium", confidence: "High", explanation: "However, 82% of factory machines currently on shop floors are older legacy models that need retrofitting." },
      { item: "Industrial manufacturing recession causing capex freezing", impact: "Medium", confidence: "Medium", explanation: "Mitigated by positioning PulseMach as an operational cost reducer rather than discretionary spending." }
    ],
    strategicTakeaway: "Dominate the underserved mid-market CNC and machining retrofits by leveraging fast magnetic deployment and distributor channel partnerships while enterprise incumbents remain focused on Fortune 500 custom consulting."
  },
  bizModel: {
    canvas: {
      keyPartners: [
        "Regional CNC & industrial machinery maintenance distributors",
        "Industrial MEMS sensor manufacturers (STMicroelectronics, TDK)",
        "Factory wireless cellular gateway and IoT SIM providers (Twilio IoT / Particle)"
      ],
      keyActivities: [
        "Acoustic AI model training and anomaly signature refinement",
        "Sensor hardware assembly, QA testing, and rapid fulfillment",
        "Customer success monitoring and predictive alert validation"
      ],
      keyResources: [
        "Proprietary acoustic vibration dataset and failure classification library",
        "Edge diagnostic firmware and secure cloud inference pipeline",
        "Industrial engineering domain experts and sales engineering team"
      ],
      valuePropositions: [
        "Zero unplanned downtime on critical manufacturing equipment",
        "30-minute self-install retrofit on any age machine",
        "Clear plain-English repair guidance preventing costly trial-and-error replacements"
      ],
      customerRelationships: [
        "Dedicated onboarding reliability engineer for first 30 days",
        "Automated monthly plant uptime reports sent directly to executive leadership",
        "24/7 critical failure escalation via SMS and automated call dispatch"
      ],
      channels: [
        "Direct outbound sales targeting plant managers in industrial manufacturing corridors",
        "Value-Added Reseller (VAR) partnerships with machine tool distributors",
        "Digital content teardowns on CNC machine failure prevention"
      ],
      customerSegments: [
        "Mid-market precision machine shops (20-100 CNC mills/lathes)",
        "Automotive Tier-2 and Tier-3 component suppliers",
        "Food packaging and high-speed bottling facilities"
      ],
      costStructure: [
        "Sensor node hardware manufacturing & component BOM ($45/unit)",
        "Cloud ingestion, time-series storage, and inference compute ($4/machine/mo)",
        "Sales commissions, field engineering, and trade show presence"
      ],
      revenueStreams: [
        "Annual SaaS subscription per monitored machine ($79 - $149/machine/month)",
        "Starter 4-Machine Pilot Kit ($1,200 one-time hardware & evaluation fee)",
        "Enterprise multi-plant centralized telemetry analytics tier ($2,500/plant/month)"
      ]
    },
    unitEconomicsNotes: "Gross margin of 84% on SaaS software subscriptions and 45% margin on hardware sensor starter kits."
  },
  pricing: {
    pricingTiers: [
      {
        name: "Evaluation Pilot Kit",
        price: "$1,499",
        billingPeriod: "One-time 60-day trial",
        isPopular: false,
        targetSegment: "Plants testing accuracy before fleet rollout",
        features: [
          "4 magnetic acoustic/vibration IoT sensors",
          "1 plug-and-play 4G cellular gateway",
          "Full cloud dashboard & SMS failure alerts",
          "Dedicated engineer onboarding call"
        ],
        rationale: "Zero-risk evaluation to prove ROI within 60 days."
      },
      {
        name: "Shop Floor Pro",
        price: "$89",
        billingPeriod: "per machine / month (billed annually)",
        isPopular: true,
        targetSegment: "Standard machine shops with 10 to 40 machines",
        features: [
          "Continuous 24/7 anomaly acoustic monitoring",
          "14-day early component failure alerts",
          "Plain-English step-by-step repair guides",
          "Unlimited technician team seats",
          "Automated monthly reliability reports"
        ],
        rationale: "High-volume core pricing delivering 10x ROI on first prevented breakdown."
      },
      {
        name: "Multi-Plant Enterprise",
        price: "$69",
        billingPeriod: "per machine / month (50+ machines)",
        isPopular: false,
        targetSegment: "Multi-facility manufacturing operators & OEMs",
        features: [
          "Everything in Shop Floor Pro",
          "Centralized multi-plant portfolio dashboard",
          "ERP & CMMS integration (SAP, UpKeep, Fiix)",
          "Dedicated 99.9% uptime SLA guarantee",
          "Custom API access & predictive model tuning"
        ],
        rationale: "Volume discount incentive driving multi-year, multi-plant lock-in."
      }
    ],
    monetizationStrategy: "Pilot-to-Fleet expansion model: 78% of 4-sensor pilots convert to full plant subscriptions (averaging 25 machines = $26,700 ARR per facility)."
  },
  financialModel: {
    inputs: {
      targetCustomers: 120,
      monthlyPrice: 1850,
      grossMarginPct: 84,
      monthlyGrowthRatePct: 14,
      cac: 4200,
      monthlyChurnPct: 1.8,
      monthlyBurn: 32000,
      initialCapital: 250000
    },
    metrics: {
      mrr: 222000,
      arr: 2664000,
      ltv: 86333,
      cac: 4200,
      ltvCacRatio: 20.56,
      cacPaybackMonths: 2.7,
      customerLifespanMonths: 55.6,
      monthlyGrossProfit: 186480,
      breakEvenCustomers: 21,
      netMonthlyBurn: 0,
      runwayMonths: "Profitable",
      unitEconomicsHealth: "Excellent (Top Quartile)"
    },
    monthlyProjections: [
      { month: "M1", monthName: "Month 1", customers: 120, mrr: 222000, arr: 2664000, grossProfit: 186480, cumulativeRevenue: 222000 },
      { month: "M2", monthName: "Month 2", customers: 135, mrr: 249750, arr: 2997000, grossProfit: 209790, cumulativeRevenue: 471750 },
      { month: "M3", monthName: "Month 3", customers: 151, mrr: 279350, arr: 3352200, grossProfit: 234654, cumulativeRevenue: 751100 },
      { month: "M4", monthName: "Month 4", customers: 169, mrr: 312650, arr: 3751800, grossProfit: 262626, cumulativeRevenue: 1063750 },
      { month: "M5", monthName: "Month 5", customers: 190, mrr: 351500, arr: 4218000, grossProfit: 295260, cumulativeRevenue: 1415250 },
      { month: "M6", monthName: "Month 6", customers: 213, mrr: 394050, arr: 4728600, grossProfit: 331002, cumulativeRevenue: 1809300 },
      { month: "M7", monthName: "Month 7", customers: 239, mrr: 442150, arr: 5305800, grossProfit: 371406, cumulativeRevenue: 2251450 },
      { month: "M8", monthName: "Month 8", customers: 268, mrr: 495800, arr: 5949600, grossProfit: 416472, cumulativeRevenue: 2747250 },
      { month: "M9", monthName: "Month 9", customers: 301, mrr: 556850, arr: 6682200, grossProfit: 467754, cumulativeRevenue: 3304100 },
      { month: "M10", monthName: "Month 10", customers: 338, mrr: 625300, arr: 7503600, grossProfit: 525252, cumulativeRevenue: 3929400 },
      { month: "M11", monthName: "Month 11", customers: 379, mrr: 701150, arr: 8413800, grossProfit: 588966, cumulativeRevenue: 4630550 },
      { month: "M12", monthName: "Month 12", customers: 425, mrr: 786250, arr: 9435000, grossProfit: 660450, cumulativeRevenue: 5416800 }
    ]
  },
  mvp: {
    moscow: {
      mustHave: [
        { feature: "Magnetic Acoustic Sensor Gateway", description: "Wireless node transmitting high-frequency audio snippets every 60 seconds", userValue: "Zero machine wiring needed", complexity: "Medium", estimatedEffort: "3 weeks" },
        { feature: "Anomaly Classification Engine", description: "Edge neural network detecting bearing spalling, cavitation, and imbalance", userValue: "Instant warning before catastrophic seizure", complexity: "High", estimatedEffort: "4 weeks" },
        { feature: "Real-time Machine Health Dashboard", description: "Live shop-floor view showing green/yellow/red health status per asset", userValue: "At-a-glance visibility for plant managers", complexity: "Low", estimatedEffort: "2 weeks" }
      ],
      shouldHave: [
        { feature: "SMS & Mobile Push Alerts", description: "Emergency alert dispatch when anomaly severity exceeds 80%", userValue: "Catches night-shift breakdowns instantly", complexity: "Low", estimatedEffort: "4 days" },
        { feature: "Step-by-Step Maintenance Prescriptions", description: "AI-generated checklist recommending specific lubrication or belt tension fix", userValue: "Saves technician diagnosis time", complexity: "Medium", estimatedEffort: "1 week" }
      ],
      niceToHave: [
        { feature: "Automated Parts Reordering Webhook", description: "Trigger spare replacement part order in ERP when wear reaches 85%", userValue: "Automates supply chain restocking", complexity: "Medium", estimatedEffort: "1.5 weeks" }
      ],
      later: [
        { feature: "Thermal Imaging & Ultrasonic Fusion", description: "Multi-modal vision and acoustic sensor hardware module", userValue: "Comprehensive aerospace-grade certification", complexity: "High", estimatedEffort: "3 months" }
      ]
    },
    thirtyDayPlan: [
      {
        week: "Week 1",
        focus: "Hardware Rig & Acoustic Data Pipeline",
        deliverables: [
          "Assemble 10 prototype ESP32 + MEMS microphone sensor nodes with magnetic base",
          "Set up MQTT telemetry broker and streaming time-series database (TimescaleDB)",
          "Record baseline acoustic profiles on benchtop CNC spindle test rig"
        ],
        milestone: "Live sensor transmitting streaming acoustic telemetry to backend."
      },
      {
        week: "Week 2",
        focus: "AI Anomaly Detection Model & Diagnostics",
        deliverables: [
          "Train unsupervised autoencoder model for acoustic anomaly scoring",
          "Implement deterministic FFT spectral peak detection algorithms",
          "Build alert threshold trigger engine with false-positive filtering"
        ],
        milestone: "Algorithm accurately identifies bearing defects in test rig with >94% precision."
      },
      {
        week: "Week 3",
        focus: "Shop Floor Web Dashboard & Mobile Alerts",
        deliverables: [
          "Develop responsive React/Tailwind plant floor dashboard with live asset cards",
          "Integrate Twilio SMS notification dispatch for critical alert states",
          "Build interactive ROI calculator and machine health history view"
        ],
        milestone: "Working frontend dashboard connected to live telemetry stream."
      },
      {
        week: "Week 4",
        focus: "First Industrial Alpha Deployment",
        deliverables: [
          "Install 4 pilot sensor nodes at partner CNC machine shop in Ohio",
          "Monitor continuous 168-hour live manufacturing run without sensor dropouts",
          "Present first weekly uptime report to machine shop owner"
        ],
        milestone: "Successful live pilot deployment in operational manufacturing environment."
      }
    ]
  },
  techStack: {
    recommendations: [
      { category: "Frontend & Shop Dashboard", technology: "React 19 + Vite + Tailwind CSS + Lucide Icons", why: "Lightning-fast responsiveness, dark mode for dim factory floor lighting, lightweight bundle size", cost: "Free", complexity: "Low", alternative: "Next.js" },
      { category: "Backend Telemetry Gateway", technology: "Node.js (Express) + Mosquitto MQTT Broker", why: "High-throughput asynchronous event handling for thousands of sensor packets per second", cost: "Free", complexity: "Low", alternative: "Go / EMQX" },
      { category: "Database & Time Series", technology: "PostgreSQL with TimescaleDB extension", why: "Combines relational asset metadata with sub-millisecond query speed on millions of sensor data points", cost: "$25/mo on Supabase/Neon", complexity: "Medium", alternative: "InfluxDB" },
      { category: "AI & Signal Processing", technology: "PyTorch (Autoencoder Anomaly Detection) + Librosa FFT", why: "State-of-the-art spectral audio analysis and compact ONNX export for edge gateway deployment", cost: "Free", complexity: "Medium", alternative: "Edge Impulse" },
      { category: "IoT Sensor Hardware", technology: "ESP32-S3 microcontroller + I2S MEMS High-Freq Mic + Neodymium Base", why: "Low-cost ($22 total BOM), built-in Wi-Fi/Bluetooth, industrial temperature tolerance (-40°C to +85°C)", cost: "$22/sensor BOM", complexity: "Medium", alternative: "Raspberry Pi Zero" },
      { category: "Alerting & Communication", technology: "Twilio SMS & SendGrid Webhooks", why: "Guaranteed deliverability for mission-critical machine failure alarms", cost: "Usage-based (<$10/mo)", complexity: "Low", alternative: "AWS SNS" },
      { category: "Cloud Hosting & Edge Sync", technology: "Render / Railway + AWS IoT Core", why: "Zero-DevOps infrastructure with automatic SSL, instant rollback, and global edge connectivity", cost: "$15 - $40/mo", complexity: "Low", alternative: "Fly.io" }
    ],
    architectureSummary: "Decoupled edge-to-cloud IoT architecture: Edge sensor arrays stream compressed acoustic signatures to on-premise gateways, which sync health metrics to the cloud dashboard."
  },
  gtm: {
    icp: {
      title: "Mid-Sized Precision CNC & Automotive Stamping Machine Shops",
      description: "Facilities operating 15-80 CNC machines with $5M-$35M in annual revenue who cannot afford multi-million dollar enterprise SCADA suites.",
      triggers: ["Experienced an expensive catastrophic breakdown in the last 6 months", "Winning new high-volume aerospace or automotive supply contracts requiring 99% on-time delivery"]
    },
    firstTenCustomers: [
      { step: 1, action: "Local Industrial Park Walk-ins & Warm Intros", tactic: "Visit 20 machine shops in regional industrial parks; offer free 30-day monitoring on their most problematic machine.", timeline: "Days 1-15" },
      { step: 2, action: "LinkedIn Cold Teardowns with ROI Case", tactic: "Message 100 Plant Operations Managers with a personalized video showing how much downtime costs their exact machine model.", timeline: "Days 16-30" },
      { step: 3, action: "Machinery Repair Technician Referral Program", tactic: "Partner with independent mobile CNC repair mechanics, offering $300 referral fee for every plant that signs up.", timeline: "Days 31-45" }
    ],
    firstHundredCustomers: [
      { channel: "Tooling & Coolant Distributor Channel Partners", strategy: "Co-market with cutting tool and industrial lubricant distributors who already visit factories weekly.", expectedShare: "45%" },
      { channel: "Targeted Inbound SEO & 'Machine Health' Teardowns", strategy: "Rank for long-tail technical queries like 'Haas VF-2 spindle vibration limits' and 'Fanuc servo bearing noise'.", expectedShare: "30%" },
      { channel: "Industry Trade Shows & Live Hardware Demos", strategy: "Exhibit an interactive vibrating test rig at IMTS (International Manufacturing Technology Show).", expectedShare: "15%" },
      { channel: "Customer Referral Discounts", strategy: "Offer 1 free month per additional machine shop referred.", expectedShare: "10%" }
    ],
    marketingChannels: [
      { channel: "Machinery Distributor Partnerships", effectiveness: "Very High", cost: "Rev-share (15%)", description: "Leverages existing trusted vendor relationships with zero cold friction" },
      { channel: "Technical Video Breakdowns (YouTube / LinkedIn)", effectiveness: "High", cost: "Low", description: "Real audio recordings of healthy vs failing machine bearings" },
      { channel: "Trade Magazine Sponsored Articles (Modern Machine Shop)", effectiveness: "Medium", cost: "Medium ($1,500/article)", description: "Builds authoritative credibility among conservative buyers" }
    ]
  },
  risks: {
    riskMatrix: [
      { category: "Market Risk", risk: "Conservative plant managers reluctant to adopt cloud-connected software", probability: "Medium", impact: "High", severityScore: 16, mitigation: "Provide on-premise local Wi-Fi gateway option with zero cloud dependency required." },
      { category: "Product Risk", risk: "False-positive alerts leading to unnecessary technician inspections and alert fatigue", probability: "High", impact: "High", severityScore: 20, mitigation: "Multi-sample verification filter requiring 3 consecutive anomaly bursts before firing critical alarms." },
      { category: "Technology Risk", risk: "High ambient factory noise interfering with acoustic failure detection", probability: "Medium", impact: "Medium", severityScore: 12, mitigation: "Use directional contact MEMS microphones that capture surface vibrations rather than airborne sound." },
      { category: "Financial Risk", risk: "Hardware manufacturing lead times tying up working capital", probability: "Medium", impact: "High", severityScore: 15, mitigation: "Require upfront hardware deposit on starter pilot kits to maintain positive cash flow." },
      { category: "Competition Risk", risk: "Enterprise player (Augury) releasing a stripped-down budget offering", probability: "Low", impact: "High", severityScore: 10, mitigation: "Maintain superior plug-and-play self-serve ease and faster local support turnaround." },
      { category: "Regulatory Risk", risk: "Factory cybersecurity regulations banning wireless IoT devices on corporate LANs", probability: "Medium", impact: "Medium", severityScore: 12, mitigation: "Include dedicated 4G/LTE cellular gateways that operate on an isolated private cellular network." },
      { category: "Execution Risk", risk: "Slow pilot conversion due to multi-layered corporate purchasing approvals", probability: "Medium", impact: "High", severityScore: 15, mitigation: "Keep pilot pricing under $2,000 threshold to allow plant managers to purchase on corporate credit cards without PO approval." }
    ],
    topThreatSummary: "The most critical priority is preventing false-positive alert fatigue during early pilots to earn permanent trust from plant floor mechanics."
  },
  roadmap: {
    day30: {
      phase: "Phase 1: Validation & Alpha Prototype (Days 1-30)",
      goal: "Build working magnetic sensor hardware, deploy to 2 friendly machine shops, validate acoustic anomaly detection",
      tasks: [
        { id: "t1", task: "Assemble 10 magnetic MEMS acoustic sensor nodes", priority: "High", effort: "2 weeks", dependency: "BOM Sourcing", successMetric: "10 nodes fully functional", completed: true },
        { id: "t2", task: "Deploy 4-sensor alpha test on active Haas VF-3 CNC mill in Ohio", priority: "High", effort: "1 week", dependency: "Hardware", successMetric: "Continuous telemetry streaming for 7 days", completed: true },
        { id: "t3", task: "Conduct 15 customer discovery interviews with plant directors", priority: "High", effort: "2 weeks", dependency: "None", successMetric: "12/15 confirm downtime as top-3 priority", completed: true }
      ]
    },
    day60: {
      phase: "Phase 2: Beta Launch & First Paying Customers (Days 31-60)",
      goal: "Secure first 5 paying plant contracts, launch web dashboard, establish distributor agreement",
      tasks: [
        { id: "t4", task: "Convert 2 alpha pilots into full annual paying subscriptions", priority: "High", effort: "2 weeks", dependency: "Alpha Test", successMetric: "First $25k in booked ARR", completed: false },
        { id: "t5", task: "Sign first regional CNC maintenance distributor partnership", priority: "High", effort: "3 weeks", dependency: "Customer Case Study", successMetric: "Distributor agrees to stock 20 demo kits", completed: false },
        { id: "t6", task: "Ship automated PDF monthly uptime reports to plant managers", priority: "Medium", effort: "1 week", dependency: "Dashboard", successMetric: "Weekly report open rate > 70%", completed: false }
      ]
    },
    day90: {
      phase: "Phase 3: Growth Scale & Seed Round Preparation (Days 61-90)",
      goal: "Reach 25 monitored facilities ($300k+ ARR run rate), prepare Seed round pitch deck",
      tasks: [
        { id: "t7", task: "Scale to 25 active manufacturing facilities via distributor channel", priority: "High", effort: "4 weeks", dependency: "Distributor agreement", successMetric: "$300k+ ARR run-rate achieved", completed: false },
        { id: "t8", task: "Integrate ERP export for automatic spare parts purchase orders", priority: "Medium", effort: "2 weeks", dependency: "Customer requests", successMetric: "Integration with UpKeep & Fiix CMMS live", completed: false },
        { id: "t9", task: "Finalize Seed round investor pitch deck with verified traction", priority: "High", effort: "1 week", dependency: "ARR metrics", successMetric: "Deck shared with 30 industrial tech VCs", completed: false }
      ]
    }
  },
  pitch: {
    slides: [
      {
        slideNumber: 1,
        title: "Title / Vision",
        headline: "PulseMach AI: Eliminating Unplanned Manufacturing Downtime",
        bullets: [
          "Plug-and-play IoT acoustic sensors for mid-market factories",
          "Detects mechanical failure 14-21 days before catastrophic breakdown",
          "Founded by industrial robotics engineers and AI systems architects"
        ],
        speakerNotes: "Good morning. We are PulseMach AI, and we are building the zero-downtime nervous system for the world's 380,000 mid-sized manufacturing plants."
      },
      {
        slideNumber: 2,
        title: "The Problem",
        headline: "Unplanned Factory Downtime Costs $50 Billion Annually",
        bullets: [
          "When a single CNC spindle or injection mold hydraulic pump seizes, the plant loses $4,000+ every hour in lost production",
          "Incumbent enterprise solutions cost $100k+ and take 6 months to integrate",
          "78% of factories still rely on reactive clipboard maintenance"
        ],
        speakerNotes: "Mid-market plant managers live in constant fear of night-shift machine seizures that blow up production schedules."
      },
      {
        slideNumber: 3,
        title: "The Solution",
        headline: "30-Minute Magnetic Retrofit with Plain-English Diagnostics",
        bullets: [
          "Zero-invasive magnetic sensors snap onto machine casings in 60 seconds",
          "Listens to micro-acoustic friction frequencies invisible to thermal sensors",
          "AI tells technicians exactly which part to replace and within how many days"
        ],
        speakerNotes: "PulseMach makes any legacy factory machine smart in 30 minutes without wiring or shutting down the line."
      },
      {
        slideNumber: 4,
        title: "Market Opportunity",
        headline: "$18.6 Billion Addressable Market Expanding at 28% CAGR",
        bullets: [
          "TAM: $18.6B global predictive maintenance market in manufacturing",
          "SAM: $4.2B mid-market machining & plastics plants in North America & Europe",
          "SOM: $165M beachhead target across US Midwest and German industrial hubs"
        ],
        speakerNotes: "The market is at an inflection point driven by retiring skilled machinists and dropping IoT hardware costs."
      },
      {
        slideNumber: 5,
        title: "Product & Demo",
        headline: "From Sensor to Dashboard in Under 30 Minutes",
        bullets: [
          "Self-calibrating edge AI establishes machine baseline in 48 hours",
          "Real-time health scorecards with color-coded warning thresholds",
          "Instant SMS alerts when severe bearing fatigue or lubrication loss is detected"
        ],
        speakerNotes: "Here is our live dashboard running on 4 machines in an Ohio machine shop right now."
      },
      {
        slideNumber: 6,
        title: "Business Model & Monetization",
        headline: "High-Margin Recurring SaaS with 84% Gross Margin",
        bullets: [
          "$89 / machine / month (Average plant has 25 machines = $26.7k ARR per plant)",
          "Low-friction $1,499 4-sensor Starter Evaluation Pilot Kit",
          "Net Revenue Retention target of 135% via multi-plant expansion"
        ],
        speakerNotes: "Our business model is pure high-margin software with low hardware BOM pass-through."
      },
      {
        slideNumber: 7,
        title: "Competitive Moat",
        headline: "Why PulseMach Wins Against Incumbents",
        bullets: [
          "10x faster deployment than Augury and Siemens MindSphere",
          "Proprietary acoustic anomaly dataset fine-tuned across 500k+ machine hours",
          "Channel lock-in via revenue-sharing partnerships with machine tool distributors"
        ],
        speakerNotes: "Enterprise giants cannot afford to serve 30-machine factories with their consulting-heavy sales models."
      },
      {
        slideNumber: 8,
        title: "Traction & Early Velocity",
        headline: "Rapid Customer Validation & Proven Pilot Demand",
        bullets: [
          "2 operational alpha pilots running with zero false alarms over 30 days",
          "5 signed Letters of Intent (LOIs) representing $130,000 in pipeline ARR",
          "First regional machinery distributor agreement in final review"
        ],
        speakerNotes: "In just 6 weeks, we proved the core acoustic model in real industrial environments."
      },
      {
        slideNumber: 9,
        title: "Go-To-Market Strategy",
        headline: "Channel-Led Distribution with 60-Day Pilot Conversion",
        bullets: [
          "Partnering with tooling distributors who already have weekly access to plant managers",
          "78% pilot-to-fleet expansion rate driven by immediate mathematical ROI",
          "Technical teardown content marketing targeting reliability engineers"
        ],
        speakerNotes: "We don't need a huge direct sales team because our distributor partners are already inside the factories."
      },
      {
        slideNumber: 10,
        title: "Financial Projections",
        headline: "Path to $6M+ ARR Within 36 Months",
        bullets: [
          "Year 1: $450k ARR (20 facilities)",
          "Year 2: $2.1M ARR (90 facilities via 3 distributor channels)",
          "Year 3: $6.8M ARR (280 facilities with international expansion)"
        ],
        speakerNotes: "Our unit economics are exceptionally strong with an LTV/CAC ratio over 15x."
      },
      {
        slideNumber: 11,
        title: "The Team",
        headline: "Experienced Operators in Industrial AI and Systems Engineering",
        bullets: [
          "Founding team with deep expertise in embedded IoT, DSP audio signal processing, and enterprise SaaS",
          "Advisory board includes former VP of Manufacturing Operations at Tier-1 automotive supplier",
          "Relentless engineering velocity with bias for shop-floor testing"
        ],
        speakerNotes: "We know the plant floor intimately and we know how to ship mission-critical software."
      },
      {
        slideNumber: 12,
        title: "The Ask & Use of Funds",
        headline: "Raising $1.5M Seed to Scale Distributor Distribution & Hardware Assembly",
        bullets: [
          "45% Engineering & Edge AI model development",
          "35% Distributor onboarding & field application engineering",
          "20% Hardware sensor inventory buffer and operational runway (18 months)"
        ],
        speakerNotes: "We invite you to join us in bringing zero-downtime reliability to the backbone of global manufacturing."
      }
    ],
    elevatorPitch: "PulseMach AI is an industrial IoT intelligence platform that eliminates unplanned factory downtime for mid-sized manufacturers using magnetic acoustic sensors and edge AI diagnostics in under 30 minutes."
  },
  researchSources: [
    {
      title: "Predictive Maintenance Global Market Sizing & Outlook 2024-2030",
      publisher: "MarketsandMarkets Industrial IoT Practice",
      year: "2024",
      insight: "Manufacturing plants deploying acoustic IoT monitoring reported 68% reduction in catastrophic downtime within 90 days."
    },
    {
      title: "The Industrial AI Revolution: Modernizing Mid-Market Manufacturing",
      publisher: "McKinsey & Company Digital Manufacturing Report",
      year: "2024",
      insight: "Small and mid-sized enterprises represent 72% of uncaptured industrial IoT software spend due to legacy integration friction."
    },
    {
      title: "SaaS Capital Industrial Software Unit Economics Index",
      publisher: "SaaS Capital / OpenView Research",
      year: "2024",
      insight: "Vertical IoT SaaS solutions with hardware-assisted lock-in achieve 125%+ Net Dollar Retention and < 3 month CAC payback."
    }
  ]
};
