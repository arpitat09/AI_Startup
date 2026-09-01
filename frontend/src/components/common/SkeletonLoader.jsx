export function SkeletonLoader({ lines = 4, className = "" }) {
  return (
    <div className={`space-y-3 animate-pulse ${className}`}>
      <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded-lg w-1/3"></div>
      <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full"></div>
      {lines > 2 && <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6"></div>}
      {lines > 3 && <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-4/6"></div>}
      {lines > 4 && <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2"></div>}
    </div>
  );
}
