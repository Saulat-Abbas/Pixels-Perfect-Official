import React, { useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import ConfirmationModal from "./MyModalComponent";
emailjs.init('VlZjxgIjPGrH-Vu1T');

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [lastname, setLastname] = useState("");
  const [events, setEvents] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState({});
  const [openModal, setOpenModal] = useState(false)

  const changeHandler = (e) => {
    const newError = { ...error };
    newError[e.target.name] = "";

    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "subject":
        setSubject(e.target.value);
        break;
      case "lastname":
        setLastname(e.target.value);
        break;
      case "events":
        setEvents(e.target.value);
        break;
      case "notes":
        setNotes(e.target.value);
        break;
      default:
        break;
    }

    setError(newError);
  };

  const submitHandler = (e) => {
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
         <ConfirmationModal open={openModal} setOpen={setOpenModal}/>
      <div>
      <form onSubmit={submitHandler} className="form">
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <b>First Name:</b><input
                value={name}
                onChange={changeHandler}
                type="text"
                name="name"
                    />
              {error.name && <p>{error.name}</p>}
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <b>Last Name:</b><input
                value={lastname}
                onChange={changeHandler}
                type="text"
                name="lastname"
                             />
              {error.lastname && <p>{error.lastname}</p>}
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
              <b>Email:</b><input
                onChange={changeHandler}
                value={email}
                type="email"
                name="email"
                         />
              {error.email && <p>{error.email}</p>}
            </div>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div className="form-field">
             <b>Subject:</b> <input
                onChange={changeHandler}
                value={subject}
                type="text"
                name="subject"
                             />
              {error.subject && <p>{error.subject}</p>}
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="form-field">
             <b> Message:</b><textarea
                name="notes"
                onChange={changeHandler}
                value={notes}
              ></textarea>
              {error.notes && <p>{error.notes}</p>}
            </div>
          </div>
          <div className="col-lg-12">
            <div className="contact-form-action">
              <Button size="large" variant="contained" className="form-button" type="submit" onClick={()=>setOpenModal(true)} endIcon={<SendIcon />}>
  Send Message
</Button>
            </div>
          </div>
        </div>
      </form></div>
    </>
    // <form onSubmit={submitHandler} className="form">
    //   <div className="row">
    //     <div className="col-lg-6 col-sm-6">
    //       <div className="form-field">
    //         <input
    //           value={name}
    //           onChange={changeHandler}
    //           type="text"
    //           name="name"
    //           placeholder="Name"
    //         />
    //         {error.name && <p>{error.name}</p>}
    //       </div>
    //     </div>
    //     <div className="col-lg-6 col-sm-6">
    //       <div className="form-field">
    //         <input
    //           value={lastname}
    //           onChange={changeHandler}
    //           type="text"
    //           name="lastname"
    //           placeholder="Lastname"
    //         />
    //         {error.lastname && <p>{error.lastname}</p>}
    //       </div>
    //     </div>
    //     <div className="col-lg-6 col-sm-6">
    //       <div className="form-field">
    //         <input
    //           onChange={changeHandler}
    //           value={email}
    //           type="email"
    //           name="email"
    //           placeholder="Email"
    //         />
    //         {error.email && <p>{error.email}</p>}
    //       </div>
    //     </div>
    //     <div className="col-lg-6 col-sm-6">
    //       <div className="form-field">
    //         <input
    //           onChange={changeHandler}
    //           value={subject}
    //           type="text"
    //           name="subject"
    //           placeholder="Subject"
    //         />
    //         {error.subject && <p>{error.subject}</p>}
    //       </div>
    //     </div>
    //     <div className="col-lg-12 col-sm-12">
    //       <div className="form-field">
    //         <textarea
    //           name="notes"
    //           placeholder="Message"
    //           onChange={changeHandler}
    //           value={notes}
    //         ></textarea>
    //         {error.notes && <p>{error.notes}</p>}
    //       </div>
    //     </div>
    //     <div className="col-lg-12">
    //       <div className="contact-form-action">
    //         <button className="form-button" type="submit">
    //           Send Message
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </form>
  );
};

export default ContactForm;
