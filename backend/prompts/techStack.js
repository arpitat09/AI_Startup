export const techStackPrompt = `You are a Principal Software Architect.
Analyze the startup idea and recommend a pragmatic, modern, cost-effective technology stack tailored to the startup's requirements.

Return ONLY valid JSON (no markdown formatting, no conversational text).

JSON Schema:
{
  "recommendations": [
    { "category": "Frontend", "technology": "React 19 + Vite + Tailwind CSS", "why": "Ultra-fast build velocity, vast component ecosystem, exceptional rendering performance", "cost": "Free (Open Source)", "complexity": "Low", "alternative": "Next.js / Svelte" },
    { "category": "Backend & API", "technology": "Node.js + Express / FastAPI", "why": "Lightweight event loop, rapid JSON serialization, perfect for streaming AI responses", "cost": "Free", "complexity": "Low", "alternative": "Go / Python FastAPI" },
    { "category": "Database & Persistence", "technology": "PostgreSQL (Supabase / Neon)", "why": "Relational integrity, JSONB support for unstructured AI outputs, and vector search readiness", "cost": "$0 - $25/mo", "complexity": "Medium", "alternative": "MongoDB Atlas" },
    { "category": "AI / LLM Layer", "technology": "Groq Llama-3.3 + Google Gemini API", "why": "Sub-second inference latencies on LPU hardware with enterprise reasoning at ultra-low cost", "cost": "$0.50 - $10/mo in early stage", "complexity": "Low", "alternative": "OpenAI GPT-4o / Anthropic Claude" },
    { "category": "Authentication", "technology": "Supabase Auth / Clerk / NextAuth", "why": "Zero-friction social login, secure JWT sessions, and built-in user management", "cost": "Free tier up to 10k MAUs", "complexity": "Low", "alternative": "Firebase Auth" },
    { "category": "Payments & Billing", "technology": "Stripe / Lemon Squeezy", "why": "Industry gold standard for global SaaS subscriptions, merchant of record handling", "cost": "2.9% + 30¢ per transaction", "complexity": "Medium", "alternative": "Paddle" },
    { "category": "Hosting & CI/CD", "technology": "Vercel (Frontend) + Render / Railway (Backend)", "why": "Instant git push deploys, automatic SSL, edge caching, minimal DevOps overhead", "cost": "$0 - $20/mo", "complexity": "Low", "alternative": "Fly.io / AWS ECS" },
    { "category": "Analytics & Monitoring", "technology": "PostHog + Sentry", "why": "Combined product analytics, session replay, and error tracking with privacy compliance", "cost": "Free generous tiers", "complexity": "Low", "alternative": "Mixpanel + Datadog" }
  ],
  "architectureSummary": "Modern decoupled Jamstack with serverless API gateway and direct LLM pipeline integration."
}`;
