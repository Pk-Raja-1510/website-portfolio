import React from "react";
import styles from "./recentblogstitle.module.css";
import { RecentBlogsTitleData } from "./mock";
export const RecentBlogsTitle = () => {
  return (
    <div className={styles.recentblogstitle_wrapper}>
      <h3>Trending Blogs:</h3>
      <div className={styles.recentblogstitle_collection}>
        {RecentBlogsTitleData?.map((item) => (
          <div key={item.id}>
            <img src={item.img}  alt="Trending_blogs"/>
            <a>{item.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};
