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
import {
  SocialCheck,
  UNCHECKED,
  checkSocial,
  submitApplication,
} from "@/lib/applyApi";
import { useRouter } from "next/navigation";

import { FormEvent, useRef, useState } from "react";

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
  const [socialCheck, setSocialCheck] = useState<SocialCheck | null>(null);
  const [checking, setChecking] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const checkedFor = useRef("");
  const router = useRouter();
  const SOCIAL_STEP = 4;

  // Live Instagram/TikTok check: the profile must exist before she can continue.
  const verifySocial = async (value: string): Promise<SocialCheck | null> => {
    const v = value.trim();
    if (!v) return null;
    if (checkedFor.current === v && socialCheck) return socialCheck;
    setChecking(true);
    try {
      const r = await checkSocial(v);
      checkedFor.current = v;
      setSocialCheck(r);
      return r;
    } catch {
      checkedFor.current = v;
      setSocialCheck(UNCHECKED);
      return UNCHECKED;
    } finally {
      setChecking(false);
    }
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) {
      if (currentStepIndex === SOCIAL_STEP) {
        if (checking) return;
        const r = await verifySocial(applicationFormData.socialMedia);
        if (!r || !r.accepted) return;
      }
      return next();
    }
    if (isLastStep && !isSubmitting) {
      setIsSubmitting(true);
      setSubmitError("");
      try {
        const result = await submitApplication(applicationFormData);
        if (result.ok) {
          setApplicationFormData(INITIAL_DATA);
          router.push("/thank-you");
          return;
        }
        if (result.error === "social") {
          setSocialCheck(result.check);
          checkedFor.current = applicationFormData.socialMedia.trim();
          goTo(SOCIAL_STEP);
          return;
        }
        setSubmitError(result.message);
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitError("We couldn't send your application. Please try again.");
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

  const {
    step,
    isFirstStep,
    isLastStep,
    steps,
    currentStepIndex,
    back,
    next,
    goTo,
  } = useMultistepForm([
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
        socialCheck={socialCheck}
        checking={checking}
        onCheck={verifySocial}
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
            <Button
              type="submit"
              variant="default"
              disabled={isSubmitting || checking}
            >
              {isSubmitting
                ? "Submitting..."
                : checking
                  ? "Checking..."
                  : isLastStep
                    ? "Submit"
                    : "Next"}
            </Button>
          </div>
          {submitError && (
            <p className="text-red-400 text-description px-6 pt-4">
              {submitError}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ApplyNow;
