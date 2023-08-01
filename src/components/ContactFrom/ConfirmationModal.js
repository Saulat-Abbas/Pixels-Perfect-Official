import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ConfirmationModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, maxWidth: '80vw' }}>
        <h2 id="modal-modal-title">Message Sent!</h2>
        <p id="modal-modal-description">Thank you for submitting the form.</p>
        <Button onClick={handleClose}>OK</Button>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
