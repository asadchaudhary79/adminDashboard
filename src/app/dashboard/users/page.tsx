"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import {
  UserPlus,
  Users,
  TrendingUp,
  Briefcase,
  Building,
  ShieldCheck,
  UserCog,
} from "lucide-react";
import { AddNewUser } from "@/components/modals/AddNewUser";
import { useState } from "react";

// Dummy data for demonstration
const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "jobseeker",
    status: "active",
    joinedDate: "2024-01-15",
    lastActive: "2 hours ago",
    applications: 12,
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
    company: "Freelance Developer",
    verified: true,
    twoFactorEnabled: false,
    lastLogin: "2024-01-20 14:30",
    loginCount: 45,
    ipAddress: "192.168.1.100",
    userAgent: "Chrome 120.0.0.0 on Windows 11",
    preferences: {
      notifications: true,
      emailUpdates: true,
      privacyLevel: "public",
    },
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@company.com",
    role: "recruiter",
    status: "active",
    joinedDate: "2024-02-01",
    lastActive: "5 mins ago",
    applications: 0,
    phone: "+1 (555) 987-6543",
    location: "San Francisco, CA",
    company: "Tech Corp",
    verified: true,
    twoFactorEnabled: true,
    lastLogin: "2024-01-20 15:45",
    loginCount: 23,
    ipAddress: "192.168.1.101",
    userAgent: "Safari 17.0 on macOS 14",
    preferences: {
      notifications: false,
      emailUpdates: true,
      privacyLevel: "private",
    },
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@admin.com",
    role: "admin",
    status: "active",
    joinedDate: "2023-12-10",
    lastActive: "1 day ago",
    applications: 0,
    phone: "+1 (555) 456-7890",
    location: "Austin, TX",
    company: "Admin Dashboard Inc",
    verified: true,
    twoFactorEnabled: true,
    lastLogin: "2024-01-19 09:15",
    loginCount: 156,
    ipAddress: "192.168.1.102",
    userAgent: "Firefox 121.0 on Ubuntu 22.04",
    preferences: {
      notifications: true,
      emailUpdates: false,
      privacyLevel: "admin",
    },
  },
  {
    id: "4",
    name: "Sarah Wilson",
    email: "sarah@example.com",
    role: "jobseeker",
    status: "suspended",
    joinedDate: "2024-01-20",
    lastActive: "1 month ago",
    applications: 5,
    phone: "+1 (555) 789-0123",
    location: "Chicago, IL",
    company: "Design Studio",
    verified: false,
    twoFactorEnabled: false,
    lastLogin: "2023-12-20 11:20",
    loginCount: 12,
    ipAddress: "192.168.1.103",
    userAgent: "Edge 120.0 on Windows 10",
    preferences: {
      notifications: true,
      emailUpdates: true,
      privacyLevel: "public",
    },
  },
];

export default function UsersPage() {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Users Management</h1>
          <p className="text-muted-foreground">
            Manage and monitor all platform users
          </p>
        </div>
        <Button
          className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all sm:w-auto w-full"
          onClick={() => setIsAddUserOpen(true)}
        >
          <UserPlus className="mr-2 h-4 w-4" />
          Add New User
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Total Users
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">1,234</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                +15.3% from last month
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Active Users
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <UserCog className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">856</div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="font-semibold text-green-600 dark:text-green-400">69%</span> of total users
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Recruiters
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Building className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">324</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                +8.2% from last month
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Job Seekers
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">910</div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="font-semibold text-orange-600 dark:text-orange-400">74%</span> of total users
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={users}
            searchColumn="name"
            searchPlaceholder="Filter users..."
            filterableColumns={[
              {
                id: "role",
                title: "Role",
                options: [
                  { label: "Admin", value: "admin" },
                  { label: "Recruiter", value: "recruiter" },
                  { label: "Job Seeker", value: "jobseeker" },
                ],
              },
              {
                id: "status",
                title: "Status",
                options: [
                  { label: "Active", value: "active" },
                  { label: "Suspended", value: "suspended" },
                ],
              },
            ]}
          />
        </CardContent>
      </Card>

      <AddNewUser
        isOpen={isAddUserOpen}
        onClose={() => setIsAddUserOpen(false)}
      />
    </div>
  );
}
