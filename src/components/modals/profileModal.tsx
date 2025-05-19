import Button from "../Buttons/button";
import Input from "../input";
import Label from "../label";
import RadioButtons from "../Buttons/radioButton";

interface ModalProps {
  isProfileOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isProfileOpen, onClose }: ModalProps) {
  if (!isProfileOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center px-4 overflow-y-auto py-8">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#000] opacity-70"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 w-[496px] max-h-[calc(100vh-4rem)] rounded-xl bg-white shadow-md flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 border-b-[1px] border-(--border) sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <div>
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_5169_2961)">
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
                    d="M26 21V29M22 25H30M21.8 34H30.2C31.8802 34 32.7202 34 33.362 33.673C33.9265 33.3854 34.3854 32.9265 34.673 32.362C35 31.7202 35 30.8802 35 29.2V20.8C35 19.1198 35 18.2798 34.673 17.638C34.3854 17.0735 33.9265 16.6146 33.362 16.327C32.7202 16 31.8802 16 30.2 16H21.8C20.1198 16 19.2798 16 18.638 16.327C18.0735 16.6146 17.6146 17.0735 17.327 17.638C17 18.2798 17 19.1198 17 20.8V29.2C17 30.8802 17 31.7202 17.327 32.362C17.6146 32.9265 18.0735 33.3854 18.638 33.673C19.2798 34 20.1198 34 21.8 34Z"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5169_2961"
                    x="0"
                    y="0"
                    width="52"
                    height="52"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                      result="effect1_dropShadow_5169_2961"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5169_2961"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="px-4 pt-4 pb-4">
              <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] ">
                Add Fee
              </h2>
              <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
                Fill in fee details.
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body - Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-4">
          <form action="">
            <div className="mb-4">
              <Label text="Fee Name" />
              <Input placeholder="Maintenance" hideIcon={true} />
            </div>
            <div className="mb-4">
              <Label text="Value" hideIcon={true} />
              <Input placeholder="0" hideIcon={true} type="number" />
            </div>
            <RadioButtons />
            <div className="mt-5 mb-4">
              <Label text="Account" hideIcon={true} />
              <Input placeholder="Account" hideIcon={true} />
            </div>
          </form>
        </div>

        {/* Modal Footer - Sticky at bottom */}
        <div className="sticky bottom-0 bg-white p-4 border-t-[1px] border-(--border)">
          <Button
            text="Add Fee"
            className="bg-(--main) w-full h-[44px] rounded-[4px]"
          />
        </div>
      </div>
    </div>
  );
}
