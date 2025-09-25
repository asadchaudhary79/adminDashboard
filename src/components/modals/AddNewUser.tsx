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

interface AddNewUserProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AddNewUser({ isOpen, onClose }: AddNewUserProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-[425px] p-0 overflow-hidden bg-card/80 backdrop-blur-xl border-none"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="flex justify-between items-start bg-gradient-to-b from-background to-background/80 px-6 pt-6">
          <DialogHeader className="flex-1 p-0">
            <div className="flex items-center gap-2 mb-1">
              <DialogTitle className="text-xl">Add New User</DialogTitle>
            </div>
            <DialogDescription className="text-muted-foreground">
              Create a new user account. Fill in all the required information.
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 py-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter full name"
                className="w-full bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter email address"
                className="w-full bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">User Role</Label>
              <Select>
                <SelectTrigger className="w-full bg-background/50">
                  <SelectValue placeholder="Select user role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="recruiter">Recruiter</SelectItem>
                  <SelectItem value="jobseeker">Job Seeker</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                className="w-full bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input
                id="confirm"
                type="password"
                placeholder="Confirm password"
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
            <Button className="bg-primary hover:bg-primary/90">
              Create User
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
