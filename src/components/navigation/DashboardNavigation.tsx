import {
  LayoutDashboard,
  UserCog,
  Settings,
  Building2,
  FileText,
  FolderKanban,
  Mailbox,
  Wallet,
} from "lucide-react";

export interface DashboardNavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
  label?: string;
  badge?: string | number;
}

export interface DashboardNavigationSection {
  title?: string;
  items: DashboardNavigationItem[];
}

export const getDashboardNavigation = (): DashboardNavigationSection[] => {
  return [
    {
      title: "OVERVIEW",
      items: [
        {
          name: "Dashboard",
          href: "/dashboard",
          icon: LayoutDashboard,
          description: "Overview and statistics",
        },
      ],
    },
    {
      title: "MANAGEMENT",
      items: [
        {
          name: "Users Management",
          href: "/dashboard/users",
          icon: UserCog,
          description: "Manage all platform users",
          label: "Users",
        },
        {
          name: "Companies",
          href: "/dashboard/companies",
          icon: Building2,
          description: "Manage registered companies",
          label: "Companies",
          badge: 10,
        },
        {
          name: "Jobs",
          href: "/dashboard/jobs",
          icon: FolderKanban,
          description: "Manage job postings",
          label: "Jobs",
          badge: 12,
        },
      ],
    },
    {
      title: "CONTENT",
      items: [
        {
          name: "Blogs",
          href: "/dashboard/blog",
          icon: FileText,
          description: "Manage blog posts",
        },
        {
          name: "Email",
          href: "/dashboard/email",
          icon: Mailbox,
          description: "Email templates and sending",
        },
      ],
    },
    {
      title: "SETTINGS",
      items: [
        {
          name: "Billing",
          href: "/dashboard/billing",
          icon: Wallet,
          description: "Plans, invoices, and payments",
        },
        {
          name: "Settings",
          href: "/dashboard/settings",
          icon: Settings,
          description: "Admin settings and configuration",
        },
      ],
    },
  ];
};
