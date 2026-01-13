export interface Lead {
  id: string;
  name: string;
  email: string;
  company?: string;
  registeredAt: string;
  source: string;
  status: "new" | "contacted" | "qualified";
}
