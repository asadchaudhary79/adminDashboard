"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  MapPin,
  Briefcase,
  Calendar,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
  Mail,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type Company = {
  id: string;
  name: string;
  industry: string;
  location: string;
  status: "verified" | "pending" | "rejected";
  jobs: number;
  joinedDate: string;
};

export const columns: ColumnDef<Company>[] = [
  {
    accessorKey: "name",
    header: "Company Name",
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      const id = row.original.id;

      return (
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
            <Building2 className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{name}</span>
            <span className="text-xs text-muted-foreground">ID: #{id}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "industry",
    header: "Industry",
    cell: ({ row }) => {
      const industry = row.getValue("industry") as string;
      return (
        <Badge variant="outline" className="font-normal">
          {industry}
        </Badge>
      );
    },
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => {
      const location = row.getValue("location") as string;
      return (
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-sm">{location}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Company["status"];
      if (status === "verified") {
        return (
          <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20 hover:bg-green-500/20">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        );
      }

      if (status === "pending") {
        return (
          <Badge className="bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/20">
            <AlertCircle className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        );
      }

      return (
        <Badge className="bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20 hover:bg-red-500/20">
          <AlertCircle className="h-3 w-3 mr-1" />
          Rejected
        </Badge>
      );
    },
  },
  {
    accessorKey: "jobs",
    header: "Jobs Posted",
    cell: ({ row }) => {
      const jobs = row.getValue("jobs") as number;
      return (
        <div className="flex items-center gap-1.5">
          <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="font-medium">{jobs}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "joinedDate",
    header: "Joined Date",
    cell: ({ row }) => {
      const date = row.getValue("joinedDate") as string;
      return (
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-sm">{new Date(date).toLocaleDateString()}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const company = row.original;

      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() =>
                  (window.location.href = `/admin/companies/${company.id}`)
                }
              >
                <Eye className="mr-2 h-4 w-4" />
                View Details
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  (window.location.href = `/admin/companies/${company.id}/edit`)
                }
              >
                <Edit className="mr-2 h-4 w-4" />
                Edit Company
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Company
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
