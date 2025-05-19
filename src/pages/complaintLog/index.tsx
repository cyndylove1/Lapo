import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import ComplaintLogTable from "../../components/Tables/complaintLogTable";
import ComplaintLogResolvedTable from "../../components/Tables/complaintLogResolvedTable";
import LogModal from "../../components/modals/logModal";

export default function ComplaintLog() {
  const [activeTab, setActiveTab] = useState("pending");
  const [isLog, setIsLog] = useState(false);

  const StyledButton = styled(Button)(() => ({
    textTransform: "none",
    fontSize: "14px",
    fontWeight: 500,
    color: "#000000",
    border: "1px solid #e0e0e0",
    backgroundColor: "#ffffff",
    "&.active": {
      backgroundColor: "#f9fafb",
    },
  }));

  const CircleIcon = () => (
    <span className="px-2">
      <svg
        width="8"
        height="9"
        viewBox="0 0 8 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4.5" r="4" fill="#014DAF" />
      </svg>
    </span>
  );

  return (
    <>
      <div className=" px-6">
        <div>
          <h2 className="satoshi-700 text-[18px] leading-[28px] text-[#101828] pt-4">
            Complaints: Log
          </h2>
          <h6 className="satoshi-400 text-[14px] pb-[10px] leading-[20px] text-[#475467]">
            View details of logged complaints and log new ones here.
          </h6>
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row">
          <Box sx={{ justifyContent: "center" }}>
            <StyledButton
              variant="outlined"
              sx={{ justifyContent: "center" }}
              className={activeTab === "pending" ? "active" : ""}
              onClick={() => setActiveTab("pending")}
            >
              {activeTab === "pending" && <CircleIcon />}
              Pending
            </StyledButton>
            <StyledButton
              variant="outlined"
              className={activeTab === "resolved" ? "active" : ""}
              onClick={() => setActiveTab("resolved")}
            >
              {activeTab === "resolved" && <CircleIcon />}
              Resolved
            </StyledButton>
          </Box>
          <button
            className="flex items-center justify-center bg-(--main) md:w-[136px] w-full mt-4 md:mt-0 h-[36px] gap-[12px] rounded-[4px]"
            onClick={() => setIsLog(true)}
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6673 9.24935V6.16602C16.6673 4.76588 16.6673 4.06582 16.3948 3.53104C16.1552 3.06063 15.7727 2.67818 15.3023 2.4385C14.7675 2.16602 14.0674 2.16602 12.6673 2.16602H7.33398C5.93385 2.16602 5.23379 2.16602 4.69901 2.4385C4.2286 2.67818 3.84615 3.06063 3.60647 3.53104C3.33398 4.06582 3.33398 4.76588 3.33398 6.16602V14.8327C3.33398 16.2328 3.33398 16.9329 3.60647 17.4677C3.84615 17.9381 4.2286 18.3205 4.69901 18.5602C5.23379 18.8327 5.93385 18.8327 7.33398 18.8327H10.0007M11.6673 9.66602H6.66732M8.33398 12.9993H6.66732M13.334 6.33268H6.66732M15.0007 17.9993V12.9993M12.5007 15.4993H17.5007"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h2 className="satoshi-500 text-[12px] text-white leading-[18px] text-[#101828]">
              Log Complaint
            </h2>
          </button>
        </div>

        {/* Conditionally render content based on active tab */}
        {activeTab === "pending" && <ComplaintLogTable />}
        {activeTab === "resolved" && <ComplaintLogResolvedTable />}
      </div>
      <LogModal isLogOpen={isLog} onClose={() => setIsLog(false)} />
    </>
  );
}
