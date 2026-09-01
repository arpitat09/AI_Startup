/**
 * Robust JSON extraction and repair utility for AI responses
 */

export function cleanRawResponse(text) {
  if (!text || typeof text !== "string") return "";
  let cleaned = text.trim();

  // Strip code block markers
  if (cleaned.startsWith("```json")) {
    cleaned = cleaned.replace(/^```json\s*/i, "");
  } else if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/^```\s*/i, "");
  }
  if (cleaned.endsWith("```")) {
    cleaned = cleaned.replace(/\s*```$/, "");
  }
  return cleaned.trim();
}

export function extractJsonSubstring(text) {
  if (!text) return null;
  const firstCurly = text.indexOf("{");
  const lastCurly = text.lastIndexOf("}");
  if (firstCurly !== -1 && lastCurly !== -1 && lastCurly > firstCurly) {
    return text.substring(firstCurly, lastCurly + 1);
  }

  const firstSquare = text.indexOf("[");
  const lastSquare = text.lastIndexOf("]");
  if (firstSquare !== -1 && lastSquare !== -1 && lastSquare > firstSquare) {
    return text.substring(firstSquare, lastSquare + 1);
  }

  return null;
}

export function repairJsonString(str) {
  if (!str) return str;
  return str
    // Remove trailing commas before } or ]
    .replace(/,\s*([\}\]])/g, "$1")
    // Fix unescaped control characters in strings
    .replace(/[\u0000-\u001F]+/g, (match) => (match === "\n" || match === "\r" || match === "\t" ? match : ""));
}

/**
 * Safely parses JSON from an LLM response with multiple recovery attempts
 * @param {string} raw - The raw text from the AI
 * @param {Object} fallback - Default object to return if parsing completely fails
 * @returns {Object}
 */
export function safeJsonParse(raw, fallback = {}) {
  if (!raw) return fallback;

  if (typeof raw === "object") return raw;

  const cleaned = cleanRawResponse(raw);

  // Attempt 1: Direct parse of cleaned text
  try {
    return JSON.parse(cleaned);
  } catch (e1) {
    // Attempt 2: Extract JSON substring
    const substring = extractJsonSubstring(cleaned);
    if (substring) {
      try {
        return JSON.parse(substring);
      } catch (e2) {
        // Attempt 3: Repair trailing commas and common formatting issues
        try {
          const repaired = repairJsonString(substring);
          return JSON.parse(repaired);
        } catch (e3) {
          // Attempt 4: Clean newlines inside string values
          try {
            const repairedNewlines = repaired.replace(/(?<!\\)\n/g, "\\n");
            return JSON.parse(repairedNewlines);
          } catch (e4) {
            console.warn("[safeJsonParse] Failed all JSON repair attempts:", e4.message);
          }
        }
      }
    }
  }

  return fallback;
}
