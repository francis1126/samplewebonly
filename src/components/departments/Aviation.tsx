import { DepartmentLayout } from "../DepartmentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { Plane, Users, Clock, Award, Calendar, Phone, Mail } from "lucide-react";
import { departments } from "../../constants/departments";
import { toast } from "sonner";

interface AviationProps {
  onBack: () => void;
}

export function Aviation({ onBack }: AviationProps) {
  const department = departments.find(d => d.route === "/aviation")!;

  const handleBookCharter = () => {
    toast.success("Charter flight inquiry submitted! Our aviation team will contact you within 4 hours.");
  };

  const handleScheduleTraining = () => {
    toast.success("Training consultation scheduled! We'll call you within 2 business hours.");
  };

  const handleMaintenanceQuote = () => {
    toast.success("Maintenance quote request sent! Our certified technicians will respond within 24 hours.");
  };

  return (
    <DepartmentLayout
      department={department}
      heroImage="/aviation.jpg"
      onBack={onBack}
    >
      <div className="space-y-16">
        {/* Overview */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">About Asian Institute of Aviation</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Asian Institute of Aviation (AIA) is FTCC's comprehensive aviation services division, 
                providing professional pilot training, aircraft maintenance, charter services, and aerospace 
                consulting solutions for commercial and private aviation clients throughout Asia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a commercial aviation services provider, we serve airlines, private aircraft owners, 
                cargo companies, and aviation professionals who require certified training, maintenance, 
                and operational support to meet international aviation standards.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Plane className="h-5 w-5 text-blue-600" />
                  <span>Service Statistics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Pilots Certified</span>
                    <span className="text-sm font-medium">2,500+</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Client Satisfaction</span>
                    <span className="text-sm font-medium">98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Aircraft Serviced</span>
                    <span className="text-sm font-medium">1,200+</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Aviation Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Professional Pilot Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Commercial pilot certification services for airlines and aviation companies requiring 
                  qualified pilots for their operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">ICAO Certified</Badge>
                  <Badge variant="secondary">Commercial License</Badge>
                  <Badge variant="secondary">Type Ratings</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Aircraft Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete maintenance, repair, and overhaul services for commercial and private aircraft 
                  with certified technicians and modern facilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">MRO Services</Badge>
                  <Badge variant="secondary">Line Maintenance</Badge>
                  <Badge variant="secondary">Heavy Checks</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Charter & Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Premium charter flight services and air cargo solutions for businesses requiring 
                  flexible and reliable aviation transportation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Private Charter</Badge>
                  <Badge variant="secondary">Cargo Services</Badge>
                  <Badge variant="secondary">VIP Transport</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Facilities */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Professional Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Fleet & Equipment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Modern Training Aircraft Fleet</li>
                  <li>• Professional Flight Simulators</li>
                  <li>• Charter Aircraft (Jets & Turboprops)</li>
                  <li>• Cargo Transport Aircraft</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Service Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Certified Maintenance Hangars</li>
                  <li>• Private Airport Terminal</li>
                  <li>• 24/7 Operations Center</li>
                  <li>• Customer Service Lounges</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Business Statistics */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Business Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">2,500+</div>
              <div className="text-sm text-muted-foreground">Pilots Certified</div>
            </Card>
            <Card className="text-center p-6">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">50,000+</div>
              <div className="text-sm text-muted-foreground">Service Hours</div>
            </Card>
            <Card className="text-center p-6">
              <Plane className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">1,200+</div>
              <div className="text-sm text-muted-foreground">Aircraft Serviced</div>
            </Card>
            <Card className="text-center p-6">
              <Award className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">₱1.2B</div>
              <div className="text-sm text-muted-foreground">Annual Revenue</div>
            </Card>
          </div>
        </section>

        {/* Client Services */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Client Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Corporate Clients</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Dedicated aviation services for corporations requiring executive transport and logistics solutions.
                </p>
                <Badge variant="outline">Executive Charter</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Airlines & Operators</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive support services for airlines including maintenance, training, and operational consulting.
                </p>
                <Badge variant="outline">B2B Services</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Private Owners</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Premium services for private aircraft owners including maintenance, storage, and management.
                </p>
                <Badge variant="outline">VIP Treatment</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Action Panel */}
        <section className="space-y-8">
          <Card className="bg-gradient-to-r from-blue-50 to-sky-50 border-blue-200">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Ready to Take Flight with AIA?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Whether you need pilot training, aircraft maintenance, or charter services, 
                  our certified aviation professionals are ready to serve you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={handleBookCharter}
                  >
                    <Plane className="mr-2 h-4 w-4" />
                    Book Charter
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleScheduleTraining}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Training
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleMaintenanceQuote}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Maintenance Quote
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </DepartmentLayout>
  );
}