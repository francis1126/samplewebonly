import { 
  Wheat, 
  Plane, 
  CreditCard, 
  Heart, 
  Anchor, 
  Truck,
  Computer
} from "lucide-react";

export interface Department {
  id: number;
  name: string;
  shortName: string;
  description: string;
  icon: typeof Computer;
  services: string[];
  color: string;
  route: string;
  fullName: string;
}

export const departments: Department[] = [
  {
    id: 1,
    name: "Agriculture",
    shortName: "Kadiwa Agriculture",
    fullName: "Kadiwa Agriculture Division",
    description: "Agricultural products, sustainable farming solutions, and direct-to-market food distribution services connecting Filipino farmers with consumers nationwide.",
    icon: Wheat,
    services: ["Fresh Produce", "Organic Products", "Farm-to-Table", "Agricultural Supplies"],
    color: "bg-green-50 text-green-600",
    route: "/agriculture"
  },
  {
    id: 2,
    name: "Aviation",
    shortName: "AIA",
    fullName: "Asian Institute of Aviation",
    description: "Commercial aviation services including pilot certification, aircraft maintenance, charter flights, and aerospace consulting for business and private clients.",
    icon: Plane,
    services: ["Pilot Certification", "Aircraft Maintenance", "Charter Services", "Aviation Consulting"],
    color: "bg-blue-50 text-blue-600",
    route: "/aviation"
  },
  {
    id: 3,
    name: "Financial Technology",
    shortName: "West-Coast",
    fullName: "West-Coast Financial Technology",
    description: "Digital financial services, mobile banking solutions, payment processing, and fintech innovations designed for Filipino consumers and businesses.",
    icon: CreditCard,
    services: ["Digital Banking", "Payment Solutions", "Mobile Wallets", "Business Loans"],
    color: "bg-yellow-50 text-yellow-700",
    route: "/fintech"
  },
  {
    id: 4,
    name: "Healthcare",
    shortName: "Health Tech Clinic",
    fullName: "Health Tech Clinic Network",
    description: "Modern healthcare services, telemedicine platforms, health monitoring solutions, and medical facilities providing comprehensive care to Filipino families.",
    icon: Heart,
    services: ["Medical Services", "Telemedicine", "Health Monitoring", "Wellness Programs"],
    color: "bg-red-50 text-red-600",
    route: "/health"
  },
  {
    id: 5,
    name: "Marine",
    shortName: "Vertex Maritime",
    fullName: "Vertex Maritime International Trading",
    description: "Maritime logistics, shipping services, port operations, and international trading solutions supporting Philippine commerce and global trade connections.",
    icon: Anchor,
    services: ["Shipping Services", "Port Operations", "International Trade", "Logistics Solutions"],
    color: "bg-cyan-50 text-cyan-600",
    route: "/marine"
  },
  {
    id: 6,
    name: "Transportation",
    shortName: "DOTR",
    fullName: "Transportation Solutions Division",
    description: "Transportation services, logistics coordination, fleet management, and infrastructure solutions for efficient movement of people and goods across the Philippines.",
    icon: Truck,
    services: ["Fleet Services", "Logistics", "Transportation Planning", "Infrastructure Solutions"],
    color: "bg-orange-50 text-orange-600",
    route: "/transportation"
  },
  {
    id: 7,
    name: "Information Technology",
    shortName: "FTCC Solutions Inc.",
    fullName: "FTCC Solutions Incorporated",
    description: "Technology consulting, software development, digital transformation services, and IT solutions helping Filipino businesses modernize and compete globally.",
    icon: Computer,
    services: ["Software Development", "IT Consulting", "Digital Solutions", "System Integration"],
    color: "bg-purple-50 text-purple-600",
    route: "/it"
  }
];