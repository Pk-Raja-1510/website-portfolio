import React from "react";
import styles from "./soon.module.css";

const Soon = () => {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.background}></div>
        <div className={styles.content}>
          <p>
            We at RedBlox are passionate about Blockchain development, new age
            product development, continuous delivery, Ethical use of AI/ML,
            software innovation and deliver early business value to our
            customers.
          </p>
          <br />
          <h1>
            COMING <span>SOON</span>
          </h1>
          <div className={styles.timer}></div>
          <nav></nav>
        </div>
      </section>
    </div>
  );
};

export default Soon;
