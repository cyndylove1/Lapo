import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// Function to create row data
function createData(
  branch: string,
  initiator: string,
  quantity: number,
  batch: number,
  date: string,
  status: string,

) {
  return { branch, initiator, quantity, batch, date, status};
}

// Table data with different statuses
const rows = [
  createData(
    "Corporate",
    "RootUser",
    10,
    847264905,
    "11/14/2024 10:27:43",
    "Ready",

    
  ),
  createData(
    "Corporate",
    "RootUser",
    10,
    847264905,
    "11/14/2024 10:27:43",
    "Ready"
  ),
  createData(
    "Corporate",
    "RootUser",
    10,
    847264905,
    "11/14/2024 10:27:43",
    "In Progress"
  ),
  createData("Corporate", "RootUser", 10, 847264905, "11/14/2024 10:27:43", "Pending"),
  createData(
    "Corporate",
    "RootUser",
    10,
    847264905,
    "11/14/2024 10:27:43",
    "Acknowledged"
  ),
];

export default function RequestTable() {
  const getStatusButton = (status: string) => {
    switch (status) {
      case "Ready":
        return (
          <button className="border-[1px] border-[#ABEFC6] bg-[#ECFDF3] h-[22px] w-[44px] rounded-[16px] text-[#067647] satoshi-500 text-[10px] leading-[18px]">
            Ready
          </button>
        );
      case "In Progress":
        return (
          <button className="border-[1px] border-[#FEDF89] bg-[#FFFAEB] h-[22px] w-[67px] rounded-[16px] text-[#B54708] satoshi-500 text-[10px] leading-[18px]">
            In Progress
          </button>
        );
      case "Pending":
        return (
          <button className="border-[1px] border-[#EAECF0] bg-[#F9FAFB] h-[22px] w-[54px] rounded-[16px] text-[#344054] satoshi-500 text-[10px] leading-[18px]">
            Pending
          </button>
        );
      case "Acknowledged":
        return (
          <button className="border-[1px] border-[#B2DDFF] bg-[#EFF8FF] h-[22px] w-[84px] rounded-[16px] text-[#175CD3] satoshi-500 text-[10px] leading-[18px]">
            Acknowledged
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, borderCollapse: "collapse" }} size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f9fafb" }}>
            <TableCell
              align="center"
              sx={{
                borderRight: "1px solid #e0e0e0",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              Branch
            </TableCell>
            <TableCell
              align="center"
              sx={{
                borderRight: "1px solid #e0e0e0",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              Initiator
            </TableCell>
            <TableCell
              align="center"
              sx={{
                borderRight: "1px solid #e0e0e0",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              Quantity
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
              sx={{
                borderRight: "1px solid #e0e0e0",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              Date Requested
            </TableCell>
            <TableCell
              align="center"
              sx={{
                borderRight: "1px solid #e0e0e0",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              Status
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
                {row.branch}
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "1px solid #e0e0e0", fontSize: "10px" }}
              >
                {row.initiator}
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "1px solid #e0e0e0", fontSize: "10px" }}
              >
                {row.quantity}
              </TableCell>
              <TableCell
                align="center"
                sx={{ borderRight: "1px solid #e0e0e0", fontSize: "10px" }}
              >
                {row.batch}
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
                {getStatusButton(row.status)}
              </TableCell>
              <TableCell align="center">
                
                <Link to="/request/view">
                  <div className="text-(--main) satoshi-700 text-[10px] leading-[20px]">
                    View
                  </div>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
