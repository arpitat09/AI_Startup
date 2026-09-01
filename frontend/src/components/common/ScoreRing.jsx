import { getScoreColor } from "../../utils/formatters";

export function ScoreRing({ score = 0, size = 120, strokeWidth = 10, showLabel = true, subtitle = "Viability Score" }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const validScore = Math.min(100, Math.max(0, Number(score) || 0));
  const strokeDashoffset = circumference - (validScore / 100) * circumference;
  const colors = getScoreColor(validScore);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-[#E3DED6] dark:text-[#34342F]"
          />
          {/* Animated score circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={colors.hex}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            style={{ transition: "stroke-dashoffset 1s ease-in-out" }}
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center">
          <span className={`font-extrabold tracking-tight ${colors.text} font-mono`} style={{ fontSize: size * 0.28 }}>
            {validScore}
          </span>
          <span className="text-[10px] uppercase font-semibold text-[#66635D] dark:text-[#85857E] tracking-wider">
            / 100
          </span>
        </div>
      </div>
      {showLabel && subtitle && (
        <div className="mt-2 text-xs font-semibold text-[#1C1C1A] dark:text-[#F5F5F0]">
          {subtitle}
        </div>
      )}
    </div>
  );
}
