import React, { useState } from "react";
import { jobData } from "src/constants/jobs";
import styles from "../styles/job.module.css";
import stylesFooter from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import { Footer } from "src/components/footer";
import { useRouter } from "next/router";

const Jobinffo = (props) => {
  const otherRoute = (url) => {
    if (!url) return;
    window?.open(url);
  };
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
        Send you profile to<span  onClick={() => otherRoute("mailto:contact@redblox.io")}>contact@redblox.io</span>
      </h5>
    </div>
  );
};

const Careers = () => {
  const[filter,setFilter]=useState("View all");
  const router = useRouter();
  const filterJob = [
    "View all",
    "Technical",
    "Development",
    "Design",
    "System Engineer",
  ];
  return (
    <>
      <Head>
        <title>Software Developer Jobs In Pondicherry – RedBlox</title>
        <meta
          name="description"
          content="Software developer jobs for React, Angular, Vue, Django, ASP.NET, Express, Laravel, Ruby on Rails, and CodeIgniter."
        />
      </Head>
      <main className={styles.careers_main}>
        <div className={styles.careers_banner}>
          <div className={styles.careers_banner_left}>
            <h4>CAREERS AT REDBLOX</h4>
            <h1>Work with us</h1>
            <p>
              We're always looking for talented individuals to join our team and
              contribute to our success. If you're passionate, driven, and ready
              to make an impact, we invite you to explore the exciting career
              opportunities!
            </p>
            <button  onClick={() => router.push(`/contact-us`)}>VIEW CAREERS</button>
            <a href="/#contact">Looking for internships?</a>
          </div>
          <div className={styles.careers_banner_right}>
            <img src={"./static/images/blog_banner_section.jpg"} />
          </div>
        </div>
        <h1 className={styles.first}>Join our team</h1>
        <div className={styles.filter_data}>
          {filterJob?.map((item,index)=>(
             <p className={filter === item ? styles.filter_data_title_active : styles.filter_data_title} key={index} onClick={() => setFilter(item)}>{item}</p>
          ))
          }
        </div>
        <div className={styles.container}>
          {jobData.map((i, index) => (
            <>
            {filter === 'View all' ?
            <div className={styles.wrapper} key={index}>
              <h4>{i?.division}</h4>
              {i?.data?.length > 0 &&
                i.data.map((item, index) => <Jobinffo key={index} {...item} />)}
            </div>
            :
           filter === i?.filter  &&
            <div className={styles.wrapper} key={index}>
              <h4>{i?.division}</h4>
              {i?.data?.length > 0 &&
                i.data.map((item, index) => <Jobinffo key={index} {...item} />)}
            </div>
            
              }
              </>
          ))}
        </div>
        <Footer />
      </main>
    </>
  );
};
export default Careers;
