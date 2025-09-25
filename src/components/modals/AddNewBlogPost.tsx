"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface AddNewBlogPostProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddNewBlogPost({ isOpen, onClose }: AddNewBlogPostProps) {
  const [date, setDate] = useState<Date>();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-[700px] p-0 overflow-hidden bg-card/80 backdrop-blur-xl border-none"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="flex justify-between items-start bg-gradient-to-b from-background to-background/80 px-6 pt-6">
          <DialogHeader className="flex-1 p-0">
            <div className="flex items-center gap-2 mb-1">
              <DialogTitle className="text-xl">Add New Blog Post</DialogTitle>
            </div>
            <DialogDescription className="text-muted-foreground">
              Create a new blog post for the job portal. Fill in all the
              required information.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 space-y-2">
              <Label htmlFor="title">Blog Title</Label>
              <Input
                id="title"
                placeholder="Enter blog post title"
                className="w-full bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select>
                <SelectTrigger className="w-full bg-background/50">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="career">Career Advice</SelectItem>
                  <SelectItem value="industry">Industry Trends</SelectItem>
                  <SelectItem value="interviews">Interview Tips</SelectItem>
                  <SelectItem value="workplace">Workplace Culture</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                placeholder="Author name"
                className="w-full bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger className="w-full bg-background/50">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="publishDate">Publish Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal bg-background/50",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="featuredImage">Featured Image URL</Label>
              <Input
                id="featuredImage"
                placeholder="https://example.com/image.jpg"
                className="w-full bg-background/50"
              />
            </div>
            <div className="col-span-2 space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                placeholder="Short summary of the blog post..."
                className="w-full bg-background/50 min-h-[80px]"
              />
            </div>
            <div className="col-span-2 space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Enter blog post content..."
                className="w-full bg-background/50 min-h-[200px]"
              />
            </div>
            <div className="col-span-2 space-y-2">
              <Label htmlFor="tags">Tags (comma separated)</Label>
              <Input
                id="tags"
                placeholder="job search, career, interview"
                className="w-full bg-background/50"
              />
            </div>
          </div>
        </div>

        <DialogFooter className="bg-gradient-to-b from-background/80 to-background px-6 py-4">
          <div className="flex gap-2 justify-end w-full">
            <DialogClose asChild>
              <Button variant="outline" className="bg-background/50">
                Cancel
              </Button>
            </DialogClose>
            <Button variant="outline" className="bg-background/50">
              Save as Draft
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Publish Post
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
