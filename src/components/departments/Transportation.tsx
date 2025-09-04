import { DepartmentLayout } from "../DepartmentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Truck, Users, MapPin, TrendingUp } from "lucide-react";
import { departments } from "../../constants/departments";

interface TransportationProps {
  onBack: () => void;
}

export function Transportation({ onBack }: TransportationProps) {
  const department = departments.find(d => d.route === "/transportation")!;

  return (
    <DepartmentLayout
      department={department}
      heroImage="/trans.webp"
      onBack={onBack}
    >
      <div className="space-y-16">
        {/* Overview */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">About Transportation Solutions Division</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Transportation Solutions Division is FTCC's comprehensive transportation and logistics arm, 
                providing efficient movement of people and goods across the Philippines through modern fleet 
                management, logistics coordination, and infrastructure development solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We serve both individual and business transportation needs with services ranging from 
                passenger transport and cargo delivery to supply chain management and transportation 
                infrastructure consulting for government and private sector clients.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-orange-600" />
                  <span>Transportation Metrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Daily Passengers</span>
                    <span className="text-sm font-medium">150K+</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">On-Time Performance</span>
                    <span className="text-sm font-medium">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Route Coverage</span>
                    <span className="text-sm font-medium">1,200+ Routes</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Transportation Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Public Transportation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Modern bus services, jeepney modernization programs, and integrated transport 
                  systems connecting urban and rural communities across the Philippines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Bus Services</Badge>
                  <Badge variant="secondary">Modern Jeepneys</Badge>
                  <Badge variant="secondary">Route Planning</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Cargo & Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive freight services including last-mile delivery, inter-island shipping, 
                  cold chain logistics, and specialized cargo handling solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Freight Services</Badge>
                  <Badge variant="secondary">Cold Chain</Badge>
                  <Badge variant="secondary">Express Delivery</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Fleet Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional fleet management services for businesses including vehicle leasing, 
                  maintenance, driver training, and GPS tracking systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Vehicle Leasing</Badge>
                  <Badge variant="secondary">GPS Tracking</Badge>
                  <Badge variant="secondary">Maintenance</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Transportation Infrastructure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Vehicle Fleet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• 2,500+ Modern Bus Units</li>
                  <li>• 1,800+ Cargo Trucks & Delivery Vans</li>
                  <li>• 500+ Modernized Jeepneys</li>
                  <li>• 300+ Specialized Vehicles</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Support Facilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• 50+ Service & Maintenance Centers</li>
                  <li>• Modern Bus Terminals & Stations</li>
                  <li>• Logistics Distribution Centers</li>
                  <li>• 24/7 Command & Control Centers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Routes & Coverage */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Route Network</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Metro Manila Network</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive public transportation within Metro Manila including EDSA routes, 
                  city connections, and point-to-point services.
                </p>
                <Badge variant="outline">Urban Transport</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Provincial Routes</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Inter-provincial bus services connecting major cities and towns across 
                  Luzon, Visayas, and Mindanao with comfortable coaches.
                </p>
                <Badge variant="outline">Long Distance</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Cargo Network</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Nationwide cargo delivery network with same-day, next-day, and express 
                  delivery options for businesses and individuals.
                </p>
                <Badge variant="outline">Cargo Services</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Statistics */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Operations Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Users className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">150K+</div>
              <div className="text-sm text-muted-foreground">Daily Passengers</div>
            </Card>
            <Card className="text-center p-6">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">₱4.2B</div>
              <div className="text-sm text-muted-foreground">Annual Revenue</div>
            </Card>
            <Card className="text-center p-6">
              <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">1,200+</div>
              <div className="text-sm text-muted-foreground">Active Routes</div>
            </Card>
            <Card className="text-center p-6">
              <Truck className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">5,100+</div>
              <div className="text-sm text-muted-foreground">Fleet Vehicles</div>
            </Card>
          </div>
        </section>
      </div>
    </DepartmentLayout>
  );
}