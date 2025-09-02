import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { toast } from "sonner";

interface DepartmentLayoutProps {
  department: {
    name: string;
    fullName: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    services: string[];
    color: string;
  };
  heroImage: string;
  children: React.ReactNode;
  onBack: () => void;
}

export function DepartmentLayout({ department, heroImage, children, onBack }: DepartmentLayoutProps) {
  const IconComponent = department.icon;

  const handleContactDepartment = () => {
    toast.success(`Contact request sent to ${department.name} Department! We'll reach out within 2 business hours.`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="hover:bg-muted">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div className="h-6 w-px bg-border"></div>
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg ${department.color} flex items-center justify-center`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold">{department.fullName}</h1>
                </div>
              </div>
            </div>
            <Button onClick={handleContactDepartment}>Contact Department</Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary">{department.name} Department</Badge>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  {department.fullName}
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {department.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {department.services.map((service, index) => (
                  <Badge key={index} variant="outline">
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={heroImage}
                  alt={`${department.name} department`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {children}
      </div>

      {/* Contact Section */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact {department.name} Department</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+63 (02) 8888-FTCC</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">{department.name.toLowerCase()}@ftcc.ph</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-sm text-muted-foreground">FTCC Building, Makati City</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}