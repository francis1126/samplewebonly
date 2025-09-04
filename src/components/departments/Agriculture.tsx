import { DepartmentLayout } from "../DepartmentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { Leaf, Users, TrendingUp, Award, Phone, Mail, ShoppingCart } from "lucide-react";
import { departments } from "../../constants/departments";
import { toast } from "sonner";

interface AgricultureProps {
  onBack: () => void;
}

export function Agriculture({ onBack }: AgricultureProps) {
  const department = departments.find(d => d.route === "/agriculture")!;

  const handleGetQuote = () => {
    toast.success("Quote request submitted! Our agricultural specialists will contact you within 24 hours.");
  };

  const handleOrderProducts = () => {
    toast.success("Redirecting to Kadiwa Online Store...");
  };

  const handleScheduleVisit = () => {
    toast.success("Farm visit scheduled! We'll confirm your appointment via SMS within 2 hours.");
  };

  return (
    <DepartmentLayout
      department={department}
      heroImage="/agri.jpg"
      onBack={onBack}
    >
      <div className="space-y-16">
        {/* Overview */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">About Kadiwa Agriculture</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Kadiwa Agriculture is FTCC's premier agricultural products and services division, connecting 
                Filipino farmers directly with consumers through innovative distribution channels, quality 
                agricultural products, and sustainable farming solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We operate as a comprehensive agricultural business, providing fresh produce, organic products, 
                farming supplies, and agricultural consulting services while ensuring fair prices for farmers 
                and fresh, quality products for Filipino families.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <span>Business Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Farmers in Network</span>
                    <span className="text-sm font-medium">15,000+</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Customer Satisfaction</span>
                    <span className="text-sm font-medium">96%</span>
                  </div>
                  <Progress value={96} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Market Coverage</span>
                    <span className="text-sm font-medium">45 Provinces</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Products & Services */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Products & Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Fresh Produce Market</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Daily fresh vegetables, fruits, and agricultural products delivered directly from farms 
                  to markets, ensuring quality and freshness for Filipino families.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Farm Fresh</Badge>
                  <Badge variant="secondary">Daily Delivery</Badge>
                  <Badge variant="secondary">Quality Assured</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Organic Products Line</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Premium organic vegetables, rice, and specialty products from certified organic farms, 
                  catering to health-conscious Filipino consumers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Organic Certified</Badge>
                  <Badge variant="secondary">Premium Quality</Badge>
                  <Badge variant="secondary">Health Focused</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Agricultural Supplies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete range of farming supplies, equipment, and agricultural inputs to support 
                  farmers in increasing productivity and crop quality.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Farm Equipment</Badge>
                  <Badge variant="secondary">Seeds & Fertilizers</Badge>
                  <Badge variant="secondary">Technical Support</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Distribution Network */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Distribution Network</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Kadiwa Markets</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• 200+ Kadiwa Market Outlets Nationwide</li>
                  <li>• Metro Manila Central Markets</li>
                  <li>• Provincial Distribution Centers</li>
                  <li>• Mobile Kadiwa Trucks for Remote Areas</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Digital Platforms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Kadiwa Online Shopping Platform</li>
                  <li>• Mobile App for Easy Ordering</li>
                  <li>• Same-Day Delivery Service</li>
                  <li>• Bulk Orders for Restaurants & Hotels</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Business Statistics */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Business Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">15,000+</div>
              <div className="text-sm text-muted-foreground">Farmers in Network</div>
            </Card>
            <Card className="text-center p-6">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">₱2.5B</div>
              <div className="text-sm text-muted-foreground">Annual Sales Volume</div>
            </Card>
            <Card className="text-center p-6">
              <Leaf className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Product Varieties</div>
            </Card>
            <Card className="text-center p-6">
              <Award className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm text-muted-foreground">Market Outlets</div>
            </Card>
          </div>
        </section>

        {/* Featured Products */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Featured Product Lines</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Premium Rice Collection</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  High-quality rice varieties from Nueva Ecija and Pangasinan, available in different grades 
                  for household and commercial use.
                </p>
                <Badge variant="outline">Best Seller</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Fresh Vegetable Packs</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Daily harvested vegetables from Baguio and Tagaytay farms, delivered fresh to your doorstep 
                  with same-day delivery service.
                </p>
                <Badge variant="outline">Same-Day Fresh</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Tropical Fruit Selection</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Seasonal Filipino fruits including mangoes, durian, and rambutan, sourced directly from 
                  partner farms for guaranteed freshness.
                </p>
                <Badge variant="outline">Seasonal Special</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Action Panel */}
        <section className="space-y-8">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Ready to Start with Kadiwa Agriculture?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of satisfied customers who trust us for fresh, quality agricultural products 
                  and farming solutions. Get started today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                  <Button 
                    size="lg" 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={handleOrderProducts}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Order Products
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleGetQuote}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Get Quote
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleScheduleVisit}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule Visit
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