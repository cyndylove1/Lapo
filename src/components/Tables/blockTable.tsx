import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ToggleSwitch from "../toggleSwitch";

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
      "32 months", 
  ),
  createData(
      "506112*********6382",
      "10/18/2024 14:39:58",
      847264905,
      "32 months", 
  ),
  createData(
      "506112*********6382",
      "10/18/2024 14:39:58",
      847264905,
      "32 months", 
  ),
 
  
];

export default function BlockTable() {
  return (
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
              Block Status
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
                < ToggleSwitch/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
