import React from "react";
import styles from "styles/Home.module.css";
import Contact from "../form/contact";
import { homeHooks } from "src/Hooks/home";
import Image from "next/image";
import { handleContact, handleForm } from "src/services/contact";
const Contacts = () => {
  const {
    ref,
    name,
    email,
    phone,
    client,
    subject,
    message,
    company,
    form,
    loading,
    setName,
    setClient,
    setCompany,
    setEmail,
    setPhone,
    // setSubject,
    setMessage,
    setForm,
    setLoading,
  } = homeHooks();

  const hooks = {
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
    // setSubject,
  };
  const cb = () => {
    ref.nameRef.current.value = null;
    ref.emailRef.current.value = null;
    if (!form) {
      // ref.subjectRef.current.value = null;
      ref.messageRef.current.value = null;
      ref.phoneRef.current.value = null;
    } else ref.companyRef.current.value = null;
    setName(null);
    setCompany(null);
    setEmail(null);
    setPhone(null);
    setMessage(null);
    // setSubject(null);
  };

  const handleSubmit = (e) => {
    form &&
      handleContact(
        name,
        email,
        company,
        setLoading,
        cb,
        setName,
        setCompany,
        setEmail
      );
    !form &&
      handleForm(
        name,
        email,
        phone,
        message,
        setLoading,
        cb,
        setName,
        setEmail,
        setPhone,
        setMessage
      );
    e.preventDefault();
  };
  const otherRoute = (url) => {
    if (!url) return;
    window?.open(url);
  };
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.content}>
        <div className={styles.content_form_one}>
          <div
            disabled={form}
            onClick={() => setForm(!form)}
            className={!form ? styles.enable : styles.disabled}
          >
            <span className="material-icons">expand_less</span>
          </div>
          <div
            disabled={!form}
            onClick={() => setForm(!form)}
            className={form ? styles.enable : styles.disabled}
          >
            <span className="material-icons">expand_more</span>
          </div>
        </div>
        <div className={styles.content_form_two}>
          <h2>Contact</h2>
          <p>
            Fill your details below and get in touch with our domain experts
          </p>
          {!form ? (
            <Contact hooks={hooks} />
          ) : (
            <p>
              Hello! I'm
              <input
                ref={ref.nameRef}
                className={styles.contact_input}
                type="text"
                placeholder="your name*"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              , and I work with
              <input
                ref={ref.companyRef}
                className={styles.company}
                type="text"
                placeholder="company name*"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              . We're looking to expand our app. You may reach out to us by
              <input
                ref={ref.emailRef}
                className={styles.email}
                type="text"
                placeholder="your email or contact number*"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              to talk about it and set up a call.
            </p>
          )}
          <button
            disabled={loading || !name || !email}
            className={styles.arrow}
            onClick={handleSubmit}
          >
            {loading ? "Submitting..." : "Submit"}
            <img
              src="/static/icons/next.svg"
              height="25"
              width="25"
              layout="fixed"
            />
          </button>
        </div>
        <div className={styles.content_form_three}>
          <h2>Start a conversation</h2>
          <div
            className={styles.form_contact_details}
            onClick={() => otherRoute("https://wa.me/917806974190")}
          >
            <div>
              <Image
                src="/static/icons/whatsapp.png"
                height="25"
                width="25"
                layout="fixed"
                alt="Whatsapp"
              />
            </div>
            <p>Whatsapp us: +91 7806974190</p>
          </div>
          <div
            className={styles.form_contact_details}
            onClick={() => otherRoute("mailto:contact@redblox.io")}
          >
            <div>
              <Image
                src="/static/icons/gmail.png"
                height="25"
                width="25"
                layout="fixed"
                alt="Email"
              />
            </div>
            <p>Email: contact@redblox.io</p>
          </div>
          <div
            className={styles.form_contact_details}
            onClick={() =>otherRoute("https://join.skype.com/invite/uNDCdDWL2v0i")}
          >
            <div>
              <Image
                src="/static/icons/skype.png"
                height="25"
                width="25"
                layout="fixed"
                alt="Skype"
              />
            </div>
            <p>Skype: RedBlox Technologies</p>
          </div>
          <div className={styles.form_contact_details}>
            <div>
              <Image
                src="/static/icons/telegram.png"
                height="25"
                width="25"
                layout="fixed"
                alt="Telegram"
              />
            </div>
            <p>Telegram: +91 7806974190</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
