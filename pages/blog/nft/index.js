import React from "react";
import styles from "../blockchain/blockchain.module.css";
import { nftData } from "src/constants/home";
import { BlogCard } from "src/components/BlogsCard";
import { Footer } from "src/components/footer";
const NFT = () => {
  return (
    <>
      <div className={styles.blockchain_container}>
        <h1>NFT</h1>
        <div className={styles.blockchain_grid}>
          {nftData?.map((item) => (
            <BlogCard img={item?.image} title={item?.title} path={item?.path} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NFT;
