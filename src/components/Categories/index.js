import React from "react";
import styles from "./categories.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { CategoriesData } from "./mock";

const Categories = () => {
  return (
    <div className={styles.Categories_wrapper}>
      <h3>Categories:</h3>
      <div className={styles.Categories_collection}>
      {CategoriesData?.map((item) => (
        <div key={item.id}>
        <a >{item.name}</a>
        <p>{item.count}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Categories;
