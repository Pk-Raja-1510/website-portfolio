import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "styles/Home.module.css";

const Gaming = () => {
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
              NFT Gaming -How Does NFT Gaming Get A Wide Reach Than The Other?
            </h1>
            <div>
              <div className={styles.img}>
                <img
                  className={styles.Gameimg}
                  src="/static/images/Gaming.jpeg"
                />
              </div>
              <div className={styles.nameViews}>
                <div className={styles.nameInnerrow}>
                  <h4 className={styles.marg}>NFT Gaming</h4>
                </div>
              </div>
            </div>
            <div className={styles.data}>
              <p>
                The evolution of video games reaches its extreme level with the
                help of blockchain technology. The concept of
                <span className={styles.textBold}> NFT Gaming</span> is unique
                when compared to other online games. Here you can earn
                cryptocurrencies and play your desired games with iconic NFT
                characters. This is a vast platform and you can play this game
                only when your device is connected to the internet. Let’s see
                how it completely varies from traditional gameplay.
              </p>
              <h3>NFT Gaming Platform</h3>
              <p>
                Once you enter this gaming platform, it will ask you to connect
                your crypto wallet or you can check the platform as a guest.
                After that, you will get multiple options like Gaming, Events,
                Marketplace, Blog, etc. You can choose your desired option to
                explore. In the event section, you can get the event date and
                reward details. Once you start to play your credits will be
                increased for each level. Those credits will be shared as a
                reward to your crypto wallets.
              </p>
              <h3>Crypto Currency Transaction </h3>
              <p>
                The main advantage of NFT gaming is you can make transactions
                with the players on the same gaming platform. Some NFT gaming
                platforms allow making transactions with players on another
                gaming platform. The players can talk and chat with others so it
                helps to keep in touch with your desired players. The winning
                rewards will be cryptocurrencies, NFT assets, etc.
              </p>
              <h3>Requirements of NFT Gaming Platform </h3>
              <ul>
                <li>
                  NFT games should have VR extensions, and they will attract
                  people to play regularly.
                </li>
                <li>
                  Surprise gamers with High-resolution sound and visual effects.
                </li>
                <li>Secure login and crypto wallet encryption is a must.</li>
                <li>
                  Conduct events regularly with attractive gifts and rewards.
                  Update the games with additional characters and levels.
                </li>
                <li>
                  Track the data of satisfied players from your platform and try
                  to improve it.
                </li>
              </ul>
              <h3>Conclusion</h3>
              <p>
                People can play games to earn, and the future generation will
                take it as their career. When compared to professional jobs
                people can earn more from NFT games. Surely this concept will
                inspire and engage everyone. If you think of creating your own
                NFT gaming platform, then
                <span className={styles.textBold}> RedBlox </span>will be
                supportive of you. Here you will get perfect guidance and
                support for launching the NFT gaming platform for your business,
                so don't be late to start your business with the IT expertise
                and experience of RedBlox.
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

export default Gaming;
