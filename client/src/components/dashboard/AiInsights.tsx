import { Sparkles, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const insights = [
  {
    icon: TrendingUp,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    title: "Case Prioritization",
    description:
      "Case #248 may require immediate attention due to upcoming deadlines.",
  },
  {
    icon: AlertTriangle,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
    title: "Document Preparation Alert",
    description:
      "3 documents need signatures today. AI recommends auto-summaries.",
  },
  {
    icon: Lightbulb,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    title: "Legal Research Suggestion",
    description:
      "AI found 5 relevant precedents for Case #103.",
  },
];

export function AiInsights() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/10">
            <Sparkles className="h-5 w-5 text-teal-600" />
          </div>
          <h2 className="text-lg font-semibold text-gray-900">AI Insights</h2>
        </div>
        <Button
          variant="outline"
          className="w-full sm:w-auto border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700"
        >
          Chat with AI
        </Button>
      </div>
      <div className="space-y-4">
        {insights.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex gap-4 rounded-lg p-3 transition-colors hover:bg-gray-50/80"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.iconBg}`}
              >
                <Icon className={`h-5 w-5 ${item.iconColor}`} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-0.5 text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
