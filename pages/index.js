import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Contact from "src/components/form/contact";
import ImageSlider from "src/components/ImageSlider";
import { useRouter } from "next/router";
import {
  clientData,
  data1,
  data2,
  faqData,
  industryCoveredData,
  projects,
  recentBlogs,
  sliderData,
} from "src/constants/home";
import { homeHooks } from "src/Hooks/home";
import { handleContact, handleForm } from "src/services/contact";
import styles from "styles/Home.module.css";
import classNames from "classnames";

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
              <h1>
                Blockchain, Metaverse, NFT, AR, VR Development, IoT, Web &
                Mobile App Development Services and Solution Provider
              </h1>
              <p>
                Our experienced blockchain and web developer experts take Your
                Business to the Next Level with high security, scalable, and
                transparency.
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
                  To Breakthrough Future Tech Solutions{" "}
                </p>
              </marquee>
            </div>
            <div className={styles.slideNav}>
              <Image
                src="/static/icons/prev.svg"
                height="25"
                width="25"
                layout="fixed"
              />
              <hr></hr>
              <Image
                src="/static/icons/next.svg"
                height="25"
                width="25"
                layout="fixed"
              />
            </div>
          </div>
        </div>
        <section className={styles.section2} id="WhatWeDo">
          <div className={styles.portfolio_main_left}>
            <div className={styles.intro}>
              <p className={styles.sub_do_text}>What we do</p>
              <h2>
                We take Your Business to the Next Level with Our Blockchain
                Development Services
              </h2>
              <p>
                At RedBlox, Our customer experience is at the forefront of
                everything we do. We believe that we are transforming businesses
                with powerful scalable and adaptable blockchain services and
                solutions, and helping build functional systems that improve
                their overall performance, and enable them to unlock new
                opportunities. Move your business to the next level with our
                custom blockchain development services.
              </p>
              <a href="/#contact" className={styles.touch_button}>Get in Touch With Us</a>
            </div>
            <div className={styles.portfolio_main_right}>
              <div>
                <div>
                  <Image
                    src="/static/icons/developer.png"
                    height="100"
                    width="100"
                    layout="fixed"
                  />
                  <p>100+ Developers </p>
                </div>
                <div>
                  <Image
                    src="/static/icons/projects.png"
                    height="100"
                    width="100"
                    layout="fixed"
                  />
                  <p>250+ Projects </p>
                </div>
              </div>
              <div>
                <div>
                  <Image
                    src="/static/icons/experience.png"
                    height="100"
                    width="100"
                    layout="fixed"
                  />
                  <p> 5+ Year Experience</p>
                </div>
                <div>
                  <Image
                    src="/static/icons/clients.png"
                    height="100"
                    width="100"
                    layout="fixed"
                  />
                  <p>30+ Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.slider_new_container}>
          <h3>Services & Solutions We Offered</h3>
          <div className={styles.slider_main_content}>
            {sliderData?.map((item) => (
              <div key={item?.id}>
                <h4>{item?.header}</h4>
                <div>
                  <p>{item?.content}</p>
                  <button className={styles.See_more_button}>See More</button>
                </div>
                <div className={styles.slider_hresder_icons}>
                  <Image
                    src={item?.image}
                    height="50"
                    width="50"
                    layout="fixed"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.slider_new_imgs}>
          <h3>Technologies We work with</h3>
          <ImageSlider />
        </section>
        <section className={styles.industries_we_covered}>
          <h3>Industries We Covered</h3>
          <div className={styles.industries_we_covered_grid}>
            {industryCoveredData?.map((item) => (
              <div className={styles.industries_we_covered_card} key={item?.id}>
                <div>
                  <Image
                    src={item?.img}
                    height="40"
                    width="40"
                    layout="fixed"
                  />
                  <h4>{item?.title}</h4>
                </div>
                <p>{item?.content}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.help_banner}>
          <div className={styles.help_banner_content}>
            <h3>Need help with blockchain development?</h3>
            <p>
              You're just a step away from making the right choice. Let's get
              started,shall we?
            </p>
            <div className={styles.help_banner_button}>
              <button>CONTACT US</button>
              <button>PORTFOLIO</button>
            </div>
          </div>
        </section>
        <section className={styles.section5}>
          <h3>Snapshot of our Projects</h3>
          <div className={styles.clients}>
            <div>
              {client?.map((item, index) => (
                <img
                  onClick={() => otherRoute(item?.url)}
                  src={item?.image}
                  alt={`${item?.name}-redblox-metaverse`}
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
        <section className={styles.recent_blogs}>
          <h3>Our Recent Blogs</h3>
          <div className={styles.blogWrapper_new}>
            {recentBlogs?.map((item) => (
              <div
                className={styles.blogContainer}
                onClick={() => router.push(`/blog${item.path}`)}
              >
                <img className={styles.blogImage} src={item?.image} />
                <h5 className={styles.blogHead}>{item?.title}</h5>
                <div className={styles.blogButton}>
                  <button>View More</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.section3}>
          <h3> Why Choose Redblox for Blockchain Development Services?</h3>
          <p>
            We are very well equipped with teams carrying advanced engineering
            knowledge and skills to globalize your business. We bring Blockchain
            Technology to every business by providing secure firm solutions.
          </p>
        </section>
        <section className={styles.execution_process}>
          <h3>Our Project Execution Process</h3>
          <div>
            <div className={styles.steps_round}>
              <p className={styles.steps}>1</p>
              <Image
                src="/static/icons/execute.png"
                width="50"
                height="50"
                layout="fixed"
              />
              <p className={styles.steps_content}>Identifying the solutions</p>
            </div>
            <Image
              src="/static/icons/right-arrow.png"
              width="25"
              height="25"
              layout="fixed"
            />
            <div className={styles.steps_round}>
              <p className={styles.steps}>2</p>
              <Image
                src="/static/icons/web-design.png"
                width="50"
                height="50"
                layout="fixed"
              />
              <p className={styles.steps_content}>Designing & Development</p>
            </div>
            <Image
              src="/static/icons/right-arrow.png"
              width="25"
              height="25"
              layout="fixed"
            />
            <div className={styles.steps_round}>
              <p className={styles.steps}>3</p>
              <Image
                src="/static/icons/testing.png"
                width="50"
                height="50"
                layout="fixed"
              />
              <p className={styles.steps_content}>Testing & Deployment</p>
            </div>
            <Image
              src="/static/icons/right-arrow.png"
              width="25"
              height="25"
              layout="fixed"
            />
            <div className={styles.steps_round}>
              <p className={styles.steps}>4</p>
              <Image
                src="/static/icons/launch.png"
                width="50"
                height="50"
                layout="fixed"
              />
              <p className={styles.steps_content}>Launch & Maintenance</p>
            </div>
            <Image
              src="/static/icons/right-arrow.png"
              width="25"
              height="25"
              layout="fixed"
            />
            <div className={styles.steps_round}>
              <p className={styles.steps}>5</p>
              <Image
                src="/static/icons/24-7.png"
                width="50"
                height="50"
                layout="fixed"
              />
              <p className={styles.steps_content}>24x7 Help & Support</p>
            </div>
          </div>
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
        <section className={styles.contact} id="contact">
          <div className={styles.content}>
            <div className={styles.content_form_one}>
              <div
                disabled={form}
                onClick={() => setForm(!form)}
                className={!form ? styles.enable : styles.disabled}
              >
                <span className="material-icons">expand_less</span>
              </div>
              <div
                disabled={!form}
                onClick={() => setForm(!form)}
                className={form ? styles.enable : styles.disabled}
              >
                <span className="material-icons">expand_more</span>
              </div>
            </div>
            <div className={styles.content_form_two}>
              <h2>Contact</h2>
              {!form ? (
                <Contact hooks={hooks} />
              ) : (
                <p>
                  Hello! I'm{" "}
                  <input
                    ref={ref.nameRef}
                    className={styles.contact_input}
                    type="text"
                    placeholder="your name*"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />{" "}
                  , and I work with{" "}
                  <input
                    ref={ref.companyRef}
                    className={styles.company}
                    type="text"
                    placeholder="company name*"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />{" "}
                  . We're looking to expand our app. You may reach out to us by{" "}
                  <input
                    ref={ref.emailRef}
                    className={styles.email}
                    type="text"
                    placeholder="your email or contact number*"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />{" "}
                  to talk about it and set up a call.
                </p>
              )}
              <button
                disabled={loading || !name || !email}
                className={styles.arrow}
                onClick={handleSubmit}
              >
                {loading ? "Submitting..." : "Submit"}
                <img
                  src="/static/icons/next.svg"
                  height="25"
                  width="25"
                  layout="fixed"
                />
              </button>
            </div>
            <div className={styles.content_form_three}>
              <div className={styles.form_contact_details}>
                <Image
                  src="/static/icons/whatsapp.png"
                  height="50"
                  width="50"
                  layout="fixed"
                />
                <div>
                  <p>Whatsapp us</p>
                  <p>+91 7806974190</p>
                </div>
              </div>
              <div className={styles.form_contact_details}>
                <Image
                  src="/static/icons/gmail.png"
                  height="50"
                  width="50"
                  layout="fixed"
                />
                <div>
                  <p>Drop an Email</p>
                  <p>contact@redblox.io</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.footer}>
          <div className={styles.contact_us_footer}>
            <div>
              <Image
                src="/static/icons/redblox-metaverse-w.svg"
                height={100}
                width={200}
                layout="fixed"
                onClick={() => navigate?.push("/")}
                alt="redblox-metaverse"
              />
            </div>
            <div>
              <nav>
                <Image
                  src="/static/icons/email.svg"
                  height="25"
                  width="25"
                  layout="fixed"
                />
                contact@redblox.io
              </nav>
              <nav>
                <Image
                  src="/static/icons/phone.svg"
                  height="25"
                  width="25"
                  layout="fixed"
                />
                +91 7806974190
              </nav>
            </div>
            <div>
              <p>Follow Us on</p>
              <div className={styles.footer_contact_icon}>
                <Image
                  onClick={() =>
                    otherRoute("https://www.instagram.com/redblox.io/")
                  }
                  src="/static/icons/instagram.svg"
                  height='40'
                  width='40'
                  layout="fixed"
                />
                <Image
                  onClick={() =>
                    otherRoute("https://www.linkedin.com/company/redblox-io/")
                  }
                  src="/static/icons/linkedin-b.webp"
                  height='40'
                  width='40'
                  layout="fixed"
                />
                <Image
                  onClick={() => otherRoute("https://twitter.com/RedBloxIO")}
                  src="/static/icons/twitter.svg"
                  height='40'
                  width='40'
                  layout="fixed"
                />
                <Image
                  onClick={() => otherRoute("https://github.com/Redblox-io")}
                  src="/static/icons/github.svg"
                  height='40'
                  width='40'
                  layout="fixed"
                />
                <Image
                  onClick={() => otherRoute("https://www.facebook.com/Redblox.io")}
                  src="/static/icons/fb.png"
                  height='40'
                  width='40'
                  layout="fixed"
                />
              </div>
            </div>
          </div>
          <div className={styles.location}>
            <nav>
              <span>
                <h3>Pondicherry</h3>
                208, First Floor, 100 Feet Road, Mudaliarpet, Pondicherry -
                605004, India.
                <br />
                <br />
                98, Saint Theresa Street, Pondicherry - 605001, India.
              </span>
              <span>
                <h3>Bengaluru</h3>
                152/2, 1st Floor, Lake Point Tower Avenue, Road, AECS C Block,
                Begur, Bengaluru, Karnataka - 560068, India.
              </span>
              <span>
                <h3>Mumbai</h3>
                A/5, Mt.Mary Steps, Kadeshwari Mandir Marg, Bandra West Mumbai,
                Mumbai, Maharasta - 400050, India.
              </span>
            </nav>
          </div>
          <p>Copyright (c) 2022 - RedBlox Technologies Pvt. Ltd</p>
        </section>
      </main>
    </>
  );
};

export default Index;
