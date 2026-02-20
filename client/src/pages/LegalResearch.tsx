import { Sidebar } from "@/components/dashboard/Sidebar";
import { Search, BookOpen, FileText, TrendingUp, Filter, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const researchResults = [
  {
    id: 1,
    title: "Smith v. Johnson (2023)",
    court: "Supreme Court",
    relevance: 95,
    summary: "Landmark case regarding employment contract disputes and breach of contract claims.",
    category: "Contract Law",
    date: "2023-05-15",
    citations: 12,
  },
  {
    id: 2,
    title: "Davis v. Corporation Inc. (2022)",
    court: "Appellate Court",
    relevance: 88,
    summary: "Precedent-setting decision on intellectual property rights in corporate settings.",
    category: "IP Law",
    date: "2022-11-20",
    citations: 8,
  },
  {
    id: 3,
    title: "State v. Anderson (2023)",
    court: "District Court",
    relevance: 82,
    summary: "Recent ruling on real estate transaction disputes and disclosure requirements.",
    category: "Real Estate Law",
    date: "2023-08-10",
    citations: 15,
  },
  {
    id: 4,
    title: "Brown v. White (2022)",
    court: "Supreme Court",
    relevance: 75,
    summary: "Important case law on family law matters and custody arrangements.",
    category: "Family Law",
    date: "2022-03-22",
    citations: 6,
  },
];

const savedSearches = [
  { id: 1, query: "employment contract breach", count: 24 },
  { id: 2, query: "intellectual property corporate", count: 18 },
  { id: 3, query: "real estate disclosure", count: 12 },
];

export function LegalResearch() {
  return (
    <div className="min-h-screen bg-gray-50/80">
      <Sidebar />

      <main className="lg:pl-64 min-h-screen transition-[padding] duration-300">
        <div className="p-4 pt-16 lg:pt-6 lg:p-6 lg:max-w-7xl lg:mx-auto">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Search className="h-5 w-5 text-emerald-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Legal Research</h1>
            </div>
            <p className="text-sm text-gray-500 sm:text-base">
              Search case law, precedents, and legal documents
            </p>
          </div>

          {/* Search Bar */}
          <Card className="shadow-sm border-gray-100 mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search case law, statutes, or legal precedents..."
                    className="pl-10 h-12 bg-white border-gray-200 text-base"
                  />
                </div>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white h-12 px-6">
                  Search
                </Button>
                <Button variant="outline" className="border-gray-200 bg-white h-12">
                  <Filter className="h-4 w-4 mr-2" />
                  Advanced
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Results */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Search Results ({researchResults.length})
                </h2>
                <Button variant="outline" size="sm" className="border-gray-200 bg-white">
                  Sort by Relevance
                </Button>
              </div>

              <div className="space-y-4">
                {researchResults.map((result) => (
                  <Card key={result.id} className="shadow-sm border-gray-100 hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-lg">{result.title}</CardTitle>
                            <Badge className="bg-emerald-500/10 text-emerald-600">
                              {result.relevance}% match
                            </Badge>
                          </div>
                          <CardDescription className="text-sm">
                            {result.court} • {result.date}
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-yellow-500">
                            <Star className="h-4 w-4" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-600">
                            <ExternalLink className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">{result.summary}</p>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-blue-500/10 text-blue-600">{result.category}</Badge>
                        <span className="text-sm text-gray-500">
                          {result.citations} citations
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Saved Searches */}
              <Card className="shadow-sm border-gray-100">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-teal-600" />
                    Saved Searches
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {savedSearches.map((search) => (
                      <button
                        key={search.id}
                        className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <p className="text-sm font-medium text-gray-900">{search.query}</p>
                        <p className="text-xs text-gray-500 mt-1">{search.count} results</p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Research Stats */}
              <Card className="shadow-sm border-gray-100">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Research Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">156</p>
                      <p className="text-sm text-gray-500">Cases Reviewed</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">42</p>
                      <p className="text-sm text-gray-500">Precedents Found</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">89%</p>
                      <p className="text-sm text-gray-500">Avg. Relevance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
