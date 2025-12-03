"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Building2,
  CheckCircle2,
  AlertCircle,
  Building,
  TrendingUp,
} from "lucide-react";
import { AddNewCompany } from "@/components/modals/AddNewCompany";
import { useState } from "react";
import { DataTable } from "@/components/ui/data-table";
import { columns, Company } from "./columns";

const companies: Company[] = [
  {
    id: "1000",
    name: "TechCorp Solutions",
    industry: "Technology",
    location: "San Francisco, CA",
    status: "verified",
    jobs: 45,
    joinedDate: "2024-01-15",
  },
  {
    id: "1001",
    name: "HealthCare Plus",
    industry: "Healthcare",
    location: "Boston, MA",
    status: "verified",
    jobs: 32,
    joinedDate: "2024-01-20",
  },
  {
    id: "1002",
    name: "FinanceHub Inc",
    industry: "Finance",
    location: "New York, NY",
    status: "pending",
    jobs: 18,
    joinedDate: "2024-01-25",
  },
  {
    id: "1003",
    name: "EduTech Innovations",
    industry: "Education",
    location: "Austin, TX",
    status: "verified",
    jobs: 28,
    joinedDate: "2024-02-01",
  },
  {
    id: "1004",
    name: "Startup Labs",
    industry: "Technology",
    location: "Seattle, WA",
    status: "pending",
    jobs: 12,
    joinedDate: "2024-02-05",
  },
];

export default function CompaniesPage() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Companies</h1>
          <p className="text-muted-foreground">
            Manage and monitor all registered companies
          </p>
        </div>
        <Button
          className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all sm:w-auto w-full"
          onClick={() => setIsAddModalOpen(true)}
        >
          <Building className="mr-2 h-4 w-4" />
          Add New Company
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Total Companies
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Building2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">1,234</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                +12 from last month
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Verified Companies
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">892</div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="font-semibold text-green-600 dark:text-green-400">
                72%
              </span>{" "}
              of total companies
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Pending Verification
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">342</div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="font-semibold text-amber-600 dark:text-amber-400">
                28%
              </span>{" "}
              of total companies
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Companies Table */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>All Companies</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={companies}
            searchColumn="name"
            searchPlaceholder="Filter companies..."
            filterableColumns={[
              {
                id: "industry",
                title: "Industry",
                options: [
                  { label: "Technology", value: "Technology" },
                  { label: "Healthcare", value: "Healthcare" },
                  { label: "Finance", value: "Finance" },
                  { label: "Education", value: "Education" },
                ],
              },
              {
                id: "status",
                title: "Status",
                options: [
                  { label: "Verified", value: "verified" },
                  { label: "Pending", value: "pending" },
                  { label: "Rejected", value: "rejected" },
                ],
              },
            ]}
          />
        </CardContent>
      </Card>

      <AddNewCompany
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </div>
  );
}
