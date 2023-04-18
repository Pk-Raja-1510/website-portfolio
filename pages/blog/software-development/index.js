import React from "react";
import styles from "../blockchain/blockchain.module.css";
import { softwareDevelopmentData } from "src/constants/home";
import { BlogCard } from "src/components/BlogsCard";
import { Footer } from "src/components/footer";
const SoftwareDevelopment = () => {
  return (
    <>
      <div className={styles.blockchain_container}>
        <h1>Software Development</h1>
        <div className={styles.blockchain_grid}>
          {softwareDevelopmentData?.map((item) => (
            <BlogCard img={item?.image} title={item?.title} path={item?.path} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SoftwareDevelopment;
