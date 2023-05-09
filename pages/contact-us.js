import React, { useState } from "react";
import styles from "../styles/contact-us.module.css";
import Image from "next/image";
import { Footer } from "src/components/footer";
import { useRouter } from "next/router";
import { homeHooks } from "src/Hooks/home";
import { handleContact, handleForm } from "src/services/contact";
const contactUs = () => {
  const {
    ref,
    name,
    email,
    phone,
    message,
    form,
    loading,
    setName,
    setCompany,
    setEmail,
    setPhone,
    setMessage,
    setLoading,
  } = homeHooks();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm(
      name,
      email,
      phone,
      message,
      setLoading,
      setName,
      setEmail,
      setPhone,
      setMessage
    );
  };

  const otherRoute = (url) => {
    if (!url) return;
    window?.open(url);
  };
  return (
    <>
      <div className={styles.main}>
        <div className={styles.left_contact_us}>
          <div className={styles.contact_us_content_head}>
            <h3>CONTACT US</h3>
            <p>
              We're excited to hear from you. Whether you have a question or are
              interested in our services, we're here to help. You can reach us
              through the contact form on this page or via the email address and
              phone number provided.
            </p>
            <div className={styles.contact_us_contact_details}>
              <div>
                <Image
                  src="/static/icons/location.png"
                  height="25"
                  width="25"
                  layout="fixed"
                />
                <p>
                  <span>Pondicherry </span>208, First Floor, 100 Feet Road,
                  Mudaliarpet, Pondicherry - 605004, India.
                </p>
              </div>
              <div>
                <Image
                  src="/static/icons/apple.png"
                  height="25"
                  width="25"
                  layout="fixed"
                />
                <p>+91 7806974190</p>
              </div>
              <div>
                <Image
                  src="/static/icons/gmail.png"
                  height="25"
                  width="25"
                  layout="fixed"
                />
                <p>contact@redblox.io</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_contact_us}>
          <div>
            <h3>LEAVE A MESSAGE</h3>
            <form className={styles.contact_us_form}>
              <input
                type="text"
                placeholder="Name*"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email*"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                type="text"
                placeholder="Message*"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                disabled={loading || !name || !email}
                className={styles.arrow}
                onClick={handleSubmit}
              >
                {loading ? "Submitting..." : "Submit"}
                <img
                  src="/static/icons/next.svg"
                  height="14"
                  width="14"
                  layout="fixed"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.contact_us_social_icons}>
        <h3>FOLLOW US ON</h3>
        <div>
          <Image
            onClick={() => otherRoute("https://www.instagram.com/redblox.io/")}
            src="/static/icons/instagram.svg"
            height={25}
            width={25}
            layout="fixed"
          />
          <Image
            onClick={() =>
              otherRoute("https://www.linkedin.com/company/redblox-io/")
            }
            src="/static/icons/linkedin-b.webp"
            height={25}
            width={25}
            layout="fixed"
          />
          <Image
            onClick={() => otherRoute("https://twitter.com/RedBloxIO")}
            src="/static/icons/twitter.svg"
            height={25}
            width={25}
            layout="fixed"
          />
          <Image
            onClick={() => otherRoute("https://github.com/Redblox-io")}
            src="/static/icons/github.svg"
            height={25}
            width={25}
            layout="fixed"
          />
          <Image
            onClick={() => otherRoute("https://www.facebook.com/Redblox.io")}
            src="/static/icons/fb.png"
            height={25}
            width={25}
            layout="fixed"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contactUs;
