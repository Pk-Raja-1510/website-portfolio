import Image from "next/image";
import React, {Component} from "react";
import styles from "../styles/Team.module.css";
const employee = [null, null, null, null];

class team extends Component{
  constructor (props) {
    super(props);
    this.state = {
      yourName: " ",
      companyName: " ",
      mobileNumber: " "
    };
    this.yourNameChange = this.yourNameChange.bind(this);
    this.companyNameChange = this.companyNameChange.bind(this);
    this.mobileNumberChange = this.mobileNumberChange.bind(this);
  }

  yourNameChange(e) {
    this.setState({
      yourName: e.target.value
    });
  }

  companyNameChange(e) {
    this.setState({
      companyName: e.target.value
    });
  }

  mobileNumberChange(e) {
    this.setState({
      mobileNumber: e.target.value
    });
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  render(){
    return (
        <main>
          <section className={styles.section}>
            <h1 className={styles.title}>Our Team</h1>
            <p className={styles.desc}>
              Our innovative ideas make our clients step to the feature.
            </p>
          </section>
          <section className={styles.wrapper}>
            <img
                className={styles.team}
                src="/static/images/team.webp"
                alt="team image"
            />
            <div className={styles.content}>
              <h3>Skilled & Supportive</h3>
              <h5>
                We work for our client’s dream come true with the futuristic
                technology and reliable service.
              </h5>
              <p>
                We have the massive goal to satisfy our clients with the innovative
                projects and that’s why Red Blox remains the reliable one for every
                business. Our team mates ready to support every project to get its
                unique identity. Technology is going to rule the world and we make
                it easily accessible to you.
              </p>
            </div>
            <div className={styles.details}>
              <h4>23</h4>
              <p>Engineers</p>
            </div>
          </section>
          <div>
            <section className={styles.profile}>
              <div className={styles.left}>
                <Image
                    src="/static/images/working.jpg"
                    width={100}
                    height={100}edxdrrrr
                    layout="responsive"
                    alt="icon"
                />
              </div>
              <div className={styles.right}>
                <h2>Vasilisa Shermov</h2>
                <h6>Marketing evangelist</h6>
                <p>Iam pretty sure cheese is the greatest invention in the history</p>
                <div>
                  <div className={styles.split}>
                    <h6>Skills</h6>
                    <p>Startegising</p>
                    <p>SEO</p>
                    <p>Looking good in black</p>
                  </div>
                  <div className={styles.split}>
                    <h6>Background</h6>
                    <p>NSU</p>
                    <p>B.A in Lingusitics</p>
                  </div>
                </div>
                <nav>
                  <Image
                      src="/static/icons/instagram_grey.svg"
                      width={25}
                      height={25}
                      layout="fixed"
                      alt="icon"
                  />
                  <Image
                      src="/static/icons/twitter_grey.svg"
                      width={25}
                      height={25}
                      layout="fixed"
                      alt="icon"
                  />
                </nav>
              </div>
            </section>
            <section className={styles.employes}>
              <figure>
                {employee.map((item,index) => (
                    <div className={styles.employee} key={index}>
                      <Image
                          src="/static/images/work.png"
                          height={100}
                          width={100}
                          alt="employes"
                      />
                    </div>
                ))}
              </figure>
            </section>
          </div>
          <section>
            <div className={styles.contact}>
              <h2>Contacts</h2>
              <p>
                Hello! I'm{" "}
                <input onChange={this.yourNameChange}
                       className={styles.contact_input}
                       type="text"
                       placeholder="your name"
                />{" "}
                , and I work with{" "}
                <input onChange={this.companyNameChange}
                       className={styles.company}
                       type="text"
                       placeholder="company name"
                />{" "}
                . We're looking to expand our app. You may reach out to us by{" "}
                <input onChange={this.mobileNumberChange}
                       className={styles.email}
                       type="text"
                       placeholder="your email or contact number"
                />{" "}
                to talk about it and set up a call.
              </p>
              <div className={styles.contactrow}>
                <input type="checkbox" />
                <label>I confirm Terms and Agreements</label>
              </div>
              <button onClick={() => setValue(" ")}>
                Submit
                <Image
                    src="/static/icons/next.svg"
                    height="25"
                    width="25"
                    layout="fixed"
                />
              </button>
            </div>
          </section>
          <section className={styles.footer}>
            <nav>
              <Image
                  src="/static/icons/email.svg"
                  height="25"
                  width="25"
                  layout="fixed"
              />
              redblox.io
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
            <nav>
              <Image
                  src="/static/icons/location.svg"
                  height="25"
                  width="25"
                  layout="fixed"
              />
              100 ft road , Pondy
            </nav>
          </section>
        </main>
    );
  }
}

export default team;
