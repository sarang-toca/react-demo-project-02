import React from "react";
import { TableCell, TableRow, Button, Stack } from "@mui/material";
import PropTypes from "prop-types";

const UserDetails = ({ srNo, id, userName, email, role }) => {
  const handleEdit = () => {
    console.log("edit :", id);
  };
  const handleDelete = () => {
    console.log("delete :", id);
  };
  return (
    <TableRow>
      <TableCell>{srNo}</TableCell>
      <TableCell>{userName}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{role}</TableCell>
      <TableCell align="left">
        <Stack direction="row" justifyContent="center" spacing={5}>
          <Button
            className="action_button"
            variant="outlined"
            sx={{ borderColor: "#813653", color: " #813653" }}
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            className="action_button"
            variant="contained"
            sx={{ background: "#813653" }}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
};

UserDetails.propTypes = {
  srNo: PropTypes.number,
  id: PropTypes.string,
  userName: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
};

export default UserDetails;
