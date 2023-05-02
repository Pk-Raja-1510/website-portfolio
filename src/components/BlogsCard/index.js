import React from "react";
import styles from "./blogCard.module.css";
import { useRouter } from "next/router";
export const BlogCard = (props) => {
    const router = useRouter();
  return (
     <div
        className={styles.blogContainer}
        onClick={() => router.push(`/blog/${props?.path}`)}
      >
        <img className={styles.blogImage} src={props?.img} alt={props?.alt}/>
        <h5 className={styles.blogHead}>{props?.title}</h5>
        <div className={styles.blogButton}>
          <button>Show More</button>
        </div>
      </div> 
  );
};
