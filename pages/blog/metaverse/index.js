import React from "react";
import styles from "../blockchain/blockchain.module.css";
import { metaverseData } from "src/constants/home";
import { BlogCard } from "src/components/BlogsCard";
import { Footer } from "src/components/footer";
const Metaverse = () => {
  return (
    <>
      <div className={styles.blockchain_container}>
        <h1>Metaverse</h1>
        <div className={styles.blockchain_grid}>
          {metaverseData?.map((item) => (
            <BlogCard img={item?.image} title={item?.title} path={item?.path} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Metaverse;
