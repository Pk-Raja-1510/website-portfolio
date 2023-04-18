import Image from "next/image";
import React from "react";
import styles from "../styles/Contact.module.css";

const contact = () => {
    return (
        <main>
          <section className={styles.header}>           
            <p>Contact</p>            
          </section>
          <section className={styles.contact}>
            <h4>Contact</h4>
          </section>
          <section>
            <div className={styles.section}>
                <div className={styles.input}>
                    <input 
                     type="text"
                     placeholder="Name*"
                    />
                    <input 
                     type="text"
                     placeholder="Email*"
                    />
                    <input 
                     type="text"
                     placeholder="Subject*"
                    />
                    <input 
                    className={styles.message}
                     type="text"
                     placeholder="Message*"
                    />
                    <button>Send us a message</button>
                </div>
                <div className={styles.details}>
                  <h1>Get in touch with redblox crew</h1>
                  <p>Our working hours is 9.00 AM-7.00 PM</p>
                  <p>Call, Email or send us a message</p>
                  <div className={styles.address}>
                    <img
                     src="/static/icons/phone1.svg"
                     width={25}
                     height={25}
                     layout="fixed"
                     alt="icon"
                     /><p>+91 9994811269</p>
                  </div>
                  <div className={styles.address}>
                    <img
                     src="/static/icons/mail1.svg"
                     width={25}
                     height={25}
                     layout="fixed"
                     alt="icon"
                     /><p>redblox.io</p>
                  </div>
                  <div className={styles.address}>
                    <img
                     src="/static/icons/home.svg"
                     width={25}
                     height={25}
                     layout="fixed"
                     alt="icon"
                     /><p>208, First Floor, <br/>100 Feet Road,<br/>Mudaliarpet, Pondicherry-605004</p>
                  </div>                 
                </div>
            </div>
          </section>
          <section className={styles.about}>
            <div className={styles.div1}>
              <p>About Us</p>
              <p>Stay in Touch</p>
            </div>
            <div className={styles.div2}>
              <div className={styles.subdiv}>
                <p>Redblox is an established IT Service provider with young talent pool of <br/>engineers and 
                passionate individuals with office in Pondicherry, India.
                </p>
                <div className={styles.media}>
                  <Image
                  src="/static/icons/instawhite.svg"
                  width={25}
                  height={25}
                  layout="fixed"
                  alt="icon"
                  />
                  <Image
                  src="/static/icons/twitwhite.svg"
                  width={25}
                  height={25}
                  layout="fixed"
                  alt="icon"
                  />
                  <Image
                  src="/static/icons/fbwhite.svg"
                  width={25}
                  height={25}
                  layout="fixed"
                  alt="icon"
                  />
               </div>
              </div>
              <div className={styles.subdiv}>
              <p>Phone: + 91 9994811269</p>
              </div>
            </div>
          </section>
          <section className={styles.footer}>
            <div className={styles.footerdiv}>
              <p>Copyright © 2022 Redblox. All Rights Reserved.</p>
            </div>
          </section>
        </main>
    )
}

export default contact;