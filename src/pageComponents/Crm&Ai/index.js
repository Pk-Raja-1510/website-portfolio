import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "styles/Home.module.css";

const CrmAi = () => {
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
      </Head>
      <main className={styles.main}>
        <section className={styles.sectionBlog} id="WhatWeDo">
          <div>
            <h1 className={styles.head}>
              AI - The Massive Growth Of CRM & AI From The Past To The Future.
            </h1>
            <div>
              <div className={styles.img}>
                <img className={styles.Gameimg} src="/static/images/Crm.png" />
              </div>
            </div>
            <div className={styles.data}>
              <p>
                The automotive system can reduce human power that’s why the need
                for AI is increasing. AI can use for multiple purposes but now
                it becomes essential for CRM. Customer Relationship Management
                should carry out in a flexible way then only the customers will
                never disappoint with your service. If you notice your customers
                are increasing, then it is not possible to place more employees
                to handle them. That's why AI provides the ultimate solution for
                CRM.
              </p>
              <h3>What is AI?</h3>
              <p>
                AI - Artificial intelligence is a system program that can react
                to the input at the right time with accuracy. A build with tons
                of information and it knows where and when to show the perfect
                output. Because of its automation process, it can manage
                multiple tasks at the same time. In the beginner stage, AI is
                used to performing simple tasks but now it can implement in any
                field to improve accuracy and automation.
              </p>
              <h3>What is CRM?</h3>
              <p>
                CRM - Customer Relationship Management. Every business should
                have a team to respond to customer needs and queries. It is not
                a simple thing to respond to every customer at the same time but
                business people have to do that to maintain their business
                growth. Business people are spending a large amount on the CRM
                process. It makes a great drawback to the business and they need
                a fine solution to fix this issue.
              </p>
              <h3>How does AI interact with CRM?</h3>
              <p>
                Now you will get a solid idea about the process of AI and CRM.
                The software developers fix the CRM problem with the help of
                Artificial Intelligence. When the user visits your site AI will
                make a conversation with them. For example, chatbots are the
                first automated system used for CRM. Firms are implementing
                these chatbots on their sites and it interacts with every user.
                This simple change helps the business to save more from the CRM
                process.
              </p>
              <h3>CRM - Past, Present, Future</h3>
              <ul>
                <li>
                  <h3>Past CRM </h3>
                  <p>
                    CRM can be done with the help of Tele-calling teams by
                    responding to business calls. If the service provider line
                    is busy, the customer has to hold in line to reach the
                    service provider. This traditional method gets negative
                    feedback from the customer. So business people are
                    increasing their Tele-calling team members. Which leads to
                    paying a certain percentage for the Tele-calling team.
                  </p>
                </li>
                <li>
                  <h3>Present CRM </h3>
                  <p>
                    Right now CRM implements multiple AI plugins like chatbots,
                    AI Voice calls and filtering customer details in multiple
                    categories. Show the customers at the right time. Likewise,
                    AI can do multiple things in CRM, and it keeps the business
                    away from spending huge amounts on CRM. Almost all AI fixes
                    the needs of the CRM processes for every business.
                  </p>
                </li>
                <li>
                  <h3>Future CRM </h3>
                  <p>
                    In the future, AI technology will carry the complete CRM
                    process out. By doing so, there is no need for employees for
                    the CRM process. In the beginner stage, the business should
                    allocate a certain percentage for the CRM but in the future,
                    they can pay only for the AI developer. This idea can help
                    the business save more time and money.
                  </p>
                </li>
              </ul>
              <h3>Conclusion </h3>
              <p>
                After reading this you may think that AI implementation in CRM
                will lead to unemployment in this specific department but it is
                not like that. We didn’t support unemployment but this will
                solve avoid spending more on the CRM process. If this AI CRM
                inspires you, then use it for your business with the guidance of{" "}
                <span className={styles.textBold}>RedBlox.</span> We have
                skilled expertise in AI and they will meet your CRM needs and
                more.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.footer}>
          <div className={styles.row}>
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
          <div className={styles.location}>
            <nav>
              <span>
                <h3>Pondicherry</h3>
                208, 100 Feet Road, Mudaliarpet, Pondicherry - 605004, India.
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
                A/5, Mt.Mary Steps, Kadeshwari Mandir Marg, Bandra West Mumbai
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

export default CrmAi;
