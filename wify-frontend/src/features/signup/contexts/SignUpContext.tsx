'use client';

import { createContext, useContext, useState } from "react";
import { SignUpData } from "@/features/signup/types/signUpTypes";

type SignUpContextType = {
    step: number;
    data: SignUpData;
    updateData: (values: Partial<SignUpData>) => void;
    nextStep: () => void;
    prevStep: () => void;
}

const initialData: SignUpData = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    industry: '',
    employeeCount: '',
    hearFrom: '',
};

const SignUpContext = createContext<SignUpContextType | null>(null);

export const SignUpProvider = ({ children }: { children: React.ReactNode }) => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<SignUpData>(initialData);

    const updateData = (values: Partial<SignUpData>) => {
        setData(prev => ({ ...prev, ...values }));
    };

    const nextStep = () => {
        setStep(prev => Math.min(prev + 1, 3));
    };

    const prevStep = () => {
        setStep(prev => Math.max(prev - 1, 1));
    };

    return (
        <SignUpContext.Provider value={{ step, data, updateData, nextStep, prevStep }}>
            {children}
        </SignUpContext.Provider>
    );
};

export const useSignUp = () => {
    const context = useContext(SignUpContext);
    if (!context) {
        throw new Error("useSignUp must be used within a SignUpProvider");
    }
    return context;
}
