<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import ConfirmationModal from "./MyModalComponent";
// emailjs.init('VlZjxgIjPGrH-Vu1T');

=======
import React, { useState } from "react";
// import emailjs from "emailjs-com";
import emailjs from '@emailjs/browser';
emailjs.init('VlZjxgIjPGrH-Vu1T');
>>>>>>> parent of f151e03 (feat: intigration of email in contact page and resized the images)

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
<<<<<<< HEAD
    emailjs
      .send('service_gnfwbrw', 'template_itvw6tl', formData, 'VlZjxgIjPGrH-Vu1T')
      .then((result) => {
        setOpenModal(true)
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
=======

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
          console.error("Error sending email:", {error});
        });
    } else {
      setError(newError);
    }
>>>>>>> parent of f151e03 (feat: intigration of email in contact page and resized the images)
  };



  return (
<<<<<<< HEAD
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
=======
    <form onSubmit={submitHandler} className="form">
      <div className="row">
        <div className="col-lg-6 col-sm-6">
          <div className="form-field">
            <input
              value={name}
              onChange={changeHandler}
              type="text"
              name="name"
              placeholder="Name"
            />
            {error.name && <p>{error.name}</p>}
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="form-field">
            <input
              value={lastname}
              onChange={changeHandler}
              type="text"
              name="lastname"
              placeholder="Lastname"
            />
            {error.lastname && <p>{error.lastname}</p>}
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="form-field">
            <input
              onChange={changeHandler}
              value={email}
              type="email"
              name="email"
              placeholder="Email"
            />
            {error.email && <p>{error.email}</p>}
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="form-field">
            <input
              onChange={changeHandler}
              value={subject}
              type="text"
              name="subject"
              placeholder="Subject"
            />
            {error.subject && <p>{error.subject}</p>}
          </div>
        </div>
        <div className="col-lg-12 col-sm-12">
          <div className="form-field">
            <textarea
              name="notes"
              placeholder="Message"
              onChange={changeHandler}
              value={notes}
            ></textarea>
            {error.notes && <p>{error.notes}</p>}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="contact-form-action">
            <button className="form-button" type="submit">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </form>
>>>>>>> parent of f151e03 (feat: intigration of email in contact page and resized the images)
  );
};

export default ContactForm;
