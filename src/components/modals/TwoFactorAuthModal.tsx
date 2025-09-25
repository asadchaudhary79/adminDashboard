"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QrCode, Shield, Smartphone, X } from "lucide-react";

interface TwoFactorAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (verificationCode: string) => void;
}

export default function TwoFactorAuthModal({
  isOpen,
  onClose,
  onComplete,
}: TwoFactorAuthModalProps) {
  const [step, setStep] = useState<"setup" | "verify">("setup");
  const [verificationCode, setVerificationCode] = useState("");

  const resetState = () => {
    setStep("setup");
    setVerificationCode("");
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  const handleComplete = () => {
    onComplete(verificationCode);
    resetState();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-none w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-medium text-lg">
            Set Up Two-Factor Authentication
          </h3>
          <Button
            variant="ghost"
            size="sm"
            className="p-2"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          {step === "setup" ? (
            <>
              <p className="text-sm text-muted-foreground">
                Two-factor authentication adds an extra layer of security to
                your account. Scan the QR code below with an authenticator app
                like Google Authenticator or Authy.
              </p>

              <div className="flex justify-center py-6">
                <div className="border border-border p-4 bg-white rounded-none">
                  <QrCode className="h-32 w-32 text-black" />
                </div>
              </div>

              <p className="text-sm">
                Can&apos;t scan the QR code? Use this code instead:
              </p>
              <div className="bg-muted p-3 rounded-none font-mono text-center">
                IXZT ATRY K7ZA FVBW
              </div>

              <div className="pt-4 border-t border-border mt-6 flex space-x-2 justify-end">
                <Button variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
                <Button onClick={() => setStep("verify")}>
                  <Smartphone className="h-4 w-4 mr-2" />
                  Continue
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-muted-foreground">
                Enter the 6-digit verification code from your authenticator app
                to verify and complete the setup.
              </p>

              <div>
                <label className="text-sm font-medium block mb-2">
                  Verification Code
                </label>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => {
                    // Only allow numbers and limit to 6 digits
                    const value = e.target.value
                      .replace(/[^0-9]/g, "")
                      .slice(0, 6);
                    setVerificationCode(value);
                  }}
                  placeholder="000000"
                  className="w-full bg-transparent border border-border rounded-none p-3 text-center text-xl tracking-widest font-mono"
                />
              </div>

              <div className="pt-4 border-t border-border mt-6 flex space-x-2 justify-end">
                <Button
                  variant="outline"
                  onClick={() => {
                    setStep("setup");
                    setVerificationCode("");
                  }}
                >
                  Back
                </Button>
                <Button
                  onClick={handleComplete}
                  disabled={verificationCode.length !== 6}
                >
                  <Shield className="h-4 w-4 mr-2" />
                  Verify and Enable
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
