import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";
import ComplaintResolvedTable from "../../components/Tables/complaintResolvedTable";
import ComplaintResolvedPendingTable from "../../components/Tables/complaintResolvedPending";


export default function ComplaintResolved() {
  const [activeTab, setActiveTab] = useState("pending");
  

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
            Complaints: Resolved
          </h2>
          <h6 className="satoshi-400 text-[14px] pb-[10px] leading-[20px] text-[#475467]">
            View details of treated complaints and resolve pending ones here.
          </h6>
        </div>
        <div className="flex items-center justify-between">
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
              className={activeTab === "treated" ? "active" : ""}
              onClick={() => setActiveTab("treated")}
            >
              {activeTab === "treated" && <CircleIcon />}
              Treated
            </StyledButton>
          </Box>
        </div>

        {/* Conditionally render content based on active tab */}
        {activeTab === "pending" && <ComplaintResolvedPendingTable />}
        {activeTab === "treated" && <ComplaintResolvedTable/>}
      </div>
    </>
  );
}
