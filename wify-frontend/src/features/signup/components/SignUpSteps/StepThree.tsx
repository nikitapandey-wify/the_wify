'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, ChevronDown, Loader2 } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { useSignUp } from '@/features/signup/contexts/SignUpContext';
import StepIndicator from '../common/StepIndicator';
import { INDUSTRY_OPTIONS, EMPLOYEE_COUNT_OPTIONS } from '@/features/signup/types/signUpTypes';
import { cn } from '@/shared/utils/utils';
import { toast } from 'sonner';

export default function StepThree() {
  const { step, data, updateData, prevStep } = useSignUp();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const industry = data.industry || '';
  const employeeCount = data.employeeCount || '';
  const hearFrom = data.hearFrom || '';

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call - replace with actual backend integration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      toast.success('Account created successfully! Welcome to your 30-day free trial.');
      
      // Here you would typically redirect to the dashboard or next onboarding step
      console.log('Sign up data:', data);
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <StepIndicator currentStep={step} />

      <div className="space-y-5">
        {/* Industry Dropdown */}
        <div className="space-y-2">
          <Label htmlFor="industry" className="text-foreground font-semibold">
            Select your industry
          </Label>
          <div className="relative">
            <select
              id="industry"
              value={industry}
              onChange={(e) => updateData({ industry: e.target.value })}
              className={cn(
                "flex h-12 w-full rounded-lg border border-input bg-card px-4 py-2 text-base shadow-sm transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring",
                "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                "appearance-none cursor-pointer",
                !industry && "text-muted-foreground"
              )}
            >
              <option value="" disabled>Choose from list</option>
              {INDUSTRY_OPTIONS.map((option) => (
                <option key={option} value={option} className="text-foreground">
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* Employee Count Dropdown */}
        <div className="space-y-2">
          <Label htmlFor="employeeCount" className="text-foreground font-semibold">
            Number of employees
          </Label>
          <div className="relative">
            <select
              id="employeeCount"
              value={employeeCount}
              onChange={(e) => updateData({ employeeCount: e.target.value })}
              className={cn(
                "flex h-12 w-full rounded-lg border border-input bg-card px-4 py-2 text-base shadow-sm transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:border-ring",
                "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                "appearance-none cursor-pointer",
                !employeeCount && "text-muted-foreground"
              )}
            >
              <option value="" disabled>Choose from list</option>
              {EMPLOYEE_COUNT_OPTIONS.map((option) => (
                <option key={option} value={option} className="text-foreground">
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        {/* How did you hear about us */}
        <div className="space-y-2">
          <Label htmlFor="hearFrom" className="text-foreground font-semibold">
            How did you hear about us?
          </Label>
          <Input
            id="hearFrom"
            type="text"
            placeholder="Enter how you heard about us"
            value={hearFrom}
            onChange={(e) => updateData({ hearFrom: e.target.value })}
            className="h-12 bg-card"
          />
        </div>

        {/* Navigation Buttons */}
        <div className="pt-4 flex justify-center gap-3">
          <Button
            type="button"
            onClick={prevStep}
            variant="outline"
            className="h-12 w-12 rounded-full p-0"
            disabled={isSubmitting}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base font-medium"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-1" />
                Creating account...
              </>
            ) : (
              <>
                Sign up
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
