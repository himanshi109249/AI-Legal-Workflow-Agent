import { Sidebar } from "@/components/dashboard/Sidebar";
import { FileText, Upload, Search, Filter, Download, Eye, MoreVertical, Folder, File } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const documents = [
  {
    id: 1,
    name: "Employment Contract - Draft.pdf",
    type: "Contract",
    caseId: "248",
    size: "2.4 MB",
    uploaded: "2024-02-15",
    status: "reviewed",
    category: "Contracts",
  },
  {
    id: 2,
    name: "Motion to Dismiss.docx",
    type: "Motion",
    caseId: "247",
    size: "156 KB",
    uploaded: "2024-02-14",
    status: "pending",
    category: "Court Filings",
  },
  {
    id: 3,
    name: "Client Interview Notes.pdf",
    type: "Notes",
    caseId: "248",
    size: "892 KB",
    uploaded: "2024-02-13",
    status: "reviewed",
    category: "Notes",
  },
  {
    id: 4,
    name: "Affidavit of Service.pdf",
    type: "Affidavit",
    caseId: "246",
    size: "1.2 MB",
    uploaded: "2024-02-12",
    status: "signed",
    category: "Court Filings",
  },
  {
    id: 5,
    name: "Legal Research Summary.docx",
    type: "Research",
    caseId: "245",
    size: "3.1 MB",
    uploaded: "2024-02-11",
    status: "draft",
    category: "Research",
  },
  {
    id: 6,
    name: "Settlement Agreement.pdf",
    type: "Agreement",
    caseId: "244",
    size: "4.8 MB",
    uploaded: "2024-02-10",
    status: "signed",
    category: "Contracts",
  },
];

const statusColors = {
  reviewed: "bg-emerald-500/10 text-emerald-600",
  pending: "bg-amber-500/10 text-amber-600",
  signed: "bg-blue-500/10 text-blue-600",
  draft: "bg-gray-500/10 text-gray-600",
};

const categories = ["All", "Contracts", "Court Filings", "Notes", "Research"];

export function Documents() {
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
                  <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-amber-600" />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Documents</h1>
                </div>
                <p className="text-sm text-gray-500 sm:text-base">
                  Manage and organize all your legal documents
                </p>
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search documents..."
                  className="pl-10 bg-white border-gray-200"
                />
              </div>
              <Button variant="outline" className="border-gray-200 bg-white">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={
                    category === "All"
                      ? "bg-teal-600 hover:bg-teal-700 text-white"
                      : "border-gray-200 bg-white hover:bg-gray-50"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Documents List */}
          <Card className="shadow-sm border-gray-100">
            <CardHeader>
              <CardTitle className="text-lg">All Documents</CardTitle>
              <CardDescription>{documents.length} documents found</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50/80 transition-colors group"
                  >
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                      <File className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 truncate">{doc.name}</h3>
                        <Badge className={statusColors[doc.status as keyof typeof statusColors]}>
                          {doc.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{doc.category}</span>
                        <span>•</span>
                        <span>Case #{doc.caseId}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.uploaded}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                        <Download className="h-4 w-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
