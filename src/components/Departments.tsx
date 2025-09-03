import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { departments } from "../constants/departments";
import { ArrowRight } from "lucide-react";
import { Route } from "./Router";

interface DepartmentsProps {
  onNavigate: (route: Route) => void;
}

export function Departments({ onNavigate }: DepartmentsProps) {
  const handleDepartmentClick = (route: string) => {
    onNavigate(route as Route);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-6">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm">Our Departments</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Seven Pillars of Filipino Excellence
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From agriculture to aviation, technology to healthcare, our comprehensive departments 
            work together to build a stronger, more prosperous Philippines for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const IconComponent = dept.icon;
            const isHighlighted = index === 0 || index === 1; // Highlight first two departments
            
            return (
              <Card 
                key={dept.id} 
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  isHighlighted ? 'ring-2 ring-blue-500/20 bg-gradient-to-br from-blue-50/50 to-red-50/30' : ''
                }`}
              >
                <CardHeader className="space-y-4">
                  <div className={`w-14 h-14 rounded-xl ${dept.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {dept.name}
                    </CardTitle>
                    <p className="text-sm font-medium text-muted-foreground">{dept.shortName}</p>
                    {isHighlighted && (
                      <Badge variant="default" className="text-xs bg-gradient-to-r from-blue-600 to-red-600">Featured</Badge>
                    )}
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {dept.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Key Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dept.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-red-600 group-hover:text-white transition-all duration-300"
                    onClick={() => handleDepartmentClick(dept.route)}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Card className="inline-block bg-gradient-to-r from-blue-50 to-red-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Need Multi-Department Solutions?</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Our departments work together seamlessly to provide integrated solutions 
                for complex challenges across multiple sectors.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact FTCC
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}