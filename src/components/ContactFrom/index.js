import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import ConfirmationModal from "./MyModalComponent";
// emailjs.init('VlZjxgIjPGrH-Vu1T');


const ContactForm = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [error, setError] = useState({});
  const [openModal, setOpenModal] = useState(false)

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: '' }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send('service_gnfwbrw', 'template_itvw6tl', formData, 'VlZjxgIjPGrH-Vu1T')
      .then((result) => {
        setOpenModal(true)
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };



  return (
    <>
      <ConfirmationModal open={openModal} setOpen={setOpenModal} />
      <form onSubmit={sendEmail} className='form'>
        {/* <div className='row'> */}
        <div className='col-lg-6 col-sm-6' style={{ width: "50%" }}>
          <div className='form-field'>
            <label>Name</label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={changeHandler}
            />
            {error.user_name && <p>{error.user_name}</p>}
          </div>
        </div>
        {/* </div> */}
        <div className='col-lg-6 col-sm-6' style={{ width: "50%" }}>
          <div className='form-field'>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={changeHandler}
            />
            {error.user_email && <p>{error.user_email}</p>}
          </div>
        </div>
        <div className='col-lg-12 col-sm-12'>
          <div className='form-field'>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={changeHandler}
            ></textarea>
            {error.message && <p>{error.message}</p>}
          </div>
        </div>
        <div className='col-lg-12'>
          <div className='contact-form-action'>
            <input type="submit" value="Send" className='form-button' />
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
