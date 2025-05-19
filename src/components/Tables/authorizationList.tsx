import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchBar from "../searchBar";
import ToggleSwitch from "../toggleSwitch";

// Function to create row data
function createData(name: string, access: string) {
  return { name, access };
}

// Table data
const rows = [
  createData("Users", "Create"),
  createData("Users", "Edit"),

  createData("Roles", "Full"),
  createData("Roles", "Create"),
];

export default function AuthorizationTable() {
  return (
    <div className="pt-[15px]">
      <div className="border-[1.5px] border-[#EAECF0] rounded-[4px] ">
        <div className="flex items-center justify-between flex-col md:flex-row p-[5px] bg-[#f9fafb] border-b-[1.5px] border-[#EAECF0]">
          <div className="w-full">
            <SearchBar
              placeholder="Search user"
              className="bg-white md:w-[320px] w-full h-[36px] rounded-[4px]"
            />
          </div>

          <div className="flex items-center justify-end gap-[10px] flex-col mt-4 md:mt-0 md:flex-row w-full ">
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
                  Enabled
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
                    {row.access}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #e0e0e0",
                      fontSize: "10px",
                    }}
                  >
                    <ToggleSwitch
                      checkedColor="#014daf"
                      uncheckedColor="#f2f4f7"
                    />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderRight: "1px solid #e0e0e0",
                      fontSize: "10px",
                    }}
                  >
                    <div className="flex items-center justify-center gap-[20px]">
                      <h2>Configure</h2>
                      <h2>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.75 8.35714L15.1786 8.35714M15.1786 8.35714C15.1786 9.9351 16.4578 11.2143 18.0357 11.2143C19.6137 11.2143 20.8929 9.9351 20.8929 8.35714C20.8929 6.77919 19.6137 5.5 18.0357 5.5C16.4578 5.5 15.1786 6.77919 15.1786 8.35714ZM9.46429 15.9762L20.8929 15.9762M9.46429 15.9762C9.46429 17.5541 8.1851 18.8333 6.60714 18.8333C5.02919 18.8333 3.75 17.5541 3.75 15.9762C3.75 14.3982 5.02919 13.119 6.60714 13.119C8.1851 13.119 9.46429 14.3982 9.46429 15.9762Z"
                            stroke="#475467"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
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
