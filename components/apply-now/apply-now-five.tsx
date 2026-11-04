import { Platform, SocialCheck } from "@/lib/applyApi";

type ApplyNowFive = {
  socialMedia: string;
  socialPlatform: Platform;
};

type ApplyNowFiveProps = ApplyNowFive & {
  updateField: (field: Partial<ApplyNowFive>) => void;
  socialCheck: SocialCheck | null;
  checking: boolean;
  onCheck: (value: string) => void;
};

const PLATFORMS: { id: Platform; label: string; placeholder: string }[] = [
  { id: "instagram", label: "Instagram", placeholder: "@yourusername or instagram.com/… link" },
  { id: "tiktok", label: "TikTok", placeholder: "@yourusername or tiktok.com/… link" },
  { id: "facebook", label: "Facebook", placeholder: "facebook.com/… profile link" },
];

const ApplyNowFive = ({
  socialMedia,
  socialPlatform,
  updateField,
  socialCheck,
  checking,
  onCheck,
}: ApplyNowFiveProps) => {
  const current = PLATFORMS.find((p) => p.id === socialPlatform) ?? PLATFORMS[0];
  const tone = checking
    ? "text-white/70"
    : socialCheck?.accepted
      ? "text-green-400"
      : "text-red-400";
  const status = checking
    ? "Checking your profile… this can take up to 30 seconds."
    : socialCheck
      ? socialCheck.message
      : "";
  return (
    <section className="w-full min-h-[70vh] bg-primary-black">
      <div className="container mx-auto flex flex-col gap-10 px-6 pt-[146px]">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-h3-mobile md:text-h3 w-full md:w-3/4">
            5. Where can we find you online?
          </h1>
        </div>
        <p className="text-white text-description md:w-3/4">
          We need a reference to process your application. Even if it is a
          personal account, it helps us understand your branding potential so
          we can serve you best. You will need to confirm at least one active
          profile to proceed to the next step.
        </p>
        <div className="flex gap-3 flex-wrap" role="radiogroup" aria-label="Platform">
          {PLATFORMS.map((p) => (
            <button
              key={p.id}
              type="button"
              role="radio"
              aria-checked={socialPlatform === p.id}
              onClick={() => updateField({ socialPlatform: p.id })}
              className={`px-5 py-2 rounded-full border text-form-check ${
                socialPlatform === p.id
                  ? "bg-white text-primary-black border-white"
                  : "bg-transparent text-white border-white/50"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <input
            autoFocus
            required
            type="text"
            value={socialMedia}
            onChange={(e) => updateField({ socialMedia: e.target.value })}
            onBlur={(e) => onCheck(e.target.value)}
            placeholder={current.placeholder}
            className="bg-transparent text-white !text-form-text !border-b-[2px] !border-b-white w-full border-t-0 border-x-0 rounded-none"
          />
          {status && (
            <p className={`text-description ${tone}`} aria-live="polite">
              {status}
            </p>
          )}
          {!checking && socialCheck && !socialCheck.accepted && (
            <button
              type="button"
              onClick={() => onCheck(socialMedia)}
              className="self-start underline text-white text-description"
            >
              Check again
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplyNowFive;
