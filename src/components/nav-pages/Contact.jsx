// src/components/Contact.jsx
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../nav-pages/firebase/firebase"; // Adjust the path as needed
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "user"), { // Updated collection name
        name,
        email,
        message,
      });
      console.log("Document written with ID: ", docRef.id);
      setName("");
      setEmail("");
      setMessage("");
      alert("Message submitted successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error submitting message. Please try again.");
    }
  };

  return (
    <>
      <h1>Contact</h1>
      <p className="changetext">
        we are always open for new projects <br />
        opportunities and <br />
        learning experience. <br />
        <br />
        your feedback would be <br /> highly appreciated 👍🏿❤
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
              Message:{" "}
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;
