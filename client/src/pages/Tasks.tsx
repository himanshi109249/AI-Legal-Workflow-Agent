import { Sidebar } from "@/components/dashboard/Sidebar";
import { CheckSquare, Plus, Filter, Calendar, Clock, AlertCircle, CheckCircle2, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const tasks = [
  {
    id: 1,
    title: "Review employment contract for Case #248",
    description: "Analyze contract terms and identify potential issues",
    dueDate: "2024-02-20",
    priority: "high",
    status: "pending",
    caseId: "248",
    category: "Document Review",
  },
  {
    id: 2,
    title: "Prepare motion to dismiss",
    description: "Draft motion documents for Case #247",
    dueDate: "2024-02-22",
    priority: "high",
    status: "in-progress",
    caseId: "247",
    category: "Court Filing",
  },
  {
    id: 3,
    title: "Client meeting - Case #246",
    description: "Discuss case strategy and next steps",
    dueDate: "2024-02-18",
    priority: "medium",
    status: "completed",
    caseId: "246",
    category: "Meeting",
  },
  {
    id: 4,
    title: "File affidavit of service",
    description: "Submit completed affidavit for Case #246",
    dueDate: "2024-02-19",
    priority: "medium",
    status: "pending",
    caseId: "246",
    category: "Court Filing",
  },
  {
    id: 5,
    title: "Research precedents for IP case",
    description: "Find relevant case law for Case #245",
    dueDate: "2024-02-25",
    priority: "low",
    status: "pending",
    caseId: "245",
    category: "Research",
  },
  {
    id: 6,
    title: "Update case notes",
    description: "Document recent developments in Case #244",
    dueDate: "2024-02-17",
    priority: "low",
    status: "completed",
    caseId: "244",
    category: "Administrative",
  },
];

const priorityColors = {
  high: "bg-red-500/10 text-red-600",
  medium: "bg-blue-500/10 text-blue-600",
  low: "bg-gray-500/10 text-gray-600",
};

const statusIcons = {
  pending: Circle,
  "in-progress": Clock,
  completed: CheckCircle2,
};

const statusColors = {
  pending: "text-gray-500",
  "in-progress": "text-blue-600",
  completed: "text-emerald-600",
};

export function Tasks() {
  const getDaysUntilDue = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-50/80">
      <Sidebar />

      <main className="lg:pl-64 min-h-screen transition-[padding] duration-300">
        <div className="p-4 pt-16 lg:pt-6 lg:p-6 lg:max-w-7xl lg:mx-auto">
          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <CheckSquare className="h-5 w-5 text-blue-600" />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Tasks</h1>
                </div>
                <p className="text-sm text-gray-500 sm:text-base">
                  Manage your legal tasks and deadlines
                </p>
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Task
              </Button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="border-gray-200 bg-white">
                All Tasks
              </Button>
              <Button variant="outline" className="border-gray-200 bg-white">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" className="border-gray-200 bg-white">
                <Calendar className="h-4 w-4 mr-2" />
                By Date
              </Button>
            </div>
          </div>

          {/* Tasks List */}
          <Card className="shadow-sm border-gray-100">
            <CardHeader>
              <CardTitle className="text-lg">All Tasks</CardTitle>
              <CardDescription>
                {tasks.filter((t) => t.status !== "completed").length} active tasks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tasks.map((task) => {
                  const StatusIcon = statusIcons[task.status as keyof typeof statusIcons];
                  const daysUntilDue = getDaysUntilDue(task.dueDate);
                  const isOverdue = daysUntilDue < 0;
                  const isDueSoon = daysUntilDue >= 0 && daysUntilDue <= 2;

                  return (
                    <div
                      key={task.id}
                      className={`flex items-start gap-4 p-4 rounded-lg border transition-colors ${
                        task.status === "completed"
                          ? "bg-gray-50/50 border-gray-100"
                          : "bg-white border-gray-100 hover:bg-gray-50/80"
                      }`}
                    >
                      <Checkbox
                        checked={task.status === "completed"}
                        className="mt-1"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div className="flex-1 min-w-0">
                            <h3
                              className={`font-semibold text-gray-900 ${
                                task.status === "completed" ? "line-through text-gray-500" : ""
                              }`}
                            >
                              {task.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">{task.description}</p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <StatusIcon
                              className={`h-5 w-5 ${statusColors[task.status as keyof typeof statusColors]}`}
                            />
                          </div>
                        </div>
                        <div className="flex items-center gap-3 mt-3 flex-wrap">
                          <Badge className={priorityColors[task.priority as keyof typeof priorityColors]}>
                            {task.priority} priority
                          </Badge>
                          <Badge className="bg-gray-500/10 text-gray-600">
                            Case #{task.caseId}
                          </Badge>
                          <Badge className="bg-teal-500/10 text-teal-600">
                            {task.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span className={isOverdue ? "text-red-600 font-medium" : isDueSoon ? "text-amber-600 font-medium" : ""}>
                              {isOverdue
                                ? `Overdue by ${Math.abs(daysUntilDue)} day${Math.abs(daysUntilDue) === 1 ? "" : "s"}`
                                : isDueSoon
                                ? `Due in ${daysUntilDue} day${daysUntilDue === 1 ? "" : "s"}`
                                : `Due: ${task.dueDate}`}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
