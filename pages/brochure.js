import styles from "../styles/brochure.module.css";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <iframe
            className={styles.iframe}
            loading="lazy"
            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFJjNhlSwQ&#x2F;view?embed"
            allow="fullscreen"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Index;
