import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Download,
  Filter,
  RefreshCw,
  TrendingUp,
  Users,
  CreditCard,
  DollarSign,
  TrendingDown,
  Calendar,
  User,
  Coins,
  MoreHorizontal,
  Eye,
  Edit,
} from "lucide-react";

export const metadata = {
  title: "Billing Admin",
  description: "Admin view of subscriptions and revenue",
};

const kpis = [
  { label: "Monthly Recurring Revenue", value: "$12,430", change: "+6.1%" },
  { label: "Active Subscriptions", value: "842", change: "+2.4%" },
  { label: "Churn Rate", value: "2.1%", change: "-0.3%" },
  { label: "ARPU", value: "$14.77", change: "+0.8%" },
];

const plans = [
  { name: "Free", price: "$0", subs: 512, percent: 60 },
  { name: "Basic", price: "$9", subs: 228, percent: 27 },
  { name: "Pro", price: "$49", subs: 88, percent: 10 },
  { name: "Enterprise", price: "Custom", subs: 14, percent: 3 },
];

const subscriptions = [
  {
    id: "SUB-1001",
    customer: "Acme Corp",
    plan: "Pro",
    amount: 49,
    renews: "2025-11-30",
    status: "Active",
  },
  {
    id: "SUB-1002",
    customer: "Globex",
    plan: "Basic",
    amount: 9,
    renews: "2025-11-18",
    status: "Past Due",
  },
  {
    id: "SUB-1003",
    customer: "Initech",
    plan: "Enterprise",
    amount: 399,
    renews: "2025-12-05",
    status: "Active",
  },
];

type UserBilling = {
  id: string;
  name: string;
  email: string;
  role: "Recruiter" | "Jobseeker";
  plan: string;
  credits: number;
  usedThisMonth: number;
  lastPurchase: string;
  status: "Active" | "Past Due" | "Cancelled";
};

const usersBilling: UserBilling[] = [
  {
    id: "USR-001",
    name: "John Recruiter",
    email: "john.recruiter@acme.com",
    role: "Recruiter",
    plan: "Pro",
    credits: 320,
    usedThisMonth: 45,
    lastPurchase: "2025-10-12",
    status: "Active",
  },
  {
    id: "USR-002",
    name: "Sara Jobseeker",
    email: "sara@example.com",
    role: "Jobseeker",
    plan: "Basic",
    credits: 12,
    usedThisMonth: 6,
    lastPurchase: "2025-10-25",
    status: "Active",
  },
  {
    id: "USR-003",
    name: "Recruiter Ops",
    email: "ops@globex.com",
    role: "Recruiter",
    plan: "Enterprise",
    credits: 1800,
    usedThisMonth: 260,
    lastPurchase: "2025-11-01",
    status: "Past Due",
  },
];

export default function BillingAdminPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Billing (Admin)</h1>
          <p className="text-muted-foreground">
            Subscription analytics, revenue, and account-level controls
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="bg-background/50 hover:bg-background/80 shadow-sm hover:shadow-md transition-all"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button
            variant="outline"
            className="bg-background/50 hover:bg-background/80 shadow-sm hover:shadow-md transition-all"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Monthly Recurring Revenue
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">$12,430</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                +6.1% vs last month
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Active Subscriptions
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">842</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                +2.4% vs last month
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Churn Rate
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <TrendingDown className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">2.1%</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingDown className="h-3 w-3 text-green-600 dark:text-green-400" />
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                -0.3% vs last month
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              ARPU
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">$14.77</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                +0.8% vs last month
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gradient-to-br from-background to-background/50 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Plan Breakdown</CardTitle>
            <CardDescription>Distribution across plans</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-background/80 to-background/40 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      {p.name} • {p.price}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {p.subs} subscribers
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="font-semibold">
                  {p.percent}%
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-background to-background/50 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Payment Health</CardTitle>
            <CardDescription>Failures, retries, and dunning</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-green-500/5 to-green-500/0 border border-green-500/10 hover:border-green-500/30 hover:bg-green-500/10 transition-all duration-200">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">Payment Success Rate</p>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg">97.4%</p>
                <div className="flex items-center gap-1 justify-end">
                  <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
                  <p className="text-xs text-green-600 dark:text-green-400">
                    +0.6% vs prev
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-amber-500/5 to-amber-500/0 border border-amber-500/10 hover:border-amber-500/30 hover:bg-amber-500/10 transition-all duration-200">
              <div>
                <p className="text-sm font-medium">Failed Payments</p>
                <p className="text-xs text-muted-foreground">Last 7 days</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-lg">12</p>
                <p className="text-xs text-muted-foreground">3 retrying</p>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Open Dunning
              </Button>
              <Button size="sm" variant="outline" className="hover:bg-primary/5">
                Retry All
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-background to-background/50 border-border/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">User Billing Details</CardTitle>
          <CardDescription>
            Per-user plan, role, credits, and usage (Recruiter & Jobseeker)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Credits</TableHead>
                <TableHead>Used (This Month)</TableHead>
                <TableHead>Last Purchase</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersBilling
                .slice()
                .sort((a, b) => {
                  const statusOrder: Record<string, number> = {
                    "Past Due": 0,
                    Active: 1,
                    Cancelled: 2,
                  };
                  const s = statusOrder[a.status] - statusOrder[b.status];
                  if (s !== 0) return s;
                  return a.credits - b.credits;
                })
                .map((u) => (
                  <TableRow key={u.id} className="hover:bg-muted/50 transition-colors">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium">{u.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {u.email}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{u.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{u.plan}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5">
                        <Coins className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="font-medium">{u.credits}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{u.usedThisMonth}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="text-sm">{u.lastPurchase}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {u.status === "Active" ? (
                        <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">
                          Active
                        </Badge>
                      ) : u.status === "Past Due" ? (
                        <Badge className="bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20">
                          Past Due
                        </Badge>
                      ) : (
                        <Badge className="bg-muted/40 border-muted-foreground/20">
                          Cancelled
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline" className="hover:bg-primary/5">
                          Add Credits
                        </Button>
                        <Button size="sm" variant="outline" className="hover:bg-primary/5">
                          History
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-gradient-to-br from-background to-background/50 border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Revenue Notes</CardTitle>
            <CardDescription>Quick insights for this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-200">
              <span className="text-sm text-muted-foreground">
                Top plan by revenue
              </span>
              <Badge variant="outline" className="font-semibold">Pro</Badge>
            </div>
            <Separator />
            <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-200">
              <span className="text-sm text-muted-foreground">
                Largest customer
              </span>
              <span className="text-sm font-semibold">Initech (Enterprise)</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10 hover:border-primary/30 transition-all duration-200">
              <span className="text-sm text-muted-foreground">
                Refunds issued
              </span>
              <span className="text-sm font-semibold text-red-600 dark:text-red-400">$120</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-background to-background/50 border-border/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Active Subscriptions</CardTitle>
            <CardDescription>Accounts currently billed</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subscription</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Renews</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {subscriptions
                  .slice()
                  .sort((a, b) => {
                    const order = (s: string) => (s === "Past Due" ? 0 : 1);
                    const s = order(a.status) - order(b.status);
                    if (s !== 0) return s;
                    return b.amount - a.amount;
                  })
                  .map((s) => (
                    <TableRow key={s.id} className="hover:bg-muted/50 transition-colors">
                      <TableCell className="font-medium">{s.id}</TableCell>
                      <TableCell>{s.customer}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{s.plan}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="font-medium">${s.amount}.00</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="text-sm">{s.renews}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {s.status === "Active" ? (
                          <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20">
                            Active
                          </Badge>
                        ) : (
                          <Badge className="bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20">
                            Past Due
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="outline" className="hover:bg-primary/5">
                          Manage
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
