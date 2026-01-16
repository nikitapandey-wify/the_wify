'use client';

import { useState, useMemo } from 'react';
import { ArrowRight, Eye, EyeOff, Check, Circle } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { useSignUp } from '@/features/signup/contexts/SignUpContext';
import StepIndicator from '../common/StepIndicator';
import { cn } from '@/shared/utils/utils';

interface PasswordRequirement {
  label: string;
  test: (password: string) => boolean;
}

const passwordRequirements: PasswordRequirement[] = [
  { label: 'At least 8 characters long', test: (p) => p.length >= 8 },
  { label: 'At least one lowercase character', test: (p) => /[a-z]/.test(p) },
  { label: 'At least one uppercase character', test: (p) => /[A-Z]/.test(p) },
  { label: 'At least one number', test: (p) => /[0-9]/.test(p) },
  { label: 'At least one special character', test: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
];

export default function StepOne() {
  const { step, data, updateData, nextStep } = useSignUp();
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });

  const email = data.email || '';
  const password = data.password || '';

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValidation = useMemo(() => {
    return passwordRequirements.map((req) => ({
      ...req,
      passed: req.test(password),
    }));
  }, [password]);

  const allPasswordRequirementsMet = passwordValidation.every((req) => req.passed);
  const canProceed = isEmailValid && allPasswordRequirementsMet;

  const [showErrors, setShowErrors] = useState(false);

  const handleNext = () => {
    setTouched({ email: true, password: true });
    if (canProceed) {
      nextStep();
    } else {
      setShowErrors(true);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <StepIndicator currentStep={step} />

      <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
        Start your 30-day free trial
      </h2>

      <div className="space-y-6">
        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-semibold">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => updateData({ email: e.target.value })}
            onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
            className={cn(
              "h-12 bg-card",
              touched.email && !isEmailValid && email && "border-destructive ring-destructive/20"
            )}
          />
          {touched.email && !isEmailValid && (
            <p className="text-sm text-destructive">
              {email ? 'Please enter a valid email address.' : 'Email is required.'}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-foreground font-semibold">
              Create password
            </Label>
            <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
                className="w-4 h-4 rounded border-input accent-primary"
              />
              Show password
            </label>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => updateData({ password: e.target.value })}
              onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
              className="h-12 bg-card pr-10"
            />
          </div>

          {/* Password Requirements */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2">
            {passwordValidation.map((req, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                {req.passed ? (
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                ) : (
                  <Circle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                )}
                <span className={cn(
                  req.passed ? "text-primary" : "text-muted-foreground"
                )}>
                  {req.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Error message */}
        {showErrors && !canProceed && (
          <p className="text-sm text-destructive text-center">
            Please fill in all required fields correctly.
          </p>
        )}

        {/* Next Button */}
        <div className="pt-4 flex justify-center">
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
