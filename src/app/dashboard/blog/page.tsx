"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Book,
  PenSquare,
  BookOpen,
  TrendingUp,
  PlusCircle,
} from "lucide-react";
import Link from "next/link";
import { DataTable } from "@/components/ui/data-table";
import { columns, BlogPost } from "./columns";

const blogPosts: BlogPost[] = [
  {
    id: "1000",
    title: "How to Prepare for a Technical Interview",
    category: "Interview Tips",
    author: "John Smith",
    status: "published",
    publishedDate: "2024-01-15",
    views: 3420,
  },
  {
    id: "1001",
    title: "Top 10 Resume Tips for 2024",
    category: "Career Advice",
    author: "Sarah Johnson",
    status: "published",
    publishedDate: "2024-01-20",
    views: 2890,
  },
  {
    id: "1002",
    title: "The Future of Remote Work",
    category: "Industry Trends",
    author: "Michael Brown",
    status: "draft",
    publishedDate: null,
    views: 0,
  },
  {
    id: "1003",
    title: "Negotiating Your Salary: A Guide",
    category: "Career Advice",
    author: "Emily Davis",
    status: "scheduled",
    publishedDate: "2024-02-10",
    views: 0,
  },
  {
    id: "1004",
    title: "Building Your Personal Brand Online",
    category: "Personal Development",
    author: "Robert Wilson",
    status: "published",
    publishedDate: "2024-01-25",
    views: 1567,
  },
];

export default function BlogsPage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Blog Posts</h1>
          <p className="text-muted-foreground">
            Manage and monitor all blog posts
          </p>
        </div>
        <Link href="/dashboard/blog/new">
          <Button className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all sm:w-auto w-full">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Blog Post
          </Button>
        </Link>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Total Blog Posts
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Book className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">125</div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="h-3 w-3 text-green-600 dark:text-green-400" />
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                +8 from last month
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500/10 to-green-600/5 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Published Posts
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">98</div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="font-semibold text-green-600 dark:text-green-400">
                78%
              </span>{" "}
              of total posts
            </p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-foreground">
              Draft Posts
            </CardTitle>
            <div className="h-10 w-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
              <PenSquare className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">27</div>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="font-semibold text-amber-600 dark:text-amber-400">
                22%
              </span>{" "}
              of total posts
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Blog Posts Table */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>All Blog Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={blogPosts}
            searchColumn="title"
            searchPlaceholder="Filter blog posts..."
            filterableColumns={[
              {
                id: "status",
                title: "Status",
                options: [
                  { label: "Published", value: "published" },
                  { label: "Draft", value: "draft" },
                  { label: "Scheduled", value: "scheduled" },
                ],
              },
              {
                id: "category",
                title: "Category",
                options: [
                  { label: "Interview Tips", value: "Interview Tips" },
                  { label: "Career Advice", value: "Career Advice" },
                  { label: "Industry Trends", value: "Industry Trends" },
                  {
                    label: "Personal Development",
                    value: "Personal Development",
                  },
                ],
              },
            ]}
          />
        </CardContent>
      </Card>
    </div>
  );
}
