'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, AlertTriangle } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { useSignUp } from '@/features/signup/contexts/SignUpContext';
import StepIndicator from '../common/StepIndicator';
import { cn } from '@/shared/utils/utils';

export default function StepTwo() {
  const { step, data, updateData, nextStep, prevStep } = useSignUp();
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    company: false,
    phone: false,
  });

  const firstName = data.firstName || '';
  const lastName = data.lastName || '';
  const company = data.company || '';
  const phone = data.phone || '';

  const errors = {
    firstName: !firstName.trim() ? 'Enter your first name.' : '',
    lastName: !lastName.trim() ? 'Enter your last name.' : '',
    company: !company.trim() ? 'Enter your company name.' : '',
    phone: !phone.trim() ? 'Enter your work phone number.' : '',
  };

  const canProceed = !errors.firstName && !errors.lastName && !errors.company && !errors.phone;

  const handleNext = () => {
    setTouched({ firstName: true, lastName: true, company: true, phone: true });
    if (canProceed) {
      nextStep();
    }
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const renderError = (field: keyof typeof errors) => {
    if (touched[field] && errors[field]) {
      return (
        <p className="flex items-center gap-1 text-sm text-destructive mt-1">
          <AlertTriangle className="w-4 h-4" />
          {errors[field]}
        </p>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <StepIndicator currentStep={step} />

      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
        Tell us about you
      </h2>

      <div className="space-y-5">
        {/* First Name and Last Name Row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-foreground font-semibold">
              First name
            </Label>
            <Input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => updateData({ firstName: e.target.value })}
              onBlur={() => handleBlur('firstName')}
              className={cn(
                "h-12 bg-card",
                touched.firstName && errors.firstName && "border-destructive ring-2 ring-destructive/20"
              )}
            />
            {renderError('firstName')}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-foreground font-semibold">
              Last name
            </Label>
            <Input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => updateData({ lastName: e.target.value })}
              onBlur={() => handleBlur('lastName')}
              className={cn(
                "h-12 bg-card",
                touched.lastName && errors.lastName && "border-destructive ring-2 ring-destructive/20"
              )}
            />
            {renderError('lastName')}
          </div>
        </div>

        {/* Company Name */}
        <div className="space-y-2">
          <Label htmlFor="company" className="text-foreground font-semibold">
            Company name
          </Label>
          <Input
            id="company"
            type="text"
            value={company}
            onChange={(e) => updateData({ company: e.target.value })}
            onBlur={() => handleBlur('company')}
            className={cn(
              "h-12 bg-card",
              touched.company && errors.company && "border-destructive ring-2 ring-destructive/20"
            )}
          />
          {renderError('company')}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground font-semibold">
            Phone number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => updateData({ phone: e.target.value })}
            onBlur={() => handleBlur('phone')}
            className={cn(
              "h-12 bg-card",
              touched.phone && errors.phone && "border-destructive ring-2 ring-destructive/20"
            )}
          />
          {renderError('phone')}
        </div>

        {/* Navigation Buttons */}
        <div className="pt-4 flex justify-center gap-3">
          <Button
            type="button"
            onClick={prevStep}
            variant="outline"
            className="h-12 w-12 rounded-full p-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button
            type="button"
            onClick={handleNext}
            className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base font-medium"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
