import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function Request() {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#f1f7ff",
      fontWeight: "bold",
          fontSize: 10,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 10,
      backgroundColor: "#ffff",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
          backgroundColor: theme.palette.action.hover,

    },
  }));

  return (
      <>
          
      <div className="pt-2">
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: "12px",
            border: "1px solid #E2E2E2",
          }}
        >
          <h1 className="satoshi-500 text-[18px] leading-[18px] p-4">
            Recent Card Requests
          </h1>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Branch</StyledTableCell>
                <StyledTableCell>Card Type</StyledTableCell>
                <StyledTableCell>Quantity</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>Corporate</StyledTableCell>
                <StyledTableCell>Instant</StyledTableCell>
                <StyledTableCell>10</StyledTableCell>
                <StyledTableCell>
                  <button className="border-[1px] border-[#ABEFC6] bg-[#ECFDF3] h-[22px] w-[44px] rounded-[16px] text-[#067647] satoshi-500 text-[10px] leading-[18px]">
                    Ready
                  </button>
                </StyledTableCell>
                <StyledTableCell>
                  <h2 className="text-[#014DAF] text-[10px] satoshi-700">
                    View
                  </h2>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Corporate</StyledTableCell>
                <StyledTableCell>Personalized</StyledTableCell>
                <StyledTableCell>10</StyledTableCell>
                <StyledTableCell>
                  <button className="border-[1px] border-[#FEDF89] bg-[#FFFAEB] h-[22px] w-[67px] rounded-[16px] text-[#B54708] satoshi-500 text-[10px] leading-[18px]">
                    In Progress
                  </button>
                </StyledTableCell>
                <StyledTableCell>
                  <h2 className="text-[#014DAF] text-[10px] satoshi-700">
                    View
                  </h2>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Corporate</StyledTableCell>
                <StyledTableCell>Personalized</StyledTableCell>
                <StyledTableCell>10</StyledTableCell>
                <StyledTableCell>
                  <button className="border-[1px] border-[#B2DDFF] bg-[#EFF8FF] h-[22px] w-[84px] rounded-[16px] text-[#175CD3] satoshi-500 text-[10px] leading-[18px]">
                    Acknowledged
                  </button>
                </StyledTableCell>
                <StyledTableCell>
                  <h2 className="text-[#014DAF] text-[10px] satoshi-700">
                    View
                  </h2>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell>Corporate</StyledTableCell>
                <StyledTableCell>Instant</StyledTableCell>
                <StyledTableCell>10</StyledTableCell>
                <StyledTableCell>
                  <button className="border-[1px] border-[#EAECF0] bg-[#F9FAFB] h-[22px] w-[54px] rounded-[16px] text-[#344054] satoshi-500 text-[10px] leading-[18px]">
                    Pending
                  </button>
                </StyledTableCell>
                <StyledTableCell>
                  <h2 className="text-[#014DAF] text-[10px] satoshi-700">
                    View
                  </h2>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
