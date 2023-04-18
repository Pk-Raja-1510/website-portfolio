import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "styles/Home.module.css";

const FashionIndustryMetaverse = () => {
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
              Metaverse - It’s Time To Reshape The Fashion Industry In A Virtual
              Space
            </h1>
            <div>
              <div className={styles.img}>
                <img
                  className={styles.Gameimg}
                  src="/static/images/FashionMetaverse.jpg"
                />
              </div>
            </div>
            <div className={styles.data}>
              <p>
                Metaverse is an ideal space that keeps various things with it
                and can use for multiple purposes. Now the fashion and textile
                industries moved towards the Metaverse. Textile industries and
                fashion designers can get more on this platform. If you don't
                have any idea about the metaverse fashion industry, then go
                ahead with this content. In the end, you will get a better idea
                about why fashion industries wish to choose Metaverse.
              </p>
              <h3>Traditional VS Online Shopping</h3>
              <p>
                In the Previous days, you may have gone for textiles to own your
                desired outfits but now most people buy them online. Anyone can
                do online shopping from their smartphone and there only you will
                get multiple offers.{" "}
                <span className={styles.textBold}>Online Shopping</span>{" "}
                provides product return options and these are all the things
                that make online shopping a highly preferred one. In online
                shopping, you can see four or five pictures and one video for
                every outfit. But in the metaverse, you can virtually wear those
                outfits to your avatars and then you can order them. Now you
                will have a little confusion about the shopping concept for
                virtual wear and original outfits. Let's see details about these
                two shopping options.
              </p>
              <h3>Real Outfit Shopping in Metaverse</h3>
              <p>
                In a metaverse, you can set up a virtual textile, and there you
                can showcase the original outfits. Once buyers enter your{" "}
                <span className={styles.textBold}>Virtual Shopping</span> space,
                they can see the Hd Images and videos of their desired outfits.
                People can use a virtual headset to explore your virtual shop.
                Basically, there are two payment options available in online
                shopping, such as online payment and cash on delivery. In
                metaverse, you can add cryptocurrency payment options as well.
              </p>
              <h3>Virtual Outfit Shopping in Metaverse</h3>
              <p>
                Fashion designers made their designer outfits as virtual assets.
                You can use this{" "}
                <span className={styles.textBold}>Virtual Outfit</span> for your
                avatar. Now you will have the question why should I buy virtual
                outfits? Let us give a short clarification about it. We already
                discussed that the metaverse is a virtual world and there you
                will have your own avatar. You can keep your avatar dressed well
                like what you will do in real life to groom yourself. If you are
                buying virtual outfits, you can use them for Interviews,
                parties, conferences, dating, etc. these are all the main
                reasons people wish to buy virtual outfits.
              </p>
              <h3>Outfit NFTs Shopping in Metaverse</h3>
              <p>
                This is just the same as what we discussed in Virtual outfits
                but these outfits come under NFTs. Don’t get confused, let me
                explain. The real outfits will fade in 3 to 4 months and you can
                not sell them again. But you can buy and sell your{" "}
                <span className={styles.textBold}>Outfit NFTs‌</span> for a
                better price. If you have an excellent NFT design in 2D or 3D
                format, you can easily sell it in the NFT marketplace.
              </p>
              <h3>Conclusion </h3>
              <p>
                These are all the advantages you will get by starting your
                fashion industry in the metaverse and the cost of setting up a
                virtual textile is low when compared to the real one. If you
                want to build a virtual textile or NFT marketplace, then{" "}
                <span className={styles.textBold}>RedBlox</span> will give its
                best to you. Don't wait for anything, it's time to start your
                fashion dreams in the metaverse with the guidance of Redbox.
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

export default FashionIndustryMetaverse;
