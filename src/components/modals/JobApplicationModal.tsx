import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Send,
  User,
  Mail,
  Phone,
  Briefcase,
  FileText,
  Upload,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface JobApplicationModalProps {
  jobTitle: string;
  jobId: string;
  companyName: string;
  companyLogo?: string;
}

export function JobApplicationModal({
  jobTitle,
  jobId,
  companyName,
  companyLogo,
}: JobApplicationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
    }
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const validateCurrentStep = () => {
    if (currentStep === 1) {
      return formData.fullName && formData.email && formData.phone;
    }
    if (currentStep === 2) {
      return formData.experience && formData.coverLetter;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData object to handle file upload
      const submitData = new FormData();
      submitData.append("jobId", jobId);
      submitData.append("fullName", formData.fullName);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("experience", formData.experience);
      submitData.append("coverLetter", formData.coverLetter);
      if (formData.resume) {
        submitData.append("resume", formData.resume);
      }

      // In a real application, you would send this to your API
      // const response = await fetch('/api/job-applications', {
      //   method: 'POST',
      //   body: submitData,
      // });

      // For demo purposes, we'll just log the data and simulate an API call
      console.log("Application Data:", {
        jobId,
        jobTitle,
        companyName,
        ...formData,
        resume: formData.resume?.name,
      });

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Application submitted successfully!");
      setIsOpen(false);
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        coverLetter: "",
        resume: null,
      });
      setCurrentStep(1);
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" /> Full Name *
              </Label>
              <Input
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="border-input/60 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="border-input/60 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+1 (555) 000-0000"
                className="border-input/60 focus:border-primary"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="experience" className="flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-primary" /> Years of
                Experience *
              </Label>
              <Input
                id="experience"
                name="experience"
                type="number"
                required
                min="0"
                max="50"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="5"
                className="border-input/60 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverLetter" className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" /> Cover Letter *
              </Label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                required
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Tell us why you're interested in this position..."
                className="h-40 border-input/60 focus:border-primary"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="resume" className="flex items-center gap-2">
                <Upload className="h-4 w-4 text-primary" /> Resume (PDF) *
              </Label>
              <div className="border-2 border-dashed border-input/60 rounded-lg p-6 text-center hover:border-primary/80 transition-colors">
                <Input
                  id="resume"
                  name="resume"
                  type="file"
                  required
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="resume" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                    {formData.resume ? (
                      <div className="flex items-center text-primary gap-2">
                        <CheckCircle className="h-4 w-4" />
                        <span className="font-medium">
                          {formData.resume.name}
                        </span>
                      </div>
                    ) : (
                      <>
                        <p className="text-lg font-medium mb-1">
                          Drop your resume here
                        </p>
                        <p className="text-sm text-muted-foreground">
                          or click to browse
                        </p>
                      </>
                    )}
                  </div>
                </label>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                <AlertCircle className="inline h-3 w-3 mr-1" />
                Only PDF files are accepted, max 5MB
              </p>
            </div>

            <div className="bg-accent/20 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Application Summary</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Name:</span>{" "}
                  {formData.fullName}
                </div>
                <div>
                  <span className="text-muted-foreground">Email:</span>{" "}
                  {formData.email}
                </div>
                <div>
                  <span className="text-muted-foreground">Phone:</span>{" "}
                  {formData.phone}
                </div>
                <div>
                  <span className="text-muted-foreground">Experience:</span>{" "}
                  {formData.experience} years
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
          <Send className="mr-2 h-4 w-4" />
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100 overflow-hidden rounded-t-lg">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <DialogHeader className="pt-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
              {companyLogo ? (
                <Image
                  src={companyLogo}
                  alt={companyName}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              ) : (
                companyName.charAt(0)
              )}
            </div>
            <div>
              <DialogTitle className="text-xl">{jobTitle}</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {companyName}
              </DialogDescription>
            </div>
          </div>

          <div className="flex justify-between text-sm mt-4 mb-2">
            <div className="flex gap-2">
              <span
                className={`flex items-center gap-1 px-2 py-1 rounded ${
                  currentStep >= 1
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <User className="h-3 w-3" /> Personal Info
              </span>
              <span
                className={`flex items-center gap-1 px-2 py-1 rounded ${
                  currentStep >= 2
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Briefcase className="h-3 w-3" /> Experience
              </span>
              <span
                className={`flex items-center gap-1 px-2 py-1 rounded ${
                  currentStep >= 3
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <FileText className="h-3 w-3" /> Resume
              </span>
            </div>
            <span className="text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4">
          {renderStepContent()}

          <DialogFooter className="flex justify-between mt-8 pt-4 border-t">
            <div>
              {currentStep > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={isSubmitting}
                >
                  Back
                </Button>
              )}
            </div>
            <div className="flex gap-3">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              {currentStep < totalSteps ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!validateCurrentStep() || isSubmitting}
                >
                  Continue
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!validateCurrentStep() || isSubmitting}
                  className="bg-primary hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              )}
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
