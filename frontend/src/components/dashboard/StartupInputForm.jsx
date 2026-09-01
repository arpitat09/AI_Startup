import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Lightbulb,
  Building2,
  Users,
  Globe2,
  Briefcase,
  DollarSign,
  Compass
} from "lucide-react";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { useProject } from "../../context/ProjectContext";

const SAMPLE_TEMPLATES = [
  {
    title: "AI Compliance for MedTech",
    industry: "HealthTech",
    customer: "Digital health startups & clinics",
    geo: "US",
    stage: "Pre-MVP",
    idea: "Automated HIPAA & FDA compliance auditor for digital health apps that scans codebases and infrastructure to generate audit-ready documentation in minutes."
  },
  {
    title: "Supply Chain Carbon Ledger",
    industry: "ClimateTech",
    customer: "Mid-market logistics & freight carriers",
    geo: "Europe",
    stage: "Idea",
    idea: "Real-time Scope-3 carbon accounting and emissions tracking platform integrated directly into ERP and fleet telematics for freight compliance."
  },
  {
    title: "AI Voice Agent for Real Estate",
    industry: "SaaS",
    customer: "Independent real estate brokerages & agents",
    geo: "Global",
    stage: "MVP",
    idea: "Sub-second latency AI conversational voice receptionist that qualifies inbound property buyer inquiries 24/7 and books calendar tours automatically."
  }
];

export function StartupInputForm() {
  const { analyzeStartup, isAnalyzing } = useProject();

  const [idea, setIdea] = useState("");
  const [industry, setIndustry] = useState("SaaS");
  const [targetCustomer, setTargetCustomer] = useState("B2B Teams & Small Businesses");
  const [geography, setGeography] = useState("Global");
  const [stage, setStage] = useState("Idea");
  const [budget, setBudget] = useState("$10k - $50k");
  const [goal, setGoal] = useState("Validate market demand & build MVP");

  const [validationError, setValidationError] = useState("");

  const handleApplyTemplate = (tpl) => {
    setIdea(tpl.idea);
    setIndustry(tpl.industry);
    setTargetCustomer(tpl.customer);
    setGeography(tpl.geo);
    setStage(tpl.stage);
    setValidationError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!idea || idea.trim().length < 10) {
      setValidationError("Please describe your startup idea with at least 10 characters.");
      return;
    }
    setValidationError("");
    analyzeStartup({
      idea: idea.trim(),
      industry,
      targetCustomer,
      geography,
      stage,
      budget,
      goal
    });
  };

  return (
    <div className="max-w-4xl mx-auto my-8">
      <Card
        glass
        title="Describe Your Startup Idea"
        subtitle="Our multi-agent engine will analyze the market, competitors, business model, risks, and financial viability."
        icon={Sparkles}
        className="shadow-2xl border-[#34342F]"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main Idea Textarea */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs sm:text-sm font-semibold text-[#1C1C1A] dark:text-[#F5F5F0]">
                What problem are you solving and how? <span className="text-[#E76F3C]">*</span>
              </label>
              <span className="text-[11px] font-mono text-[#85857E]">
                {idea.length} / 2500
              </span>
            </div>

            <textarea
              rows={4}
              value={idea}
              onChange={(e) => {
                setIdea(e.target.value);
                if (validationError) setValidationError("");
              }}
              placeholder="e.g. AI-powered preventive maintenance platform with magnetic IoT sensors that detects CNC machine spindle failures 14 days before breakdown..."
              className={`w-full p-4 rounded-xl border bg-white dark:bg-[#171717] text-[#1C1C1A] dark:text-[#F5F5F0] placeholder-[#85857E] text-sm focus:outline-none focus:ring-2 focus:ring-[#E76F3C] transition-all ${
                validationError
                  ? "border-[#D05A50] focus:ring-[#D05A50]"
                  : "border-[#E3DED6] dark:border-[#34342F] focus:border-[#E76F3C]"
              }`}
            />

            {validationError && (
              <p className="mt-1.5 text-xs text-[#D05A50] font-medium">
                {validationError}
              </p>
            )}
          </div>

          {/* Quick Idea Templates */}
          <div>
            <div className="flex items-center gap-1.5 mb-2 text-xs font-semibold text-[#66635D] dark:text-[#B6B6AE]">
              <Lightbulb className="w-3.5 h-3.5 text-[#E76F3C]" />
              <span>Or try an instant idea template:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {SAMPLE_TEMPLATES.map((tpl, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleApplyTemplate(tpl)}
                  className="p-2.5 rounded-xl border border-[#E3DED6] dark:border-[#34342F] bg-[#FAF8F5] dark:bg-[#1F1F1F] hover:border-[#E76F3C] hover:bg-[#F4F1EC] dark:hover:bg-[#242421] text-left transition-all text-xs group"
                >
                  <div className="font-semibold text-[#1C1C1A] dark:text-[#F5F5F0] group-hover:text-[#C9542D] dark:group-hover:text-[#F5B08C]">
                    {tpl.title}
                  </div>
                  <div className="text-[11px] text-[#85857E] mt-0.5">
                    {tpl.industry} • {tpl.stage}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Structured Parameters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2 border-t border-[#EAE6DE] dark:border-[#34342F]">
            {/* Industry */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-[#1C1C1A] dark:text-[#B6B6AE] mb-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#85857E]" />
                <span>Industry</span>
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#E3DED6] dark:border-[#34342F] bg-white dark:bg-[#171717] text-[#1C1C1A] dark:text-[#F5F5F0] text-xs focus:outline-none focus:ring-2 focus:ring-[#E76F3C] focus:border-[#E76F3C]"
              >
                <option>SaaS</option>
                <option>AI & Machine Learning</option>
                <option>FinTech</option>
                <option>HealthTech</option>
                <option>EdTech</option>
                <option>E-commerce</option>
                <option>ClimateTech</option>
                <option>Manufacturing</option>
                <option>Logistics & Supply Chain</option>
                <option>Consumer / Social</option>
                <option>Cybersecurity</option>
                <option>DevTools</option>
                <option>Other</option>
              </select>
            </div>

            {/* Business Stage */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-[#1C1C1A] dark:text-[#B6B6AE] mb-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#85857E]" />
                <span>Business Stage</span>
              </label>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#E3DED6] dark:border-[#34342F] bg-white dark:bg-[#171717] text-[#1C1C1A] dark:text-[#F5F5F0] text-xs focus:outline-none focus:ring-2 focus:ring-[#E76F3C] focus:border-[#E76F3C]"
              >
                <option>Idea</option>
                <option>Pre-MVP</option>
                <option>MVP</option>
                <option>Early Revenue</option>
                <option>Growth</option>
              </select>
            </div>

            {/* Geography */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-[#1C1C1A] dark:text-[#B6B6AE] mb-1.5">
                <Globe2 className="w-3.5 h-3.5 text-[#85857E]" />
                <span>Geography</span>
              </label>
              <select
                value={geography}
                onChange={(e) => setGeography(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#E3DED6] dark:border-[#34342F] bg-white dark:bg-[#171717] text-[#1C1C1A] dark:text-[#F5F5F0] text-xs focus:outline-none focus:ring-2 focus:ring-[#E76F3C] focus:border-[#E76F3C]"
              >
                <option>Global</option>
                <option>US / North America</option>
                <option>India</option>
                <option>Europe</option>
                <option>Asia-Pacific</option>
                <option>Custom</option>
              </select>
            </div>

            {/* Target Customer */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-[#1C1C1A] dark:text-[#B6B6AE] mb-1.5">
                <Users className="w-3.5 h-3.5 text-[#85857E]" />
                <span>Target Customer</span>
              </label>
              <input
                type="text"
                value={targetCustomer}
                onChange={(e) => setTargetCustomer(e.target.value)}
                placeholder="e.g. Mid-market plant managers"
                className="w-full px-3 py-2 rounded-xl border border-[#E3DED6] dark:border-[#34342F] bg-white dark:bg-[#171717] text-[#1C1C1A] dark:text-[#F5F5F0] text-xs focus:outline-none focus:ring-2 focus:ring-[#E76F3C] focus:border-[#E76F3C]"
              />
            </div>

            {/* Budget */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-[#1C1C1A] dark:text-[#B6B6AE] mb-1.5">
                <DollarSign className="w-3.5 h-3.5 text-[#85857E]" />
                <span>Initial Budget</span>
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#E3DED6] dark:border-[#34342F] bg-white dark:bg-[#171717] text-[#1C1C1A] dark:text-[#F5F5F0] text-xs focus:outline-none focus:ring-2 focus:ring-[#E76F3C] focus:border-[#E76F3C]"
              >
                <option>Bootstrap (&lt; $10k)</option>
                <option>$10k - $50k</option>
                <option>$50k - $250k</option>
                <option>$250k+ (Seed)</option>
              </select>
            </div>

            {/* Primary Goal */}
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-[#1C1C1A] dark:text-[#B6B6AE] mb-1.5">
                <Compass className="w-3.5 h-3.5 text-[#85857E]" />
                <span>Primary Goal</span>
              </label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#E3DED6] dark:border-[#34342F] bg-white dark:bg-[#171717] text-[#1C1C1A] dark:text-[#F5F5F0] text-xs focus:outline-none focus:ring-2 focus:ring-[#E76F3C] focus:border-[#E76F3C]"
              >
                <option>Validate market demand & build MVP</option>
                <option>Find competitive differentiation moat</option>
                <option>Prepare investor pitch & deck</option>
                <option>Scale Go-To-Market customer acquisition</option>
              </select>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-4 flex items-center justify-end gap-3">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={isAnalyzing}
              icon={ArrowRight}
              className="w-full sm:w-auto"
            >
              Analyze Startup & Generate Intelligence
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
