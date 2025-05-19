import { useState } from "react";
import Button from "../Buttons/button";
import Input from "../input";
import Label from "../label";
import InputPassword from "../inputPassword";
import SelectTag from "../selectTag";

interface ModalProps {
  isUserOpen: boolean;
  onClose: () => void;
}

export default function UserModal({ isUserOpen, onClose }: ModalProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  if (!isUserOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 overflow-y-auto">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#000] opacity-70"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-[496px] max-h-[90vh] rounded-xl bg-white flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b-[1px] border-(--border) sticky top-0 bg-white z-20">
          <div className="flex items-center gap-3">
            <div>
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_5169_7153)">
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
                    d="M26 28.5H21.5C20.1044 28.5 19.4067 28.5 18.8389 28.6722C17.5605 29.06 16.56 30.0605 16.1722 31.3389C16 31.9067 16 32.6044 16 34M33 34V28M30 31H36M28.5 20.5C28.5 22.9853 26.4853 25 24 25C21.5147 25 19.5 22.9853 19.5 20.5C19.5 18.0147 21.5147 16 24 16C26.4853 16 28.5 18.0147 28.5 20.5Z"
                    stroke="#344054"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_5169_7153"
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
                      result="effect1_dropShadow_5169_7153"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_5169_7153"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="px-4">
              <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] ">
                Create User
              </h2>
              <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
                Fill in user details and assign role.
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
        <div className="overflow-y-auto p-4 flex-1">
          <form action="">
            <div className="mt-[10px]">
              <Label text="Username" />
              <Input placeholder="Username" hideIcon={true} />
            </div>
            <div className="mt-4">
              <Label text="Firstname" />
              <Input placeholder="Firstname" hideIcon={true} />
            </div>
            <div className="mt-4">
              <Label text="Lastname" />
              <Input placeholder="Lastname" hideIcon={true} />
            </div>
            <div className="mt-4">
              <Label text="Email address*" />
              <Input placeholder="Email address*" hideIcon={true} />
            </div>
            <div className="mt-4">
              <Label text="Phone" />
              <Input placeholder="Phone" hideIcon={true} />
            </div>
            <div className="mt-4">
              <Label text="Password" />
              <InputPassword
                className="w-full"
                hideIcon={true}
                placeholder="Enter your Password"
                showVisibility={passwordVisible}
                togglePasswordVisibility={() =>
                  setPasswordVisible(!passwordVisible)
                }
              />
            </div>
            <div className="mt-4">
              <Label text="Access Level" hideIcon={true} />
              <SelectTag className="h-[44px] w-full text-[16px] rounded-[8px] border-neutral-200 px-4 text-neutral-500 focus:border-brand-500">
                <option>Select level from dropdown</option>
                <option></option>
              </SelectTag>
            </div>
            <div className="mt-4">
              <Label text="Branch" hideIcon={true} />
              <SelectTag className="h-[44px] w-full text-[16px] rounded-[8px] border-neutral-200 px-4 text-neutral-500 focus:border-brand-500">
                <option>Select branch from dropdown</option>
                <option></option>
              </SelectTag>
            </div>
            <div className="mt-4">
              <Label text="Assign Role" hideIcon={true} />
              <SelectTag className="h-[44px] w-full text-[16px] rounded-[8px] border-neutral-200 px-4 text-neutral-500 focus:border-brand-500">
                <option>Select role from dropdown</option>
                <option></option>
              </SelectTag>
            </div>
            <Button
              text="Create user"
              className="bg-(--main) w-full h-[44px] my-6 rounded-[4px]"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
