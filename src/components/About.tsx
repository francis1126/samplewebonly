import { Card, CardContent } from "./ui/card";
import { stats } from "../constants/stats";
import { Badge } from "./ui/badge";

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">About FTCC</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                  Leading Filipino Business Solutions Since 2010
                </h2>
              </div>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Filipino Trusted Care Company is a leading business conglomerate that has been serving 
                  Filipino customers and enterprises across multiple industries for over a decade. We provide 
                  comprehensive commercial solutions that drive economic growth and improve quality of life 
                  throughout the Philippines.
                </p>
                <p>
                  Our diversified business portfolio spans from agricultural commerce through Kadiwa Agriculture 
                  to aviation services via AIA, from cutting-edge financial technology solutions to comprehensive 
                  healthcare services, maritime logistics, transportation infrastructure, and IT solutions - 
                  all designed to meet the evolving needs of Filipino businesses and consumers.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="border-blue-200 text-blue-700">Business Excellence</Badge>
                <Badge variant="outline" className="border-red-200 text-red-700">Customer Focused</Badge>
                <Badge variant="outline" className="border-yellow-200 text-yellow-700">Market Leader</Badge>
                <Badge variant="outline" className="border-green-200 text-green-700">Sustainable Business</Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 via-red-500/10 to-yellow-500/10 border border-blue-200/50 mb-4">
                      <IconComponent className={`h-7 w-7 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-50/50 border-blue-100">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-900">Our Mission</h3>
                  <p className="text-blue-700 leading-relaxed">
                    To bring compassionate, accessible, and comprehensive healthcare to every Filipino by providing free consultations, 
                    medicines, diagnostics, and laboratory services—ensuring that no one is left behind in their journey to wellness.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-blue-50/50 border-blue-100">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-900">Our Vision</h3>
                  <p className="text-blue-700 leading-relaxed">
                    A healthier Philippines where every community has access to preventive and primary care, 
                    supported by innovative programs, making quality healthcare a right enjoyed by all, 
                    and not a privilege for a few.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-50/50 border-yellow-100">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-yellow-900">Our Values</h3>
                  <p className="text-yellow-700 leading-relaxed">
                    Malasakit (compassionate service), Kapamilya (family spirit), Business Excellence, 
                    Innovation, and Integrity drive our operations. We build lasting partnerships with 
                    customers, suppliers, and communities based on trust and mutual business success.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}