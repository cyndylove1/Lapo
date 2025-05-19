import { useState } from "react";
import Input from "../../components/input";
import Label from "../../components/label";
import DownloadModal from "../../components/modals/downloadModal";
import BatchModal from "../../components/modals/batchModal";

export default function RequestDetails() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBatch, setIsBatch] = useState(false);
  const [status, setStatus] = useState("Pending");
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    // If clicking the same button, toggle it
    if (activeButton === buttonName) {
      setActiveButton(null);
      setStatus("Pending");
    } else {
      setActiveButton(buttonName);

      // Update status based on which button was clicked
      switch (buttonName) {
        case "inProgress":
          setStatus("In Progress");
          break;
        case "ready":
          setStatus("Ready");
          break;
        case "acknowledged":
          setStatus("Acknowledged");
          break;
        default:
          setStatus("Pending");
      }
    }
  };

  const getStatusStyles = () => {
    // First determine the base styles
    let baseStyles = "";
    switch (status) {
      case "In Progress":
        baseStyles = "text-[#B54708] bg-[#FFFAEB] border-[#FEDF89]";
        break;
      case "Ready":
        baseStyles = "text-[#067647] bg-[#e1f1e9] border-[#ABEFC6]";
        break;
      case "Acknowledged":
        baseStyles = "text-[#175CD3] bg-[#e4ecf4] border-[#B2DDFF]";
        break;
      default:
        baseStyles = "text-[#475467] bg-[#edeef0] border-[#EAECF0]";
    }

    let widthClass = "";
    switch (status) {
      case "Pending":
        widthClass = "w-[100px]";
        break;
      case "In Progress":
        widthClass = "w-[120px]";
        break;
      case "Ready":
        widthClass = "w-[100px]";
        break;
      case "Acknowledged":
        widthClass = "w-[200px]";
        break;
      default:
        widthClass = "w-[80px]";
    }

    return `${baseStyles} ${widthClass}`;
  };

  return (
    <>
      <div>
        <div className="px-6 my-[10px]">
          <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828]">
            Request Details
          </h2>
          <h6 className="satoshi-400 text-[14px] leading-[20px] text-[#475467]">
            Perform predetermined actions on card requests here.
          </h6>
        </div>
      </div>
      <div className="bg-white border-[1px] border-(--border) h-[532px] p-4 mx-6 rounded-[10px]">
        <h2 className="satoshi-500 text-[18px] leading-[18px] pb-[10px] text-(--color)">
          Card Request Details
        </h2>
        <form action="">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[20px]">
            <div>
              <div>
                <Label text="Branch Name" hideIcon={true} />
                <Input className="bg-[#f5f5f7]" hideIcon={true} />
              </div>
              <div>
                <Label text="Card Type" hideIcon={true} />
                <Input className="bg-[#f5f5f7]" hideIcon={true} />
              </div>
              <div>
                <Label text="Quantity" hideIcon={true} />
                <Input className="bg-[#f5f5f7]" hideIcon={true} />
              </div>
              <div className="mt-[20px]">
                <Label text="Date Requested" hideIcon={true} />
                <h2 className="pt-2">11/14/2024 10:27:43</h2>
              </div>
            </div>
            <div>
              <div>
                <Label text="Initiator" hideIcon={true} />
                <Input className="bg-[#f5f5f7]" hideIcon={true} />
              </div>
              <div>
                <Label text="Card Charges" hideIcon={true} />
                <Input className="bg-[#f5f5f7]" hideIcon={true} />
              </div>
              <div>
                <Label text="Batch" hideIcon={true} />
                <Input className="bg-[#f5f5f7]" hideIcon={true} />
              </div>
              <div className="mt-[20px]">
                <Label text="Status" />
                <h2
                  className={`h-[30px] satoshi-500 text-[16px] leading-[20px] rounded-[16px] flex items-center justify-center border-[1px] ${getStatusStyles()}`}
                >
                  {status}
                </h2>
              </div>
            </div>
          </div>
        </form>
        <div>
          <h2 className="satoshi-700 text-[14px] leading-[20px] pb-[10px] text-(--color) mt-[20px]">
            Action
          </h2>
          <div className="mt-[2px] flex items-center gap-[12px] flex-col md:flex-row ">
            {/* Download Button */}
            <button
              className={`w-full h-[36px] flex items-center justify-center  gap-[1px] rounded-[4px] satoshi-500 text-[12px] leading-[18px] text-white ${
                isModalOpen ? "bg-black" : "bg-[#aeb3bb]"
              }`}
              onClick={() => setIsModalOpen(true)}
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
                    d="M16.6666 10.417V5.66699C16.6666 4.26686 16.6666 3.5668 16.3941 3.03202C16.1544 2.56161 15.772 2.17916 15.3016 1.93948C14.7668 1.66699 14.0667 1.66699 12.6666 1.66699H7.33325C5.93312 1.66699 5.23306 1.66699 4.69828 1.93948C4.22787 2.17916 3.84542 2.56161 3.60574 3.03202C3.33325 3.5668 3.33325 4.26686 3.33325 5.66699V14.3337C3.33325 15.7338 3.33325 16.4339 3.60574 16.9686C3.84542 17.439 4.22787 17.8215 4.69828 18.0612C5.23306 18.3337 5.93308 18.3337 7.33313 18.3337H10.4166M11.6666 9.16699H6.66659M8.33325 12.5003H6.66659M13.3333 5.83366H6.66659M12.4999 15.8337L14.9999 18.3337M14.9999 18.3337L17.4999 15.8337M14.9999 18.3337V13.3337"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <h2>Download for Production</h2>
            </button>

            {/* Mark as In Progress Button */}
            <button
              className={`w-full h-[36px] flex items-center justify-center gap-[5px] rounded-[4px] satoshi-500 text-[12px] leading-[18px] text-white ${
                activeButton === "inProgress" ? "bg-[#b54708]" : "bg-[#e1b59c]"
              }`}
              onClick={() => handleButtonClick("inProgress")}
            >
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_163_7408)">
                    <path
                      d="M10.0001 1.66699V5.00033M10.0001 15.0003V18.3337M5.00008 10.0003H1.66675M18.3334 10.0003H15.0001M15.8988 15.899L13.5417 13.542M15.8988 4.16694L13.5417 6.52397M4.10139 15.899L6.45841 13.542M4.10139 4.16694L6.45841 6.52397"
                      stroke="white"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_163_7408">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h2>Mark as In Progress</h2>
            </button>

            {/* Mark as Ready Button */}
            <button
              className={`w-full h-[36px] flex items-center justify-center gap-[5px] rounded-[4px] satoshi-500 text-[12px] leading-[18px] text-white ${
                activeButton === "ready" ? "bg-[#067647]" : "bg-[#9bc8b5]"
              }`}
              onClick={() => handleButtonClick("ready")}
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
                    d="M17.0833 6.06527L9.99997 10.0005M9.99997 10.0005L2.91664 6.06527M9.99997 10.0005L10 17.9171M11.6667 17.4079L10.6475 17.9741C10.4112 18.1054 10.293 18.171 10.1679 18.1968C10.0571 18.2195 9.94288 18.2195 9.83213 18.1968C9.70698 18.171 9.58881 18.1054 9.35248 17.9741L3.18581 14.5481C2.93621 14.4095 2.8114 14.3401 2.72053 14.2415C2.64013 14.1543 2.57929 14.0509 2.54207 13.9382C2.5 13.8109 2.5 13.6681 2.5 13.3826V6.61835C2.5 6.33281 2.5 6.19005 2.54207 6.06271C2.57929 5.95007 2.64013 5.84667 2.72053 5.75942C2.8114 5.66081 2.93621 5.59148 3.18581 5.45281L9.35248 2.02688C9.58881 1.89558 9.70698 1.82993 9.83213 1.80419C9.94288 1.78141 10.0571 1.78141 10.1679 1.80419C10.293 1.82993 10.4112 1.89558 10.6475 2.02688L16.8142 5.4528C17.0638 5.59147 17.1886 5.66081 17.2795 5.75942C17.3599 5.84666 17.4207 5.95007 17.4579 6.06271C17.5 6.19004 17.5 6.33281 17.5 6.61835L17.5 10.4171M6.25 3.75048L13.75 7.91714M13.3333 15.0005L15 16.6671L18.3333 13.3338"
                    stroke="white"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <h2>Mark as Ready</h2>
            </button>

            {/* Send to Dispatch Button */}
            <button
              className={`w-full h-[36px] flex items-center justify-center gap-[5px] rounded-[4px] satoshi-500 text-[12px] leading-[18px] text-white ${
                isBatch ? "bg-[#8020e7]" : "bg-[#cca6f5]"
              }`}
              onClick={() => setIsBatch(true)}
            >
              <span>
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 17.3327C7.31818 17.3327 6.66682 17.0583 5.36411 16.5096C2.12137 15.1438 0.5 14.4609 0.5 13.3122L0.5 5.28463M8 17.3327C8.68182 17.3327 9.33318 17.0583 10.6359 16.5096C13.8786 15.1438 15.5 14.4609 15.5 13.3122L15.5 5.28463M8 17.3327L8 9.02368M15.5 5.28463C15.5 5.795 14.832 6.11728 13.4961 6.76185L11.0617 7.93635C9.55931 8.66124 8.80809 9.02368 8 9.02368M15.5 5.28463C15.5 4.77427 14.832 4.45199 13.4961 3.80742L12.2038 3.18394M0.5 5.28463C0.5 5.795 1.16798 6.11728 2.50393 6.76185L4.93827 7.93635C6.44069 8.66124 7.19191 9.02368 8 9.02368M0.5 5.28463C0.5 4.77427 1.16798 4.45199 2.50393 3.80742L3.83333 3.16602M3 9.85458L4.66667 10.6855"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.50016 6.49935C7.50016 6.77549 7.72402 6.99935 8.00016 6.99935C8.27631 6.99935 8.50016 6.77549 8.50016 6.49935H7.50016ZM7.16683 1.35637L6.78653 1.03176L6.78653 1.03176L7.16683 1.35637ZM5.95319 2.00807C5.77392 2.21811 5.79885 2.53371 6.00889 2.71298C6.21892 2.89226 6.53452 2.86733 6.7138 2.65729L5.95319 2.00807ZM9.28653 2.65729C9.4658 2.86733 9.7814 2.89226 9.99144 2.71298C10.2015 2.53371 10.2264 2.21811 10.0471 2.00807L9.28653 2.65729ZM8.8335 1.35637L9.2138 1.03176L9.2138 1.03176L8.8335 1.35637ZM7.50016 0.666016L7.50016 6.49935H8.50016L8.50016 0.666016L7.50016 0.666016ZM6.78653 1.03176L5.95319 2.00807L6.7138 2.65729L7.54713 1.68098L6.78653 1.03176ZM10.0471 2.00807L9.2138 1.03176L8.45319 1.68098L9.28653 2.65729L10.0471 2.00807ZM7.54713 1.68098C7.75311 1.43966 7.87502 1.29852 7.9725 1.21138C8.06286 1.13062 8.0575 1.16602 8.00016 1.16602V0.166016C7.69875 0.166016 7.47314 0.316474 7.30606 0.465825C7.1461 0.608811 6.97338 0.81285 6.78653 1.03176L7.54713 1.68098ZM9.2138 1.03176C9.02694 0.81285 8.85423 0.608811 8.69426 0.465825C8.52718 0.316475 8.30157 0.166016 8.00016 0.166016V1.16602C7.94283 1.16602 7.93747 1.13062 8.02782 1.21138C8.1253 1.29852 8.24721 1.43966 8.45319 1.68098L9.2138 1.03176Z"
                    fill="white"
                  />
                </svg>
              </span>
              <h2>Send to Dispatch</h2>
            </button>

            {/* Mark as Acknowledged Button */}
            <button
              className={`w-full h-[36px] flex items-center justify-center gap-[5px] rounded-[4px] satoshi-500 text-[12px] leading-[18px] text-white ${
                activeButton === "acknowledged"
                  ? "bg-[#014daf]"
                  : "bg-[#99b8df]"
              }`}
              onClick={() => handleButtonClick("acknowledged")}
            >
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_163_7423)">
                    <path
                      d="M18.3332 9.23843V10.0051C18.3321 11.8021 17.7503 13.5507 16.6743 14.99C15.5983 16.4292 14.0859 17.4822 12.3626 17.9917C10.6394 18.5012 8.79755 18.44 7.1119 17.8172C5.42624 17.1945 3.98705 16.0435 3.00897 14.536C2.03089 13.0285 1.56633 11.2451 1.68457 9.45202C1.80281 7.6589 2.49751 5.95203 3.66507 4.58599C4.83263 3.21994 6.41049 2.26791 8.16333 1.87188C9.91617 1.47585 11.7501 1.65704 13.3915 2.38843M18.3332 3.33366L9.99984 11.6753L7.49984 9.17533"
                      stroke="white"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_163_7423">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <h2>Mark as Acknowledged</h2>
            </button>
          </div>
        </div>
      </div>
      <DownloadModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      <BatchModal isBatchOpen={isBatch} setIsBatchOpen={setIsBatch} />;
    </>
  );
}
