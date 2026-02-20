import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { LegalDashboard } from "./pages/LegalDashboard";
import { AiCaseCopilot } from "./pages/AiCaseCopilot";
import { CaseManagement } from "./pages/CaseManagement";
import { Documents } from "./pages/Documents";
import { LegalResearch } from "./pages/LegalResearch";
import { Tasks } from "./pages/Tasks";
import { Settings } from "./pages/Settings";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />{" "}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              localStorage.getItem("token") ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/legal-dashboard"
            element={
              localStorage.getItem("token") ? (
                <LegalDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/ai-case-copilot"
            element={
              localStorage.getItem("token") ? (
                <AiCaseCopilot />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/case-management"
            element={
              localStorage.getItem("token") ? (
                <CaseManagement />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/documents"
            element={
              localStorage.getItem("token") ? (
                <Documents />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/legal-research"
            element={
              localStorage.getItem("token") ? (
                <LegalResearch />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/tasks"
            element={
              localStorage.getItem("token") ? (
                <Tasks />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/settings"
            element={
              localStorage.getItem("token") ? (
                <Settings />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
