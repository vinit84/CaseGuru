// Customers.jsx
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Pagination,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { deleteUser, fetchUsers } from "../../../State/Admin/Customer/Action";
import { useSelector } from "react-redux";
import { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BackdropComponent from "../../../customer/components/BackDrop/Backdrop";

const Customers = ({ fetchUsers }) => {
  const userData = useSelector((state) => state.adminsCustomer);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetchUsers();
  }, []);

  const handlePaginationChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleDeleteUser = (userId) => {
    // Dispatch the deleteUser action with the userId
    dispatch(deleteUser(userId));
  };

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;
  const usersPerPage = userData.users.slice(startIndex, endIndex);

  return (
    <Box>
      <Card>
        <CardHeader
          title="All Customers"
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
        />
        <TableContainer>
          <Table sx={{ minWidth: 390 }} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
                <TableCell>User Id</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userData.loading ? (
                <TableRow>
                  <TableCell>Loading...</TableCell>
                </TableRow>
              ) : userData.error ? (
                <TableRow>
                  <TableCell>{userData.error}</TableCell>
                </TableRow>
              ) : (
                usersPerPage.map((user, index) => (
                  <TableRow
                    hover
                    key={user.id}
                    sx={{
                      "&:last-of-type td, &:last-of-type th": { border: 0 },
                    }}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      {" "}
                      <Avatar  className="text-white bg-orange-600"
                        // onClick={handleUserClick}
                        // aria-controls={open ? "basic-menu" : undefined}
                        // aria-haspopup="true"
                        // aria-expanded={open ? "true" : undefined}
                        sx={{
                          bgcolor: "orange",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
{user.userName[0].toUpperCase()}</Avatar>{" "}
                    </TableCell>
                    <TableCell>{user.userName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDeleteUser(user._id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Card className="mt-2 felx justify-center items-center">
        <Pagination
          className="py-5 w-auto"
          size="large"
          count={Math.ceil(userData.users.length / 10)}
          color="primary"
          onChange={handlePaginationChange}
        />
      </Card>
      <BackdropComponent open={fetchUsers.loading}/>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(null, mapDispatchToProps)(Customers);
