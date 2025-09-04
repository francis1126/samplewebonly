import { DepartmentLayout } from "../DepartmentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Anchor, Ship, Globe, TrendingUp } from "lucide-react";
import { departments } from "../../constants/departments";

interface MarineProps {
  onBack: () => void;
}

export function Marine({ onBack }: MarineProps) {
  const department = departments.find(d => d.route === "/marine")!;

  return (
    <DepartmentLayout
      department={department}
      heroImage="/maritime.jpg"
      onBack={onBack}
    >
      <div className="space-y-16">
        {/* Overview */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">About Vertex Maritime International Trading</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Vertex Maritime International Trading is FTCC's maritime logistics and international trading 
                division, providing comprehensive shipping services, port operations, and global trade solutions 
                that connect the Philippines to international markets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a leading maritime services provider, we facilitate international trade through our modern 
                fleet, strategic port partnerships, and comprehensive logistics solutions that support Filipino 
                businesses in reaching global markets efficiently and cost-effectively.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Anchor className="h-5 w-5 text-cyan-600" />
                  <span>Maritime Operations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Cargo Volume (TEU/Year)</span>
                    <span className="text-sm font-medium">2.5M+</span>
                  </div>
                  <Progress value={89} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">On-Time Delivery Rate</span>
                    <span className="text-sm font-medium">96%</span>
                  </div>
                  <Progress value={96} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">International Routes</span>
                    <span className="text-sm font-medium">45+</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Maritime Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">International Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Container shipping services connecting the Philippines to major global ports 
                  with reliable schedules and competitive rates for all cargo types.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Container Service</Badge>
                  <Badge variant="secondary">Global Network</Badge>
                  <Badge variant="secondary">Fast Transit</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Port Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive port services including cargo handling, container terminal operations, 
                  warehousing, and customs clearance at major Philippine ports.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cargo Handling</Badge>
                  <Badge variant="secondary">Warehousing</Badge>
                  <Badge variant="secondary">Customs Support</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Logistics Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  End-to-end logistics management including supply chain planning, intermodal transport, 
                  and last-mile delivery for seamless cargo movement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Supply Chain</Badge>
                  <Badge variant="secondary">Intermodal</Badge>
                  <Badge variant="secondary">Door-to-Door</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Fleet & Infrastructure */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Fleet & Infrastructure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Vessel Fleet</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• 25 Container Vessels (Various Sizes)</li>
                  <li>• 15 Bulk Carriers for Dry Cargo</li>
                  <li>• 8 RoRo Vessels for Domestic Routes</li>
                  <li>• 12 Specialized Cargo Ships</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Port Facilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Container Terminal Operations</li>
                  <li>• 500,000 sqm Warehouse Space</li>
                  <li>• Modern Cargo Handling Equipment</li>
                  <li>• 24/7 Security & Monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Trade Routes */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Global Trade Network</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Asian Routes</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Regular shipping services to China, Japan, South Korea, Singapore, Malaysia, 
                  Thailand, and other major Asian trading partners.
                </p>
                <Badge variant="outline">Weekly Service</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Trans-Pacific Routes</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Direct connections to US West Coast ports including Los Angeles, Long Beach, 
                  Seattle, and Vancouver for efficient Pacific trade.
                </p>
                <Badge variant="outline">Express Service</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">European Connections</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Connecting to major European ports via transhipment hubs in Singapore 
                  and Dubai for global market access.
                </p>
                <Badge variant="outline">Global Reach</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Statistics */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Business Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Ship className="h-8 w-8 text-cyan-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">60+</div>
              <div className="text-sm text-muted-foreground">Vessels in Fleet</div>
            </Card>
            <Card className="text-center p-6">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">₱8.5B</div>
              <div className="text-sm text-muted-foreground">Annual Revenue</div>
            </Card>
            <Card className="text-center p-6">
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">45+</div>
              <div className="text-sm text-muted-foreground">International Routes</div>
            </Card>
            <Card className="text-center p-6">
              <Anchor className="h-8 w-8 text-cyan-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">2.5M+</div>
              <div className="text-sm text-muted-foreground">TEU Handled/Year</div>
            </Card>
          </div>
        </section>
      </div>
    </DepartmentLayout>
  );
}