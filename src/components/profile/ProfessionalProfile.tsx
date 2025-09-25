import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ConfirmationDialog } from "@/components/ConfirmationDialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Plus,
  X,
  Save,
  Link as LinkIcon,
  Github,
  Linkedin,
  Globe,
  Twitter,
} from "lucide-react";
import { toast } from "sonner";

interface SocialLink {
  id: string;
  type: string;
  url: string;
}

interface ProfileData {
  headline: string;
  summary: string;
  socialLinks: SocialLink[];
}

const socialLinkTypes = [
  { value: "portfolio", label: "Portfolio", icon: Globe },
  { value: "linkedin", label: "LinkedIn", icon: Linkedin },
  { value: "github", label: "GitHub", icon: Github },
  { value: "twitter", label: "Twitter", icon: Twitter },
  { value: "website", label: "Website", icon: Globe },
  { value: "other", label: "Other", icon: LinkIcon },
];

export function ProfessionalProfile() {
  const [profile, setProfile] = useState<ProfileData>({
    headline: "",
    summary: "",
    socialLinks: [],
  });
  const [linkToDelete, setLinkToDelete] = useState<string | null>(null);

  const addSocialLink = () => {
    const newLink = {
      id: Math.random().toString(36).substr(2, 9),
      type: "",
      url: "",
    };
    setProfile({
      ...profile,
      socialLinks: [...profile.socialLinks, newLink],
    });
  };

  const updateSocialLink = (
    id: string,
    field: "type" | "url",
    value: string
  ) => {
    setProfile({
      ...profile,
      socialLinks: profile.socialLinks.map((link) =>
        link.id === id ? { ...link, [field]: value } : link
      ),
    });
  };

  const handleSave = () => {
    // Here you would typically save to your backend
    toast.success("Professional profile updated successfully!");
  };

  const getSocialIcon = (type: string) => {
    const linkType = socialLinkTypes.find((t) => t.value === type);
    const Icon = linkType?.icon || LinkIcon;
    return <Icon className="h-4 w-4" />;
  };

  const handleDeleteLink = (id: string) => {
    setLinkToDelete(id);
  };

  const confirmDeleteLink = () => {
    if (linkToDelete) {
      setProfile({
        ...profile,
        socialLinks: profile.socialLinks.filter(
          (link) => link.id !== linkToDelete
        ),
      });
      toast.success("Social link removed successfully");
      setLinkToDelete(null);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Professional Profile</CardTitle>
        <CardDescription>
          Highlight your expertise and career information
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="headline" className="text-base">
            Professional Headline
          </Label>
          <Input
            id="headline"
            value={profile.headline}
            onChange={(e) =>
              setProfile({ ...profile, headline: e.target.value })
            }
            placeholder="e.g., Senior Full Stack Developer | Cloud Architecture Expert"
            className="h-[48px]"
          />
          <p className="text-sm text-muted-foreground">
            This appears at the top of your profile (150 characters max)
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="summary" className="text-base">
            Professional Summary
          </Label>
          <Textarea
            id="summary"
            value={profile.summary}
            onChange={(e) =>
              setProfile({ ...profile, summary: e.target.value })
            }
            placeholder="Provide a brief overview of your professional background, key skills, and career goals"
            className="min-h-[120px] resize-none"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label className="text-base">Social Links</Label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addSocialLink}
              className="h-8"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Link
            </Button>
          </div>

          <div className="space-y-4">
            {profile.socialLinks.map((link) => (
              <div
                key={link.id}
                className="flex items-center gap-3 bg-accent/5 p-3 rounded-lg"
              >
                <Select
                  value={link.type}
                  onValueChange={(value) =>
                    updateSocialLink(link.id, "type", value)
                  }
                >
                  <SelectTrigger className="h-[48px] w-[140px]">
                    <SelectValue placeholder="Link Type">
                      {link.type && (
                        <div className="flex items-center gap-2">
                          {getSocialIcon(link.type)}
                          <span>
                            {
                              socialLinkTypes.find((t) => t.value === link.type)
                                ?.label
                            }
                          </span>
                        </div>
                      )}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {socialLinkTypes.map((type) => (
                      <SelectItem
                        key={type.value}
                        value={type.value}
                        className="flex items-center gap-2"
                      >
                        <div className="flex items-center gap-2">
                          <type.icon className="h-4 w-4" />
                          <span>{type.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Input
                  value={link.url}
                  onChange={(e) =>
                    updateSocialLink(link.id, "url", e.target.value)
                  }
                  placeholder="Enter URL"
                  className="h-[48px] flex-1"
                />

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteLink(link.id)}
                  className="h-9 w-9"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSave} className="gap-2">
          <Save className="h-4 w-4" />
          Save Changes
        </Button>
      </CardFooter>

      <ConfirmationDialog
        isOpen={!!linkToDelete}
        onClose={() => setLinkToDelete(null)}
        onConfirm={confirmDeleteLink}
        title="Delete Social Link"
        description="Are you sure you want to delete this social link? This action cannot be undone."
        confirmText="Delete Link"
        variant="destructive"
      />
    </Card>
  );
}
