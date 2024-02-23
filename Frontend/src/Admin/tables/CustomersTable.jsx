// CustomersTable.jsx
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Avatar, Box, Card, CardHeader, Table, TableRow, TableHead, TableBody, TableCell, TableContainer, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { fetchUsers } from '../../State/Admin/Customer/Action';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomersTable = ({ fetchUsers }) => {
  const userData = useSelector(state => state.adminsCustomer); 

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <Card>
      <CardHeader
        title='New Customers'
        sx={{ pt: 2, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
        action={<Typography onClick={()=>Navigate("/admin/customers")} variant='caption' sx={{color:"blue",cursor:"pointer",paddingRight:".8rem"}}>View All</Typography>}
        titleTypographyProps={{
          variant: 'h5',
          sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
        }}
      />
      <TableContainer>
        <Table sx={{ minWidth: 390 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.loading ? (
              <TableRow><TableCell>Loading...</TableCell></TableRow>
            ) : userData.error ? (
              <TableRow><TableCell>{userData.error}</TableCell></TableRow>
            ) : (
              userData.users.map(user => (
                <TableRow hover key={user.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                  <TableCell> <Avatar alt={user.name} src={user.image} /> </TableCell>
                  <TableCell>{user.userName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(null, mapDispatchToProps)(CustomersTable);