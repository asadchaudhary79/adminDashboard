import {
  Home,
  Users,
  Settings,
  Building,
  Book,
  Briefcase,
  ClipboardList,
  Users2,
  Folder,
  BarChart3,
  Bell,
  Mail,
  CreditCard,
  Plug,
  FileCog,
} from "lucide-react";

export interface DashboardNavigationItem {
  name: string;
  href: string;
  icon: any;
  description?: string;
}

export const getDashboardNavigation = (): DashboardNavigationItem[] => {
  // Admin specific items only
  const adminItems: DashboardNavigationItem[] = [
    {
      name: "Admin Dashboard",
      href: "/dashboard",
      icon: Home,
      description: "Overview and statistics",
    },
    {
      name: "Users Management",
      href: "/dashboard/users",
      icon: Users,
      description: "Manage all platform users",
    },
    {
      name: "Companies",
      href: "/dashboard/companies",
      icon: Building,
      description: "Manage registered companies",
    },
    {
      name: "Jobs",
      href: "/dashboard/jobs",
      icon: Briefcase,
      description: "Manage job postings",
    },
    {
      name: "Applications",
      href: "/dashboard/applications",
      icon: ClipboardList,
      description: "Review and process applications",
    },

    {
      name: "Blogs",
      href: "/dashboard/blog",
      icon: Book,
      description: "Manage blog posts",
    },
    {
      name: "Email",
      href: "/dashboard/email",
      icon: Mail,
      description: "Email templates and sending",
    },
    {
      name: "Billing",
      href: "/dashboard/billing",
      icon: CreditCard,
      description: "Plans, invoices, and payments",
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
      description: "Admin settings and configuration",
    },
  ];

  // Return admin items for all roles (since we only want admin menu)
  return adminItems;
};
