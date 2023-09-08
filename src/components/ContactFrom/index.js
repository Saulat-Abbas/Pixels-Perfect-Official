import React, { useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import ConfirmationModal from "./MyModalComponent";
import { CenterFocusStrong } from "@mui/icons-material";
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

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
  const [showLoader, setShowLoader] = useState(false)

  const errorStyle = { color: "red", fontSize: "12px", marginTop: "-25px" }
  const changeHandler = (e) => {
    const newError = { ...error };
    newError[e.target.name] = "";

    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        if (e.target.value.length > 10) {
          newError.name = 'First Name cannot exceed 10 characters';
        }
        break;
      case "email":
        setEmail(e.target.value);
        if (e.target.value.length) {
          newError.email = '';
        }
        break;
      case "subject":
        setSubject(e.target.value);
        if (e.target.value.length > 100) {
          newError.subject = 'Subject cannot exceed 100 characters';
        }
        break;
      case "lastname":
        setLastname(e.target.value);
        if (e.target.value.length > 10) {
          newError.lastname = 'Last name cannot exceed 10 characters';
        }
        break;
      case "events":
        setEvents(e.target.value);
        break;
      case "notes":
        setNotes(e.target.value);
        if (e.target.value.length > 500) {
          newError.notes = 'Message cannot exceed 500 characters';
        }
        break;
      default:
        break;
    }

    setError(newError);
  };

  const submitHandler = (e) => {
    setShowLoader(true)
    e.preventDefault();

    const newError = {};
    if (Object.keys(newError).length === 0) {
      const templateParams = {
        from_name: `${name} ${lastname}`,
        from_email: email,
        subject: subject,
        notes: notes,
      };

      emailjs
        .send(
          "service_gnfwbrw",
          "template_itvw6tl",
          templateParams,
          "VlZjxgIjPGrH-Vu1T"
        )
        .then((response) => {
          setShowLoader(false)
          setName("");
          setEmail("");
          setSubject("");
          setLastname("");
          setEvents("");
          setNotes("");
          setError({});
          setOpenModal(true)
        })
        .catch((error) => {
          setShowLoader(false)
          console.error("Error sending email:", { error });
        });
    } else {
      setError(newError);
    }
  };

  return (
    <>
      <ConfirmationModal open={openModal} setOpen={setOpenModal} />
      <div>
        <form onSubmit={submitHandler} className="form">
          <div className="row" >
            <div className="col-lg-6 col-sm-6">
              <div className="form-field">
                <b>First Name:</b><input style={{ width: '100%' }}
                  required
                  disabled={showLoader}
                  value={name}
                  onChange={changeHandler}
                  type="text"
                  name="name"
                />
                {error.name && <p style={errorStyle}>{error.name}</p>}
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="form-field">
                <b>Last Name:</b><input style={{ width: '100%' }}
                  required
                  disabled={showLoader}

                  value={lastname}
                  onChange={changeHandler}
                  type="text"
                  name="lastname"
                />
                {error.lastname && <p style={errorStyle}>{error.lastname}</p>}
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="form-field">
                <b>Email:</b><input style={{ width: '100%' }}
                  onChange={changeHandler}
                  required
                  disabled={showLoader}

                  value={email}
                  type="email"
                  name="email"
                />
                {error.email && <p style={errorStyle}>{error.email}</p>}
              </div>
            </div>
            <div className="col-lg-6 col-sm-6">
              <div className="form-field">
                <b>Subject:</b> <input style={{ width: '100%' }}
                  onChange={changeHandler}
                  required
                  disabled={showLoader}

                  value={subject}
                  type="text"
                  name="subject"
                />
                {error.subject && <p style={errorStyle}>{error.subject}</p>}
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <div className="form-field">
                <b> Message:</b><textarea
                  style={{ width: '100%' }}
                  required
                  disabled={showLoader}

                  name="notes"
                  onChange={changeHandler}
                  value={notes}
                ></textarea>
                {error.notes && <p style={{ ...errorStyle, marginTop: "-4px" }}>{error.notes}</p>}
              </div>
            </div>
            <div className="col-lg-12" >
              <div className="contact-form-action" style={{textAlign:"center", display:"flex", justifyContent:"center"}}>
                <Button style={{ width: 200, display: "flex", }} variant="contained" className="form-button" type="submit"
                  endIcon={showLoader ? <CircularProgress /> : <SendIcon />}
                  disabled={showLoader}
                >
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
