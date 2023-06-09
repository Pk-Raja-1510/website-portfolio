import Image from "next/image";
import React, { useEffect, useState } from "react";
import Contact from "src/components/form/contact";
import ImageSliders from "src/components/ImageSliders";
import { useRouter } from "next/router";
import {
  batchData,
  clientData,
  faqData,
  recentBlogs,
} from "src/constants/home";
import { homeHooks } from "src/Hooks/home";
import { handleContact, handleForm } from "src/services/contact";
import styles from "styles/Home.module.css";
import { Footer } from "src/components/footer";
import { BlogCard } from "src/components/BlogsCard";
import { SlickSlider } from "src/components/slickSlider";
import { CarouselRotaing } from "src/components/carouselRotaing";
import { ProcessFlow } from "src/components/processFlow";
import Contacts from "src/components/contacts";
import Head from "next/head";
import Typewriter from "typewriter-effect";
const Index = () => {
  const navigate = useRouter();
  const router = useRouter();
  const [select, setSelect] = useState("");
  const [selected, setSelected] = useState(null);
  const {
    ref,
    name,
    email,
    phone,
    client,
    subject,
    message,
    company,
    form,
    loading,
    setName,
    setClient,
    setCompany,
    setEmail,
    setPhone,
    setSubject,
    setMessage,
    setForm,
    setLoading,
  } = homeHooks();

  const hooks = {
    ref,
    name,
    email,
    phone,
    subject,
    message,
    setName,
    setEmail,
    setPhone,
    setMessage,
    setSubject,
  };
  const slidercomingSoon = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const web3Options = ["SMEs", "Enterprise", "Start-Ups"];
  const cb = () => {
    ref.nameRef.current.value = null;
    ref.emailRef.current.value = null;
    if (!form) {
      ref.subjectRef.current.value = null;
      ref.messageRef.current.value = null;
      ref.phoneRef.current.value = null;
    } else ref.companyRef.current.value = null;
    setName(null);
    setCompany(null);
    setEmail(null);
    setPhone(null);
    setMessage(null);
    setSubject(null);
  };

  const handleSubmit = () => {
    form && handleContact(name, email, company, setLoading, cb);
    !form && handleForm(name, email, phone, subject, message, setLoading, cb);
  };

  const onNext = () => {
    let arr = [...client];
    arr.push(arr.shift());
    setClient([...arr]);
  };

  const onPrev = () => {
    let arr = [...client];
    arr.unshift(arr.splice(arr.length - 1, 1)[0]);
    setClient([...arr]);
  };

  const otherRoute = (url) => {
    if (!url) return;
    window?.open(url);
  };
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  useEffect(() => {
    setClient(clientData);
  }, [clientData]);
  return (
    <>
      <Head>
        <title>
          Blockchain, Web3, Metaverse, Fullstack & Mobile App Development -
          RedBlox
        </title>
        <meta property="og:site_name" content="RedBlox" />
        <meta property="og:url" content="http://redblox.io/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/assets/AgileSoftLabs-Logo-87d982c2e2a043f2c499fda7038b4dd17671278595ece54196de9ec6c9d13794.png"
        />
        <meta
          property="og:description"
          content="As a Leading Blockchain Development Company. we offer a wide range of Metaverse, NFT, VR, AR, Web & Mobile App Development Services. we have the best blockchain developers to work on your next-gen projects"
        />
        <meta
          property="og:keywords"
          content="Blockchain Development Company, Metaverse Services and solutions, Metaverse Development Company, Best Blockchain Developers, Leading Blockchain Development Services Company, Metaverse App Development Company, NFT Platform Development Company, NFT Platform Services, Leading Outsourcing Company, VR & AR Development Company, Website Development Company, Mobile App Development Company, Android & IOS App Development Company"
        />
      </Head>
      <main className={styles.main}>
        <section className={styles.video_container}>
          <video
            src="https://redblox-website.s3.ap-south-1.amazonaws.com/redblox.mp4"
            autoPlay
            muted
            playsInline
            loop
          />
          <section className={styles.section}>
            <div className={styles.left}>
              <h1>Blockchain, Metaverse, NFTs, AR/VR Development</h1>
              <p>
                Our team of Experienced developers specializing in Blockchain,
                Metaverse, Apps, and web technologies, We can elevate your
                business to new heights by providing secure, scalable, and
                transparent solutions.
              </p>
              <a className={styles.header_button} href="/#contact">
                Get Free Consultation
              </a>
            </div>
          </section>
        </section>
        <div className={styles.moreInfo}>
          <div className={styles.slideInfo}>
            <div className={styles.slideContent}>
              <marquee width="100%" loop>
                <p className={styles.slidepara}>
                  Your Guide To The Metaverse And Beyond.&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Build New DeFi Products And
                  Services Tailored To The Individual
                  Needs.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intelligence
                  That Bridges Web2 And
                  Web3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fueling Digital
                  Transformation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Driven
                  To Breakthrough Future Tech Solutions
                </p>
              </marquee>
            </div>
            <div className={styles.slideNav}>
              <Image
                src="/static/icons/prev.svg"
                height="25"
                width="25"
                layout="fixed"
                alt="previous"
              />
              <hr></hr>
              <Image
                src="/static/icons/next.svg"
                height="25"
                width="25"
                layout="fixed"
                alt="next"
              />
            </div>
          </div>
        </div>
        <div className={styles.batch_section}>
          <h3>Awards and Recognition</h3>
          <div>
            {batchData?.map((item, index) => (
              <Image
                onClick={() => otherRoute(item?.url)}
                src={item?.img}
                height={200}
                width={200}
                layout="fixed"
                alt={item?.alt}
                key={index}
              />
            ))}
          </div>
        </div>
        <section className={styles.section2} id="WhatWeDo">
          <div className={styles.portfolio_main_left}>
            <div className={styles.intro}>
              <p className={styles.sub_do_text}>What we do</p>
              <h2>
                Elevate your business to new heights with our expertise in
                blockchain solutions.
              </h2>
              <p>
                Redblox prioritizes customer experience across all our
                operations. Our goal is to revolutionize businesses by providing
                dynamic, scalable, and versatile blockchain solutions. We create
                operational systems that boost performance and unlock new
                opportunities. Elevate your business to the next level with our
                tailored blockchain development services.
              </p>
            </div>
            <div className={styles.portfolio_main_right}>
              <div>
                <div>
                  <Image
                    src="/static/gif/d.gif"
                    height="150"
                    width="150"
                    layout="fixed"
                    alt="Developers"
                  />
                  <p>100+ Developers </p>
                </div>
                <div>
                  <Image
                    src="/static/gif/p.gif"
                    height="150"
                    width="150"
                    layout="fixed"
                    alt="Projects"
                  />
                  <p>150+ Projects </p>
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src="/static/gif/e.gif"
                    height="150"
                    width="150"
                    layout="fixed"
                    alt="Years of Experience"
                  />
                  <p> 5+ Year Experience</p>
                </div>
                <div>
                  <Image
                    src="/static/gif/c.gif"
                    height="150"
                    width="150"
                    layout="fixed"
                    alt="Clients"
                  />
                  <p>75+ Clients</p>
                </div>
              </div>
            </div>
          </div>
          <a href="/#contact" className={styles.touch_button}>
            Connect With Us Today
          </a>
        </section>
        <section className={styles.slider_new_container}>
          <h3>Here are the Services and Solutions We Provide</h3>
          <SlickSlider />
        </section>
        <section className={styles.slider_new_imgs}>
          <h3>Technologies We work with</h3>
          <ImageSliders />
        </section>
        <section className={styles.industries_we_covered}>
          <h3>We serve to every industry with success</h3>
          <div>
            <div>
              <p>
                Following the trend and popularity of Blockchain technology, our
                experts have expanded our service offerings to include
                blockchain services such as testing, technology advisory,
                development services, and more. These services cater to various
                industries, including:
              </p>
            </div>
            <CarouselRotaing />
          </div>
          <a href="/#contact" className={styles.touch_button}>
            Talk to our experts
          </a>
        </section>
        <section className={styles.help_banner}>
          <div className={styles.help_banner_content}>
            <h3>Need Assistance with Blockchain Development?</h3>
            <p>
              You are one step closer to making the right decision. Let's
              Connect?
            </p>
            <div className={styles.help_banner_button}>
              <button>CONTACT US</button>
              <button>PORTFOLIO</button>
            </div>
          </div>
        </section>
        <section className={styles.section5}>
          <h3>Our Clientele</h3>
          <div className={styles.typewriter_text}>
            <h3>We serve</h3>
            <Typewriter
              options={{
                strings: [...web3Options],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className={styles.clients}>
            <div>
              {client?.map((item, index) => (
                <img
                  onClick={() => otherRoute(item?.url)}
                  src={item?.image}
                  alt={item?.alt}
                  key={index}
                />
              ))}
            </div>
            <div className={styles.arrows}>
              <span className="material-icons" id="arrows" onClick={onPrev}>
                arrow_back_ios
              </span>
              <span className="material-icons" id="arrowsR" onClick={onNext}>
                arrow_forward_ios
              </span>
            </div>
          </div>
        </section>
        <section className={styles.section3}>
          
          <h3>Why Redblox Technologies?</h3>
          <p>
            Over the past few years, we have consulted, designed, and developed
            over 250+ digital products for startups, medium scale companies, and
            Large enterprises. The dedication and hard work of our team are
            reflected in the quality of the products, which are now being
            utilised by millions of users worldwide.
          </p>
        </section>
        <section className={styles.execution_process}>
          <h3>Our Project Execution Process</h3>
          <ProcessFlow />
        </section>
        <section className={styles.faq_banner_home}>
          <h3>
            FAQs
            <span className={styles.faq_sapn_head}>
              ( Frequently Asked Questions )
            </span>
          </h3>
          {faqData?.map((item, i) => (
            <div className={styles.faq_ques_ans_new} key={item?.id}>
              <div className={styles.faq_ques_new} onClick={() => toggle(i)}>
                <h4 className={styles.faq_title}>{item?.title}</h4>
                <span className="material-icons">
                  {selected === i ? "arrow_drop_up" : "arrow_drop_down"}
                </span>
              </div>
              {
                <p
                  className={
                    selected === i
                      ? styles.faq_content_show
                      : styles.faq_content
                  }
                >
                  {item?.content}
                </p>
              }
            </div>
          ))}
        </section>
        <section className={styles.recent_blogs}>
          <h3>Our Recent Blogs</h3>
          <div className={styles.blogWrapper_new}>
            {recentBlogs?.map((item) => (
              <BlogCard
                img={item?.img}
                title={item?.name}
                path={item?.path}
                key={item?.id}
              />
            ))}
          </div>
        </section>
        <Contacts />
        <Footer />
      </main>
    </>
  );
};

export default Index;
