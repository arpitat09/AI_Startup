export function Badge({ children, variant = "default", size = "md", className = "" }) {
  const base = "inline-flex items-center font-medium rounded-full border";

  const variants = {
    default: "bg-[#1F1F1F] dark:bg-[#1F1F1F] text-[#B6B6AE] dark:text-[#B6B6AE] border-[#34342F]",
    primary: "bg-[#1A1A18] dark:bg-[#1A1A18] text-[#F5B08C] dark:text-[#F5B08C] border-[#E76F3C]/70 font-semibold",
    orange: "bg-[#1A1A18] dark:bg-[#1A1A18] text-[#F5B08C] dark:text-[#F5B08C] border-[#E76F3C]/70 font-semibold",
    success: "bg-[#172019] dark:bg-[#172019] text-[#8DD6A2] dark:text-[#8DD6A2] border-[#65A77A]/70 font-semibold",
    green: "bg-[#172019] dark:bg-[#172019] text-[#8DD6A2] dark:text-[#8DD6A2] border-[#65A77A]/70 font-semibold",
    warning: "bg-[#201D17] dark:bg-[#201D17] text-[#F0CA7A] dark:text-[#F0CA7A] border-[#D5A33A]/70 font-semibold",
    amber: "bg-[#201D17] dark:bg-[#201D17] text-[#F0CA7A] dark:text-[#F0CA7A] border-[#D5A33A]/70 font-semibold",
    danger: "bg-[#1F1716] dark:bg-[#1F1716] text-[#F5958E] dark:text-[#F5958E] border-[#D05A50]/70 font-semibold",
    rose: "bg-[#1F1716] dark:bg-[#1F1716] text-[#F5958E] dark:text-[#F5958E] border-[#D05A50]/70 font-semibold",
    neutral: "bg-[#1A1A18] dark:bg-[#1A1A18] text-[#85857E] dark:text-[#85857E] border-[#34342F]",
    cyan: "bg-[#1A1A18] dark:bg-[#1A1A18] text-[#F5B08C] dark:text-[#F5B08C] border-[#E76F3C]/60",
    indigo: "bg-[#1A1A18] dark:bg-[#1A1A18] text-[#B6B6AE] dark:text-[#B6B6AE] border-[#34342F]"
  };

  const sizes = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
    lg: "text-sm px-3 py-1.5"
  };

  return (
    <span className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}>
      {children}
    </span>
  );
}
