import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "../checkbox";

function createData(name: string) {
  return { name };
}

const rows = [
  createData("Branch"),
  createData("User"),
  createData("Role"),
  createData("Cards"),
  createData("Card Request"),
  createData("Authorization List"),
  createData("Authorization Queue"),
  createData("Activity"),
];

export default function CreateTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, borderCollapse: "collapse" }} size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f9fafb" }}>
            <TableCell
              sx={{
                borderRight: "1px solid #e0e0e0",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              Menu Name
            </TableCell>
            {["Full", "Create", "Edit", "View", "Delete"].map(
              (header, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{
                    borderRight: "1px solid #e0e0e0",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  {header}
                </TableCell>
              )
            )}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ height: "45px" }}>
              <TableCell
                sx={{ borderRight: "1px solid #e0e0e0", fontSize: "12px" }}
              >
                {row.name}
              </TableCell>

              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <TableCell
                    key={i}
                    align="center"
                    sx={{ borderRight: "1px solid #e0e0e0" }}
                  >
                    <div className="flex justify-center items-center">
                      <Checkbox height="25px" width="25px" />
                    </div>
                  </TableCell>
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
