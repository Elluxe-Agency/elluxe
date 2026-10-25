type ApplyNowOne = {
  isVip: boolean;
};

type ApplyNowOneProps = ApplyNowOne & {
  updateField: (field: ApplyNowOne) => void;
};

const ApplyNowOne = ({ isVip, updateField }: ApplyNowOneProps) => {
  return (
    <section className="w-full h-[70vh] bg-primary-black">
      <div className="container mx-auto flex flex-col gap-16 px-6 pt-[146px]">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-h3-mobile md:text-h3 w-full md:w-3/4">
            1. VIP program
          </h1>
        </div>
        <div className="flex flex-col gap-8 md:gap-10 items-start">
          <div className="flex flex-col items-start gap-4 md:gap-[33px]">
            <div className="text-white flex flex-row-reverse gap-6">
              <label className="!text-form-check">
                Please check this box if you already earn over $10,000 per month
                from OnlyFans, in which case you will be enrolled in our VIP
                program.
              </label>

              <input
                checked={isVip}
                onChange={(e) =>
                  updateField({
                    isVip: e.target.checked
                  })
                }
                type="checkbox"
                className="w-[25px] h-[25px] accent-[#3D3F43] rounded-[4px] shadow-inner bg-[#3D3F43]"
              />
            </div>
            <p className="text-white text-form-check">
              If you&apos;re not there yet, leave this blank.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNowOne;
