"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell, Mail, Save, X, Briefcase, Building, User } from "lucide-react";

interface EmailConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (preferences: EmailPreferences) => void;
  initialPreferences?: EmailPreferences;
}

export interface EmailPreferences {
  jobMatches: boolean;
  applicationUpdates: boolean;
  interviews: boolean;
  accountAlerts: boolean;
  marketing: boolean;
}

export default function EmailConfigModal({
  isOpen,
  onClose,
  onSubmit,
  initialPreferences,
}: EmailConfigModalProps) {
  const defaultPreferences: EmailPreferences = {
    jobMatches: true,
    applicationUpdates: true,
    interviews: true,
    accountAlerts: false,
    marketing: false,
  };

  const [preferences, setPreferences] = useState<EmailPreferences>(
    initialPreferences || defaultPreferences
  );

  const handleToggle = (key: keyof EmailPreferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubmit = () => {
    onSubmit(preferences);
  };

  const handleCancel = () => {
    setPreferences(initialPreferences || defaultPreferences);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-none w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-lg">Email Notifications</h3>
          <Button
            variant="ghost"
            size="sm"
            className="p-2"
            onClick={handleCancel}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Configure which job alerts and notifications you&apos;d like to
            receive via email. You can change these settings at any time.
          </p>

          <div className="space-y-4 mt-4">
            <div className="flex items-center justify-between py-3 border-b border-border">
              <div className="flex items-start gap-3">
                <Briefcase className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Job Matches</h4>
                  <p className="text-sm text-muted-foreground">
                    Get notified when new jobs match your preferences
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={preferences.jobMatches}
                  onChange={() => handleToggle("jobMatches")}
                />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-none peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-border">
              <div className="flex items-start gap-3">
                <Bell className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Application Updates</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive emails when your job applications status changes
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={preferences.applicationUpdates}
                  onChange={() => handleToggle("applicationUpdates")}
                />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-none peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-border">
              <div className="flex items-start gap-3">
                <User className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Interview Invitations</h4>
                  <p className="text-sm text-muted-foreground">
                    Get notified about interview requests and scheduling
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={preferences.interviews}
                  onChange={() => handleToggle("interviews")}
                />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-none peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-border">
              <div className="flex items-start gap-3">
                <Building className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Company Updates</h4>
                  <p className="text-sm text-muted-foreground">
                    Stay informed about companies you&apos;re interested in
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={preferences.accountAlerts}
                  onChange={() => handleToggle("accountAlerts")}
                />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-none peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Career Tips & Offers</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive career advice, industry insights and special offers
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={preferences.marketing}
                  onChange={() => handleToggle("marketing")}
                />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-none peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
            </div>
          </div>

          <div className="pt-4 border-t border-border mt-6 flex space-x-2 justify-end">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              <Save className="h-4 w-4 mr-2" />
              Save Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
