export interface Lead {
  id: string;
  name: string;
  email: string;
  company?: string;
  registeredAt: string;
  source: string;
  status: "new" | "contacted" | "qualified";
}

export interface TrialRequestFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  businessType: string;
  message: string;
}

export type BusinessType =
  | "hotel"
  | "restaurant"
  | "cafe"
  | "coworking"
  | "retail"
  | "hospital"
  | "educational"
  | "airport"
  | "other";
