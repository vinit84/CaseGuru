import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Login from "./Login";
import Register from "./Register";
import { useLocation } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outLine:"none",
    p:4,
    borderRadius:5,
  };

const AuthModal = ({ open, handleClose}) => {
  const location=useLocation();
    
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname==="/login"?<Login/>:<Register/>}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
