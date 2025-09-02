import { Users, Award, Building2, TrendingUp } from "lucide-react";

export interface Stat {
  icon: typeof Users;
  value: string;
  label: string;
  color: string;
}

export const stats: Stat[] = [
  {
    icon: Users,
    value: "10M+",
    label: "Customers Served",
    color: "text-blue-600"
  },
  {
    icon: Award,
    value: "15+",
    label: "Years in Business",
    color: "text-red-600"
  },
  {
    icon: Building2,
    value: "7",
    label: "Business Divisions",
    color: "text-yellow-600"
  },
  {
    icon: TrendingUp,
    value: "₱15B",
    label: "Annual Revenue",
    color: "text-green-600"
  }
];