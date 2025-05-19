import Button from "../Buttons/button";
import Input from "../input";
import Label from "../label";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddBranchModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center overflow-y-auto">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#000] opacity-70"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 md:w-[496px] w-full rounded-xl bg-white shadow-md">
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
                <g filter="url(#filter0_d_53_14199)">
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
                    d="M26 15C30.8706 15 35 19.033 35 23.9258C35 28.8965 30.8033 32.3847 26.927 34.7567C26.6445 34.9162 26.325 35 26 35C25.675 35 25.3555 34.9162 25.073 34.7567C21.2039 32.3616 17 28.9137 17 23.9258C17 19.033 21.1294 15 26 15Z"
                    stroke="#344054"
                    stroke-width="1.5"
                  />
                  <path
                    d="M29.5 24H26M26 24H22.5M26 24V27.5M26 24L26 20.5"
                    stroke="#344054"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_53_14199"
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
                      result="effect1_dropShadow_53_14199"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_53_14199"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="px-4 pt-4 pb-4">
              <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] ">
                Add Branch
              </h2>
              <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
                Fill in branch details.
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
        <form action="" className="px-4">
          <div className="mt-[10px]">
            <Label text="Name" />
            <Input placeholder="Head Office" hideIcon={true} />
          </div>
          <div>
            <Label text="Code" />
            <Input placeholder="Code" hideIcon={true} />
          </div>
          <div>
            <Label text="Address" />
            <Input placeholder="Head Office" hideIcon={true} />
          </div>
          <div>
            <Label text="Zone" />
            <Input placeholder="Head Office" hideIcon={true} />
          </div>
          <div>
            <Label text="Area" />
            <Input placeholder="Head Office" hideIcon={true}/>
          </div>
          <Button
            text="Add Branch"
            className="bg-(--main) w-[124px] h-[44px] my-[1rem] rounded-[4px]"
          />
        </form>
      </div>
    </div>
  );
}
