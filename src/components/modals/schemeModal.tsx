import Button from "../Buttons/button";
import Input from "../input";
import Label from "../label";

interface ModalProps {
  isSchemeOpen: boolean;
  onClose: () => void;
}

export default function SchemeModal({ isSchemeOpen, onClose }: ModalProps) {
  if (!isSchemeOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center overflow-y-auto">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#000] opacity-70"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 md:w-[496px] w-full h-[394px] rounded-xl bg-white shadow-md">
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
                <g filter="url(#filter0_d_5169_9786)">
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
                    d="M33 34V28M30 31H36M36 23H16M36 25V21.2C36 20.0799 36 19.5198 35.782 19.092C35.5903 18.7157 35.2843 18.4097 34.908 18.218C34.4802 18 33.9201 18 32.8 18H19.2C18.0799 18 17.5198 18 17.092 18.218C16.7157 18.4097 16.4097 18.7157 16.218 19.092C16 19.5198 16 20.0799 16 21.2V28.8C16 29.9201 16 30.4802 16.218 30.908C16.4097 31.2843 16.7157 31.5903 17.092 31.782C17.5198 32 18.0799 32 19.2 32H26"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5169_9786"
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
                      result="effect1_dropShadow_5169_9786"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5169_9786"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="px-4 pt-4 pb-4">
              <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828]">
                Add Card Scheme
              </h2>
              <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
                Fill in scheme name and PAN length.
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
          <div className=" mt-[20px]">
            <Label text="Scheme Name" />
            <Input placeholder="Verve" hideIcon={true} />
          </div>
          <div className=" mt-[10px]">
            <Label text="Pan Length" />
            <Input placeholder="0" type="number" hideIcon={true} />
          </div>

          <Button
            text="Add Scheme"
            className="bg-(--main) w-full h-[44px] mt-[3rem] rounded-[4px]"
          />
        </form>
      </div>
    </div>
  );
}
