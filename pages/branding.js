import Image from "next/image";
import React from "react";
import styles from "../styles/Branding.module.css";

const branding = () => {
    return (
        <main className={styles.main}>
          <section className={styles.section1}>
            <h4 className={styles.heading}>BRANDING</h4>
            <p className={styles.paragraph}>A Simple and clean style guide describes the basics of the rule for using individual elements</p>
          </section>
          <section className={styles.section2}>
            <div className={styles.work1}>
                <div className={styles.div1}>
                    <p className={styles.workprocess}>Work Process</p>
                    <h4>Inner Pages</h4>
                    <p>In total there were create more than 10 inner pages : Services,Portfolio,Case,Team,
                       contact,Blog,Article,etc. All pages have a common style based on a main concept.
                    </p>
                </div>
                <div>                   
                   <img
                    className={styles.vector}
                    src="/static/images/Vector.png"
                    alt="work image"
                   />
                </div>
            </div>
            <div className={styles.work2}>
                <div>
                <img
                    className={styles.vector}
                    src="/static/images/Vector1.png"
                    alt="work image"
                   />
                </div>
                <div className={styles.div1}>
                    <p className={styles.workprocess}>Grid System</p>
                    <h4>Responsive Layout</h4>
                    <p>Responsive layout across device sizes and resolution (desktop,tablet,
                       mobile) were developed during on the project.
                    </p>
                </div>
            </div>
          </section> 
        </main>
    )
}

export default branding;