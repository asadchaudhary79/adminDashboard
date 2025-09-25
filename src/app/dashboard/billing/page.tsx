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
import { Download, RefreshCw, Coins, ShoppingCart } from "lucide-react";

export const metadata = {
  title: "Billing",
  description: "Plans, invoices, and payments",
};

const invoices = [
  { id: "INV-2025-001", date: "2025-08-31", amount: 49, status: "Paid" },
  { id: "INV-2025-002", date: "2025-09-30", amount: 49, status: "Paid" },
  { id: "INV-2025-003", date: "2025-10-31", amount: 49, status: "Due" },
];

// Credits-based billing (points users purchase and consume)
const creditSummary = {
  balance: 320,
  usedThisMonth: 45,
  rollover: 20,
  nextReset: "2025-12-01",
};

const creditPackages = [
  { id: "PKG-50", name: "Starter 50", credits: 50, price: 5 },
  { id: "PKG-250", name: "Growth 250", credits: 250, price: 22 },
  { id: "PKG-1000", name: "Scale 1000", credits: 1000, price: 75 },
];

const purchaseHistory = [
  {
    id: "CR-0009",
    date: "2025-10-12",
    package: "Growth 250",
    credits: 250,
    amount: 22,
    status: "Completed",
  },
  {
    id: "CR-0010",
    date: "2025-11-01",
    package: "Starter 50",
    credits: 50,
    amount: 5,
    status: "Completed",
  },
];

export default function BillingPage() {
  const totalForPct = creditSummary.usedThisMonth + creditSummary.balance;
  const usedPct = Math.min(
    100,
    Math.round((creditSummary.usedThisMonth / (totalForPct || 1)) * 100)
  );
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Billing</h1>
          <p className="text-muted-foreground">
            Manage your subscription, invoices, and payment methods
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Credits Overview (full width) */}
      <div className="grid gap-6">
        <Card className="bg-card/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Coins className="h-5 w-5" /> Credits Balance
            </CardTitle>
            <CardDescription>Credits you can spend on actions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Current Balance</p>
                <p className="text-3xl font-bold leading-tight">
                  {creditSummary.balance}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Used this month</p>
                <p className="text-xl font-semibold">
                  {creditSummary.usedThisMonth}
                </p>
              </div>
            </div>

            {/* Usage progress */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Usage</span>
                <span>{usedPct}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-border">
                <div
                  className="h-2 rounded-full bg-primary"
                  style={{ width: `${usedPct}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border p-3">
                <p className="text-xs text-muted-foreground">Rollover</p>
                <p className="font-medium">{creditSummary.rollover}</p>
              </div>
              <div className="rounded-lg border border-border p-3">
                <p className="text-xs text-muted-foreground">Next reset</p>
                <p className="font-medium">{creditSummary.nextReset}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button className="sm:w-auto w-full">
                <ShoppingCart className="h-4 w-4 mr-2" /> Buy Credits
              </Button>
              <Button variant="outline" className="sm:w-auto w-full">
                <Download className="h-4 w-4 mr-2" /> View Invoices
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Removed plan/payment sections per request */}

      {/* Recent invoices (last 3) */}
      <Card className="bg-card/50 backdrop-blur-xl">
        <CardHeader>
          <CardTitle>Invoices</CardTitle>
          <CardDescription>Last 3 invoices</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.slice(0, 3).map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell className="font-medium">{inv.id}</TableCell>
                  <TableCell>{inv.date}</TableCell>
                  <TableCell>${inv.amount}.00</TableCell>
                  <TableCell>
                    {inv.status === "Paid" ? (
                      <Badge className="bg-green-500/10 text-green-500">
                        Paid
                      </Badge>
                    ) : (
                      <Badge className="bg-yellow-500/10 text-yellow-500">
                        Due
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      PDF
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      {/* Purchase history intentionally omitted to keep view minimal */}
    </div>
  );
}
