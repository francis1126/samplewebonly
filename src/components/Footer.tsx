import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Badge } from "./ui/badge";

export function Footer() {
  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-bold">FTCC</h3>
                <p className="text-sm text-white/70">Technology Solutions</p>
              </div>
              <p className="text-white/80 max-w-md leading-relaxed">
                Franklin Technology Consulting Company - Your trusted partner for digital transformation, 
                innovative solutions, and business growth through technology excellence.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  ISO 27001 Certified
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  SOC 2 Compliant
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  24/7 Support
                </Badge>
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Services</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors text-sm">Software Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Cloud Infrastructure</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">IT Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Business Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/60">
            <p>&copy; 2025 Franklin Technology Consulting Company. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-white/60">
            <span>🌍</span>
            <span>Available worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}