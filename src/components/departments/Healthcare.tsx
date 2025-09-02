import { DepartmentLayout } from "../DepartmentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Heart, Users, Activity, Award } from "lucide-react";
import { departments } from "../../constants/departments";

interface HealthcareProps {
  onBack: () => void;
}

export function Healthcare({ onBack }: HealthcareProps) {
  const department = departments.find(d => d.route === "/health")!;

  return (
    <DepartmentLayout
      department={department}
      heroImage="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
      onBack={onBack}
    >
      <div className="space-y-16">
        {/* Overview */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">About Health Tech Clinic Network</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Health Tech Clinic Network is FTCC's comprehensive healthcare division, providing modern 
                medical services, advanced telemedicine platforms, and innovative health monitoring solutions 
                to Filipino families nationwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine traditional healthcare excellence with cutting-edge medical technology to deliver 
                accessible, affordable, and quality healthcare services through our network of clinics, 
                digital platforms, and mobile health units.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-600" />
                  <span>Healthcare Impact</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Patients Served</span>
                    <span className="text-sm font-medium">1.8M+</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Patient Satisfaction</span>
                    <span className="text-sm font-medium">97%</span>
                  </div>
                  <Progress value={97} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Telemedicine Consultations</span>
                    <span className="text-sm font-medium">500K+</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Healthcare Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Primary Care Clinics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive primary healthcare services including general consultation, 
                  preventive care, health screenings, and vaccination programs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">General Medicine</Badge>
                  <Badge variant="secondary">Preventive Care</Badge>
                  <Badge variant="secondary">Family Health</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Telemedicine Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  24/7 virtual consultations with licensed physicians, prescription services, 
                  and remote health monitoring for convenient healthcare access.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">24/7 Access</Badge>
                  <Badge variant="secondary">Video Consults</Badge>
                  <Badge variant="secondary">E-Prescriptions</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Specialized Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Advanced medical specialties including cardiology, dermatology, gynecology, 
                  pediatrics, and mental health services with specialist doctors.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Specialists</Badge>
                  <Badge variant="secondary">Advanced Care</Badge>
                  <Badge variant="secondary">Mental Health</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Clinic Network */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Clinic Network</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Physical Locations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• 150+ Health Tech Clinics Nationwide</li>
                  <li>• Metro Manila Medical Centers</li>
                  <li>• Provincial Community Clinics</li>
                  <li>• Mobile Health Units for Remote Areas</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Digital Health Platform</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Health Tech Mobile App</li>
                  <li>• Electronic Health Records</li>
                  <li>• AI Health Assessment Tools</li>
                  <li>• Appointment Booking System</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Health Programs */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Community Health Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Wellness & Prevention</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Community health education, wellness programs, health screenings, and vaccination 
                  drives to promote preventive healthcare.
                </p>
                <Badge variant="outline">Community Focus</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Maternal & Child Health</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Specialized care for mothers and children including prenatal care, delivery services, 
                  newborn care, and pediatric health programs.
                </p>
                <Badge variant="outline">Family Care</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Senior Care Services</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Dedicated healthcare services for senior citizens including regular check-ups, 
                  chronic disease management, and home care services.
                </p>
                <Badge variant="outline">Senior Focus</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Statistics */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Healthcare Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Users className="h-8 w-8 text-red-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">1.8M+</div>
              <div className="text-sm text-muted-foreground">Patients Served</div>
            </Card>
            <Card className="text-center p-6">
              <Activity className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">500K+</div>
              <div className="text-sm text-muted-foreground">Consultations/Year</div>
            </Card>
            <Card className="text-center p-6">
              <Heart className="h-8 w-8 text-red-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">150+</div>
              <div className="text-sm text-muted-foreground">Clinic Locations</div>
            </Card>
            <Card className="text-center p-6">
              <Award className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">97%</div>
              <div className="text-sm text-muted-foreground">Patient Satisfaction</div>
            </Card>
          </div>
        </section>
      </div>
    </DepartmentLayout>
  );
}