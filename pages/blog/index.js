import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BlogCard } from "src/components/BlogsCard";
import Categories from "src/components/Categories";
import { RecentBlogsTitle } from "src/components/RecentBlogsTitle";
import { Subscribe } from "src/components/Subscribe";
import Contacts from "src/components/contacts";
import { Footer } from "src/components/footer";
import { SocialIcons } from "src/components/socialIcons";
import {
  artificialIntelligenceData,
  blackChainData,
  metaverseData,
  nftData,
  projects1,
  softwareDevelopmentData,
  teamsData,
} from "src/constants/home";
import styles from "styles/Home.module.css";
const Blog = () => {
  const router = useRouter();
  // const firstFive = projects1.filter((month, idx) => idx < 20);

  return (
    <>
      <Head>
        <title>Blogs | Redblox</title>
      </Head>
      <main className={styles.main}>
        <section className={styles.blogHeader}>
          <h2>Blogs</h2>
        </section>
        <div className={styles.blog_flex_wrapper}>
          <div className={styles.main_blog_upadte_container}>
            <h3>Blockchain</h3>
            <section className={styles.new_blogWrapper}>
              {blackChainData?.map((item) => (
                <BlogCard
                  img={item?.image}
                  title={item?.title}
                  path={item?.path}
                  key={item?.id}
                />
              ))}
            </section>
            <button
              className={styles.blog_see_all_btns}
              onClick={() => router.push(`/blog/blockchain`)}
            >
              See All
            </button>
            <h3>Metaverse</h3>
            <section className={styles.new_blogWrapper}>
              {metaverseData?.map((item) => (
                <BlogCard
                  img={item?.image}
                  title={item?.title}
                  path={item?.path}
                  key={item?.id}
                />
              ))}
            </section>
            <button
              className={styles.blog_see_all_btns}
              onClick={() => router.push(`/blog/metaverse`)}
            >
              See All
            </button>
            <h3>NFT</h3>
            <section className={styles.new_blogWrapper}>
              {nftData?.map((item) => (
                <BlogCard
                  img={item?.image}
                  title={item?.title}
                  path={item?.path}
                  key={item?.id}
                />
              ))}
            </section>
            <button
              className={styles.blog_see_all_btns}
              onClick={() => router.push(`/blog/nft`)}
            >
              See All
            </button>
            <h3>Software Development</h3>
            <section className={styles.new_blogWrapper}>
              {softwareDevelopmentData?.map((item) => (
                <BlogCard
                  img={item?.image}
                  title={item?.title}
                  path={item?.path}
                  key={item?.id}
                />
              ))}
            </section>
            <button
              className={styles.blog_see_all_btns}
              onClick={() => router.push(`/blog/software-development`)}
            >
              See All
            </button>
            <h3>Artificial Intelligence</h3>
            <section className={styles.new_blogWrapper}>
              {artificialIntelligenceData?.map((item) => (
                <BlogCard
                  img={item?.image}
                  title={item?.title}
                  path={item?.path}
                  key={item?.id}
                />
              ))}
            </section>
            <button
              className={styles.blog_see_all_btns}
              onClick={() => router.push(`/blog/artificial-intelligence`)}
            >
              See All
            </button>
            <h3>Teams & Advisors</h3>
            <section className={styles.new_blogWrapper}>
              {teamsData?.map((item) => (
                <BlogCard
                  img={item?.image}
                  title={item?.title}
                  path={item?.path}
                  key={item?.id}
                />
              ))}
            </section>
            <button
              className={styles.blog_see_all_btns}
              onClick={() => router.push(`/blog/teams-and-advisors`)}
            >
              See All
            </button>
          </div>
          <div className={styles.blogs_recent_update}>
            <Categories />
            <RecentBlogsTitle />
            <Subscribe />
            <SocialIcons />
          </div>
        </div>
        <Contacts/>
        <Footer />
      </main>
    </>
  );
};

export default Blog;
