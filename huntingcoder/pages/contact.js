import React, { useState } from "react";
import style from "../styles/contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { phone, name, email, desc };
    fetch("http://localhost:3000/api/postContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        alert("Thanks for contacting us");
        setDesc("");
        setEmail("");
        setName("");
        setPhone("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className={style.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.mb3}>
          <label htmlFor="name" className={style.formLabel}>
            Enter your name
          </label>
          <input
            type="text"
            value={name}
            className={`form-control ${style.input}`}
            id="name"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style.mb3}>
          <label htmlFor="email" className={style.formLabel}>
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${style.input}`}
            id="email"
            value={email}
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.s
          </small>
        </div>
        <div className={style.mb3}>
          <label className={style.formLabel} htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className={`form-control ${style.input}`}
            value={phone}
            id="phone"
            placeholder="Enter Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={style.mb3}>
          <label className={style.formLabel} htmlFor="desc">Elaborate your concern</label>
          <textarea
            value={desc}
            className={`form-control ${style.input}`}
            id="desc"
            placeholder="Enter your concern"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
