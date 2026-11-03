"use client";

import ApplyNowFive from "@/components/apply-now/apply-now-five";
import ApplyNowFour from "@/components/apply-now/apply-now-four";
import ApplyNowEight from "@/components/apply-now/apply-now-eight";
import ApplyNowOne from "@/components/apply-now/apply-now-one";
import ApplyNowSeven from "@/components/apply-now/apply-now-seven";
import ApplyNowSix from "@/components/apply-now/apply-now-six";
import ApplyNowThree from "@/components/apply-now/apply-now-three";
import ApplyNowTwo from "@/components/apply-now/apply-now-two";
import { Button } from "@/components/ui/button";

import ProgressCircle from "@/components/ui/progress-circle";

import { useMultistepForm } from "@/lib/useMultistepForm";
import { useRouter } from "next/navigation";

import { FormEvent, useState } from "react";

type ApplicationFormData = {
  isVip: boolean;
  firstName: string;
  age: number;
  location: string;
  socialMedia: string;
  onlyFansAccountLink: string;
  contactInfo: string;
  message: string;
};
const INITIAL_DATA: ApplicationFormData = {
  isVip: false,
  firstName: "",
  age: 18,
  location: "",
  socialMedia: "",
  onlyFansAccountLink: "",
  contactInfo: "",
  message: "",
};

const ApplyNow = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationFormData, setApplicationFormData] = useState(INITIAL_DATA);
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return next();
    if (isLastStep && !isSubmitting) {
      setIsSubmitting(true);
      try {
        const response = await fetch("https://elluxe.co/api/airtable", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(applicationFormData),
        });

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }

        setApplicationFormData(INITIAL_DATA);
        router.push("/thank-you");
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  const updateField = (fields: Partial<ApplicationFormData>) => {
    setApplicationFormData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { step, isFirstStep, isLastStep, steps, currentStepIndex, back, next } =
    useMultistepForm([
      <ApplyNowOne
        key={"one"}
        {...applicationFormData}
        updateField={updateField}
      />,
      <ApplyNowTwo
        key={"two"}
        {...applicationFormData}
        updateField={updateField}
      />,
      <ApplyNowThree
        key={"three"}
        {...applicationFormData}
        updateField={updateField}
      />,
      <ApplyNowFour
        key={"four"}
        {...applicationFormData}
        updateField={updateField}
      />,
      <ApplyNowFive
        key={"five"}
        {...applicationFormData}
        updateField={updateField}
      />,
      <ApplyNowSix
        key={"six"}
        {...applicationFormData}
        updateField={updateField}
      />,
      <ApplyNowSeven
        key={"seven"}
        {...applicationFormData}
        updateField={updateField}
      />,
      <ApplyNowEight
        key={"nine"}
        {...applicationFormData}
        updateField={updateField}
      />,
    ]);

  return (
    <div className="w-full bg-primary-black">
      <div className="container py-[92px] mx-auto">
        <form
          onSubmit={onSubmit}
          name="application"
          method="POST"
          className="relative"
        >
          <div className="absolute top-0 right-0 flex items-center pt-[50px] md:pt-[152px] pr-6">
            <ProgressCircle progress={currentStepIndex + 1} />
            <p className="text-white text-form-text">
              {currentStepIndex + 1}/{steps.length}
            </p>
          </div>
          {step}
          <div className="flex items-center justify-between px-6">
            {!isFirstStep && (
              <Button onClick={back} type="button" variant="ghost">
                Previous
              </Button>
            )}
            <Button type="submit" variant="default" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : isLastStep ? "Submit" : "Next"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;
