import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const modalStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px', // Adjust this width as needed
    height: '300px', // Adjust this height as needed
  };

export default function BasicModal(props) {
    const { open, setOpen, data } = props;
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
           <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
>
    <Box sx={modalStyle}>
        <img src={data} style={{ width: '300%', height: '200%', objectFit: 'cover' }}/>
    </Box>
</Modal>
        </div>
    );
}