import React from "react";
import styles from "./Contact.module.css";

const Contact = ({ hooks }) => {
  const {
    ref,
    name,
    email,
    phone,
    subject,
    message,
    setName,
    setEmail,
    setPhone,
    setMessage,
    setSubject,
  } = hooks;

  return (
    <main>
      <div className={styles.input}>
        <input
          ref={ref.nameRef}
          type="text"
          placeholder="Name*"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          ref={ref.emailRef}
          type="text"
          placeholder="Email*"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          ref={ref.emailRef}
          type="number"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          ref={ref.subjectRef}
          type="text"
          placeholder="Subject*"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          ref={ref.messageRef}
          className={styles.message}
          type="text"
          placeholder="Message*"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </main>
  );
};

export default Contact;
