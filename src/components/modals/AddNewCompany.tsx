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

interface AddNewCompanyProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddNewCompany({ isOpen, onClose }: AddNewCompanyProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-[600px] p-0 overflow-hidden bg-card/80 backdrop-blur-xl border-none"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="flex justify-between items-start bg-gradient-to-b from-background to-background/80 px-6 pt-6">
          <DialogHeader className="flex-1 p-0">
            <div className="flex items-center gap-2 mb-1">
              <DialogTitle className="text-xl">Add New Company</DialogTitle>
            </div>
            <DialogDescription className="text-muted-foreground">
              Add a new company to the job portal. Fill in all the required
              information.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Company Name</Label>
              <Input
                id="name"
                placeholder="Enter company name"
                className="w-full bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select>
                <SelectTrigger className="w-full bg-background/50">
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                placeholder="https://example.com"
                className="w-full bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="City, Country"
                className="w-full bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Contact Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="contact@company.com"
                className="w-full bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Contact Phone</Label>
              <Input
                id="phone"
                placeholder="+1 (555) 000-0000"
                className="w-full bg-background/50"
              />
            </div>
            <div className="col-span-2 space-y-2">
              <Label htmlFor="description">Company Description</Label>
              <Textarea
                id="description"
                placeholder="Enter company description..."
                className="w-full bg-background/50 min-h-[100px]"
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
            <Button className="bg-primary hover:bg-primary/90">
              Create Company
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
