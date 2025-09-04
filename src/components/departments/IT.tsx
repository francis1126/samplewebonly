import { DepartmentLayout } from "../DepartmentLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Computer, Users, Code, TrendingUp } from "lucide-react";
import { departments } from "../../constants/departments";

interface ITProps {
  onBack: () => void;
}

export function IT({ onBack }: ITProps) {
  const department = departments.find(d => d.route === "/it")!;

  return (
    <DepartmentLayout
      department={department}
      heroImage="/public/it.jpg"
      onBack={onBack}
    >
      <div className="space-y-16">
        {/* Overview */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">About FTCC Solutions Incorporated</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                FTCC Solutions Incorporated is our technology consulting and software development division, 
                specializing in digital transformation, custom software solutions, and IT consulting services 
                that help Filipino businesses modernize and compete in the digital economy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We combine deep technical expertise with understanding of Filipino business culture to deliver 
                innovative technology solutions including enterprise software, mobile applications, cloud services, 
                and digital transformation strategies for businesses of all sizes.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Computer className="h-5 w-5 text-purple-600" />
                  <span>Technology Metrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Projects Delivered</span>
                    <span className="text-sm font-medium">800+</span>
                  </div>
                  <Progress value={92} className="h-2" />
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
                    <span className="text-sm">On-Time Delivery</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Technology Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Custom Software Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Tailored software solutions including web applications, mobile apps, enterprise systems, 
                  and API development using modern technologies and frameworks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Web Apps</Badge>
                  <Badge variant="secondary">Mobile Apps</Badge>
                  <Badge variant="secondary">APIs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Digital Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive digital transformation consulting including process automation, 
                  cloud migration, data analytics, and digital strategy development.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Cloud Migration</Badge>
                  <Badge variant="secondary">Process Automation</Badge>
                  <Badge variant="secondary">Data Analytics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">IT Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete IT infrastructure services including network setup, cybersecurity, 
                  system integration, and 24/7 technical support and maintenance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Network Setup</Badge>
                  <Badge variant="secondary">Cybersecurity</Badge>
                  <Badge variant="secondary">24/7 Support</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Technology Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Development Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• React, Vue.js, Angular for Frontend</li>
                  <li>• Node.js, Python, Java for Backend</li>
                  <li>• React Native, Flutter for Mobile</li>
                  <li>• PostgreSQL, MongoDB, MySQL for Databases</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Cloud & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• AWS, Azure, Google Cloud Platforms</li>
                  <li>• Docker, Kubernetes for Containerization</li>
                  <li>• DevOps & CI/CD Pipelines</li>
                  <li>• Microservices Architecture</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Industry Solutions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">E-Commerce Platforms</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete e-commerce solutions for Filipino businesses including online stores, 
                  payment integration, inventory management, and digital marketing tools.
                </p>
                <Badge variant="outline">Retail & Commerce</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Financial Technology</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Secure fintech applications including digital wallets, lending platforms, 
                  payment processors, and financial management systems.
                </p>
                <Badge variant="outline">Banking & Finance</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2">Healthcare Systems</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Healthcare management systems including EMR, telemedicine platforms, 
                  patient management, and health monitoring applications.
                </p>
                <Badge variant="outline">Healthcare & Medical</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Statistics */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold">Business Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm text-muted-foreground">Active Clients</div>
            </Card>
            <Card className="text-center p-6">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">₱1.8B</div>
              <div className="text-sm text-muted-foreground">Annual Revenue</div>
            </Card>
            <Card className="text-center p-6">
              <Code className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">800+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </Card>
            <Card className="text-center p-6">
              <Computer className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <div className="text-2xl font-bold">150+</div>
              <div className="text-sm text-muted-foreground">Tech Experts</div>
            </Card>
          </div>
        </section>
      </div>
    </DepartmentLayout>
  );
}