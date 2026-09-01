/**
 * Input validator for analysis and chat requests
 */
import { AppError } from "../utils/errorHandler.js";

const VALID_INDUSTRIES = [
  "SaaS", "FinTech", "HealthTech", "EdTech", "AI", "E-commerce",
  "ClimateTech", "Manufacturing", "Logistics", "Consumer", "Cybersecurity",
  "DevTools", "B2B", "Marketplace", "Other"
];

const VALID_STAGES = [
  "Idea", "Pre-MVP", "MVP", "Early Revenue", "Growth"
];

const VALID_GEOGRAPHIES = [
  "Global", "US", "India", "Europe", "Asia-Pacific", "Latin America", "Custom"
];

export function validateAnalysisInput(body) {
  if (!body || typeof body !== "object") {
    throw new AppError("Request body must be a valid JSON object", 400, "INVALID_REQUEST_BODY");
  }

  const { idea, industry, targetCustomer, geography, stage, budget, goal } = body;

  if (!idea || typeof idea !== "string" || idea.trim().length < 10) {
    throw new AppError("Please provide a startup idea with at least 10 characters describing the problem and solution.", 400, "INVALID_IDEA_INPUT");
  }

  if (idea.trim().length > 3000) {
    throw new AppError("Startup idea description is too long (maximum 3000 characters).", 400, "IDEA_TOO_LONG");
  }

  return {
    idea: idea.trim(),
    industry: industry && typeof industry === "string" ? industry.trim() : "AI & Technology",
    targetCustomer: targetCustomer && typeof targetCustomer === "string" ? targetCustomer.trim() : "Businesses & Teams",
    geography: geography && typeof geography === "string" ? geography.trim() : "Global",
    stage: stage && typeof stage === "string" ? stage.trim() : "Idea",
    budget: budget && typeof budget === "string" ? budget.trim() : "$10k - $50k",
    goal: goal && typeof goal === "string" ? goal.trim() : "Validate market demand & build MVP"
  };
}

export function validateChatInput(body) {
  if (!body || typeof body !== "object") {
    throw new AppError("Request body must be a valid JSON object", 400, "INVALID_REQUEST_BODY");
  }

  const { message, idea, context } = body;

  if (!message || typeof message !== "string" || message.trim().length === 0) {
    throw new AppError("Message cannot be empty.", 400, "EMPTY_MESSAGE");
  }

  return {
    message: message.trim(),
    idea: idea && typeof idea === "string" ? idea.trim() : "",
    context: context && typeof context === "object" ? context : {}
  };
}
