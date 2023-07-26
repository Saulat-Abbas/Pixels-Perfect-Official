import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import tickImage from '../../img/404-tick.png'

const ConfirmationModal = (props) => {
    const { open, setOpen } = props;
    const handleClose = () => setOpen(false);

    return (
        <Modal show={open} onHide={handleClose} centered>
            <Modal.Body closeButton style={{ textAlign: 'center' }}>
                <Image src={tickImage} roundedCircle width={"100px"} style={{ justifyContent: 'center' }} />
                <p>Thanks for submitting the form</p>
                <Button variant="outline-success" onClick={handleClose}>OK</Button>
            </Modal.Body>
        </Modal>
    );
};

export default ConfirmationModal;
