type ApplyNowSeven = {
  contactInfo: string;
};

type ApplyNowSevenProps = ApplyNowSeven & {
  updateField: (field: ApplyNowSeven) => void;
};

const ApplyNowSeven = ({ contactInfo, updateField }: ApplyNowSevenProps) => {
  return (
    <section className="w-full h-[70vh] bg-primary-black">
      <div className="container mx-auto flex flex-col gap-16 px-6 pt-[146px]">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-h3-mobile md:text-h3 w-full md:w-3/4">
            7. What is your WhatsApp number?
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <input
            autoFocus
            required
            type="text"
            value={contactInfo}
            onChange={(e) => updateField({ contactInfo: e.target.value })}
            placeholder="Phone number with country code, e.g. +1 305 555 0100"
            className="bg-transparent text-white !text-form-text !border-b-[2px] !border-b-white w-full border-t-0 border-x-0 rounded-none"
          />
          <p className="text-white text-description">
            Our team will reach out to you on WhatsApp. If you don&apos;t have
            WhatsApp yet, please download it and register with this number
            before you submit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplyNowSeven;
