import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface KpiCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  icon: LucideIcon;
  iconBgClass?: string;
}

export function KpiCard({ title, value, trend, icon: Icon, iconBgClass = "bg-teal-500/10" }: KpiCardProps) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-2 text-2xl font-bold text-gray-900 truncate">{value}</p>
          {trend && (
            <p
              className={cn(
                "mt-2 flex items-center gap-1 text-sm font-medium",
                trend.isPositive ? "text-emerald-600" : "text-red-600"
              )}
            >
              {trend.isPositive ? (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              )}
              {trend.value}
            </p>
          )}
        </div>
        <div className={cn("ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg", iconBgClass)}>
          <Icon className="h-5 w-5 text-gray-700" />
        </div>
      </div>
    </div>
  );
}
