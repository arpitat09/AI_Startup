export function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  className = "",
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111111] dark:focus:ring-offset-[#111111] disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const variants = {
    primary: "bg-[#E76F3C] hover:bg-[#F0804F] text-white font-bold shadow-[0_8px_30px_rgba(231,111,60,0.18)] border border-[#E76F3C] focus:ring-[#E76F3C]",
    secondary: "bg-[#1F1F1F] dark:bg-[#1F1F1F] hover:bg-[#242421] dark:hover:bg-[#242421] text-[#F5F5F0] hover:text-[#F5B08C] border border-[#34342F] hover:border-[#E76F3C] focus:ring-[#E76F3C]",
    accent: "bg-[#241B17] hover:bg-[#2F211C] text-[#F5B08C] border border-[#E76F3C]/50 hover:border-[#E76F3C] focus:ring-[#E76F3C]",
    ghost: "bg-transparent hover:bg-[#1F1F1F] text-[#B6B6AE] hover:text-[#F5F5F0] focus:ring-[#E76F3C]",
    danger: "bg-[#D05A50] hover:bg-[#BA453B] text-white focus:ring-[#D05A50] shadow-sm",
    outline: "border-2 border-[#E76F3C] text-[#E76F3C] hover:bg-[#E76F3C]/10 focus:ring-[#E76F3C]"
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5"
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : Icon ? (
        <Icon className="w-4 h-4 flex-shrink-0" />
      ) : null}
      {children}
    </button>
  );
}
