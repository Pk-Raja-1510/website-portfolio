import Header from "src/components/Header";
import "../styles/globals.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderHome from "src/components/HeaderHome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const history = useRouter();
  const { pathname } = history;
  const canonicalUrl = (
    `https://www.redblox.io` + (history.asPath === "/" ? "" : history.asPath)
  ).split("?")[0];
  const [change, setChange] = useState(false);

  useEffect(() => {
    const getScrolHeight = () => {
      if (window?.scrollY > 860) setChange(true);
      else setChange(false);
    };
    document.addEventListener("scroll", getScrolHeight);
  }, []);

  return (
    <>
      <Head>
        {/* <title>
          Blockchain, Web3, Metaverse, Fullstack & Mobile App Development -
          RedBlox
        </title>
        <meta property="og:site_name" content="RedBlox" />
        <meta property="og:url" content="http://redblox.io/" />
        <meta
          property="og:title"
          content="Blockchain, Web3, Metaverse, Fullstack & Mobile App Development - RedBlox"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/assets/AgileSoftLabs-Logo-87d982c2e2a043f2c499fda7038b4dd17671278595ece54196de9ec6c9d13794.png"
        />
        <meta
          property="og:description"
          content="Hire Web3 experts to enhance your Metaverse experience. Expedite your NFT Drops with RedBlox, Best blockchain developers in Pondicherry,India."
        /> */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/static/icons/red_new.svg" />

        {/* Global site tag (gtag.js) - Google Analytics  */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DEMLRKNMRD"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DEMLRKNMRD');
            `,
          }}
        />
      </Head>
      {pathname === "/" && !change ? <HeaderHome /> : <Header />}
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
