import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PersonalizedTable from "../../components/Tables/personalizedTable";
import { useState } from "react";
import InstantTable from "../../components/Tables/InstantTable";
import PinTable from "../../components/Tables/pinTableSection";
import BlockTableSection from "../../components/Tables/blockTableSection";

export default function CardSection() {
  const [activeTab, setActiveTab] = useState("personalized");

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
            Cards
          </h2>
          <h6 className="satoshi-400 text-[14px] pb-[10px] leading-[20px] text-[#475467]">
            View all cards status here.
          </h6>
        </div>
        <div className="flex items-center justify-between md:flex-row flex-col">
          <Box sx={{ justifyContent: "center", flexDirection: "column" }}>
            <StyledButton
              variant="outlined"
              sx={{ justifyContent: "center" }}
              className={activeTab === "personalized" ? "active" : ""}
              onClick={() => setActiveTab("personalized")}
            >
              {activeTab === "personalized" && <CircleIcon />}
              Personalized
            </StyledButton>
            <StyledButton
              variant="outlined"
              className={activeTab === "instant" ? "active" : ""}
              onClick={() => setActiveTab("instant")}
            >
              {activeTab === "instant" && <CircleIcon />}
              Instant
            </StyledButton>
            <StyledButton
              variant="outlined"
              className={activeTab === "blocked" ? "active" : ""}
              onClick={() => setActiveTab("blocked")}
            >
              {activeTab === "blocked" && <CircleIcon />}
              Blocked
            </StyledButton>
            <StyledButton
              variant="outlined"
              className={activeTab === "pinReissue" ? "active" : ""}
              onClick={() => setActiveTab("pinReissue")}
            >
              {activeTab === "pinReissue" && <CircleIcon />}
              Pin Reissue
            </StyledButton>
          </Box>
          <button className="flex items-center justify-center bg-(--main) md:w-[114px] w-full h-[36px] gap-[12px] rounded-[4px]">
            <span>
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8334 17.9993V12.9993M13.3334 15.4993H18.3334M18.3334 8.83268H1.66675M18.3334 10.4993V7.33268C18.3334 6.39926 18.3334 5.93255 18.1518 5.57603C17.992 5.26243 17.737 5.00746 17.4234 5.84767C17.0669 4.66602 16.6002 4.66602 15.6667 4.66602H4.33342C3.39999 4.66602 2.93328 4.66602 2.57676 4.84767C2.26316 5.00746 2.00819 5.26243 1.8484 5.57603C1.66675 5.93255 1.66675 6.39926 1.66675 7.33268V13.666C1.66675 14.5994 1.66675 15.0661 1.8484 15.4227C2.00819 15.7363 2.26316 15.9912 2.57676 16.151C2.93328 16.3327 3.39999 16.3327 4.33341 16.3327H10.0001"
                  stroke="white"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <h2 className="satoshi-500 text-[12px] text-white leading-[18px] text-[#101828]">
              Issue Card
            </h2>
          </button>
        </div>

        {/* Conditionally render content based on active tab */}
        {activeTab === "personalized" && <PersonalizedTable />}
        {activeTab === "instant" && <div><InstantTable/></div>}
        {activeTab === "blocked" && <div><BlockTableSection/></div>}
        {activeTab === "pinReissue" && <div><PinTable/></div>}
      </div>
    </>
  );
}
