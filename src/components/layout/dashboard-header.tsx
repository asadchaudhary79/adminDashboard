"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Bell,
  ChevronDown,
  User,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
} from "lucide-react";

type DashboardHeaderProps = {
  onToggleSidebar: () => void;
};

const DashboardHeader = ({ onToggleSidebar }: DashboardHeaderProps) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const notificationBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // For user menu
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false);
      }

      // For notifications - exclude the notification button from closing
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target as Node) &&
        !notificationBtnRef.current?.contains(event.target as Node)
      ) {
        setNotificationsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNotificationClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setNotificationsOpen(!notificationsOpen);
  };

  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-border bg-background dark:bg-dark-navy">
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="sm"
            className="mr-2 md:hidden p-2"
            onClick={onToggleSidebar}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative" ref={notificationsRef}>
            <Button
              variant="ghost"
              size="sm"
              ref={notificationBtnRef}
              onClick={handleNotificationClick}
              className="relative p-2 hover:bg-dark-navy-hover"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
              <span className="sr-only">Notifications</span>
            </Button>

            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 rounded-none shadow-lg py-1 bg-card dark:bg-dark-navy border border-border z-50">
                <div className="px-4 py-2 border-b border-border">
                  <h3 className="text-sm font-medium">Notifications</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="px-4 py-3 hover:bg-dark-navy-hover border-b border-border/50 last:border-b-0"
                    >
                      <p className="text-sm font-medium">New invoice paid</p>
                      <p className="text-xs text-muted-foreground">
                        Client XYZ paid invoice #10{item}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        2 hour{item} ago
                      </p>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-2 border-t border-border">
                  <Link
                    href="/dashboard/notifications"
                    className="text-xs text-primary hover:underline"
                  >
                    View all notifications
                  </Link>
                </div>
              </div>
            )}
          </div>

          <ThemeToggle />

          {/* User Profile */}
          <div className="relative" ref={userMenuRef}>
            <button
              type="button"
              className="flex items-center space-x-2 text-sm hover:bg-dark-navy-hover p-2 rounded-md"
              onClick={() => setUserMenuOpen(!userMenuOpen)}
            >
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-4 w-4 text-primary" />
              </div>
              <span className="hidden md:block font-medium">John Doe</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-none shadow-lg py-1 bg-card dark:bg-dark-navy border border-border z-50">
                <div className="px-4 py-2 border-b border-border">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">
                    john@example.com
                  </p>
                </div>
                <Link
                  href="/dashboard/profile"
                  className="flex items-center px-4 py-2 text-sm hover:bg-dark-navy-hover transition-colors"
                >
                  <User className="h-4 w-4 mr-2 text-muted-foreground" />
                  Your Profile
                </Link>
                <Link
                  href="/dashboard/settings"
                  className="flex items-center px-4 py-2 text-sm hover:bg-dark-navy-hover transition-colors"
                >
                  <Settings className="h-4 w-4 mr-2 text-muted-foreground" />
                  Settings
                </Link>
                <Link
                  href="/help"
                  className="flex items-center px-4 py-2 text-sm hover:bg-dark-navy-hover transition-colors"
                >
                  <HelpCircle className="h-4 w-4 mr-2 text-muted-foreground" />
                  Help & Support
                </Link>
                <div className="border-t border-border mt-1 pt-1">
                  <button
                    className="flex w-full items-center px-4 py-2 text-sm text-destructive hover:bg-dark-navy-hover transition-colors"
                    onClick={() => {
                      // Logout logic here
                    }}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
