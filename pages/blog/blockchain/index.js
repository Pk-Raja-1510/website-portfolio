import React from "react";
import styles from "./blockchain.module.css";
import { blackChainData } from "src/constants/home";
import { BlogCard } from "src/components/BlogsCard";
import { Footer } from "src/components/footer";
const BlockChain = () => {
  return (
    <>
      <div className={styles.blockchain_container}>
        <h1>Blockchain</h1>
        <div className={styles.blockchain_grid}>
          {blackChainData?.map((item) => (
            <BlogCard img={item?.image} title={item?.title} path={item?.path}  key={item?.id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlockChain;
