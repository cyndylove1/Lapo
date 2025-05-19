import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Function to create row data
function createData(name: string, code: number) {
  return { name, code };
}

// Table data
const rows = [
  createData("Verve", 18),
  createData("Verve", 18),
  createData("Verve", 18),
  
  
];

export default function SchemeTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, borderCollapse: "collapse" }} size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f9fafb" }}>
            <TableCell
              align="center"
              sx={{ borderRight: "1px solid #e0e0e0", fontSize: "12px" }}
            >
              Scheme Name
            </TableCell>
            <TableCell
              align="center"
              sx={{ borderRight: "1px solid #e0e0e0", fontSize: "12px" }}
            >
              PAN Length
            </TableCell>
            <TableCell align="center" sx={{ fontSize: "12px" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ height: "45px" }}>
              <TableCell align="center" sx={{ borderRight: "1px solid #e0e0e0", fontSize: "10px" }}>
                {row.name}
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "1px solid #e0e0e0", fontSize: "10px" }}
              >
                {row.code}
              </TableCell>
              <TableCell align="center">
                <div className="flex items-center justify-center gap-2">
                  {/* Trash Icon */}
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.8333 4.99984V4.33317C13.8333 3.39975 13.8333 2.93304 13.6517 2.57652C13.4919 2.26292 13.2369 2.00795 12.9233 1.84816C12.5668 1.6665 12.1001 1.6665 11.1667 1.6665H9.83333C8.89991 1.6665 8.4332 1.6665 8.07668 1.84816C7.76308 2.00795 7.50811 2.26292 7.34832 2.57652C7.16667 2.93304 7.16667 3.39975 7.16667 4.33317V4.99984M8.83333 9.58317V13.7498M12.1667 9.58317V13.7498M3 4.99984H18M16.3333 4.99984V14.3332C16.3333 15.7333 16.3333 16.4334 16.0608 16.9681C15.8212 17.4386 15.4387 17.821 14.9683 18.0607C14.4335 18.3332 13.7335 18.3332 12.3333 18.3332H8.66667C7.26654 18.3332 6.56647 18.3332 6.03169 18.0607C5.56129 17.821 5.17883 17.4386 4.93915 16.9681C4.66667 16.4334 4.66667 15.7333 4.66667 14.3332V4.99984"
                        stroke="#475467"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {/* Edit Icon */}
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.89662 15.0963C2.93491 14.7517 2.95405 14.5794 3.00618 14.4184C3.05243 14.2755 3.11778 14.1396 3.20045 14.0142C3.29363 13.8729 3.41621 13.7503 3.66136 13.5052L14.6666 2.49992C15.5871 1.57945 17.0795 1.57945 17.9999 2.49993C18.9204 3.4204 18.9204 4.91279 17.9999 5.83326L6.99469 16.8385C6.74954 17.0836 6.62696 17.2062 6.48566 17.2994C6.36029 17.3821 6.22433 17.4474 6.08146 17.4937C5.92042 17.5458 5.74813 17.5649 5.40356 17.6032L2.58325 17.9166L2.89662 15.0963Z"
                        stroke="#475467"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
