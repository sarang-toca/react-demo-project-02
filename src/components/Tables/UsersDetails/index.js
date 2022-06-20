import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import UserData from "./UserDetails";

const DUMMY_DATA = [
  {
    id: "1",
    userName: "Aqeeb",
    email: "aqeeb@test.com",
    role: "admin",
  },
  {
    id: "2",
    userName: "Bond",
    email: "bond@test.com",
    role: "user",
  },
  {
    id: "3",
    userName: "Tanya",
    email: "tanya@test.com",
    role: "user",
  },
  {
    id: "4",
    userName: "Kamlesh",
    email: "kamlesh@test.com",
    role: "admin",
  },
];

const index = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ padding: 0, background: "#f7ebeb" }}
    >
      <Table sx={{ background: "#f7ebeb", borderRadius: "4px" }}>
        <TableHead className="table-head">
          <TableRow>
            <TableCell>Sr. No</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Role</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ background: "white", borderRadius: "4px" }}>
          {DUMMY_DATA.map((user, index) => {
            return (
              <UserData
                key={user.id}
                srNo={index + 1}
                id={user.id}
                userName={user.userName}
                email={user.email}
                role={user.role}
              />
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default index;
