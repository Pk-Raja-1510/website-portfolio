import Head from "next/head";
import Image from "next/image";
import React from "react";
import { BlogSocialIcons } from "src/components/BlogSocialicons";
import Contacts from "src/components/contacts";
import { Footer } from "src/components/footer";
import styles from "styles/Home.module.css";

const KamranQamar = () => {
  return (
    <>
      <Head>
        <title>Blog | Redblox</title>
        <meta
          property="og:title"
          content="Mr.Kamran Qamar - An Inspiring Business Strategist and Advisor"
        />
        <meta
          property="og:description"
          content="We are happy & excited to announce that Mr. Kamran Qamar has joined Redblox Team as the Advisor and mentor, guiding our Tech Ninjas & elevating our Initiatives"
        />
        <meta
          property="og:image"
          content="https://redblox.netlify.app/static/images/Advisor.jpg"
        />
      </Head>
      <main className={styles.main}>
        <section className={styles.sectionBlog} id="WhatWeDo">
          <div>
            <h1 className={styles.head}>
              Mr.Kamran Qamar - An Inspiring Business Strategist And Advisor
            </h1>
            <div>
              <div className={styles.img}>
                <Image
                  className={styles.imgs}
                  src="/static/images/Advisor.jpg"
                  height="320"
                  width="250"
                  layout="fixed"
                />
              </div>
              <div className={styles.nameViews}>
                <div className={styles.nameInnerrow}>
                  <h4 className={styles.marg}>Mr. Kamran Qamar</h4>
                </div>
              </div>
            </div>
            <div className={styles.data}>
              <p>
                We are happy and excited to announce that Mr. Kamran Qamar has
                joined Redblox Team as the Advisor and mentor, guiding our Tech
                Ninjas and elevating our overall Technology Initiatives.
              </p>
              <p>
                Kamran Qamar is Technology \ Product executive with over 15+
                experience in bringing ideas to life by mapping business
                architectures to technology architectures.
              </p>
              <p>
                Over his career, he has strategically worked with stakeholders
                across various verticals to deliver solutions while deciding
                around “Build, Buy, or Rent”.
              </p>
              <p>
                He has built global teams to deliver global products and
                services which range across Consumer Package Goods, Retail
                Energy & FinTech.
              </p>
              <p>
                Kamran’s technology experience spans the five pillars of
                technology, software development, cyber & risk management, data
                analytics & warehousing, cloud \ local enabled infrastructures,
                and technology operations. Recently as CTO of Gilded, a fintech
                startup, he led the delivery of several technology-enabled
                products across 12 different countries while utilizing emerging
                technologies such as blockchain \ web3.0 for immutability &
                universal auditing of transactions.
              </p>
              <p>
                Kamran studied Technology Management and received his Master at
                Columbia University.
              </p>
              <p>
                His appointment as an advisor makes RedBlox pleased, and his
                commitment will have a noteworthy positive effect on our brand.
                It will be the one that our staff and clients can look forward
                to. Once again we thank Mr.Kamran Qamar to join our community
                for a successive journey.
              </p>
              <h3>Skilled Expertise:</h3>
              <p>
                At RedBlox, we believe we are on a mission to make Blockchain
                and Web3 more accessible and adaptable to our customers. Come
                join us in this new journey towards the virtual universe with
                RedBlox.
              </p>
              <p>
                For the last few years, we have consulted, designed, and
                developed 100+ digital products for startups, small-medium
                companies, and enterprises. The efforts of our team are
                reflected in the products that are now used by millions of users
                globally.
              </p>
            </div>
          </div>
        </section>
        <BlogSocialIcons/>
        <Contacts/>
        <Footer />
      </main>
    </>
  );
};

export default KamranQamar;
