'use client';

import { Check } from 'lucide-react';
import { cn } from '@/shared/utils/utils';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
}

export default function StepIndicator({ currentStep, totalSteps = 3 }: StepIndicatorProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-0 mb-8">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          {/* Step Circle */}
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all",
              step < currentStep && "bg-primary text-primary-foreground",
              step === currentStep && "bg-primary text-primary-foreground ring-4 ring-primary/20",
              step > currentStep && "bg-muted text-muted-foreground"
            )}
          >
            {step < currentStep ? (
              <Check className="w-4 h-4" />
            ) : (
              step
            )}
          </div>
          
          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div
              className={cn(
                "w-16 h-0.5 mx-1",
                step < currentStep ? "bg-primary" : "bg-muted"
              )}
            />
          )}
        </div>
      ))}
    </div>
  );
}
