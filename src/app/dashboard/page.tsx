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
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here&apos;s your platform overview
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="bg-background/50">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </Button>
          <Button className="bg-primary hover:bg-primary/90">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-card/50 backdrop-blur-xl hover:bg-card/80 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,345</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">↑ 12%</span> vs last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-xl hover:bg-card/80 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">↑ 8%</span> vs last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-xl hover:bg-card/80 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Companies</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">567</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">↑ 15%</span> vs last month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-xl hover:bg-card/80 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8,901</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500">↑ 18%</span> vs last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions Panel */}
      <Card className="bg-card/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              variant="outline"
              className="h-20 flex-col gap-2 bg-background/50 hover:bg-background/80"
            >
              <UserPlus className="h-6 w-6" />
              <span className="text-sm">Add User</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex-col gap-2 bg-background/50 hover:bg-background/80"
            >
              <Building className="h-6 w-6" />
              <span className="text-sm">Add Company</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex-col gap-2 bg-background/50 hover:bg-background/80"
            >
              <FileText className="h-6 w-6" />
              <span className="text-sm">Add Job</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex-col gap-2 bg-background/50 hover:bg-background/80"
            >
              <Upload className="h-6 w-6" />
              <span className="text-sm">Bulk Import</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex-col gap-2 bg-background/50 hover:bg-background/80"
            >
              <Download className="h-6 w-6" />
              <span className="text-sm">Export Data</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex-col gap-2 bg-background/50 hover:bg-background/80"
            >
              <RefreshCw className="h-6 w-6" />
              <span className="text-sm">Sync Data</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex-col gap-2 bg-background/50 hover:bg-background/80"
            >
              <Search className="h-6 w-6" />
              <span className="text-sm">Search Users</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 flex-col gap-2 bg-background/50 hover:bg-background/80"
            >
              <Filter className="h-6 w-6" />
              <span className="text-sm">Advanced Filter</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Pending Approvals & Content Moderation */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Pending Approvals</CardTitle>
            <CardDescription>Items requiring your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingApprovals.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-yellow-500/10">
                      <Clock className="h-4 w-4 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{item.description}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.count} items pending
                      </p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Review
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Upcoming Events & Deadlines</CardTitle>
            <CardDescription>Important dates and reminders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-full ${
                        event.priority === "high"
                          ? "bg-red-500/10"
                          : event.priority === "medium"
                          ? "bg-yellow-500/10"
                          : "bg-blue-500/10"
                      }`}
                    >
                      <Calendar
                        className={`h-4 w-4 ${
                          event.priority === "high"
                            ? "text-red-500"
                            : event.priority === "medium"
                            ? "text-yellow-500"
                            : "text-blue-500"
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
                        ? "bg-red-500/10 text-red-500"
                        : event.priority === "medium"
                        ? "bg-yellow-500/10 text-yellow-500"
                        : "bg-blue-500/10 text-blue-500"
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
        <Card className="bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>System Status & Performance</CardTitle>
            <CardDescription>Real-time system metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Server Status */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-green-500/10">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Server Status</p>
                    <p className="text-xs text-muted-foreground">
                      All systems operational
                    </p>
                  </div>
                </div>
                <Badge className="bg-green-500/10 text-green-500">Online</Badge>
              </div>

              {/* API Performance */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-blue-500/10">
                    <TrendingUp className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">API Response Time</p>
                    <p className="text-xs text-muted-foreground">
                      Average: 120ms
                    </p>
                  </div>
                </div>
                <Badge className="bg-blue-500/10 text-blue-500">Good</Badge>
              </div>

              {/* Database Status */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-purple-500/10">
                    <Shield className="h-4 w-4 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Database Status</p>
                    <p className="text-xs text-muted-foreground">
                      Connected & Synced
                    </p>
                  </div>
                </div>
                <Badge className="bg-purple-500/10 text-purple-500">
                  Healthy
                </Badge>
              </div>

              {/* Security Status */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-yellow-500/10">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Security Alerts</p>
                    <p className="text-xs text-muted-foreground">
                      2 minor alerts
                    </p>
                  </div>
                </div>
                <Badge className="bg-yellow-500/10 text-yellow-500">
                  Warning
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center gap-4 p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                >
                  <div
                    className={`p-2 rounded-full bg-background ${activity.color} bg-opacity-10`}
                  >
                    <activity.icon className={`h-4 w-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm">{activity.message}</p>
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
        {/* Growth Trends */}
        <Card className="bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Growth Trends</CardTitle>
            <CardDescription>Monthly growth in key metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="name" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 17, 17, 0.8)",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="applications"
                    stroke="#2563eb"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="jobs"
                    stroke="#60a5fa"
                    strokeWidth={2}
                  />
                  <Line
                    type="monotone"
                    dataKey="companies"
                    stroke="#93c5fd"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Job Categories Distribution */}
        <Card className="bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Job Categories</CardTitle>
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
                      backgroundColor: "rgba(17, 17, 17, 0.8)",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {jobCategories.map((category, index) => (
                <div key={category.name} className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-sm">
                    {category.name} ({category.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Financial Overview */}
        <Card className="bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Financial Overview</CardTitle>
            <CardDescription>
              Revenue, expenses, and profit trends
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 17, 17, 0.8)",
                      border: "none",
                      borderRadius: "4px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stackId="1"
                    stroke="#2563eb"
                    fill="#2563eb"
                    fillOpacity={0.6}
                  />
                  <Area
                    type="monotone"
                    dataKey="expenses"
                    stackId="1"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-lg font-bold text-green-500">
                  $
                  {financialData
                    .reduce((sum, item) => sum + item.revenue, 0)
                    .toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Expenses</p>
                <p className="text-lg font-bold text-red-500">
                  $
                  {financialData
                    .reduce((sum, item) => sum + item.expenses, 0)
                    .toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Net Profit</p>
                <p className="text-lg font-bold text-blue-500">
                  $
                  {financialData
                    .reduce((sum, item) => sum + item.profit, 0)
                    .toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Geographic Distribution */}
        <Card className="bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Geographic Distribution</CardTitle>
            <CardDescription>Users and companies by location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {geographicData.map((location, index) => (
                <div
                  key={location.country}
                  className="flex items-center justify-between p-3 rounded-lg bg-background/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-blue-500/10">
                      <MapPin className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{location.country}</p>
                      <p className="text-xs text-muted-foreground">
                        {location.users} users, {location.companies} companies
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{location.jobs}</p>
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
