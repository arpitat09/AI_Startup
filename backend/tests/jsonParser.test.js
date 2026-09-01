import assert from "assert";
import { safeJsonParse, cleanRawResponse, extractJsonSubstring, repairJsonString } from "../utils/jsonParser.js";

console.log("▶ Running JSON Parser Tests...");

// Test 1: Clean markdown fenced code block
const markdownInput = "```json\n{\n  \"name\": \"TestApp\",\n  \"score\": 85\n}\n```";
const parsed1 = safeJsonParse(markdownInput);
assert.strictEqual(parsed1.name, "TestApp");
assert.strictEqual(parsed1.score, 85);

// Test 2: AI response with conversational preamble and trailing markdown
const messyInput = "Here is your JSON response:\n\n```json\n{\n  \"tam\": \"$5B\",\n  \"growth\": \"15%\",\n}\n```\nHope this helps!";
const parsed2 = safeJsonParse(messyInput);
assert.strictEqual(parsed2.tam, "$5B");
assert.strictEqual(parsed2.growth, "15%");

// Test 3: Trailing comma repair
const trailingComma = "{\"items\": [1, 2, 3,], \"valid\": true,}";
const parsed3 = safeJsonParse(trailingComma);
assert.strictEqual(parsed3.valid, true);
assert.strictEqual(parsed3.items.length, 3);

// Test 4: Total gibberish with fallback object
const gibberish = "Sorry, as an AI language model I cannot parse this.";
const fallback = { status: "fallback_used" };
const parsed4 = safeJsonParse(gibberish, fallback);
assert.strictEqual(parsed4.status, "fallback_used");

console.log("✔ JSON Parser Tests Passed!");
