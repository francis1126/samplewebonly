import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-red-600 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                <span className="text-sm text-white/90">🇵🇭 Trusted by 10M+ Filipino customers nationwide</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Your Filipino's Trusted 
                <span className="block text-transparent bg-gradient-to-r from-yellow-200 to-yellow-300 bg-clip-text">
                  Care Company
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Filipino Trusted Care Company delivers exceptional products and services across 7 key 
                industries, serving Filipino families and businesses with excellence, innovation, and malasakit.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-white/90 shadow-lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-blue-600 hover:bg-white/90 shadow-lg"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <PlayCircle className="mr-2 h-4 w-4" />
                Our Company Story
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold">10M+</div>
                <div className="text-sm text-white/70">Customers Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">7</div>
                <div className="text-sm text-white/70">Business Divisions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">₱15B</div>
                <div className="text-sm text-white/70">Annual Revenue</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:pl-8">
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
              
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
                  alt="Filipino business professionals and customers"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-xl p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <img src="/francis.jpg" alt="Customer Avatar" className="w-10 h-10 rounded-full object-cover border-2 border-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}