import React, { useState } from "react";
import styles from "../styles/contact-us.module.css";
import Image from "next/image";
import { Footer } from "src/components/footer";
import { useRouter } from "next/router";
const contactUs = () => {
  const navigate = useRouter();
  const router = useRouter();
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.{" "}
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
        <div className={styles.contact_us_social_icons}>
          <h3>FOLLOW US ON</h3>
          <div>
            <Image
              onClick={() =>
                otherRoute("https://www.instagram.com/redblox.io/")
              }
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
      </div>
      <div className={styles.right_contact_us}>
        <div>
          <h3>LEAVE A MESSAGE</h3>
          <form action="/" className={styles.contact_us_form}>
            <input type="text" placeholder="Name" name="name" />
            <input type="email" placeholder="Email" name="email" />
            <input type="number" placeholder="Mobile Number" name="number" />
            <textarea
              name="message"
              cols="30"
              rows="8"
              placeholder="Message"
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default contactUs;
