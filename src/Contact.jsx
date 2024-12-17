import React, { useState } from "react";
import emailjs from "emailjs-com";
import WhatsappIcon from "./whatsappicon";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const saveform = (e) => {
    e.preventDefault();

    const templatesinfo = {
      from_name: name,
      from_email: email,
      from_message: message,
      from_number: number,
    };

    emailjs
      .send(
        "service_p22sn5t",
        "template_tvpql4w",
        templatesinfo,
        "q-U6l4fxKyvJ4-yMc"
      )
      .then(() => {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setNumber("");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center mb-5 vh-80"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="col-md-6 text-center">
          <h2 className="fw-bold">Contact Us</h2>
          <p>Get in touch with us</p>
          {/* Added Border Class */}
          <form onSubmit={saveform} className="w-100 border p-4 rounded shadow">
            <div className="form-group text-start">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control my-2"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="number">Contact Number:</label>
              <input
                type="number"
                className="form-control my-2"
                id="number"
                placeholder="Enter your contact number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control my-2"
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-danger w-100 mt-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <WhatsappIcon />
    </>
  );
};

export default Contact;
