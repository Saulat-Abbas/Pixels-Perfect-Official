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
  const [openModal, setOpenModal]= useState(false)

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

    const newError = {};
    // if (name.trim() === "") {
    //   newError.name = "Please enter your name";
    // }
    // if (email.trim() === "") {
    //   newError.email = "Please enter your email";
    // }
    // if (subject.trim() === "") {
    //   newError.subject = "Please enter your subject";
    // }
    // if (lastname.trim() === "") {
    //   newError.lastname = "Please enter your Lastname";
    // }
    // if (events.trim() === "") {
    //   newError.events = "Select your event list";
    // }
    // if (notes.trim() === "") {
    //   newError.notes = "Please enter your note";
    // }

    if (Object.keys(newError).length === 0) {
      const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        lastname: lastname,
        // events: events,
        notes: notes,
      };

      console.log("templateParams", templateParams);
      emailjs
        .send(
          "service_0jgc3k8",
          "template_3wfq5va",
          templateParams,
          "VlZjxgIjPGrH-Vu1T"
        )
        .then((response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setName("");
          setEmail("");
          setSubject("");
          setLastname("");
          setEvents("");
          setNotes("");
          setError({});
        })
        .catch((error) => {
          console.error("Error sending email:", { error });
        });
    } else {
      setError(newError);
    }
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
  );
};

export default ContactForm;
