import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Clock,
  Star,
  Mail,
  Globe,
  User2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  talent: {
    id: number;
    name: string;
    title: string;
    location: string;
    experience: string;
    skills: string[];
    availability: string;
    rating: number;
    education: string;
    company: string;
    profileImage: string;
    hasPortfolio: boolean;
    isRemote: boolean;
  };
}

export function ProfileModal({ isOpen, onClose, talent }: ProfileModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-screen-xl w-full">
        <DialogHeader>
          <DialogTitle className="text-xl">Talent Profile</DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          {/* Profile Header */}
          <div className="flex items-center gap-6 mb-8">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
              <User2 className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{talent.name}</h2>
              <p className="text-lg text-muted-foreground">{talent.title}</p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="font-medium">{talent.rating}</span>
              </div>
            </div>
          </div>

          <Separator className="mb-6" />

          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium mb-2">Location</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{talent.location}</span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Experience</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>{talent.experience} years</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 ml-6">
                  {talent.company}
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Education</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="h-4 w-4" />
                  <span>{talent.education}</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-medium mb-2">Availability</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Available {talent.availability}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 ml-6">
                  {talent.isRemote ? "Open to remote work" : "Prefers on-site"}
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {talent.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-2 py-0.5"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {talent.hasPortfolio && (
                <div>
                  <h3 className="text-base font-medium mb-2">Portfolio</h3>
                  <Button variant="outline" className="w-full">
                    <Globe className="h-4 w-4 mr-2" />
                    View Portfolio
                  </Button>
                </div>
              )}
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button>
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
