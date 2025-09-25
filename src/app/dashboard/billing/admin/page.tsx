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
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Billing (Admin)</h1>
          <p className="text-muted-foreground">
            Subscription analytics, revenue, and account-level controls
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label} className="bg-card/50 backdrop-blur-xl">
            <CardHeader className="pb-2">
              <CardDescription>{kpi.label}</CardDescription>
              <CardTitle className="text-2xl">{kpi.value}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-xs text-green-500">
                <TrendingUp className="h-3 w-3 mr-1" /> {kpi.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Plan Breakdown</CardTitle>
            <CardDescription>Distribution across plans</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {plans.map((p) => (
              <div key={p.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-4 w-4 text-primary" />
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
                <div className="text-sm text-muted-foreground">
                  {p.percent}%
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle>Payment Health</CardTitle>
            <CardDescription>Failures, retries, and dunning</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Payment Success Rate</p>
                  <p className="text-xs text-muted-foreground">Last 30 days</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">97.4%</p>
                <p className="text-xs text-muted-foreground">+0.6% vs prev</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-border">
              <div>
                <p className="text-sm font-medium">Failed Payments</p>
                <p className="text-xs text-muted-foreground">Last 7 days</p>
              </div>
              <div className="text-right">
                <p className="font-medium">12</p>
                <p className="text-xs text-muted-foreground">3 retrying</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm">Open Dunning</Button>
              <Button size="sm" variant="outline">
                Retry All
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>User Billing Details</CardTitle>
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
                  <TableRow key={u.id}>
                    <TableCell>
                      <div className="space-y-0.5">
                        <p className="text-sm font-medium">{u.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {u.email}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{u.role}</TableCell>
                    <TableCell>{u.plan}</TableCell>
                    <TableCell>{u.credits}</TableCell>
                    <TableCell>{u.usedThisMonth}</TableCell>
                    <TableCell>{u.lastPurchase}</TableCell>
                    <TableCell>
                      {u.status === "Active" ? (
                        <Badge className="bg-green-500/10 text-green-500">
                          Active
                        </Badge>
                      ) : u.status === "Past Due" ? (
                        <Badge className="bg-yellow-500/10 text-yellow-500">
                          Past Due
                        </Badge>
                      ) : (
                        <Badge className="bg-muted/40">Cancelled</Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline">
                          Add Credits
                        </Button>
                        <Button size="sm" variant="outline">
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

      <Card className="bg-card/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Revenue Notes</CardTitle>
          <CardDescription>Quick insights for this month</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Top plan by revenue
            </span>
            <span className="text-sm font-medium">Pro</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Largest customer
            </span>
            <span className="text-sm font-medium">Initech (Enterprise)</span>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Refunds issued
            </span>
            <span className="text-sm font-medium">$120</span>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Active Subscriptions</CardTitle>
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
                  <TableRow key={s.id}>
                    <TableCell className="font-medium">{s.id}</TableCell>
                    <TableCell>{s.customer}</TableCell>
                    <TableCell>{s.plan}</TableCell>
                    <TableCell>${s.amount}.00</TableCell>
                    <TableCell>{s.renews}</TableCell>
                    <TableCell>
                      {s.status === "Active" ? (
                        <Badge className="bg-green-500/10 text-green-500">
                          Active
                        </Badge>
                      ) : (
                        <Badge className="bg-yellow-500/10 text-yellow-500">
                          Past Due
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="outline">
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
  );
}
