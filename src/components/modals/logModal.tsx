import Button from "../Buttons/button";
import Input from "../input";
import Label from "../label";
import SelectTag from "../selectTag";

interface LogModalProps {
  isLogOpen: boolean;
  onClose: () => void;
}

export default function LogModal({ isLogOpen, onClose }: LogModalProps) {
  if (!isLogOpen) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 overflow-y-auto bg-black/70">
      {/* Modal Container */}
      <div className="relative w-full max-w-[496px] max-h-[90vh] flex flex-col">
        {/* Modal Content */}
        <div className="relative z-10 w-full rounded-xl bg-white overflow-hidden flex flex-col">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 border-b border-(--border) sticky top-0 bg-white z-20">
            <div className="flex items-center gap-3">
              <div>
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_5579_1764)">
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
                      d="M34 23.5V19.8C34 18.1198 34 17.2798 33.673 16.638C33.3854 16.0735 32.9265 15.6146 32.362 15.327C31.7202 15 30.8802 15 29.2 15H22.8C21.1198 15 20.2798 15 19.638 15.327C19.0735 15.6146 18.6146 16.0735 18.327 16.638C18 17.2798 18 18.1198 18 19.8V30.2C18 31.8802 18 32.7202 18.327 33.362C18.6146 33.9265 19.0735 34.3854 19.638 34.673C20.2798 35 21.1198 35 22.8 35H26M28 24H22M24 28H22M30 20H22M32 34V28M29 31H35"
                      stroke="#344054"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_5579_1764"
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
                        result="effect1_dropShadow_5579_1764"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_5579_1764"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div>
                <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828]">
                  Log Complaint
                </h2>
                <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
                  Select category and fill in details
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

          {/* Scrollable Content */}
          <div className="overflow-y-auto flex-1">
            <form>
              <div className="border-b border-(--border)">
                <div className="mx-6">
                  <div className="my-4">
                    <Label text="Category" hideIcon={true} />
                    <SelectTag className="h-[44px] w-full text-[16px] rounded-[8px] border-(--border) px-4 text-() focus:border-brand-500">
                      <option>Select category from dropdown</option>
                      <option></option>
                    </SelectTag>
                  </div>
                  <div className="my-4">
                    <Label text="Account Number" />
                    <Input placeholder="0123456789" hideIcon={true} />
                  </div>
                  <div className="my-4">
                    <Label text="Customer Name" />
                    <Input placeholder="Nazeer Ajibola" hideIcon={true} />
                  </div>
                  <div className="my-4">
                    <Label text="Complaint Details" />
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      placeholder="Describe complaint...."
                      className="w-full text-[16px] h-[100px] p-4 focus-within:border-(--main) mt-[5px] text-[#808080] border-(--border) border rounded-[8px] outline-none"
                    ></textarea>
                  </div>
                  <div className="mt-4 mb-10">
                    <Label text="Upload File (optional)" />
                    <div className="flex justify-center border mt-[5px] rounded-[8px] h-[126px] border-dashed border-(--border)">
                      <div>
                        <div className="flex justify-center pt-[12px]">
                          <svg
                            width="44"
                            height="44"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_d_5579_5390)">
                              <rect
                                x="2"
                                y="1"
                                width="40"
                                height="40"
                                rx="8"
                                fill="white"
                              />
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
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
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
                        </div>
                        <h2 className="satoshi-400 text-[14px] leading-[20px] text-center pt-[12px]">
                          <span className="satoshi-700 text-(--main)">
                            Click to upload
                          </span>
                          &nbsp; or drag and drop
                        </h2>
                        <h2 className="satoshi-400 text-[12px] text-center leading-[18px] pt-[12px]">
                          PDF, JPG (max. 10mb)
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-6 mx-6">
                <Button
                  text="Proceed"
                  className="w-full h-[44px] bg-(--main) rounded-[4px]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
