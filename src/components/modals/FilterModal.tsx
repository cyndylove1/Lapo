import Button from "../Buttons/button";
import Input from "../input";
import Label from "../label";
import SelectTag from "../selectTag";

interface FilterModalProps {
  isFilterOpen: boolean;
  onClose: () => void;
}

export default function FilterModal({ isFilterOpen, onClose }: FilterModalProps) {
  if (!isFilterOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 px-4">
      <div className="relative z-10 w-full md:w-[496px] h-[470px] rounded-xl bg-white">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-[#000] opacity-70"
          onClick={onClose}
        ></div>

        {/* Modal Content */}
        <div className="relative z-10 w-[496px] h-[480px] rounded-xl bg-white">
          <div className="flex items-center justify-between px-4 border-b-[1px] border-(--border)">
            <div className="flex items-center gap-3">
              <div>
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_5612_7379)">
                    <rect
                      x="2"
                      y="1"
                      width="48"
                      height="48"
                      rx="10"
                      fill="white"
                    />
                    <rect
                      x="2.5"
                      y="1.5"
                      width="47"
                      height="47"
                      rx="9.5"
                      stroke="#EAECF0"
                    />
                    <path
                      d="M20 25H32M17 19H35M23 31H29"
                      stroke="#344054"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_5612_7379"
                      x="0"
                      y="0"
                      width="52"
                      height="52"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="1" />
                      <feGaussianBlur stdDeviation="1" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_5612_7379"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_5612_7379"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="px-4 pt-4 pb-4">
                <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] ">
                  Filter
                </h2>
                <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
                  Select conditions and apply
                </h6>
              </div>
            </div>

            <button onClick={onClose}>
              {/* Close Icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#667085"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <form action="">
            <div className="border-b-[1px] border-(--border) mx-4">
              <div className="my-4">
                <Label text="Category" hideIcon={true} />
                <SelectTag className=" h-[44px] w-full  text-[16px] rounded-[8px] border-(--border) px-4 text-() focus:border-brand-500">
                  <option className="">Select category from dropdown</option>
                  <option></option>
                </SelectTag>
              </div>
              <div className="my-2 mx-4 ">
                <Label text="Account Number" hideIcon={true} />
                <Input placeholder="Enter Account Number" hideIcon={true} />
              </div>
              <div className="mt-2 mx-4 mb-6">
                <Label text="Account Number" hideIcon={true} />
                <Input placeholder="Enter Account Number" hideIcon={true} />
              </div>
            </div>
            <Button
              className="w-full mx-4 mt-[20px] rounded-[4px] bg-(--main) h-[44px]"
              text="Apply"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
