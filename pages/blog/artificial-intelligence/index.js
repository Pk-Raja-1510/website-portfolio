import React from "react";
import styles from "../blockchain/blockchain.module.css";
import { artificialIntelligenceData } from "src/constants/home";
import { BlogCard } from "src/components/BlogsCard";
import { Footer } from "src/components/footer";
const ArtificialIntelligence = () => {
  return (
    <>
      <div className={styles.blockchain_container}>
        <h1>Artificial Intelligence</h1>
        <div className={styles.blockchain_grid}>
          {artificialIntelligenceData?.map((item) => (
            <BlogCard img={item?.image} title={item?.title} path={item?.path} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArtificialIntelligence;
