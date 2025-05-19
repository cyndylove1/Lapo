import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import Button from "../Buttons/button";

interface DownloadModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  delay?: number;
}

export default function DownloadModal({
  isOpen,
  setIsOpen,
  delay = 2000,
}: DownloadModalProps) {
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        if (isOpen) {
          const timer = setTimeout(() => {
            setShowModal(true);
          }, delay);
    
          return () => clearTimeout(timer);
        } else {
          setShowModal(false);
        }
      }, [isOpen, delay]);
    
      if (!showModal) return null;


  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 ">
      <div className="relative z-10 md:w-[400px] h-[232px] w-full overflow-y-auto rounded-xl">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-[#000] opacity-70"
          onClick={() => {
            setIsOpen(false);
          }}
        ></div>

        {/* Modal Content */}
        <div className="relative z-10 h-[232px] rounded-[12px] bg-white px-[1rem]">
          <div className="py-[5px]">
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_5169_7725)">
                <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                <rect
                  x="2.5"
                  y="1.5"
                  width="47"
                  height="47"
                  rx="9.5"
                  stroke="#EAECF0"
                />
                <path
                  d="M21.5 25L24.5 28L30.5 22M36 25C36 30.5228 31.5228 35 26 35C20.4772 35 16 30.5228 16 25C16 19.4772 20.4772 15 26 15C31.5228 15 36 19.4772 36 25Z"
                  stroke="#007129"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_5169_7725"
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
                    result="effect1_dropShadow_5169_7725"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_5169_7725"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="py-[30px]">
            <h2 className="satoshi-500 text-[18px] leading-[28px] text-[#101828] ">
              Successful
            </h2>
            <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467] ">
              Production file has been downloaded.
            </h6>
          </div>
          <Button
            text="Continue"
            onClick={() => {
              setIsOpen(false);
            }}
            className="w-[94px] h-[36px] rounded-[4px] bg-(--main)"
          />
        </div>
      </div>
    </div>
  );
}
