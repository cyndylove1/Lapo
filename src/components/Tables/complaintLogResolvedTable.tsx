import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchBar from "../searchBar";

// Function to create row data
function createData(
  name: string,
  account: string,
  date: string,
  category: string
) {
  return {  account, name, date, category  };
}

// Table data
const rows = [
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
   createData(
    "1234567890",
    "Nazeer Ajibola",
    "11/14/2024 10:27:43",
    "Card Dispute",
   
  ),
];

export default function ComplaintLogResolvedTable() {
  return (
    <div className="pt-[15px]">
      <div className="border-[1.5px] border-[#EAECF0] rounded-[4px] ">
        <div className="flex items-center justify-between flex-col md:flex-row p-[5px] bg-[#f9fafb] border-b-[1.5px] border-[#EAECF0]">
          <div className="w-full">
            <SearchBar
              placeholder="Search complaint"
              className="bg-white md:w-[320px] w-full h-[36px] rounded-[4px]"
            />
          </div>

          <div className="flex items-center gap-[10px] mt-4 md:mt-0 flex-col md:flex-row w-full">
            <button className="flex items-center justify-center gap-[16px] h-[36px] lg:w-[82px] w-full rounded-[4px] bg-white border-[1px] border-(--border) ">
              <span>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 8.83268H2.5M13.3333 2.16602V5.49935M6.66667 2.16602V5.49935M6.5 18.8327H13.5C14.9001 18.8327 15.6002 18.8327 16.135 18.5602C16.6054 18.3205 16.9878 17.9381 17.2275 17.4677C17.5 16.9329 17.5 16.2328 17.5 14.8327V7.83268C17.5 6.43255 17.5 5.73249 17.2275 5.19771C16.9878 4.7273 16.6054 4.34485 16.135 4.10517C15.6002 3.83268 14.9001 3.83268 13.5 3.83268H6.5C5.09987 3.83268 4.3998 3.83268 3.86502 4.10517C3.39462 4.34485 3.01217 4.7273 2.77248 5.19771C2.5 5.73249 2.5 6.43255 2.5 7.83268V14.8327C2.5 16.2328 2.5 16.9329 2.77248 17.4677C3.01217 17.9381 3.39462 18.3205 3.86502 18.5602C4.3998 18.8327 5.09987 18.8327 6.5 18.8327Z"
                    stroke="#344054"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <h2 className="text-[12px] leading-[18px] satoshi-500">Date</h2>
            </button>
            <button className="flex items-center gap-[16px] justify-center h-[36px] lg:w-[82px] w-full rounded-[4px] bg-white border-[1px] border-(--border) ">
              <span>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 10.5H15M2.5 5.5H17.5M7.5 15.5H12.5"
                    stroke="#344054"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <h2 className="text-[12px] leading-[18px] satoshi-500">Filter</h2>
            </button>
          </div>
        </div>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 650, borderCollapse: "collapse" }}
            size="small"
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f9fafb" }}>
                <TableCell
                  align="center"
                  sx={{
                    borderRight: "1px solid #e0e0e0",
                    fontSize: "12px",
                  }}
                >
                  Account Number
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderRight: "1px solid #e0e0e0",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  Customer Name
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderRight: "1px solid #e0e0e0",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  Submission Date
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderRight: "1px solid #e0e0e0",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  Category
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderRight: "1px solid #e0e0e0",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} sx={{ height: "45px" }}>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #e0e0e0",
                      fontSize: "10px",
                    }}
                  >
                    {row.account}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #e0e0e0",
                      fontSize: "10px",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #e0e0e0",
                      fontSize: "10px",
                    }}
                  >
                    {row.date}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #e0e0e0",
                      fontSize: "10px",
                    }}
                  >
                    {row.category}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontSize: "10px",
                    }}
                  >
                    <Link to="/complaint-log/details">
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
      </div>
    </div>
  );
}
