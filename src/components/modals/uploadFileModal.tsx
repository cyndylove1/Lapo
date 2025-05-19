import { useState, useRef } from "react";
import { FiTrash2 } from "react-icons/fi";
import { FaFileCsv } from "react-icons/fa";

interface ModalProps {
  isModal: boolean;
  onClose: () => void;
}

export default function UploadModalFile({ isModal, onClose }: ModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setIsUploading(true);
      // Simulate progress
      let prog = 0;
      const interval = setInterval(() => {
        prog += 10;
        setProgress(prog);
        if (prog >= 80) {
          clearInterval(interval);
          setIsUploading(false);
        }
      }, 100);
    }
  };

  const removeFile = () => {
    setFile(null);
    setProgress(0);
  };

  if (!isModal) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center overflow-y-auto">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#000] opacity-70"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative z-10 w-[480px] rounded-xl bg-white shadow-md">
        <div className="flex items-center justify-between px-4 border-b-[1px] border-(--border)">
          <div className="flex items-center gap-3">
            <div>
              <svg
                width="52"
                height="53"
                viewBox="0 0 52 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_56_1644)">
                  <rect
                    x="2"
                    y="1.5"
                    width="48"
                    height="48"
                    rx="10"
                    fill="white"
                  />
                  <rect
                    x="2.5"
                    y="2"
                    width="47"
                    height="47"
                    rx="9.5"
                    stroke="#EAECF0"
                  />
                  <path
                    d="M24.4165 15.6665H24.6438C27.3614 15.6665 28.7203 15.6665 29.6639 16.3314C29.9343 16.5219 30.1744 16.7478 30.3768 17.0022C31.0832 17.8904 31.0832 19.1693 31.0832 21.7271V23.8483C31.0832 26.3176 31.0832 27.5523 30.6924 28.5384C30.0642 30.1237 28.7356 31.3741 27.0512 31.9654C26.0035 32.3332 24.6917 32.3332 22.068 32.3332C20.5688 32.3332 19.8192 32.3332 19.2205 32.123C18.258 31.7851 17.4988 31.0706 17.1398 30.1647C16.9165 29.6012 16.9165 28.8957 16.9165 27.4847V23.9998"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M31.0833 24C31.0833 25.5341 29.8397 26.7778 28.3056 26.7778C27.7507 26.7778 27.0966 26.6806 26.5572 26.8251C26.0779 26.9535 25.7035 27.3279 25.5751 27.8072C25.4306 28.3466 25.5278 29.0007 25.5278 29.5556C25.5278 31.0897 24.2841 32.3333 22.75 32.3333"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.75 17.7498C18.1596 17.3284 19.2498 15.6665 19.8333 15.6665M21.9167 17.7498C21.5071 17.3284 20.4169 15.6665 19.8333 15.6665M19.8333 15.6665V22.3332"
                    stroke="#344054"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_56_1644"
                    x="0"
                    y="0.5"
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
                      result="effect1_dropShadow_56_1644"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_56_1644"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="px-4 pt-4 pb-4">
              <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828]">
                Upload CSV File
              </h2>
              <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
                CSV file should contain the following columns
              </h6>
            </div>
          </div>

          <button onClick={onClose}>
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
        <div className="flex items-center pl-[6rem]">
          <ul className="list-disc pl-5 mb-4 mt-4 satoshi-400 text-[14px] leading-[100%] text-[#475467]">
            <li className="py-[5px]">Name</li>
            <li className="py-[5px]">Code</li>
            <li className="py-[5px]">Address</li>
            <li className="py-[5px]">Zone</li>
            <li className="py-[5px]">Area</li>
          </ul>
        </div>

        <div className="px-4">
          <label
            htmlFor="file-upload"
            className="cursor-pointer border-2 border-(--main) rounded-md p-4 flex flex-col items-center text-center mb-4"
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_5579_5390)">
                <rect x="2" y="1" width="40" height="40" rx="8" fill="white" />
                <rect
                  x="2.5"
                  y="1.5"
                  width="39"
                  height="39"
                  rx="7.5"
                  stroke="#EAECF0"
                />
                <path
                  d="M18.666 24.3333L21.9993 21M21.9993 21L25.3327 24.3333M21.9993 21V28.5M28.666 24.9524C29.6839 24.1117 30.3327 22.8399 30.3327 21.4167C30.3327 18.8854 28.2807 16.8333 25.7493 16.8333C25.5673 16.8333 25.3969 16.7383 25.3044 16.5814C24.2177 14.7374 22.2114 13.5 19.916 13.5C16.4642 13.5 13.666 16.2982 13.666 19.75C13.666 21.4718 14.3622 23.0309 15.4885 24.1613"
                  stroke="#475467"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_5579_5390"
                  x="0"
                  y="0"
                  width="44"
                  height="44"
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
                    result="effect1_dropShadow_5579_5390"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_5579_5390"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <h2 className="satoshi-400 text-[14px] leading-[20px] text-center pt-[12px]">
              <span className="satoshi-700 text-(--main)">Click to upload</span>
              &nbsp; or drag and drop
            </h2>
            <h2 className="satoshi-400 text-[12px] text-center leading-[18px] pt-[12px]">
              PDF, JPG (max. 10mb)
            </h2>
            <input
              id="file-upload"
              type="file"
              accept=".csv, .xlsx"
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </label>

          {file && (
            <div className="flex items-center gap-3 mb-4 p-3 bg-gray-100 rounded-md">
              <FaFileCsv className="text-green-600 text-2xl" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700 truncate">
                  {file.name}
                </p>
                <div className="text-xs text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(1)} MB
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              <button
                onClick={removeFile}
                className="text-gray-400 hover:text-red-500"
              >
                <FiTrash2 />
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center mt-6 mx-4 gap-[12px] pb-[2rem]">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border-[1px] text-[16px] border-(--border) w-full "
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 rounded-md bg-(--main) text-white w-full ${
              !file || isUploading
                ? "cursor-not-allowed"
                : "hover:bg-green-600"
            }`}
            disabled={!file || isUploading}
          >
            {isUploading ? "Uploading..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
