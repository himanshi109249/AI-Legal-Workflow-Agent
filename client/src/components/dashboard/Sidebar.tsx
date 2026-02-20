import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Bot,
  Briefcase,
  FileText,
  Search,
  CheckSquare,
  Settings,
  ChevronLeft,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/legal-dashboard" },
  { icon: Bot, label: "AI Case Copilot", href: "/ai-case-copilot" },
  { icon: Briefcase, label: "Case Management", href: "/case-management" },
  { icon: FileText, label: "Documents", href: "/documents" },
  { icon: Search, label: "Legal Research", href: "/legal-research" },
  { icon: CheckSquare, label: "Tasks", href: "/tasks" },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const NavContent = ({ isMobile = false, isCollapsed = false }: { isMobile?: boolean; isCollapsed?: boolean }) => (
    <nav className="flex flex-col gap-1 p-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.href;
        return (
          <NavLink
            key={item.label}
            to={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              isActive
                ? "bg-teal-500/90 text-white"
                : "text-gray-400 hover:bg-gray-700/50 hover:text-gray-200"
            )}
          >
            <Icon className="h-5 w-5 shrink-0" />
            {(!isMobile && !isCollapsed) && <span>{item.label}</span>}
          </NavLink>
        );
      })}
      <div className="mt-auto pt-8">
        <NavLink
          to="/settings"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
            location.pathname === "/settings"
              ? "bg-teal-500/90 text-white"
              : "text-gray-400 hover:bg-gray-700/50 hover:text-gray-200"
          )}
        >
          <Settings className="h-5 w-5 shrink-0" />
          {(!isMobile && !isCollapsed) && <span>Settings</span>}
        </NavLink>
      </div>
    </nav>
  );

  return (
    <>
      {/* Mobile trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed left-4 top-4 z-50 lg:hidden bg-white border border-gray-200 shadow-sm hover:bg-gray-50"
          >
            <Menu className="h-5 w-5 text-gray-700" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0 bg-[#1A1A1A] border-0">
          <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-teal-500/20 flex items-center justify-center">
                <LayoutDashboard className="h-4 w-4 text-teal-400" />
              </div>
              <span className="font-semibold text-white">AI Legal</span>
            </div>
          </div>
          <NavContent isMobile />
        </SheetContent>
      </Sheet>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col fixed left-0 top-0 h-full bg-[#1A1A1A] text-gray-300 transition-all duration-300 z-40",
          collapsed ? "w-[72px]" : "w-64"
        )}
      >
        <div className={cn("flex items-center border-b border-gray-700/50 shrink-0", collapsed ? "justify-center p-3" : "justify-between p-4")}>
          {!collapsed && (
            <div className="flex items-center gap-2 min-w-0">
              <div className="h-8 w-8 rounded-lg bg-teal-500/20 flex items-center justify-center shrink-0">
                <LayoutDashboard className="h-4 w-4 text-teal-400" />
              </div>
              <span className="font-semibold text-white truncate">AI Legal Workflow</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-gray-200 transition-colors"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <ChevronLeft
              className={cn("h-5 w-5 transition-transform", collapsed && "rotate-180")}
            />
          </button>
        </div>
        <NavContent isCollapsed={collapsed} />
      </aside>
    </>
  );
}
