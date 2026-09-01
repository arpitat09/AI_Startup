/**
 * AI Co-Founder Conversational Mentor Service
 */
import { generateText } from "./llmService.js";
import { logger } from "../../utils/logger.js";

const COFOUNDER_SYSTEM_PROMPT = `You are a world-class startup co-founder, veteran Silicon Valley mentor, and seasoned tech investor.
You are having a direct, pragmatic, highly actionable strategic conversation with a founder regarding their startup idea and intelligence report.

Guidelines:
1. Be direct, encouraging, but intellectually rigorous. Do not give generic platitudes.
2. Ground your advice in real-world startup strategy (unit economics, customer discovery, distribution moats, PLG, lean execution).
3. If the user asks you to challenge their idea, find genuine weaknesses and provide concrete solutions.
4. Keep answers concise, highly readable, structured with bullet points where appropriate, and immediately actionable.
5. Return clean formatted plain text/markdown (DO NOT return raw JSON).`;

export async function askCoFounderChat(message, idea, context = {}) {
  let contextSnippet = "";
  if (idea) {
    contextSnippet += `\nStartup Idea: "${idea}"`;
  }
  if (context.startupName) {
    contextSnippet += `\nStartup Name: ${context.startupName}`;
  }
  if (context.industry) {
    contextSnippet += `\nIndustry: ${context.industry}`;
  }
  if (context.score?.overallScore) {
    contextSnippet += `\nViability Score: ${context.score.overallScore}/100 (${context.score.tier})`;
  }
  if (context.executive?.valueProposition) {
    contextSnippet += `\nValue Proposition: ${context.executive.valueProposition}`;
  }

  const prompt = `STARTUP CONTEXT:${contextSnippet || " Early stage startup idea validation"}

FOUNDER QUESTION:
${message}

Provide your strategic co-founder response:`;

  logger.info(`[ChatService] Processing message: "${message.substring(0, 40)}..."`);
  const reply = await generateText(COFOUNDER_SYSTEM_PROMPT, prompt);
  return reply;
}
