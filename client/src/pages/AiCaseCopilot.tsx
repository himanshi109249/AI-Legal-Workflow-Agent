import { Sidebar } from "@/components/dashboard/Sidebar";
import { Bot, MessageSquare, Sparkles, FileText, Clock, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const recentConversations = [
  {
    id: 1,
    title: "Contract Review - Case #248",
    preview: "Analyzed the employment contract and identified 3 potential issues...",
    time: "2 hours ago",
    icon: FileText,
  },
  {
    id: 2,
    title: "Legal Precedent Research",
    preview: "Found 5 relevant cases matching your search criteria...",
    time: "5 hours ago",
    icon: TrendingUp,
  },
  {
    id: 3,
    title: "Document Drafting Assistance",
    preview: "Generated initial draft for the motion to dismiss...",
    time: "Yesterday",
    icon: Sparkles,
  },
];

const quickActions = [
  { icon: FileText, label: "Review Document", color: "bg-blue-500/10 text-blue-600" },
  { icon: Search, label: "Research Case Law", color: "bg-emerald-500/10 text-emerald-600" },
  { icon: Sparkles, label: "Generate Summary", color: "bg-teal-500/10 text-teal-600" },
  { icon: Clock, label: "Check Deadlines", color: "bg-amber-500/10 text-amber-600" },
];

export function AiCaseCopilot() {
  return (
    <div className="min-h-screen bg-gray-50/80">
      <Sidebar />

      <main className="lg:pl-64 min-h-screen transition-[padding] duration-300">
        <div className="p-4 pt-16 lg:pt-6 lg:p-6 lg:max-w-7xl lg:mx-auto">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                <Bot className="h-5 w-5 text-teal-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">AI Case Copilot</h1>
            </div>
            <p className="text-sm text-gray-500 sm:text-base">
              Get AI-powered assistance for your legal cases and research
            </p>
          </div>

          {/* Chat Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <Card className="shadow-sm border-gray-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-teal-600" />
                    Chat with AI Copilot
                  </CardTitle>
                  <CardDescription>
                    Ask questions, get insights, or request document analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-4">
                    <div className="flex gap-3">
                      <div className="h-8 w-8 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0">
                        <Bot className="h-4 w-4 text-teal-600" />
                      </div>
                      <div className="flex-1 rounded-lg bg-gray-50 p-3">
                        <p className="text-sm text-gray-700">
                          Hello! I'm your AI Case Copilot. How can I assist you today? I can help with document review, legal research, case analysis, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Type your message here..."
                      className="min-h-[100px] resize-none"
                    />
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                      Send
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div>
              <Card className="shadow-sm border-gray-100">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {quickActions.map((action) => {
                      const Icon = action.icon;
                      return (
                        <button
                          key={action.label}
                          className={`w-full flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50 ${action.color}`}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="text-sm font-medium">{action.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Recent Conversations */}
          <Card className="shadow-sm border-gray-100">
            <CardHeader>
              <CardTitle className="text-lg">Recent Conversations</CardTitle>
              <CardDescription>Continue your previous AI interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentConversations.map((conv) => {
                  const Icon = conv.icon;
                  return (
                    <div
                      key={conv.id}
                      className="flex items-start gap-4 rounded-lg p-4 border border-gray-100 hover:bg-gray-50/80 transition-colors cursor-pointer"
                    >
                      <div className="h-10 w-10 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-teal-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900">{conv.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{conv.preview}</p>
                        <p className="text-xs text-gray-400 mt-2">{conv.time}</p>
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
