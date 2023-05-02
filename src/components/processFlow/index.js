import Image from "next/image";
import React from "react";
import styles from "./processFlow.module.css";
export const ProcessFlow = () => {
  return (
    <div className={styles.flexbox}>
      <div className={styles.flexbottom}>
        <div className={styles.textbox}>
        <h4>1.Gathering Requirements</h4>
          <p>
          Our team engages with you to understand your requirements and gather exact information to create a project scope.
          </p>
        </div>
        <div className={styles.imgbox}>
          <div>
            <Image
              src="/static/icons/execute.png"
              width="50"
              height="50"
              layout="fixed"
            />
          </div>
        </div>
      </div>
      <div className={styles.flextop}>
      <div className={styles.imgbox}>
          <div>
            <Image
              src="/static/icons/execute.png"
              width="50"
              height="50"
              layout="fixed"
            />
          </div>
        </div>
        <div className={styles.textbox}>
        <h4>2.Analysis and Planning</h4>
          <p>
          Our team performs a comprehensive analysis of the project requirements, identifies challenges, and plans the project execution process accordingly.
          </p>
        </div>
      </div>
      <div className={styles.flexbottom}>
        <div className={styles.textbox}>
        <h4>3.Prototype Design</h4>
          <p>
          We create a prototype design that showcases the product's functionality and gather feedback from clients.
          </p>
        </div>
        <div className={styles.imgbox}>
          <div>
            <Image
              src="/static/icons/execute.png"
              width="50"
              height="50"
              layout="fixed"
            />
          </div>
        </div>
      </div>
      <div className={styles.flextop}>
      <div className={styles.imgbox}>
          <div>
            <Image
              src="/static/icons/execute.png"
              width="50"
              height="50"
              layout="fixed"
            />
          </div>
        </div>
        <div className={styles.textbox}>
            <h4>4.Development</h4>
          <p>
          Our Experienced developers leverage the latest technology and development methodologies to construct the product in a safe and secure manner.
          </p>
        </div>
      </div>
      <div className={styles.flexbottom}>
        <div className={styles.textbox}>
            <h4>5.Testing</h4>
          <p>
          We perform comprehensive testing to guarantee that the product adheres to quality standards and is free of bugs.
          </p>
        </div>
        <div className={styles.imgbox}>
          <div>
            <Image
              src="/static/icons/execute.png"
              width="50"
              height="50"
              layout="fixed"
            />
          </div>
        </div>
      </div>
      <div className={styles.flextop}>
      <div className={styles.imgbox}>
          <div>
            <Image
              src="/static/icons/execute.png"
              width="50"
              height="50"
              layout="fixed"
            />
          </div>
        </div>
        <div className={styles.textbox}>
            <h4>6.Deployment</h4>
          <p>
          Once the product passes the testing phase, we deploy it to a live environment and you can experience the real user experience.
          </p>
        </div>
      </div>
      <div className={styles.flexbottom}>
        <div className={styles.textbox}>
            <h4>7.Maintenance & Support</h4>
          <p>
          We provide ongoing maintenance and support to ensure the product's smooth functioning and resolve any issues that may arise.
          </p>
        </div>
        <div className={styles.imgbox}>
          <div>
            <Image
              src="/static/icons/execute.png"
              width="50"
              height="50"
              layout="fixed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
