// FeesTable.tsx
import ButtonIcon from "../Buttons/buttonIcon";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProfileModal from "../modals/profileModal";

interface ProfileProps {
  isProfileOpen: boolean;
  setIsProfileOpen: (value: boolean) => void;
}

export default function FeesTable({
  isProfileOpen,
  setIsProfileOpen,
}: ProfileProps) {
  return (
    <>
      <div className="h-[262px] bg-white rounded-[10px] border-[1px] border-[#E2E2E2] mt-[6rem] p-4">
        <div className="">
          <h2 className="satoshi-500 text-[18px] leading-[18px] text-(--color)">
            Fees
          </h2>
          <div onClick={() => setIsProfileOpen(true)}>
            <ButtonIcon text="Add Fee" className="my-[10px] w-[120px]" />
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, borderCollapse: "collapse" }}
            size="small"
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f9fafb", height: "45px" }}>
                <TableCell
                  align="center"
                  sx={{ borderRight: "1px solid #e0e0e0", fontSize: "12px" }}
                >
                  Name
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ borderRight: "1px solid #e0e0e0", fontSize: "12px" }}
                >
                  Value
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ borderRight: "1px solid #e0e0e0", fontSize: "12px" }}
                >
                  Frequency
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ borderRight: "1px solid #e0e0e0", fontSize: "12px" }}
                >
                  Currency
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ borderRight: "1px solid #e0e0e0", fontSize: "12px" }}
                >
                  Time
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ borderRight: "1px solid #e0e0e0", fontSize: "12px" }}
                >
                  Account Pad
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontSize: "12px" }}
                >
                  Account
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ height: "45px" }}>
                {Array(7)
                  .fill(null)
                  .map((_, index) => (
                    <TableCell
                      key={index}
                      align="center"
                      sx={index < 6 ? { borderRight: "1px solid #e0e0e0" } : {}}
                    />
                  ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <ProfileModal
        isProfileOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
}
