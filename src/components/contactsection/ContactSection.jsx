import React, { useState, useEffect } from "react";
import "./ContactSection.css";
import axios from "axios";

export const ContactSection = React.forwardRef((props, ref) => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const userEmail = (e) => {
    setEmail(e.target.value);
  };

  const userSubject = (e) => {
    setSubject(e.target.value);
  };

  const userEmailBody = (e) => {
    setEmailBody(e.target.value);
  };

  const show = () => {
    setShowForm(!showForm);
  };

  const sendEmail = () => {
    axios
      .post("https://goncalobm-portfolio-backend.herokuapp.com/email", {
        email: email,
        subject: subject,
        emailBody: emailBody,
      })
      .then((res) => {
        console.log(res);
        setShowForm(false);
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 10000);
      })
      .catch((error) => {
        alert(
          "Something happen on the Server :( Please email me directly for goncalobeiraodemira@gmail.com"
        );
      });
  };
  return (
    <div className="contact-section" ref={ref}>
      <div className="contact-box">
        <div className="contact-title" onClick={!emailSent && show}>
          {showForm ? "Exit" : emailSent ? "Email Sent " : "Contact me"}
        </div>
        {showForm && (
          <form>
            <input placeholder="email" onChange={userEmail}></input>
            <input placeholder="subject" onChange={userSubject}></input>
            <textarea
              name="text"
              id=""
              cols="30"
              rows="10"
              onChange={userEmailBody}
            ></textarea>
            <div className="send-button" onClick={sendEmail}>
              Send
            </div>
          </form>
        )}
      </div>
    </div>
  );
});
