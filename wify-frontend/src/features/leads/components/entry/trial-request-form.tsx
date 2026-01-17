"use client";

import { useState } from "react";
import { Loader2, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { toast } from "sonner";
import { TrialRequestFormData } from "../../types/lead";
import { BUSINESS_TYPES, COUNTRY_CODES } from "../../constants/business-types";
import { cn } from "@/shared/utils/utils";

const initialFormData: TrialRequestFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  countryCode: "+91",
  businessType: "",
  message: "",
};

export default function TrialRequestForm() {
  const [formData, setFormData] = useState<TrialRequestFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isPhoneValid = /^[0-9]{10}$/.test(formData.phone);

  const canSubmit =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    isEmailValid &&
    isPhoneValid &&
    formData.businessType;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      businessType: true,
    });

    if (!canSubmit) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - replace with actual backend integration
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Trial request submitted! We'll contact you shortly.");

    setTimeout(() => {
      setFormData(initialFormData);
      setTouched({});
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  if (isSubmitted) {
    return (
      <div id="register" className="scroll-mt-24 w-full">
        <Card className="max-w-md mx-auto backdrop-blur-sm bg-card/95 border-border/50 shadow-xl">
          <CardContent className="py-10">
            <div className="flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/15 mb-4">
                <CheckCircle2 className="h-7 w-7 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-2">Request Received!</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Thank you! Our team will reach out within 24 hours to set up your trial.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div id="register" className="scroll-mt-24 w-full">
      <Card className="max-w-md mx-auto backdrop-blur-sm bg-card/95 border-border/50 shadow-xl">
        <CardHeader className="text-center pb-0 pt-5 px-5">
          <CardTitle className="text-xl">Request Free Trial</CardTitle>
          <CardDescription className="text-sm">
            30-day free trial. No credit card required.
          </CardDescription>
        </CardHeader>

        <CardContent className="px-5 pb-5 pt-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="firstName" className="text-xs font-medium">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={() => handleBlur("firstName")}
                  disabled={isSubmitting}``
                  className={cn(
                    "h-9 text-sm bg-background",
                    touched.firstName && !formData.firstName.trim() && "border-destructive"
                  )}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="lastName" className="text-xs font-medium">
                  Last Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={() => handleBlur("lastName")}
                  disabled={isSubmitting}
                  className={cn(
                    "h-9 text-sm bg-background",
                    touched.lastName && !formData.lastName.trim() && "border-destructive"
                  )}
                />
              </div>
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="email" className="text-xs font-medium">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  disabled={isSubmitting}
                  className={cn(
                    "h-9 text-sm bg-background",
                    touched.email && !isEmailValid && "border-destructive"
                  )}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="businessType" className="text-xs font-medium">
                  Business Type <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    onBlur={() => handleBlur("businessType")}
                    disabled={isSubmitting}
                    className={cn(
                      "h-9 w-full appearance-none rounded-lg border border-input bg-background px-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring disabled:cursor-not-allowed disabled:opacity-50",
                      !formData.businessType && "text-muted-foreground",
                      touched.businessType && !formData.businessType && "border-destructive"
                    )}
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    {BUSINESS_TYPES.map((bt) => (
                      <option key={bt.value} value={bt.value}>
                        {bt.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Phone with Country Code */}
            <div className="space-y-1">
              <Label htmlFor="phone" className="text-xs font-medium">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <div className="flex gap-2">
                <div className="relative">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="h-9 w-[88px] appearance-none rounded-lg border border-input bg-background px-2 pr-6 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50 focus:border-ring disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {COUNTRY_CODES.map((cc) => (
                      <option key={cc.code} value={cc.code}>
                        {cc.flag} {cc.code}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-1.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
                </div>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                    setFormData((prev) => ({ ...prev, phone: value }));
                  }}
                  onBlur={() => handleBlur("phone")}
                  disabled={isSubmitting}
                  className={cn(
                    "h-9 text-sm bg-background flex-1",
                    touched.phone && !isPhoneValid && "border-destructive"
                  )}
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <Label htmlFor="message" className="text-xs font-medium">
                Tell us about your needs{" "}
                <span className="text-muted-foreground font-normal">(Optional)</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="What challenges are you facing?"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="min-h-[60px] text-sm bg-background resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-10 bg-brand-gradient text-brand-foreground border-0 hover:opacity-90 text-sm font-medium"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Start Free Trial
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>

            {/* Footer */}
            <p className="text-[11px] text-center text-muted-foreground">
              By submitting, you agree to our{" "}
              <a href="/terms" className="underline hover:text-foreground">
                Terms
              </a>{" "}
              &{" "}
              <a href="/privacy" className="underline hover:text-foreground">
                Privacy Policy
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
