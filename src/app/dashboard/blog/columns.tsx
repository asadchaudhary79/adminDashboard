"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Eye,
  Calendar,
  User,
  TrendingUp,
  MoreHorizontal,
  Edit,
  Trash2,
  CheckCircle2,
  Clock,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type BlogPost = {
  id: string;
  title: string;
  category: string;
  author: string;
  status: "published" | "draft" | "scheduled";
  publishedDate: string | null;
  views: number;
};

export const columns: ColumnDef<BlogPost>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const title = row.getValue("title") as string;
      const id = row.original.id;

      return (
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/20">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">{title}</span>
            <span className="text-xs text-muted-foreground">ID: #{id}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const category = row.getValue("category") as string;
      return (
        <Badge variant="outline" className="font-normal">
          {category}
        </Badge>
      );
    },
  },
  {
    accessorKey: "author",
    header: "Author",
    cell: ({ row }) => {
      const author = row.getValue("author") as string;
      return (
        <div className="flex items-center gap-1.5">
          <User className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-sm">{author}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      if (status === "published") {
        return (
          <Badge className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20 hover:bg-green-500/20">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Published
          </Badge>
        );
      } else if (status === "draft") {
        return (
          <Badge className="bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20 hover:bg-amber-500/20">
            <Edit className="h-3 w-3 mr-1" />
            Draft
          </Badge>
        );
      } else {
        return (
          <Badge className="bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20 hover:bg-blue-500/20">
            <Clock className="h-3 w-3 mr-1" />
            Scheduled
          </Badge>
        );
      }
    },
  },
  {
    accessorKey: "publishedDate",
    header: "Published Date",
    cell: ({ row }) => {
      const date = row.getValue("publishedDate") as string | null;
      return (
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-sm">
            {date ? new Date(date).toLocaleDateString() : "-"}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "views",
    header: "Views",
    cell: ({ row }) => {
      const views = row.getValue("views") as number;
      return (
        <div className="flex items-center gap-1.5">
          <TrendingUp className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="font-medium">{views > 0 ? views : "-"}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const post = row.original;

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
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                View Post
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                Edit Post
              </DropdownMenuItem>
              {post.status === "draft" ? (
                <DropdownMenuItem>Publish</DropdownMenuItem>
              ) : post.status === "published" ? (
                <DropdownMenuItem>Unpublish</DropdownMenuItem>
              ) : (
                <DropdownMenuItem>Edit Schedule</DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

