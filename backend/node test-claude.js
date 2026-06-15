// test-claude.js
import dotenv from "dotenv";
dotenv.config();

import { callClaude } from "./helpers/callClaude.js";

const result = await callClaude(
  "You are a startup analyst. Return ONLY valid JSON, no extra text.",
  "Give me a one-line market summary for a food delivery app. Return as: {\"summary\": \"...\"}"
);

console.log("✅ Claude responded:", result);