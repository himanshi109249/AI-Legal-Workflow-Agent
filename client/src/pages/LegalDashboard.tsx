import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KpiCard } from "@/components/dashboard/KpiCard";
import { AiInsights } from "@/components/dashboard/AiInsights";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import {
  Briefcase,
  CheckSquare,
  FileText,
  Sparkles,
} from "lucide-react";

const kpiData = [
  {
    title: "Active Cases",
    value: "32",
    trend: { value: "+5 from last week", isPositive: true },
    icon: Briefcase,
    iconBgClass: "bg-emerald-500/10",
  },
  {
    title: "Pending Tasks",
    value: "12",
    trend: { value: "-3 vs yesterday", isPositive: true },
    icon: CheckSquare,
    iconBgClass: "bg-blue-500/10",
  },
  {
    title: "Documents Processed This Month",
    value: "145",
    trend: { value: "+12.5% above target", isPositive: true },
    icon: FileText,
    iconBgClass: "bg-amber-500/10",
  },
  {
    title: "AI Insights Generated",
    value: "58",
    trend: { value: "-4.2% vs last month", isPositive: false },
    icon: Sparkles,
    iconBgClass: "bg-teal-500/10",
  },
];

export function LegalDashboard() {
  return (
    <div className="min-h-screen bg-gray-50/80">
      <Sidebar />

      {/* Main content - offset for desktop sidebar */}
      <main className="lg:pl-64 min-h-screen transition-[padding] duration-300">
        <div className="p-4 pt-16 lg:pt-6 lg:p-6 lg:max-w-7xl lg:mx-auto">
          <DashboardHeader />

          {/* KPI Cards */}
          <section className="mb-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {kpiData.map((kpi) => (
                <KpiCard key={kpi.title} {...kpi} />
              ))}
            </div>
          </section>

          {/* AI Insights + Recent Activity */}
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <AiInsights />
            </div>
            <div>
              <RecentActivity />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
