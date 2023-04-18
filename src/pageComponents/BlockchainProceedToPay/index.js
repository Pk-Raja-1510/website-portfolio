import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "styles/Home.module.css";

const BlockchainProceedToPay = () => {
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
              How Blockchain Can Boost Up The Procure-To-Pay Process?
            </h1>
            <div>
              <div className={styles.img}>
                <img
                  className={styles.Gameimg}
                  src="/static/images/ProceedToPay.png"
                />
              </div>
              <div className={styles.nameViews}>
                <div className={styles.nameInnerrow}>
                  <h4 className={styles.marg}>
                    #blockchain #procuretopay #smartcontract #trading
                  </h4>
                </div>
              </div>
            </div>
            <div className={styles.data}>
              <p>
                The ultimate transformation of trading makes everything simple
                and fast but the Procure-to-pay process was not convincing for
                every business people. The communication between both buyers and
                sellers should be simple and effective. There are no
                technologies available to make simple and fast transactions for
                trading except{" "}
                <span className={styles.textBold}>Blockchain.</span> This
                technology plays a major role in multiple trading processes and
                let's see how Blockchain helps to improve the{" "}
                <span className={styles.textBold}>Procure-to-Pay process.</span>
              </p>
              <h3>The inefficiency of the P2P process</h3>
              <p>
                Normally the p2p will take time and be troublesome for both
                sellers and buyers. Both of them appear in different ecosystems
                and they work on their own Enterprise
                <span className={styles.textBold}>
                  Resource Planning system.
                </span>
                This makes the P2P process unconvincing to the trading people.
                The transmission of data is not in real-time and they get
                inconsistent output from procuring. Every transaction happens
                through a centralized process so the buyers and sellers have to
                pay taxes as well.
              </p>
              <h3>How does the Business Blockchain Work?</h3>
              <p>
                Blockchain eliminates the intermediate person and the right
                platform to carry out your business procure process. To make
                transparent and trusted communication blockchain will be a
                perfect choice forever. Blockchain keeps and aligns every data
                in an ideal format so there is no confusion or misuse will
                happen.{" "}
                <span className={styles.textBold}>Blockchain Transaction</span>{" "}
                will keep your business away from additional taxes and you can
                make a common ecosystem.
              </p>
              <h3>Traditional VS Blockchain Solutions</h3>
              <p>
                The{" "}
                <span className={styles.textBold}>
                  Traditional Business Communication{" "}
                </span>
                Traditional Business Communication setup and data-handling
                process remain unaligned. Manual data handling and missing
                master updates lead to inconsistency between the two
                enterprises. Blockchain will act as the transparent ledger and
                common platform to store data. Once the data stored in a
                blockchain will never change ‌so the procurement will carry out
                in an aligned and trusted way. This technology keeps the
                verified transaction records in chronological order.
              </p>
              <h3>Smart Contract Integration</h3>
              <p>
                A <span className={styles.textBold}>Smart Contract</span> is an
                advanced business solution that can automatically execute a
                specific task when the pre-defined conditions matched. In a
                smart contract, you can eliminate the intermediate person for a
                business contract and it will keep you away from human errors.
                Even you can generate invoices that depend on the features you
                required. For example, if the agreement provides payment after
                30 days the authorized contract files will be released after 30
                days.
              </p>
              <h3>Detect Accuracy for every contract</h3>
              <p>
                Accuracy detection makes the smart contract a valuable one. In a
                contract, the buyers and seller should mention their contract
                goals clearly like quantity, place, payments, delivery time, and
                so forth. If any of the conditions mismatch, the contract will
                cancel. This shows the accuracy of smart contracts and keeps
                your business away from unwanted issues.
              </p>
              <h3>Summary</h3>
              <p>
                This advanced technology improves the security level of the{" "}
                <span className={styles.textBold}>Procure-to-Pay</span> process
                in trading. When compared to traditional contract dealing
                methods Blockchain provides a trusted and secure platform. If
                you don't know how to implement blockchain technology in your
                business, then you can easily get it from our reliable service.{" "}
                <span className={styles.textBold}>Blockchain Solutions</span>{" "}
                can implement for any business and start exploring with the
                guidance of RedBlox.
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

export default BlockchainProceedToPay;
