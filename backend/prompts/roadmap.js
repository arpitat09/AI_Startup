export const roadmapPrompt = `You are an agile venture builder and product manager.
Analyze the startup idea and produce a 30 / 60 / 90 day tactical execution roadmap.

Return ONLY valid JSON (no markdown formatting, no conversational text).

JSON Schema:
{
  "day30": {
    "phase": "Phase 1: Validation & Minimum Viable Product (Days 1-30)",
    "goal": "Build functional MVP, validate core value proposition with 10 alpha testers",
    "tasks": [
      { "id": "t1", "task": "Conduct 15 customer discovery interviews with target ICP", "priority": "High", "effort": "1 week", "dependency": "None", "successMetric": ">= 10 prospects confirm high willingness to pay", "completed": false },
      { "id": "t2", "task": "Ship MVP with core deterministic calculation & AI engine", "priority": "High", "effort": "2 weeks", "dependency": "Interviews", "successMetric": "Working software deployed on staging", "completed": false },
      { "id": "t3", "task": "Onboard first 5 design partners for hands-on feedback", "priority": "High", "effort": "1 week", "dependency": "MVP Shipped", "successMetric": "Weekly active usage > 3 sessions", "completed": false }
    ]
  },
  "day60": {
    "phase": "Phase 2: Launch & Early Customer Traction (Days 31-60)",
    "goal": "Execute public launch, acquire first 50 users, refine unit economics",
    "tasks": [
      { "id": "t4", "task": "Launch publicly on Product Hunt, Hacker News, and Twitter", "priority": "High", "effort": "1 week", "dependency": "MVP feedback incorporated", "successMetric": "500+ unique visitors, 50+ signups", "completed": false },
      { "id": "t5", "task": "Implement self-serve billing with Stripe integration", "priority": "High", "effort": "4 days", "dependency": "Public Launch", "successMetric": "First 10 paying customers converted", "completed": false },
      { "id": "t6", "task": "Publish 3 deep-dive case studies and comparison teardowns", "priority": "Medium", "effort": "1 week", "dependency": "Early users", "successMetric": "Top 10 ranking for target search query", "completed": false }
    ]
  },
  "day90": {
    "phase": "Phase 3: Growth & Optimization (Days 61-90)",
    "goal": "Scale acquisition channels, optimize retention, and reach break-even trajectory",
    "tasks": [
      { "id": "t7", "task": "Launch referral loop & founder affiliate program", "priority": "Medium", "effort": "1 week", "dependency": "Paying users", "successMetric": "15% of new signups from referrals", "completed": false },
      { "id": "t8", "task": "Release team workspaces and enterprise export features", "priority": "Medium", "effort": "2 weeks", "dependency": "Billing", "successMetric": "Upsell 3 accounts to $99/mo tier", "completed": false },
      { "id": "t9", "task": "Prepare investor pitch deck with verified traction metrics", "priority": "High", "effort": "1 week", "dependency": "Traction data", "successMetric": "Investor deck ready with real MRR", "completed": false }
    ]
  }
}`;
