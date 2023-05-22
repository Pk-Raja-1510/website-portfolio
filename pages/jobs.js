import React, { useState } from "react";
import { jobData } from "src/constants/jobs";
import styles from "../styles/job.module.css";
import stylesFooter from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import { Footer } from "src/components/footer";

const Jobinffo = (props) => {
  return (
    <div className={styles.info}>
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
                i.data.map((item, index) => (
                  <Jobinffo key={index} {...item} />
                ))}
            </div>
          ))}
        </div>
       <Footer/>
      </main>
    </>
  );
};
export default Jobs;
