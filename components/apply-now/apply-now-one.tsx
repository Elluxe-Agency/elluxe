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
                Do you have an active OnlyFans account that has ever generated
                more than $10,000 in a single month? It doesn&apos;t have to be
                right now. If yes, check this box and you will be enrolled in
                our VIP program.
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
              Not there yet? Leave this blank.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplyNowOne;
