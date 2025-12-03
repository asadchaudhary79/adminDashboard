"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Removed unused Select components
import {
  Users,
  Briefcase,
  Building2,
  TrendingUp,
  UserCheck,
  FileCheck,
  Calendar,
  Bell,
  Settings,
  Shield,
  AlertTriangle,
  CheckCircle2,
  // Removed unused: Ban, Mail, Plus, Eye,
  Clock,
  // Removed unused: DollarSign,
  MapPin,
  // Removed unused: BarChart3, Activity, Zap, Target,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Search,
  UserPlus,
  FileText,
  // Removed unused: Globe, TrendingDown, Users2,
  Building,
  // Removed unused: CreditCard, PieChartIcon,
} from "lucide-react";
import {
  LineChart,
  Line,
  // Removed unused: BarChart, Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

// Sample data - replace with real data from your API
const monthlyData = [
  { name: "Jan", applications: 65, jobs: 40, companies: 12 },
  { name: "Feb", applications: 78, jobs: 52, companies: 15 },
  { name: "Mar", applications: 90, jobs: 61, companies: 18 },
  { name: "Apr", applications: 105, jobs: 75, companies: 22 },
  { name: "May", applications: 125, jobs: 85, companies: 25 },
  { name: "Jun", applications: 150, jobs: 95, companies: 30 },
];

const jobCategories = [
  { name: "Technology", value: 35 },
  { name: "Healthcare", value: 25 },
  { name: "Finance", value: 20 },
  { name: "Education", value: 15 },
  { name: "Others", value: 5 },
];

const COLORS = ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"];

const recentActivities = [
  {
    id: 1,
    type: "user",
    message: "New user registration: Sarah Johnson",
    time: "2 minutes ago",
    icon: UserCheck,
    color: "text-green-500",
  },
  {
    id: 2,
    type: "job",
    message: "New job posted: Senior React Developer",
    time: "10 minutes ago",
    icon: Briefcase,
    color: "text-blue-500",
  },
  {
    id: 3,
    type: "alert",
    message: "Suspicious login attempt detected",
    time: "25 minutes ago",
    icon: AlertTriangle,
    color: "text-yellow-500",
  },
  {
    id: 4,
    type: "company",
    message: "New company verified: Tech Solutions Inc",
    time: "1 hour ago",
    icon: CheckCircle2,
    color: "text-green-500",
  },
];

// New sample data for additional sections
const geographicData = [
  { country: "United States", users: 45, companies: 23, jobs: 156 },
  { country: "United Kingdom", users: 18, companies: 12, jobs: 89 },
  { country: "Canada", users: 12, companies: 8, jobs: 67 },
  { country: "Germany", users: 15, companies: 9, jobs: 78 },
  { country: "Australia", users: 8, companies: 5, jobs: 45 },
];

const performanceData = [
  { metric: "Page Views", current: 12500, previous: 11800, change: "+5.9%" },
  { metric: "Unique Users", current: 8900, previous: 8200, change: "+8.5%" },
  {
    metric: "Session Duration",
    current: "4m 32s",
    previous: "4m 15s",
    change: "+6.7%",
  },
  { metric: "Bounce Rate", current: "32%", previous: "35%", change: "-8.6%" },
];

const apiUsageData = [
  { endpoint: "/api/users", calls: 15420, avgResponse: "45ms", errors: 12 },
  { endpoint: "/api/jobs", calls: 8920, avgResponse: "67ms", errors: 8 },
  { endpoint: "/api/companies", calls: 4560, avgResponse: "89ms", errors: 5 },
  {
    endpoint: "/api/applications",
    calls: 12340,
    avgResponse: "78ms",
    errors: 15,
  },
];

const upcomingEvents = [
  {
    title: "Monthly Report Due",
    date: "2024-01-31",
    priority: "high",
    type: "report",
  },
  {
    title: "System Maintenance",
    date: "2024-02-02",
    priority: "medium",
    type: "maintenance",
  },
  {
    title: "Team Meeting",
    date: "2024-02-05",
    priority: "low",
    type: "meeting",
  },
  {
    title: "Database Backup",
    date: "2024-02-07",
    priority: "medium",
    type: "backup",
  },
];

const pendingApprovals = [
  { type: "user", count: 23, description: "New user registrations" },
  { type: "company", count: 8, description: "Company verifications" },
  { type: "job", count: 15, description: "Job postings" },
  { type: "content", count: 12, description: "Content moderation" },
];

const financialData = [
  { month: "Jan", revenue: 12500, expenses: 8900, profit: 3600 },
  { month: "Feb", revenue: 13800, expenses: 9200, profit: 4600 },
  { month: "Mar", revenue: 15200, expenses: 9500, profit: 5700 },
  { month: "Apr", revenue: 16800, expenses: 9800, profit: 7000 },
  { month: "May", revenue: 18500, expenses: 10100, profit: 8400 },
  { month: "Jun", revenue: 20300, expenses: 10400, profit: 9900 },
];

export default function AdminPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Header with Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here&apos;s your platform overview
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="bg-background/50 hover:bg-background/80 shadow-sm hover:shadow-md transition-all"
          >
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
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
            <div className="text-3xl font-bold text-foreground">12,345</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                ↑ 12% vs last month
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Active Jobs
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">1,234</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                ↑ 8% vs last month
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Companies
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Building2 className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">567</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                ↑ 15% vs last month
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Applications
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <FileCheck className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">8,901</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                ↑ 18% vs last month
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Pending Approvals & Content Moderation */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gradient-to-br from-background to-background/50 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Pending Approvals
            </CardTitle>
            <CardDescription>Items requiring your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingApprovals.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-amber-500/5 to-amber-500/0 border border-amber-500/10 hover:border-amber-500/30 hover:bg-amber-500/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/20">
                      <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.description}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.count} items pending
                      </p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:bg-amber-500/10 hover:border-amber-500/30"
                  >
                    Review
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-background to-background/50 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Upcoming Events & Deadlines
            </CardTitle>
            <CardDescription>Important dates and reminders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-background/80 to-background/40 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        event.priority === "high"
                          ? "bg-red-500/20"
                          : event.priority === "medium"
                          ? "bg-yellow-500/20"
                          : "bg-blue-500/20"
                      }`}
                    >
                      <Calendar
                        className={`h-4 w-4 ${
                          event.priority === "high"
                            ? "text-red-600 dark:text-red-400"
                            : event.priority === "medium"
                            ? "text-yellow-600 dark:text-yellow-400"
                            : "text-blue-600 dark:text-blue-400"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{event.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {event.date} • {event.type}
                      </p>
                    </div>
                  </div>
                  <Badge
                    className={
                      event.priority === "high"
                        ? "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20"
                        : event.priority === "medium"
                        ? "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20"
                        : "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                    }
                  >
                    {event.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions and Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* System Status & Performance */}
        <Card className="bg-gradient-to-br from-background to-background/50 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              System Status & Performance
            </CardTitle>
            <CardDescription>Real-time system metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {/* Server Status */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-green-500/5 to-green-500/0 border border-green-500/10 hover:border-green-500/30 hover:bg-green-500/10 transition-all duration-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-green-500/20">
                    <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Server Status</p>
                    <p className="text-xs text-muted-foreground">
                      All systems operational
                    </p>
                  </div>
                </div>
                <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">
                  Online
                </Badge>
              </div>

              {/* API Performance */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-500/5 to-blue-500/0 border border-blue-500/10 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <TrendingUp className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">API Response Time</p>
                    <p className="text-xs text-muted-foreground">
                      Average: 120ms
                    </p>
                  </div>
                </div>
                <Badge className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20">
                  Good
                </Badge>
              </div>

              {/* Database Status */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-purple-500/5 to-purple-500/0 border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <Shield className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Database Status</p>
                    <p className="text-xs text-muted-foreground">
                      Connected & Synced
                    </p>
                  </div>
                </div>
                <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20">
                  Healthy
                </Badge>
              </div>

              {/* Security Status */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-yellow-500/5 to-yellow-500/0 border border-yellow-500/10 hover:border-yellow-500/30 hover:bg-yellow-500/10 transition-all duration-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-yellow-500/20">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Security Alerts</p>
                    <p className="text-xs text-muted-foreground">
                      2 minor alerts
                    </p>
                  </div>
                </div>
                <Badge className="bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20">
                  Warning
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-gradient-to-br from-background to-background/50 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Recent Activity
            </CardTitle>
            <CardDescription>Latest actions and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-background/80 to-background/40 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                >
                  <div
                    className={`p-2 rounded-lg bg-background ${
                      activity.color === "text-green-500"
                        ? "bg-green-500/20"
                        : activity.color === "text-blue-500"
                        ? "bg-blue-500/20"
                        : "bg-yellow-500/20"
                    }`}
                  >
                    <activity.icon
                      className={`h-4 w-4 ${
                        activity.color === "text-green-500"
                          ? "text-green-600 dark:text-green-400"
                          : activity.color === "text-blue-500"
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-yellow-600 dark:text-yellow-400"
                      }`}
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium">{activity.message}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Job Categories Distribution */}
        <Card className="bg-gradient-to-br from-background to-background/50 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Job Categories
            </CardTitle>
            <CardDescription>Distribution of jobs by category</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={jobCategories}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {jobCategories.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {jobCategories.map((category, index) => (
                <div
                  key={category.name}
                  className="flex items-center gap-2 p-2 rounded-lg bg-background/50"
                >
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm font-medium">
                    {category.name} ({category.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Geographic Distribution */}
        <Card className="bg-gradient-to-br from-background to-background/50 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Geographic Distribution
            </CardTitle>
            <CardDescription>Users and companies by location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {geographicData.map((location, index) => (
                <div
                  key={location.country}
                  className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-blue-500/5 to-blue-500/0 border border-blue-500/10 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                      <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{location.country}</p>
                      <p className="text-xs text-muted-foreground">
                        {location.users} users, {location.companies} companies
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{location.jobs}</p>
                    <p className="text-xs text-muted-foreground">active jobs</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
