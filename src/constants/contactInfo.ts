import { MapPin, Phone, Mail, Clock } from "lucide-react";

export interface ContactItem {
  icon: typeof MapPin;
  title: string;
  content: string;
}

export const contactItems: ContactItem[] = [
  {
    icon: MapPin,
    title: "Address",
    content: "FTCC Building, Ayala Avenue\nMakati City, Metro Manila 1226\nPhilippines"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+63 (02) 8888-FTCC\n+63 (02) 8888-3822"
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@ftcc.ph\nsupport@ftcc.ph"
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 3:00 PM\n(Philippine Standard Time)"
  }
];

export const serviceOptions = [
  { value: "", label: "Select a department" },
  { value: "agriculture", label: "Agriculture - Kadiwa" },
  { value: "aviation", label: "Aviation - AIA" },
  { value: "fintech", label: "Financial Technology - West-Coast" },
  { value: "health", label: "Health - Health Tech Clinic" },
  { value: "marine", label: "Marine - Vertex Maritime" },
  { value: "transportation", label: "Transportation - DOTR" },
  { value: "it", label: "IT - FTCC Solutions Inc." }
];