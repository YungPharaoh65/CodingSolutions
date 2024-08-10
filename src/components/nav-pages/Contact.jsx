// src/components/Contact.jsx
import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../nav-pages/firebase/contactpage"; // Update this path if necessary
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Check if all fields have values
    if (name && email && message) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [name, email, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Ensure you're adding to the correct collection name
      const docRef = await addDoc(collection(db, "ContactPage"), {
        name,
        email,
        message,
      });
      console.log("Document written with ID: ", docRef.id);
      setName("");
      setEmail("");
      setMessage("");
      setAlert({
        show: true,
        message: "Appreciate the message - Coding Solutions",
        type: "success",
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      setAlert({
        show: true,
        message: "Error submitting message. Please try again.",
        type: "error",
      });
    }
  };

  const closeAlert = () => {
    setAlert((prevAlert) => ({ ...prevAlert, show: false }));
  };

  useEffect(() => {
    if (alert.show) {
      const timer = setTimeout(() => {
        closeAlert();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [alert]);
  return (
    <>
      <h1>Contact</h1>
      <p className="changetext">
        We are always open for new projects, <br />
        opportunities, and <br />
        learning experiences. <br />
        <br />
        Your feedback would be <br /> highly appreciated 👍🏿❤
      </p>
      <div className="bigbox">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group0">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group1">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group2">
            <label htmlFor="message" className="messagetext">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="5"
              placeholder="'enter your whatsapp nunmber and reason for this chat here'"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn-primary" disabled={isButtonDisabled}>
            Submit
          </button>
        </form>
      </div>

      <div className={`custom-alert ${alert.type} ${alert.show ? 'show' : 'hide'}`}>
        <span>{alert.message}</span>
        <button onClick={closeAlert}>OK</button>
      </div>
    </>
  );
}

export default Contact;
