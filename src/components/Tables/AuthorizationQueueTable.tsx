import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchBar from "../searchBar";

// Function to create row data
function createData(name: string, users:string, access: string, date:string) {
  return { name, users, access,date };
}

// Table data
const rows = [
  createData("Nazeer", "Branch", "Create", "11/14/2024 10:27:43"),
  createData("Nazeer", "Users", "Edit", "11/14/2024 10:27:43"),

  createData("Nazeer", "Roles", "Full", "11/14/2024 10:27:43"),
  createData("Nazeer", "Roles", "Create", "11/14/2024 10:27:43"),
  createData("Nazeer", "Card Request", "Full", "11/14/2024 10:27:43"),
];

export default function AuthorizationQueueTable() {
  return (
    <div className="border-[1.5px] border-[#EAECF0] rounded-[4px] mt-[10px]">
      <div className="flex items-center flex-col md:flex-row justify-between flex-col md:flex-row p-[5px] bg-[#f9fafb] border-b-[1.5px] border-[#EAECF0]">
        <div className="w-full">
          <SearchBar
            placeholder="Search user"
            className="bg-white md:w-[320px] w-full h-[36px] rounded-[4px]"
          />
        </div>

        <div className="flex items-center justify-end gap-[10px] flex-col mt-4 md:mt-0 md:flex-row w-full">
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
      <div>
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
                  Initiator
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderRight: "1px solid #e0e0e0",
                    fontSize: "12px",
                  }}
                >
                  Menu
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderRight: "1px solid #e0e0e0",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  Access
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderRight: "1px solid #e0e0e0",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  Date Required
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
                  sx={{
                    borderRight: "1px solid #e0e0e0",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
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
                    {row.users}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #e0e0e0",
                      fontSize: "10px",
                    }}
                  >
                    {row.access}
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
                    <button className="border-[1px] bg-[#FFFAEB] border-[#FEDF89] h-[22px] w-[54px] rounded-[16px] text-[#B54708] satoshi-500 text-[10px] leading-[18px]">
                      Pending
                    </button>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #e0e0e0",
                      fontSize: "10px",
                    }}
                  >
                    <div className="flex items-center justify-center gap-[20px]">
                      <h2 className="text-[#00984C] satoshi-700 text-[10px] leading-[20px]">
                        Approve
                      </h2>
                      <h2 className="text-[#D92D20] satoshi-700 text-[10px] leading-[20px]">
                        Delete
                      </h2>
                    </div>
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
