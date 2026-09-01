/**
 * Formatting and styling helper utilities
 * Harmonized with Charcoal + Burnt Orange Theme
 */

export function formatCurrency(val) {
  if (val === undefined || val === null || isNaN(Number(val))) return "$0";
  const num = Number(val);
  if (num >= 1000000) {
    return `$${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `$${(num / 1000).toFixed(0)}k`;
  }
  return `$${num.toLocaleString()}`;
}

export function formatNumber(val) {
  if (val === undefined || val === null || isNaN(Number(val))) return "0";
  return Number(val).toLocaleString();
}

export function formatDate(isoString) {
  if (!isoString) return "";
  try {
    const d = new Date(isoString);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return isoString;
  }
}

export function getScoreColor(score) {
  const num = Number(score) || 0;
  if (num >= 80) return { text: "text-[#65A77A]", bg: "bg-[#172019]", border: "border-[#65A77A]", hex: "#65A77A" };
  if (num >= 60) return { text: "text-[#D5A33A]", bg: "bg-[#201D17]", border: "border-[#D5A33A]", hex: "#D5A33A" };
  if (num >= 40) return { text: "text-[#E76F3C]", bg: "bg-[#241B17]", border: "border-[#E76F3C]", hex: "#E76F3C" };
  return { text: "text-[#D05A50]", bg: "bg-[#1F1716]", border: "border-[#D05A50]", hex: "#D05A50" };
}

export function getThreatBadge(level) {
  const l = (level || "").toLowerCase();
  if (l === "high") return { label: "High Threat", color: "bg-[#1F1716] text-[#F5958E] border-[#D05A50]/60" };
  if (l === "medium") return { label: "Medium Threat", color: "bg-[#201D17] text-[#F0CA7A] border-[#D5A33A]/60" };
  return { label: "Low Threat", color: "bg-[#172019] text-[#8DD6A2] border-[#65A77A]/60" };
}

export function getConfidenceBadge(conf) {
  const c = (conf || "").toLowerCase();
  if (c === "high") return { label: "High Confidence", color: "bg-[#172019] text-[#8DD6A2] border-[#65A77A]/60" };
  if (c === "medium") return { label: "Medium Confidence", color: "bg-[#201D17] text-[#F0CA7A] border-[#D5A33A]/60" };
  return { label: "AI Estimate", color: "bg-[#1A1A18] text-[#F5B08C] border-[#E76F3C]/60" };
}
