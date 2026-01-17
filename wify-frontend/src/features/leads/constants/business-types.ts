import { BusinessType } from "../types/lead";

export interface BusinessTypeOption {
  value: BusinessType;
  label: string;
}

export const BUSINESS_TYPES: BusinessTypeOption[] = [
  { value: "hotel", label: "Hotel / Hospitality" },
  { value: "restaurant", label: "Restaurant" },
  { value: "cafe", label: "Cafe / Coffee Shop" },
  { value: "coworking", label: "Co-working Space" },
  { value: "retail", label: "Retail Store" },
  { value: "hospital", label: "Hospital / Healthcare" },
  { value: "educational", label: "Educational Institution" },
  { value: "airport", label: "Airport / Transport Hub" },
  { value: "other", label: "Other" },
];

export const COUNTRY_CODES = [
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+86", country: "China", flag: "🇨🇳" },
];
