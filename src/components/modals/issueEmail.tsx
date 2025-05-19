import Button from "../Buttons/button";
import Input from "../input";
import Label from "../label";

interface EmailModalProps {
  isIssueEmail: boolean;
  onClose: () => void;
}

export default function IssueEmailModal({
  isIssueEmail,
  onClose,
}: EmailModalProps) {
  if (!isIssueEmail) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center overflow-y-auto">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#000] opacity-70"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 md:w-[496px] w-full h-[312px] rounded-xl bg-white shadow-md">
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
                <g filter="url(#filter0_d_5169_7859)">
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
                    d="M26 25H26.005M31 25H31.005M21 25H21.005M19.2 20H32.8C33.9201 20 34.4802 20 34.908 20.218C35.2843 20.4097 35.5903 20.7157 35.782 21.092C36 21.5198 36 22.0799 36 23.2V26.8C36 27.9201 36 28.4802 35.782 28.908C35.5903 29.2843 35.2843 29.5903 34.908 29.782C34.4802 30 33.9201 30 32.8 30H19.2C18.0799 30 17.5198 30 17.092 29.782C16.7157 29.5903 16.4097 29.2843 16.218 28.908C16 28.4802 16 27.9201 16 26.8V23.2C16 22.0799 16 21.5198 16.218 21.092C16.4097 20.7157 16.7157 20.4097 17.092 20.218C17.5198 20 18.0799 20 19.2 20ZM26.25 25C26.25 25.1381 26.1381 25.25 26 25.25C25.8619 25.25 25.75 25.1381 25.75 25C25.75 24.8619 25.8619 24.75 26 24.75C26.1381 24.75 26.25 24.8619 26.25 25ZM31.25 25C31.25 25.1381 31.1381 25.25 31 25.25C30.8619 25.25 30.75 25.1381 30.75 25C30.75 24.8619 30.8619 24.75 31 24.75C31.1381 24.75 31.25 24.8619 31.25 25ZM21.25 25C21.25 25.1381 21.1381 25.25 21 25.25C20.8619 25.25 20.75 25.1381 20.75 25C20.75 24.8619 20.8619 24.75 21 24.75C21.1381 24.75 21.25 24.8619 21.25 25Z"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5169_7859"
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
                      result="effect1_dropShadow_5169_7859"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5169_7859"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="px-4 pt-4 pb-4">
              <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] ">
                Reissue Pin
              </h2>
              <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
                Send Email
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
          <div className="border-[1px] border-(--border)">
            <div className="my-[30px] mx-4 ">
              <Label text="Email Address" hideIcon={true} />
              <Input placeholder="Enter Email Address" hideIcon={true} />
            </div>
          </div>
          <Button
            className="w-full mx-4 mt-[20px] rounded-[4px] bg-(--main) h-[44px]"
            text="Send Email"
          />
        </form>
      </div>
    </div>
  );
}
