export function Card({
  children,
  className = "",
  title,
  subtitle,
  icon: Icon,
  badge,
  action,
  hover = false,
  glass = false,
  ...props
}) {
  const hoverClass = hover
    ? "hover:bg-[#242421] dark:hover:bg-[#242421] hover:border-[#E76F3C]/60 hover:shadow-[0_8px_30px_rgba(231,111,60,0.08)] transition-all duration-200"
    : "";
  const glassClass = glass
    ? "glass-panel"
    : "bg-white dark:bg-[#1A1A18] border border-[#E3DED6] dark:border-[#34342F] shadow-sm";

  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 ${glassClass} ${hoverClass} ${className}`}
      {...props}
    >
      {(title || subtitle || Icon || action || badge) && (
        <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-[#EAE6DE] dark:border-[#34342F]">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="w-10 h-10 rounded-xl bg-[#FCE8DF] dark:bg-[#241B17] text-[#C9542D] dark:text-[#E76F3C] flex items-center justify-center flex-shrink-0 border border-[#E76F3C]/20">
                <Icon className="w-5 h-5" />
              </div>
            )}
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                {title && <h3 className="font-semibold text-[#1C1C1A] dark:text-[#F5F5F0] text-base sm:text-lg">{title}</h3>}
                {badge}
              </div>
              {subtitle && <p className="text-xs sm:text-sm text-[#66635D] dark:text-[#B6B6AE] mt-0.5">{subtitle}</p>}
            </div>
          </div>
          {action && <div className="flex-shrink-0">{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
