import React from "react";
import styles from "../blockchain/blockchain.module.css";
import { teamsData } from "src/constants/home";
import { BlogCard } from "src/components/BlogsCard";
import { Footer } from "src/components/footer";
const Teams = () => {
  return (
    <>
      {/* <div className={styles.blockchain_container}>
        <h1>Teams & Advisors</h1>
        <div className={styles.blockchain_grid}>
          {teamsData?.map((item) => (
            <BlogCard img={item?.image} title={item?.title} path={item?.path}  key={item?.id} />
          ))}
        </div>
      </div>
      <Footer /> */}
    </>
  );
};

export default Teams;
