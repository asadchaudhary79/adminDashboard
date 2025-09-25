"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import {
  UserPlus,
  Users,
  ArrowUpRight,
  Briefcase,
  Building,
  ShieldCheck,
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
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 ">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card p-6 rounded-xl shadow-sm mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Users Management
            </h1>
            <p className="text-muted-foreground">
              Manage and monitor user accounts
            </p>
          </div>
          <Button
            className="md:w-auto w-full bg-gradient-to-r from-primary to-primary/80"
            onClick={() => setIsAddUserOpen(true)}
          >
            <UserPlus className="mr-2 h-4 w-4" />
            Add New User
          </Button>
        </div>

        {/* Stats Grid */}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Users Card */}
          <Card className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Users
                </p>
                <h3 className="text-2xl font-bold mt-2">1,234</h3>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>+15.3%</span>
                </div>
              </div>
              <div className="bg-primary/10 p-2 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          {/* Active User Card */}
          <Card className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Active Users
                </p>
                <h3 className="text-2xl font-bold mt-2">856</h3>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>+12.5%</span>
                </div>
              </div>
              <div className="bg-primary/10 p-2 rounded-lg">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          {/* Recruiter Card */}
          <Card className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Recruiter
                </p>
                <h3 className="text-2xl font-bold mt-2">324</h3>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  <span>+8.2%</span>
                </div>
              </div>
              <div className="bg-primary/10 p-2 rounded-lg">
                <Building className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          {/* Job Seeker Card */}
          <Card className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Job Seeker
                </p>
                <h3 className="text-2xl font-bold mt-2">245</h3>
                <div className="flex items-center mt-1 text-green-500 text-sm">
                  <ShieldCheck className="h-4 w-4 mr-1" />
                  <span>+8.2%</span>
                </div>
              </div>
              <div className="bg-green-100 p-2 rounded-lg dark:bg-green-900/30">
                <ShieldCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content */}
        <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm mt-7">
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
    </div>
  );
}
