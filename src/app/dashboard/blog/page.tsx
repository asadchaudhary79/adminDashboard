"use client";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Book,
  PenSquare,
  FilePenLine,
  BookOpen,
  Calendar,
  MoreHorizontal,
  PlusCircle,
} from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card/50 backdrop-blur-xl hover:bg-card/80 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Total Blog Posts
            </CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">125</div>
            <p className="text-xs text-muted-foreground">+8 from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-xl hover:bg-card/80 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Published Posts
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98</div>
            <p className="text-xs text-muted-foreground">78% of total posts</p>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur-xl hover:bg-card/80 transition-colors">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Draft Posts</CardTitle>
            <PenSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">27</div>
            <p className="text-xs text-muted-foreground">22% of total posts</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-4">
          <Input
            placeholder="Search blog posts..."
            className="max-w-[300px] bg-card/50 backdrop-blur-xl"
          />
          <Select>
            <SelectTrigger className="w-[180px] bg-card/50 backdrop-blur-xl">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[180px] bg-card/50 backdrop-blur-xl">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="career">Career Advice</SelectItem>
              <SelectItem value="industry">Industry Trends</SelectItem>
              <SelectItem value="interviews">Interview Tips</SelectItem>
              <SelectItem value="workplace">Workplace Culture</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Link href="/admin/blog/new">
          <Button className="bg-primary hover:bg-primary/90">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Blog Post
          </Button>
        </Link>
      </div>

      {/* Blog Posts Table */}
      <div className="rounded-lg border bg-card/50 backdrop-blur-xl">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Published Date</TableHead>
              <TableHead>Views</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                      <FilePenLine className="h-4 w-4 text-primary" />
                    </div>
                    <span>
                      {[
                        "How to Prepare for a Technical Interview",
                        "Top 10 Resume Tips for 2023",
                        "The Future of Remote Work",
                        "Negotiating Your Salary: A Guide",
                        "Building Your Personal Brand Online",
                      ][i] || `Blog Post ${i + 1}`}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  {[
                    "Interview Tips",
                    "Career Advice",
                    "Industry Trends",
                    "Career Advice",
                    "Personal Development",
                  ][i] || "General"}
                </TableCell>
                <TableCell>
                  {[
                    "John Smith",
                    "Sarah Johnson",
                    "Michael Brown",
                    "Emily Davis",
                    "Robert Wilson",
                  ][i] || `Author ${i + 1}`}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      i % 3 === 0
                        ? "bg-yellow-100 text-yellow-800"
                        : i % 3 === 1
                        ? "bg-green-100 text-green-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {i % 3 === 0
                      ? "Draft"
                      : i % 3 === 1
                      ? "Published"
                      : "Scheduled"}
                  </span>
                </TableCell>
                <TableCell>
                  {i % 3 === 1
                    ? new Date(
                        Date.now() - Math.floor(Math.random() * 30) * 86400000
                      ).toLocaleDateString()
                    : i % 3 === 2
                    ? new Date(
                        Date.now() + Math.floor(Math.random() * 10) * 86400000
                      ).toLocaleDateString()
                    : "-"}
                </TableCell>
                <TableCell>
                  {i % 3 === 1 ? Math.floor(Math.random() * 5000) : "-"}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View Post</DropdownMenuItem>
                      <DropdownMenuItem>Edit Post</DropdownMenuItem>
                      {i % 3 === 0 ? (
                        <DropdownMenuItem>Publish</DropdownMenuItem>
                      ) : i % 3 === 1 ? (
                        <DropdownMenuItem>Unpublish</DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem>Edit Schedule</DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        Delete Post
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
