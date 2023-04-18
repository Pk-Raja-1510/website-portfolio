import React from 'react'
import styles from "./footer.module.css";
import Image from 'next/image';
import { useRouter } from "next/router";
export const Footer = () => {
    const navigate = useRouter();
    const router = useRouter();
    const otherRoute = (url) => {
        if (!url) return;
        window?.open(url);
      };
  return (
    <section className={styles.footer}>
    <div className={styles.contact_us_footer}>
      <div>
        <Image
          src="/static/icons/redblox-metaverse-w.svg"
          height={100}
          width={200}
          layout="fixed"
          onClick={() => navigate?.push("/")}
          alt="redblox-metaverse"
        />
      </div>
      <div>
        <nav>
          <Image
            src="/static/icons/email.svg"
            height="25"
            width="25"
            layout="fixed"
          />
          contact@redblox.io
        </nav>
        <nav>
          <Image
            src="/static/icons/phone.svg"
            height="25"
            width="25"
            layout="fixed"
          />
          +91 7806974190
        </nav>
      </div>
      <div>
        <p>Follow Us on</p>
        <div className={styles.footer_contact_icon}>
          <Image
            onClick={() =>
              otherRoute("https://www.instagram.com/redblox.io/")
            }
            src="/static/icons/instagram.svg"
            height='40'
            width='40'
            layout="fixed"
          />
          <Image
            onClick={() =>
              otherRoute("https://www.linkedin.com/company/redblox-io/")
            }
            src="/static/icons/linkedin-b.webp"
            height='40'
            width='40'
            layout="fixed"
          />
          <Image
            onClick={() => otherRoute("https://twitter.com/RedBloxIO")}
            src="/static/icons/twitter.svg"
            height='40'
            width='40'
            layout="fixed"
          />
          <Image
            onClick={() => otherRoute("https://github.com/Redblox-io")}
            src="/static/icons/github.svg"
            height='40'
            width='40'
            layout="fixed"
          />
          <Image
            onClick={() => otherRoute("https://www.facebook.com/Redblox.io")}
            src="/static/icons/fb.png"
            height='40'
            width='40'
            layout="fixed"
          />
        </div>
      </div>
    </div>
    <div className={styles.location}>
      <nav>
        <span>
          <h3>Pondicherry</h3>
          208, First Floor, 100 Feet Road, Mudaliarpet, Pondicherry -
          605004, India.
          <br />
          <br />
          98, Saint Theresa Street, Pondicherry - 605001, India.
        </span>
        <span>
          <h3>Bengaluru</h3>
          152/2, 1st Floor, Lake Point Tower Avenue, Road, AECS C Block,
          Begur, Bengaluru, Karnataka - 560068, India.
        </span>
        <span>
          <h3>Mumbai</h3>
          A/5, Mt.Mary Steps, Kadeshwari Mandir Marg, Bandra West Mumbai,
          Mumbai, Maharasta - 400050, India.
        </span>
      </nav>
    </div>
    <p>Copyright (c) 2022 - RedBlox Technologies Pvt. Ltd</p>
  </section>
  )
};