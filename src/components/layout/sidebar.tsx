"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { FileText, HelpCircle, LogOut, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getDashboardNavigation } from "@/components/navigation/DashboardNavigation";

const Sidebar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigationItems = getDashboardNavigation();

  return (
    <div
      className={cn(
        "relative h-screen flex flex-col border-r border-border bg-background transition-all duration-300 ease-in-out",
        isCollapsed ? "w-[80px]" : "w-[280px]",
        className
      )}
    >
      <div className="relative h-16 flex items-center px-5 border-b border-border">
        <Link href="/dashboard" className="flex items-center space-x-3 group">
          <FileText className="h-7 w-7 text-primary group-hover:scale-110 transition-transform shrink-0" />
          <div className="overflow-hidden">
            <span
              className={cn(
                "font-bold text-xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent whitespace-nowrap inline-block transition-all duration-300 ease-in-out",
                isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
              )}
            >
              Admin Dashboard
            </span>
          </div>
        </Link>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "absolute -right-4 z-50 w-8 h-8 p-0 flex items-center justify-center rounded-full border border-border bg-background hover:bg-accent/80 transition-all duration-300 ease-in-out shadow-md",
            isCollapsed ? "-rotate-180" : "rotate-0"
          )}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <ChevronLeft className="h-4 w-4 text-muted-foreground" />
        </Button>
      </div>

      <nav className="flex-1 px-3 py-5 space-y-2 overflow-y-auto">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          return isCollapsed ? (
            <TooltipProvider key={item.name} delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-md text-[15px] font-medium transition-all duration-300 ease-in-out group relative",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-accent hover:text-accent-foreground"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "h-6 w-6 transition-colors shrink-0",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-current"
                      )}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={10}>
                  {item.name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center px-4 py-3 rounded-md text-[15px] font-medium transition-all duration-300 ease-in-out group relative",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "h-6 w-6 transition-colors shrink-0 mr-4",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground group-hover:text-current"
                )}
              />
              <div className="overflow-hidden">
                <span
                  className={cn(
                    "whitespace-nowrap inline-block transition-all duration-300 ease-in-out",
                    isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                  )}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-3 space-y-2">
        {isCollapsed ? (
          <>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/help"
                    className="flex items-center px-4 py-3 rounded-md text-[15px] font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out relative"
                  >
                    <HelpCircle className="h-6 w-6 shrink-0" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={10}>
                  Help & Support
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-center px-4 py-3 h-auto text-muted-foreground hover:text-destructive hover:border-destructive/50 transition-all duration-300 ease-in-out"
                    onClick={() => {
                      // Logout logic here
                    }}
                  >
                    <LogOut className="h-6 w-6 shrink-0" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={10}>
                  Log out
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </>
        ) : (
          <>
            <Link
              href="/help"
              className="flex items-center px-4 py-3 rounded-md text-[15px] font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out"
            >
              <HelpCircle className="h-6 w-6 shrink-0 mr-4" />
              <div className="overflow-hidden">
                <span
                  className={cn(
                    "whitespace-nowrap inline-block transition-all duration-300 ease-in-out",
                    isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                  )}
                >
                  Help & Support
                </span>
              </div>
            </Link>

            <Button
              variant="outline"
              className="w-full justify-start px-4 py-3 h-auto text-[15px] text-muted-foreground hover:text-destructive hover:border-destructive/50 transition-all duration-300 ease-in-out"
              onClick={() => {
                // Logout logic here
              }}
            >
              <LogOut className="h-6 w-6 shrink-0 mr-4" />
              <div className="overflow-hidden">
                <span
                  className={cn(
                    "whitespace-nowrap inline-block transition-all duration-300 ease-in-out",
                    isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                  )}
                >
                  Log out
                </span>
              </div>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
