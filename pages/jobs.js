import React, { useState } from "react";
import { jobData } from "src/constants/jobs";
import styles from "../styles/job.module.css";
import stylesFooter from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";

const Jobinffo = (props) => {
  return (
    <div className={styles.info} key={props.key}>
      <div>
        <div className={styles.innerinfo}>
          <h4 className={styles.title}>{props.position}</h4>
          <ul>
            {props.description.map((i, index) => (
              <li key={index} className={styles.jobcontent}>
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>{props.required} nos</h2>
        </div>
      </div>
      <h5 className={styles.apply}>
        Send you profile to<span>contact@redblox.io</span>
      </h5>
    </div>
  );
};

const Jobs = () => {
  return (
    <>
      <Head>
        <title>Software Developer Jobs In Pondicherry – RedBlox</title>
        <meta
          name="description"
          content="Software developer jobs for React, Angular, Vue, Django, ASP.NET, Express, Laravel, Ruby on Rails, and CodeIgniter."
        />
      </Head>
      <main>
        <h1 className={styles.first}>Join our team</h1>
        <div className={styles.container}>
          {jobData.map((i, index) => (
            <div className={styles.wrapper} key={index}>
              <h4>{i?.division}</h4>
              {i?.data?.length > 0 &&
                i.data.map((item, indexy) => (
                  <Jobinffo key={indexy} {...item} />
                ))}
            </div>
          ))}
        </div>
        <section className={stylesFooter.footer}>
          <div className={stylesFooter.row}>
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
              +91 9591117648 / +91 9994811269
            </nav>
          </div>
          <div className={stylesFooter.location}>
            <nav>
              <Image
                src="/static/icons/location.svg"
                height="25"
                width="25"
                layout="fixed"
              />
              <span>
                208, First Floor, 100 Feet Road, Mudaliarpet, Pondicherry -
                605004, India.
              </span>
              <span>
                152/2, 1st Floor, Lake Point Tower Avenue, Road, AECS C Block,
                Begur, Bengaluru, Karnataka - 560068, India.
              </span>
              <span>
                A/5, Mt.Mary Steps, Kadeshwari Mandir Marg, Bandra West Mumbai,
                Mumbai, Maharasta - 400050, India.
              </span>
            </nav>
          </div>
          <p>Copyright (c) 2022 - RedBlox Technologies Pvt. Ltd</p>
        </section>
      </main>
    </>
  );
};
export default Jobs;
