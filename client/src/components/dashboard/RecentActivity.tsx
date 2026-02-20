import { FileCheck, FileUp, Clock, Plus } from "lucide-react";
import { ChevronRight } from "lucide-react";

const activities = [
  {
    icon: FileCheck,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
    title: "Contract Review Completed",
    timestamp: "Today",
  },
  {
    icon: FileUp,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
    title: "Affidavit Uploaded",
    timestamp: "Yesterday",
  },
  {
    icon: Clock,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600",
    title: "Deadline Reminder",
    timestamp: "Tomorrow",
  },
  {
    icon: Plus,
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-600",
    title: "New Case Assigned",
    timestamp: "Today",
  },
];

export function RecentActivity() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        <a
          href="#"
          className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
        >
          View all
        </a>
      </div>
      <div className="space-y-3">
        {activities.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.title}
              href="#"
              className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-gray-50/80 group"
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.iconBg}`}
              >
                <Icon className={`h-5 w-5 ${item.iconColor}`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-gray-900 truncate">{item.title}</p>
                <p className="text-sm text-gray-500">{item.timestamp}</p>
              </div>
              <ChevronRight className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-teal-500 transition-colors" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
