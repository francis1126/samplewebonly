import { DepartmentLayout } from "../DepartmentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { CreditCard, Users, Smartphone, TrendingUp, Download, Phone, Mail } from "lucide-react";
import { departments } from "../../constants/departments";
import { toast } from "sonner";

interface FinTechProps {
  onBack: () => void;
}

export function FinTech({ onBack }: FinTechProps) {
  const department = departments.find(d => d.route === "/fintech")!;

  const handleDownloadApp = () => {
    toast.success("Redirecting to app store... Download West-Coast Wallet now!");
  };

  const handleOpenAccount = () => {
    toast.success("Account opening process started! We'll guide you through digital onboarding.");
  };

  const handleBusinessInquiry = () => {
    toast.success("Business inquiry submitted! Our fintech specialists will contact you within 2 hours.");
  };

  return (
    <DepartmentLayout
      department={department}
      heroImage="/public/zen.jpg"
      onBack={onBack}
    >
      <div className="space-y-16">
        {/* Overview */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">About West-Coast Financial Technology</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                West-Coast Financial Technology is FTCC's innovative fintech division, delivering cutting-edge 
                digital financial services tailored for Filipino consumers and businesses. We're revolutionizing 
                how Filipinos access, manage, and grow their financial resources.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our comprehensive suite of financial technology solutions includes mobile banking, digital payments, 
                lending platforms, and wealth management tools designed to promote financial inclusion and 
                economic empowerment across the Philippines.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-yellow-600" />
                  <span>Platform Metrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Active Users</span>
                    <span className="text-sm font-medium">3.2M+</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Transaction Success Rate</span>
                    <span className="text-sm font-medium">99.7%</span>
                  </div>
                  <Progress value={99} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Customer Satisfaction</span>
                    <span className="text-sm font-medium">4.8/5.0</span>
                  </div>
                  <Progress value={96} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Financial Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Digital Banking Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Full-featured digital banking with savings accounts, checking, time deposits, and 
                  instant fund transfers available 24/7 through our mobile app.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">24/7 Banking</Badge>
                  <Badge variant="secondary">Zero Fees</Badge>
                  <Badge variant="secondary">High Interest</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Payment Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Seamless payment processing for businesses and consumers including QR payments, 
                  online transactions, and mobile wallet integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">QR Payments</Badge>
                  <Badge variant="secondary">E-Wallet</Badge>
                  <Badge variant="secondary">Merchant Solutions</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Micro-Lending & Credit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Quick and accessible lending solutions for individuals and SMEs with AI-powered 
                  credit scoring and flexible repayment terms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Instant Approval</Badge>
                  <Badge variant="secondary">Flexible Terms</Badge>
                  <Badge variant="secondary">Low Interest</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technology Platform */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Technology Infrastructure</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Bank-Grade 256-bit Encryption</li>
                  <li>• BSP (Bangko Sentral ng Pilipinas) Compliant</li>
                  <li>• PCI DSS Level 1 Certified</li>
                  <li>• Biometric Authentication</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Innovation Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• AI-Powered Financial Insights</li>
                  <li>• Blockchain-Based Transactions</li>
                  <li>• Real-time Fraud Detection</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Business Statistics */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Platform Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Users className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">3.2M+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </Card>
            <Card className="text-center p-6">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">₱45B</div>
              <div className="text-sm text-muted-foreground">Monthly Transactions</div>
            </Card>
            <Card className="text-center p-6">
              <Smartphone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">500K+</div>
              <div className="text-sm text-muted-foreground">App Downloads</div>
            </Card>
            <Card className="text-center p-6">
              <CreditCard className="h-8 w-8 text-yellow-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">250K+</div>
              <div className="text-sm text-muted-foreground">Business Partners</div>
            </Card>
          </div>
        </section>

        {/* Product Lines */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Featured Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">West-Coast Wallet</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  All-in-one mobile wallet for payments, transfers, bills payment, and mobile top-ups 
                  with cashback rewards and exclusive deals.
                </p>
                <Badge variant="outline">Most Popular</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Business Banking Suite</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete digital banking solution for SMEs including payroll, invoicing, 
                  expense management, and business loans.
                </p>
                <Badge variant="outline">For Business</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Investment Platform</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Easy-to-use investment platform offering mutual funds, stocks, bonds, and 
                  cryptocurrency trading with low fees.
                </p>
                <Badge variant="outline">New Launch</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Action Panel */}
        <section className="space-y-8">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-bold">Start Your Digital Banking Journey</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Experience the future of Filipino banking with West-Coast's secure, 
                  innovative financial technology solutions designed for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                  <Button 
                    size="lg" 
                    className="bg-yellow-600 hover:bg-yellow-700"
                    onClick={handleDownloadApp}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download App
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleOpenAccount}
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Open Account
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={handleBusinessInquiry}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Business Inquiry
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