import { useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import Button from "../Buttons/button";

interface DownloadModalProps {
  isBatchOpen: boolean;
  setIsBatchOpen: Dispatch<SetStateAction<boolean>>;
  delay?: number; 
}

export default function BatchModal({
  isBatchOpen,
  setIsBatchOpen,
  delay = 2000, 
}: DownloadModalProps) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isBatchOpen) {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      setShowModal(false);
    }
  }, [isBatchOpen, delay]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70">
      <div className="relative z-10 md:w-[400px] w-full h-[232px] overflow-y-auto rounded-xl">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-[#000] opacity-70"
          onClick={() => {
            setIsBatchOpen(false);
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
              {/* SVG content */}
            </svg>
          </div>
          <div className="py-[30px]">
            <h2 className="satoshi-500 text-[18px] leading-[28px] text-[#101828]">
              Successful
            </h2>
            <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
              Card batch successfully sent to dispatch.
            </h6>
          </div>
          <Button
            text="Continue"
            onClick={() => {
              setIsBatchOpen(false);
            }}
            className="w-[94px] h-[36px] rounded-[4px] bg-(--main)"
          />
        </div>
      </div>
    </div>
  );
}
