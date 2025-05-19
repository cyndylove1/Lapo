interface ModalIssueProps {
    isIssueOpen: boolean;
    onClose: () => void;
    onIssueSmsClick: () => void;
    onIssuePinClick: () => void;
    onIssueEmailClick: () => void;
  }
  
    
  export default function ReIssuePinModal({ isIssueOpen, onClose, onIssueEmailClick, onIssuePinClick, onIssueSmsClick }: ModalIssueProps) {
    if (!isIssueOpen) return null;
  
    return (
      <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 px-4">
        <div className="relative z-10 w-full md:w-[496px] h-[214px] overflow-y-auto rounded-xl bg-white">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-[#000] opacity-70"
            onClick={onClose}
          ></div>
  
          {/* Modal Content */}
          <div className="relative z-10 w-[496px]  h-[214px] rounded-xl bg-white shadow-md">
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
                    Select an option.
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
            {/* button */}
            <div className="border-b-[1px] border-(--border)">
              <div className="flex items-center gap-[20px] mx-6 py-[2rem]">
                <button
                  className="flex items-center justify-center border-[1px] border-(--border) rounded-[4px] gap-[8px] h-[40px] w-[129px]"
                  onClick={onIssuePinClick}
                >
                  <span>
                    <svg
                      width="20"
                      height="14"
                      viewBox="0 0 20 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.01677 7.59366C1.90328 7.41396 1.84654 7.32411 1.81477 7.18553C1.79091 7.08143 1.79091 6.91727 1.81477 6.81317C1.84654 6.67458 1.90328 6.58473 2.01677 6.40503C2.95461 4.92005 5.74617 1.16602 10.0003 1.16602C14.2545 1.16602 17.0461 4.92005 17.9839 6.40503C18.0974 6.58473 18.1541 6.67458 18.1859 6.81317C18.2098 6.91727 18.2098 7.08143 18.1859 7.18553C18.1541 7.32411 18.0974 7.41396 17.9839 7.59366C17.0461 9.07865 14.2545 12.8327 10.0003 12.8327C5.74617 12.8327 2.95461 9.07865 2.01677 7.59366Z"
                        stroke="#344054"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 9.49935C11.381 9.49935 12.5003 8.38006 12.5003 6.99935C12.5003 5.61864 11.381 4.49935 10.0003 4.49935C8.61962 4.49935 7.50034 5.61864 7.50034 6.99935C7.50034 8.38006 8.61962 9.49935 10.0003 9.49935Z"
                        stroke="#344054"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h2 className="satoshi-400 text-[16px] leading-[24px] text-[#344054]">
                    Show PIN
                  </h2>
                </button>
                <button
                  className="flex items-center justify-center border-[1px] border-(--border) rounded-[4px] gap-[8px] h-[40px] w-[132px]"
                  onClick={onIssueSmsClick}
                >
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.83333 7.08333H10M5.83333 10H12.5M8.06979 15H13.5C14.9001 15 15.6002 15 16.135 14.7275C16.6054 14.4878 16.9878 14.1054 17.2275 13.635C17.5 13.1002 17.5 12.4001 17.5 11V6.5C17.5 5.09987 17.5 4.3998 17.2275 3.86502C16.9878 3.39462 16.6054 3.01217 16.135 2.77248C15.6002 2.5 14.9001 2.5 13.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V16.9463C2.5 17.3903 2.5 17.6123 2.59102 17.7263C2.67019 17.8255 2.79022 17.8832 2.91712 17.8831C3.06302 17.8829 3.23639 17.7442 3.58313 17.4668L5.57101 15.8765C5.9771 15.5517 6.18014 15.3892 6.40624 15.2737C6.60683 15.1712 6.82036 15.0963 7.04101 15.051C7.28972 15 7.54975 15 8.06979 15Z"
                        stroke="#344054"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h2 className="satoshi-400 text-[16px] leading-[24px] text-[#344054]">
                    Send SMS
                  </h2>
                </button>
                <button
                  className="flex items-center justify-center border-[1px] border-(--border) rounded-[4px] gap-[8px] h-[40px] w-[139px]"
                  onClick={onIssueEmailClick}
                >
                  <span>
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.917 13.0007L12.3813 8.00065M7.61937 8.00065L2.08369 13.0007M1.66699 3.83398L8.47109 8.59685C9.02207 8.98254 9.29756 9.17538 9.59721 9.25007C9.8619 9.31605 10.1387 9.31605 10.4034 9.25007C10.7031 9.17538 10.9786 8.98254 11.5296 8.59685L18.3337 3.83398M5.66699 14.6673H14.3337C15.7338 14.6673 16.4339 14.6673 16.9686 14.3948C17.439 14.1552 17.8215 13.7727 18.0612 13.3023C18.3337 12.7675 18.3337 12.0674 18.3337 10.6673V5.33398C18.3337 3.93385 18.3337 3.23379 18.0612 2.69901C17.8215 2.2286 17.439 1.84615 16.9686 1.60647C16.4339 1.33398 15.7338 1.33398 14.3337 1.33398H5.66699C4.26686 1.33398 3.5668 1.33398 3.03202 1.60647C2.56161 1.84615 2.17916 2.2286 1.93948 2.69901C1.66699 3.23379 1.66699 3.93385 1.66699 5.33398V10.6673C1.66699 12.0674 1.66699 12.7675 1.93948 13.3023C2.17916 13.7727 2.56161 14.1552 3.03202 14.3948C3.5668 14.6673 4.26686 14.6673 5.66699 14.6673Z"
                        stroke="#344054"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <h2 className="satoshi-400 text-[16px] leading-[24px] text-[#344054]">
                    Send Email
                  </h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  