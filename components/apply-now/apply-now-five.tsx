import { SocialCheck } from "@/lib/applyApi";

type ApplyNowFive = {
  socialMedia: string;
};

type ApplyNowFiveProps = ApplyNowFive & {
  updateField: (field: ApplyNowFive) => void;
  socialCheck: SocialCheck | null;
  checking: boolean;
  onCheck: (value: string) => void;
};

const ApplyNowFive = ({
  socialMedia,
  updateField,
  socialCheck,
  checking,
  onCheck,
}: ApplyNowFiveProps) => {
  const tone = checking
    ? "text-white/70"
    : socialCheck?.accepted
      ? "text-green-400"
      : "text-red-400";
  const status = checking
    ? "Checking your profile…"
    : socialCheck
      ? socialCheck.message
      : "";
  return (
    <section className="w-full h-[70vh] bg-primary-black">
      <div className="container mx-auto flex flex-col gap-16 px-6 pt-[146px]">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-h3-mobile md:text-h3 w-full md:w-3/4">
            5. What is your Instagram or TikTok username?
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <input
            autoFocus
            required
            type="text"
            value={socialMedia}
            onChange={(e) => updateField({ socialMedia: e.target.value })}
            onBlur={(e) => onCheck(e.target.value)}
            placeholder="@yourusername or profile link"
            className="bg-transparent text-white !text-form-text !border-b-[2px] !border-b-white w-full border-t-0 border-x-0 rounded-none"
          />
          <p className="text-white text-description">
            Your exact @username or profile link — we check that the profile is
            live before you continue.
          </p>
          {status && (
            <p className={`text-description ${tone}`} aria-live="polite">
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplyNowFive;
