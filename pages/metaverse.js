import Head from "next/head";
import React from "react";
import styles from "styles/metaverse.module.css";

const Metaverse = () => {
  return (
    <>
      <Head>
        <title>Metaverse HQ | RedBlox</title>
      </Head>
      <div className={styles.wrapper}>
        <iframe src="https://spatial.io/s/RedBlox-HQ-62beea95f8419f0001a0034f?share=354943552968981263" />
      </div>
    </>
  );
};

export default Metaverse;
