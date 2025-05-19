import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GenerateModal from "../modals/generatePinModal";
import { useState } from "react";
import SmsModal from "../modals/smsModal";
import EmailModal from "../modals/emailModal";
import PinModal from "../modals/pinModal";
import ReIssuePinModal from "../modals/reIssuePinModal";
import IssueEmailModal from "../modals/issueEmail";
import IssuePinModal from "../modals/issuePInModal";
import IssueSmsModal from "../modals/issueSmsmodal";

// Function to create row data
function createData(name: string, expiry: string, batch: number, date: string) {
  return { name, expiry, batch, date };
}

// Table data
const rows = [
  createData(
    "506112*********6382",
    "10/18/2024 14:39:58",
    847264905,
    "32 months"
  ),
  createData(
    "506112*********6382",
    "10/18/2024 14:39:58",
    847264905,
    "32 months"
  ),
  createData(
    "506112*********6382",
    "10/18/2024 14:39:58",
    847264905,
    "32 months"
  ),
];

export default function GenerateTable({}) {
  const [isGenerate, setIsGenerate] = useState(false);
  const [isIssue, setIsIssue] = useState(false);
  const [isSmsOpen, setIsSmsOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isPinOpen, setIsPinOpen] = useState(false);
  const [isIssueSmsOpen, setIsIssueSmsOpen] = useState(false);
  const [isIssueEmailOpen, setIsIssueEmailOpen] = useState(false);
  const [isIssuePinOpen, setIsIssuePinOpen] = useState(false);

  const handleSmsClick = () => {
    setIsGenerate(false);
    setIsSmsOpen(true);
  };

  const handlePinClick = () => {
    setIsGenerate(false);
    setIsPinOpen(true);
  };

  const handleEmailClick = () => {
    setIsGenerate(false);
    setIsEmailOpen(true);
  };
  const handleIssueSmsClick = () => {
    setIsIssue(false);
    setIsIssueSmsOpen(true);
  };

  const handleIssuePinClick = () => {
    setIsIssue(false);
    setIsIssuePinOpen(true);
  };

  const handleIssueEmailClick = () => {
    setIsIssue(false);
    setIsIssueEmailOpen(true);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, borderCollapse: "collapse" }} size="small">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f9fafb" }}>
              <TableCell
                align="center"
                sx={{
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                Available Cards
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  textAlign: "center",
                  fontSize: "12px",
                }}
              ></TableCell>
              <TableCell
                align="center"
                sx={{
                  textAlign: "center",
                  fontSize: "12px",
                }}
              ></TableCell>
              <TableCell
                align="center"
                sx={{
                  textAlign: "center",
                  fontSize: "12px",
                }}
              ></TableCell>
              <TableCell
                align="center"
                sx={{ textAlign: "center", fontSize: "12px" }}
              ></TableCell>
            </TableRow>
          </TableHead>

          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#f9fafb",
                borderRight: "1px solid #e0e0e0",
              }}
            >
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #e0e0e0",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                Masked PAN
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #e0e0e0",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                Date Issued
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #e0e0e0",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                Expiry
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  borderRight: "1px solid #e0e0e0",
                  textAlign: "center",
                  fontSize: "12px",
                }}
              >
                Batch
              </TableCell>
              <TableCell
                align="center"
                sx={{ textAlign: "center", fontSize: "12px" }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} sx={{ height: "45px" }}>
                <TableCell
                  align="center"
                  sx={{ borderRight: "1px solid #e0e0e0", fontSize: "10px" }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ borderRight: "1px solid #e0e0e0", fontSize: "10px" }}
                >
                  {row.date}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ borderRight: "1px solid #e0e0e0", fontSize: "10px" }}
                >
                  {row.expiry}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ borderRight: "1px solid #e0e0e0", fontSize: "10px" }}
                >
                  {row.batch}
                </TableCell>
                <TableCell align="center">
                  <div className="flex items-center gap-[10px] justify-center">
                    <h2
                      className="satoshi-700 text-[10px] leading-[20px] text-(--main) cursor-pointer "
                      onClick={() => setIsGenerate(true)}
                    >
                      Generate Pin
                    </h2>
                    <h2
                      className="satoshi-700 text-[10px] leading-[20px] cursor-pointer text-[#475467]"
                      onClick={() => setIsIssue(true)}
                    >
                      Reissue Pin
                    </h2>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <GenerateModal
        isGenerateOpen={isGenerate}
        onClose={() => setIsGenerate(false)}
        onSmsClick={handleSmsClick}
        onPinClick={handlePinClick}
        onEmailClick={handleEmailClick}
      />

      {/* SMS Modal */}
      <SmsModal isOpen={isSmsOpen} onClose={() => setIsSmsOpen(false)} />
      {/* email modal */}
      <EmailModal isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} />
      {/* pin modal */}
      <PinModal isOpen={isPinOpen} onClose={() => setIsPinOpen(false)} />

      <ReIssuePinModal
        isIssueOpen={isIssue}
        onClose={() => setIsIssue(false)}
        onIssueSmsClick={handleIssueSmsClick}
        onIssuePinClick={handleIssuePinClick}
        onIssueEmailClick={handleIssueEmailClick}
      />
      <IssueSmsModal isIssueSms={isIssueSmsOpen} onClose={() => setIsIssueSmsOpen(false)} />
      {/* email modal */}
      <IssueEmailModal isIssueEmail={isIssueEmailOpen} onClose={() => setIsIssueEmailOpen(false)} />
      {/* pin modal */}
      <IssuePinModal isIssuePin={isIssuePinOpen} onClosePin={() => setIsIssuePinOpen(false)} />
    </>
  );
}
