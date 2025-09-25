"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, AlertCircle, X } from "lucide-react";

interface AccountSettingsProps {
  onPasswordModalOpen: () => void;
  onTfaModalOpen: () => void;
  onEmailConfigModalOpen: () => void;
}

export default function AccountSettings({
  onPasswordModalOpen,
  onTfaModalOpen,
  onEmailConfigModalOpen,
}: AccountSettingsProps) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDeleteAccount = () => {
    // Show confirmation dialog
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    // Here you would actually delete the account via API call
    console.log("Account deletion confirmed");
    setShowDeleteConfirmation(false);
  };

  return (
    <>
      <div className="bg-card border border-border rounded-none">
        <div className="p-6 border-b border-border">
          <h3 className="font-medium">Account Settings</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your account security and preferences
          </p>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center py-3 border-b border-border">
            <div>
              <h4 className="font-medium">Password</h4>
              <p className="text-sm text-muted-foreground">
                Change your password
              </p>
            </div>
            <Button variant="outline" onClick={onPasswordModalOpen}>
              Change Password
            </Button>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-border">
            <div>
              <h4 className="font-medium">Two-Factor Authentication</h4>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account
              </p>
            </div>
            <Button variant="outline" onClick={onTfaModalOpen}>
              <Shield className="h-4 w-4 mr-2" />
              Enable
            </Button>
          </div>

          <div className="flex justify-between items-center py-3 border-b border-border">
            <div>
              <h4 className="font-medium">Email Notifications</h4>
              <p className="text-sm text-muted-foreground">
                Manage email notification preferences
              </p>
            </div>
            <Button variant="outline" onClick={onEmailConfigModalOpen}>
              Configure
            </Button>
          </div>

          <div className="flex justify-between items-center py-3">
            <div>
              <h4 className="font-medium text-destructive">Delete Account</h4>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all data
              </p>
            </div>
            <Button
              variant="outline"
              className="text-destructive border-destructive hover:bg-destructive/10"
              onClick={handleDeleteAccount}
            >
              <AlertCircle className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>
      </div>

      {/* Delete Account Confirmation Dialog */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-none w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-lg text-destructive">
                Confirm Account Deletion
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="p-2"
                onClick={() => setShowDeleteConfirmation(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <AlertCircle className="h-12 w-12 text-destructive mx-auto" />

              <p className="text-center font-medium">
                Are you sure you want to delete your account?
              </p>

              <p className="text-sm text-muted-foreground text-center">
                This action cannot be undone. All your data, including invoices,
                clients, and payment records will be permanently deleted.
              </p>

              <div className="pt-4 border-t border-border mt-6 flex space-x-2 justify-end">
                <Button
                  variant="outline"
                  onClick={() => setShowDeleteConfirmation(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white"
                  onClick={confirmDelete}
                >
                  Yes, Delete My Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
