"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { User, Building, Edit, Upload, Save, X } from "lucide-react";

interface ProfileHeaderProps {
  userData: {
    name: string;
    role: string;
    companyName: string;
    avatar: string;
  };
  onInputChange: (field: string, value: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

export default function ProfileHeader({
  userData,
  onInputChange,
  onSave,
  onCancel,
}: ProfileHeaderProps) {
  const [isEditing, setIsEditing] = useState(false);

  // File upload reference
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onInputChange("avatar", event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSave = () => {
    onSave();
    setIsEditing(false);
  };

  const handleCancel = () => {
    onCancel();
    setIsEditing(false);
  };

  return (
    <div className="bg-card border border-border p-6">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="relative">
          {userData.avatar ? (
            <Image
              src={userData.avatar}
              alt={userData.name}
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-12 w-12 text-primary" />
            </div>
          )}
          {isEditing && (
            <>
              <Button
                size="sm"
                className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0"
                onClick={triggerFileInput}
              >
                <Upload className="h-4 w-4" />
                <span className="sr-only">Upload avatar</span>
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileSelect}
                accept="image/*"
                className="hidden"
              />
            </>
          )}
        </div>

        <div className="flex-1">
          {isEditing ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) => onInputChange("name", e.target.value)}
              className="text-xl font-bold bg-transparent border border-border p-1 w-full mb-1 rounded-none"
            />
          ) : (
            <h2 className="text-xl font-bold">{userData.name}</h2>
          )}

          {isEditing ? (
            <input
              type="text"
              value={userData.role}
              onChange={(e) => onInputChange("role", e.target.value)}
              className="text-muted-foreground bg-transparent border border-border p-1 w-full mb-1 rounded-none"
            />
          ) : (
            <p className="text-muted-foreground">{userData.role}</p>
          )}

          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <Building className="h-4 w-4 mr-1" />
            {isEditing ? (
              <input
                type="text"
                value={userData.companyName}
                onChange={(e) => onInputChange("companyName", e.target.value)}
                className="bg-transparent border border-border p-1 w-full rounded-none"
              />
            ) : (
              <span>{userData.companyName}</span>
            )}
          </div>
        </div>

        <div>
          {isEditing ? (
            <div className="space-x-2">
              <Button
                variant="outline"
                onClick={handleSave}
                className="bg-primary/10"
              >
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button
                variant="outline"
                onClick={handleCancel}
                className="text-destructive"
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              className="md:self-start"
              onClick={() => setIsEditing(true)}
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
