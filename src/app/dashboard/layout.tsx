import DashboardLayout from "@/components/layout/dashboard-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Job FInder",
  description: "Manage your invoices, clients, and payments",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
