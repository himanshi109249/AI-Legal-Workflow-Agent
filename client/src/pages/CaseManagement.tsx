import { Sidebar } from "@/components/dashboard/Sidebar";
import { Briefcase, Plus, Search, Filter, MoreVertical, Calendar, User, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const cases = [
  {
    id: "248",
    title: "Employment Contract Dispute",
    client: "John Smith",
    status: "active",
    priority: "high",
    deadline: "2024-03-15",
    documents: 12,
    tasks: 5,
  },
  {
    id: "247",
    title: "Real Estate Transaction",
    client: "Sarah Johnson",
    status: "active",
    priority: "medium",
    deadline: "2024-03-20",
    documents: 8,
    tasks: 2,
  },
  {
    id: "246",
    title: "Intellectual Property Claim",
    client: "Tech Corp Inc.",
    status: "pending",
    priority: "high",
    deadline: "2024-03-10",
    documents: 15,
    tasks: 8,
  },
  {
    id: "245",
    title: "Family Law Matter",
    client: "Emily Davis",
    status: "active",
    priority: "low",
    deadline: "2024-03-25",
    documents: 6,
    tasks: 3,
  },
  {
    id: "244",
    title: "Corporate Compliance Review",
    client: "ABC Industries",
    status: "closed",
    priority: "medium",
    deadline: "2024-02-28",
    documents: 20,
    tasks: 0,
  },
];

const statusColors = {
  active: "bg-emerald-500/10 text-emerald-600",
  pending: "bg-amber-500/10 text-amber-600",
  closed: "bg-gray-500/10 text-gray-600",
};

const priorityColors = {
  high: "bg-red-500/10 text-red-600",
  medium: "bg-blue-500/10 text-blue-600",
  low: "bg-gray-500/10 text-gray-600",
};

export function CaseManagement() {
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
                    <Briefcase className="h-5 w-5 text-blue-600" />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Case Management</h1>
                </div>
                <p className="text-sm text-gray-500 sm:text-base">
                  Manage and track all your legal cases
                </p>
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                New Case
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search cases..."
                  className="pl-10 bg-white border-gray-200"
                />
              </div>
              <Button variant="outline" className="border-gray-200 bg-white">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cases.map((caseItem) => (
              <Card key={caseItem.id} className="shadow-sm border-gray-100 hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-lg mb-2">Case #{caseItem.id}</CardTitle>
                      <CardDescription className="text-base font-medium text-gray-900">
                        {caseItem.title}
                      </CardDescription>
                    </div>
                    <button className="p-1 rounded-lg hover:bg-gray-100">
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                    </button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="h-4 w-4" />
                      <span>{caseItem.client}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>Due: {caseItem.deadline}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FileText className="h-4 w-4" />
                      <span>{caseItem.documents} documents</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge className={statusColors[caseItem.status as keyof typeof statusColors]}>
                        {caseItem.status}
                      </Badge>
                      <Badge className={priorityColors[caseItem.priority as keyof typeof priorityColors]}>
                        {caseItem.priority} priority
                      </Badge>
                    </div>

                    {caseItem.tasks > 0 && (
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-sm text-gray-500">
                          {caseItem.tasks} pending {caseItem.tasks === 1 ? "task" : "tasks"}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
