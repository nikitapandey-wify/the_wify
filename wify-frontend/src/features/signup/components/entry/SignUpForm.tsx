'use client';

import { SignUpProvider, useSignUp } from "@/features/signup/contexts/SignUpContext";
import StepOne from "../SignUpSteps/StepOne";
import StepTwo from "../SignUpSteps/StepTwo";
import StepThree from "../SignUpSteps/StepThree";

const SignUpForm = () => {
  const { step } = useSignUp();

  const stepsMapping = {
    1: <StepOne />,
    2: <StepTwo />,
    3: <StepThree />,
  };

  return (
    <div id="register" className="scroll-mt-24 w-full py-8 px-4">
      {stepsMapping[step as keyof typeof stepsMapping] || null}
    </div>
  );
};

const SignUp = () => {
  return (
    <SignUpProvider>
      <SignUpForm />
    </SignUpProvider>
  );
};

export default SignUp;