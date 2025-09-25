"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, MapPin, Edit, Save, X } from "lucide-react";

interface PersonalInfoProps {
  userData: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export default function PersonalInfo({
  userData,
  onInputChange,
}: PersonalInfoProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // In a real app, you would send the updated data to your backend
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset to original values
    setIsEditing(false);
  };

  return (
    <div className="bg-card border border-border rounded-none">
      <div className="p-6 border-b border-border flex justify-between items-center">
        <div>
          <h3 className="font-medium">Personal Information</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Update your personal details
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="p-2 hover:bg-primary/10"
          onClick={() => setIsEditing(!isEditing)}
        >
          <Edit className="h-4 w-4 text-primary" />
        </Button>
      </div>
      <div className="p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm font-medium block mb-2">Full Name</label>
            {isEditing ? (
              <div className="flex items-center border border-border rounded-none p-3">
                <User className="h-4 w-4 text-muted-foreground mr-2" />
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) => onInputChange("name", e.target.value)}
                  className="flex-1 bg-transparent outline-none"
                />
              </div>
            ) : (
              <div className="flex items-center border border-border rounded-none p-3">
                <User className="h-4 w-4 text-muted-foreground mr-2" />
                <span>{userData.name}</span>
              </div>
            )}
          </div>
          <div>
            <label className="text-sm font-medium block mb-2">
              Email Address
            </label>
            {isEditing ? (
              <div className="flex items-center border border-border rounded-none p-3">
                <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) => onInputChange("email", e.target.value)}
                  className="flex-1 bg-transparent outline-none"
                />
              </div>
            ) : (
              <div className="flex items-center border border-border rounded-none p-3">
                <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                <span>{userData.email}</span>
              </div>
            )}
          </div>
          <div>
            <label className="text-sm font-medium block mb-2">
              Phone Number
            </label>
            {isEditing ? (
              <div className="flex items-center border border-border rounded-none p-3">
                <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                <input
                  type="tel"
                  value={userData.phone}
                  onChange={(e) => onInputChange("phone", e.target.value)}
                  className="flex-1 bg-transparent outline-none"
                />
              </div>
            ) : (
              <div className="flex items-center border border-border rounded-none p-3">
                <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                <span>{userData.phone}</span>
              </div>
            )}
          </div>
          <div>
            <label className="text-sm font-medium block mb-2">Address</label>
            {isEditing ? (
              <div className="flex items-center border border-border rounded-none p-3">
                <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                <input
                  type="text"
                  value={userData.address}
                  onChange={(e) => onInputChange("address", e.target.value)}
                  className="flex-1 bg-transparent outline-none"
                />
              </div>
            ) : (
              <div className="flex items-center border border-border rounded-none p-3">
                <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                <span>{userData.address}</span>
              </div>
            )}
          </div>
        </div>
        {isEditing ? (
          <div className="mt-6 space-x-2">
            <Button onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
            <Button variant="outline" onClick={handleCancel}>
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
