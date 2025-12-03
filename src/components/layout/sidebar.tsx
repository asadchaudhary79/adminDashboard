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
        "relative h-screen flex flex-col border-r border-border bg-background transition-all duration-200 ease-in-out",
        isCollapsed ? "w-[80px]" : "w-[280px]",
        className
      )}
    >
      <div className="relative h-16 flex items-center px-5 border-b border-border overflow-visible">
        <Link href="/dashboard" className="flex items-center space-x-3 group">
          <FileText className="h-7 w-7 text-primary transition-colors shrink-0" />
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
            "absolute -right-4 z-[100] w-8 h-8 p-0 flex items-center justify-center rounded-full border-2 border-border bg-background hover:bg-accent hover:border-primary transition-all duration-200 ease-in-out shadow-lg hover:shadow-xl",
            isCollapsed ? "-rotate-180" : "rotate-0"
          )}
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft className="h-4 w-4 text-foreground font-semibold" />
        </Button>
      </div>

      <nav
        className={cn(
          "flex-1 px-3 py-5 space-y-4 overflow-y-auto",
          "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
          isCollapsed && "overflow-hidden"
        )}
      >
        {navigationItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-1">
            {section.title && !isCollapsed && (
              <div className="px-4 py-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {section.title}
                </span>
              </div>
            )}
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return isCollapsed ? (
                <TooltipProvider key={item.name} delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-center px-4 py-3 rounded-lg text-[15px] font-medium transition-colors duration-200 ease-in-out group relative",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "hover:bg-accent hover:text-accent-foreground"
                        )}
                      >
                        {isActive && (
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-1 h-8 bg-primary rounded-r-full" />
                        )}
                        <item.icon
                          className={cn(
                            "h-6 w-6 transition-colors shrink-0",
                            isActive
                              ? "text-primary"
                              : "text-muted-foreground group-hover:text-current"
                          )}
                        />
                        {item.badge && (
                          <span
                            className={cn(
                              "absolute -top-1 -right-1 z-10 flex items-center justify-center font-bold rounded-full bg-primary text-primary-foreground leading-none",
                              typeof item.badge === "number" && item.badge > 9
                                ? "w-6 h-6 text-[11px]"
                                : "w-5 h-5 text-[10px]"
                            )}
                          >
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" sideOffset={10}>
                      {item.name}
                      {item.badge && ` (${item.badge})`}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-lg text-[15px] font-medium transition-colors duration-200 ease-in-out group relative",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-1 h-10 bg-primary rounded-r-full" />
                  )}
                  <item.icon
                    className={cn(
                      "h-6 w-6 transition-colors shrink-0 mr-3",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground group-hover:text-current"
                    )}
                  />
                  <div className="overflow-hidden flex-1 flex items-center justify-between">
                    <span
                      className={cn(
                        "whitespace-nowrap inline-block transition-all duration-300 ease-in-out font-semibold",
                        isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                      )}
                    >
                      {item.name}
                    </span>
                    {item.badge && !isCollapsed && (
                      <span
                        className={cn(
                          "ml-2 z-10 flex items-center justify-center font-semibold rounded-full bg-primary/20 text-primary leading-none",
                          typeof item.badge === "number" && item.badge > 9
                            ? "w-6 h-6 text-[11px]"
                            : "w-5 h-5 text-[10px]"
                        )}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {isActive && !item.badge && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-2 h-2 bg-primary rounded-full opacity-60" />
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="p-3 space-y-2 border-t border-border">
        {isCollapsed ? (
          <>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/help"
                    className="flex items-center justify-center px-4 py-3 rounded-lg text-[15px] font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 ease-in-out relative"
                  >
                    <HelpCircle className="h-6 w-6 shrink-0 transition-colors" />
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
                    className="w-full justify-center px-4 py-3 h-auto text-muted-foreground hover:text-destructive hover:border-destructive/50 transition-colors duration-200 ease-in-out rounded-lg"
                    onClick={() => {
                      // Logout logic here
                    }}
                  >
                    <LogOut className="h-6 w-6 shrink-0 transition-colors" />
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
              className="flex items-center px-4 py-3 rounded-lg text-[15px] font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors duration-200 ease-in-out"
            >
              <HelpCircle className="h-6 w-6 shrink-0 mr-4 transition-colors" />
              <div className="overflow-hidden">
                <span
                  className={cn(
                    "whitespace-nowrap inline-block transition-all duration-300 ease-in-out font-semibold",
                    isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
                  )}
                >
                  Help & Support
                </span>
              </div>
            </Link>

            <Button
              variant="outline"
              className="w-full justify-start px-4 py-3 h-auto text-[15px] text-muted-foreground hover:text-destructive hover:border-destructive/50 transition-colors duration-200 ease-in-out rounded-lg font-semibold"
              onClick={() => {
                // Logout logic here
              }}
            >
              <LogOut className="h-6 w-6 shrink-0 mr-4 transition-colors" />
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
