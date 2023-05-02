import React from "react";
import styles from "./recentblogstitle.module.css";
import { recentBlogs } from "src/constants/home";
import { useRouter } from "next/router";
export const RecentBlogsTitle = () => {
  const router=useRouter();
  return (
    <div className={styles.recentblogstitle_wrapper}>
      <h3>Trending Blogs:</h3>
      <div className={styles.recentblogstitle_collection}>
        {recentBlogs?.map((item) => (
          <div key={item.id} onClick={() => router.push(`/blog/${item?.path}`)}>
            <img src={item.img}  alt="Trending_blogs"/>
            <a>{item.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
};
