type ApplyNowOne = {
  isVip: boolean;
  vipAnswer: "" | "yes" | "no";
};

type ApplyNowOneProps = ApplyNowOne & {
  updateField: (field: Partial<ApplyNowOne>) => void;
};

const OPTIONS: { id: "yes" | "no"; label: string }[] = [
  { id: "yes", label: "Yes" },
  { id: "no", label: "No" },
];

const ApplyNowOne = ({ vipAnswer, updateField }: ApplyNowOneProps) => {
  return (
    <section className="w-full min-h-[70vh] bg-primary-black">
      <div className="container mx-auto flex flex-col gap-10 px-6 pt-[146px]">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-h3-mobile md:text-h3 w-full md:w-3/4">
            1. Where are you at right now?
          </h1>
        </div>
        <div className="flex flex-col gap-6 items-start md:w-3/4">
          <p className="text-white !text-form-check">
            Do you have an active OnlyFans account currently generating over
            $3,000 a month?
          </p>
          <div className="flex gap-3" role="radiogroup" aria-label="Answer">
            {OPTIONS.map((o) => (
              <button
                key={o.id}
                type="button"
                role="radio"
                aria-checked={vipAnswer === o.id}
                onClick={() =>
                  updateField({ vipAnswer: o.id, isVip: o.id === "yes" })
                }
                className={`px-7 py-2 rounded-full border text-form-check ${
                  vipAnswer === o.id
                    ? "bg-white text-primary-black border-white"
                    : "bg-transparent text-white border-white/50"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
          <p className="text-white text-description">
            There is no good or bad answer here. We just want to understand
            which stage you are at, so we can direct you to the right team and
            the best help for what you need, whether you are starting out or
            already established.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplyNowOne;
