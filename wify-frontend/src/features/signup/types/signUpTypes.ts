export type SignUpData = {
    email: string;
    password: string;

    firstName: string;
    lastName: string;

    company: string;
    phone: string;

    industry: string;
    employeeCount: string;
    hearFrom: string;
}

export const INDUSTRY_OPTIONS = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Retail",
    "Manufacturing",
    "Real Estate",
    "Marketing & Advertising",
    "Consulting",
    "Other"
] as const;

export const EMPLOYEE_COUNT_OPTIONS = [
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1000+"
] as const;