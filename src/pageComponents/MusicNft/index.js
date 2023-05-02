import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Footer } from "src/components/footer";
import styles from "styles/Home.module.css";

const MusicNft = () => {
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
              Build Your Music NFT Marketplace With Unique Features
            </h1>
            <div>
              <div className={styles.img}>
                <img
                  className={styles.Gameimg}
                  src="/static/images/MusicNft.png"
                />
              </div>
              <div className={styles.nameViews}>
                <div className={styles.nameInnerrow}>
                  <h4 className={styles.marg}>
                    #musicnft #nft #nftmarketplace #futureofnft
                  </h4>
                </div>
              </div>
            </div>
            <div className={styles.data}>
              <p>
                Every year the growth of NFT trade increases and denotes that
                most people wish to keep digital assets. There are different
                categories of NFTs available but the
                <span className={styles.textBold}> Music NFT</span> keeps a set
                of buyers for it. Previously musicians shared their audio on
                other music platforms like Spotify but they didn't get high
                revenue from it. That's why they are all wishing to sell their
                audio and music in the NFT marketplace. After choosing the NFT
                market place the musicians earn more than they expect. Let's
                discuss how to build an NFT marketplace with unique features.
              </p>
              <h3>Highly preferred Features</h3>
              <ul>
                <li>
                  <h3>Musician Profile</h3>
                  <p>
                    The musician should create an account to sell their music in
                    the NFT marketplace. The admin which is almost like a KYC
                    must verify their profile. Once the musician account
                    activates in{" "}
                    <span className={styles.textBold}>
                      Music NFT Marketplace,
                    </span>{" "}
                    the user should allow the process like uploading recorded
                    tracks, Doing Live performances, and concerts. After
                    uploading the music file the musician should mint his NFT by
                    paying the gas fees.
                  </p>
                </li>
                <li>
                  <h3>Escrow Mechanism</h3>
                  <p>
                    This mechanism can protect both buyers and sellers from
                    fraud. This method requires a certain amount from both
                    sellers and buyers which has to be deposited in a
                    third-party trusted account. Once the NFT and fund
                    transaction are complete from both sides. It will release
                    the fund to the respected people.
                  </p>
                </li>
                <li>
                  <h3>Filter Option </h3>
                  <p>
                    When creating the music NFT market place you should add the
                    search options which keep various genres of music like EDM,
                    hip-hop, jazz, rock, metal rock, artist name, etc. this
                    filter option can help people to reach their desired NFTs
                    easily.{" "}
                    <span className={styles.textBold}>NFT Search Option</span>{" "}
                    can help to save time for the users
                  </p>
                </li>
                <li>
                  <h3>Listen and Bid Features</h3>
                  <p>
                    The musicians can upload their audio files and buyers can
                    listen to the music. After that, the buyers will bid in the
                    auction. They can use this for the fundraising process for
                    your album. In your NFT marketplace, it is better to enable
                    both the auction and fundraising processes. So it can
                    attract all kinds of musicians to your marketplace.
                  </p>
                </li>
                <li>
                  <h3>Subscription Plans</h3>
                  <p>
                    It is one of the major
                    <span className={styles.textBold}>
                      Features Of the NFT Marketplace
                    </span>{" "}
                    which helps musicians to sell the subscription plan to their
                    music followers. These subscription plans can be categorized
                    as silver, gold, and platinum. The cost of plans will vary
                    and the followers can choose their desired plans.
                  </p>
                </li>
                <li>
                  <h3>NFT Buyers Dashboard</h3>
                  <p>
                    Music NFT buyers should have their profile dashboard. From
                    the dashboard, they can view the token details, the standard
                    of music NFT, token ID, Name, artist details, etc. buyers'
                    dashboard can help to manage their Music NFTs, and anytime
                    the buyers can view the status of their NFTs.
                  </p>
                </li>
                <li>
                  <h3>Split Royalty</h3>
                  <p>
                    If more than one musician is working on the same{" "}
                    <span className={styles.textBold}>Music NFT Project</span>{" "}
                    like concerts, then the royalty will be shared with them.
                    The profit from the concerts will be shared with a
                    predefined percentage. This can combine people into your
                    community, and helps to achieve their goals from your
                    platform.
                  </p>
                </li>
                <li>
                  <h3>Event Handling</h3>
                  <p>
                    Make a regular event for{" "}
                    <span className={styles.textBold}>Music NFT Artists</span>{" "}
                    and reward them with the tokens NFT marketplace. This can
                    reach your marketplace at the same time you can easily sell
                    NFTs. surely it will reach every musician and there is a lot
                    of chance to get sponsors for the event.
                  </p>
                </li>
              </ul>
              <h3>Build an Ideal Place for Musicians</h3>
              <p>
                A traditional NFT marketplace will never surprise the collectors
                so try to use these features to get a massive reach. There is a
                huge fan base available for Music NFTs and if you enable your
                marketplace with these exciting options, then you can get a
                better result in a short time.{" "}
                <span className={styles.textBold}>RedBlox</span> tech ninjas
                will give their best in these projects and use this opportunity
                to set up your NFT marketplace.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default MusicNft;
