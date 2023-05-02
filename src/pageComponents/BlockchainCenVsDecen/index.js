import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Footer } from "src/components/footer";
import styles from "styles/Home.module.css";

const BlockchainCenVsDecen = () => {
  return (
    <>
      <Head>
        <title>Blog | Redblox</title>
        <meta
          property="og:title"
          content="Mr.Kamran Qamar - An Inspiring Business Strategist and Advisor"
        />
        <meta
          property="og:description"
          content="We are happy & excited to announce that Mr. Kamran Qamar has joined Redblox Team as the Advisor and mentor, guiding our Tech Ninjas & elevating our Initiatives"
        />
      </Head>
      <main className={styles.main}>
        <section className={styles.sectionBlog} id="WhatWeDo">
          <div>
            <h1 className={styles.head}>
              Blockchain - Centralized Vs Decentralized Digital Networks
            </h1>
            <div>
              <div className={styles.img}>
                <img
                  className={styles.Gameimg}
                  src="/static/images/purpleMordenCentralized.jpg"
                />
              </div>
            </div>
            <div className={styles.data}>
              <p>
                You may know multiple networks that come under different
                versions like 3G, 4G, and 5G. But it is a completely different
                concept in digital networks. Mainly there are two categories of
                digital networks which are{" "}
                <span className={styles.textBold}>Centralized</span> and{" "}
                <span className={styles.textBold}>Decentralized</span> Digital
                Networks. There are some pros and cons to both technologies and
                the user can choose the specific one depending on their needs.
                This blog will reveal the major difference, advantages, and
                disadvantages of Centralized and Decentralized Digital Networks.
              </p>
              <h3>What does Centralized Networks?</h3>
              <p>
                In a Centralized Network, a single point connects all the nodes
                This single point only can control the communication between
                every node. Because of the centralized control, every data can
                easily detect and track by the service providers. This is highly
                efficient and supportive for the business side to manage the
                user and customer data. There are some drawbacks present in a
                centralized network. If the central node fails, the entire
                network will crash. If the central node is weak, then the bad
                actor can easily enter the central networks and change
                transactions and data.
              </p>
              <h3>How does a Centralized network work?</h3>
              <p>
                Imagine that if you are trying to communicate with the customer
                care service, the call will connect to the central server, and
                then your call will redirect to the desired departments. The
                centralized system forwards every call to the system, and then
                the calls are forwarded to desired departments. The main thing
                is the central system can record and track every call, for
                Security and business development purposes. This type of network
                system will be suitable for the organization or government to
                monitor the data and communications safely.<br></br> <br></br>In
                a centralized system, there is a drawback. If the central system
                goes down all the connectivity of every user will be off. If the
                hacker breaks the security gateways of the central system, they
                can easily change and monitor everyone connected to the central
                node.
              </p>
              <h3>Decentralized Network</h3>
              <p>
                <span className={styles.textBold}>Decentralized Networks</span>{" "}
                are in complete contrast to centralized networks. In this
                network, there is no single-point control so there is no access
                control or restrictions for the users. It is a transparent
                network so the user will get ownership of their data. The user
                will never be afraid of their data security and this platform
                will never expose the individual identity. Because of the
                decentralized system, it is very hard to hack the network. If
                the bad actor tries to hack or change the data, then they have
                to change every user's account. It will take a long time to
                change or hack a single user account in a decentralized network,
                so it is highly impossible to hack every account in the
                decentralized network.
              </p>
              <h3>How does the Decentralized Network work?</h3>
              <p>
                In a decentralized network, the user will have ownership of
                their data, and there are no restrictions. All data transfers
                will copy to the ledger of all the users in the same network. So
                it is not possible to make any changes once it transferred the
                data through the blockchain. Because of this excellent feature,
                it was used to create a cryptocurrencies and copyrights process.
                Even though it is highly secure but a set of trusted techies
                should maintain it regularly. So they can regularly maintain the
                decentralized blockchain technology.
              </p>
              <h3>
                Differences between Centralized and Decentralized Technology
              </h3>
              <p>
                The differences between Centralized and Decentralized Technology
                is below, and this will give a better clarification about which
                one is suitable for you.
              </p>
              <ul>
                <h3>Third Parties Involvement </h3>
                <li>
                  <p>Centralized systems come under third-party involvement.</p>
                </li>
                <li>
                  <p>
                    Decentralized systems will never allow third-party
                    integration because every data transaction will come under
                    the P2P process.
                  </p>
                </li>
              </ul>
              <ul>
                <h3>Transparency </h3>
                <li>
                  <p>
                    The transparency of a centralized system is low and it will
                    never allow users to access every piece of information.
                  </p>
                </li>
                <li>
                  <p>
                    Decentralized systems are completely transparent and they
                    will follow no restrictions or terms and conditions.
                  </p>
                </li>
              </ul>
              <ul>
                <h3>Security </h3>
                <li>
                  <p>
                    The security of the centralized system is low when compared
                    to the decentralized system because if the hacker breaks the
                    security gateway of the centralized system, they can easily
                    access every user's account.
                  </p>
                </li>
                <li>
                  <p>
                    A decentralized system is highly secure when compared to a
                    centralized system because it is not possible to steal
                    someone's information because the encoded data will share
                    with everyone in the blockchain network.
                  </p>
                </li>
              </ul>
              <ul>
                <h3>Scalability</h3>
                <li>
                  <p>
                    The scalability of a centralized system is very low because
                    the organization can misuse the personal details of users.
                  </p>
                </li>
                <li>
                  <p>
                    The scalability of a decentralized system is high because it
                    will never come under any organization so it is not possible
                    to misuse your data.
                  </p>
                </li>
              </ul>

              <h3>Exchange Fees </h3>
              <p>
                Blockchain technology exchange fees are required to make
                transactions. This is common for both centralized and
                decentralized blockchain systems. But the exchange fees are high
                in a centralized system when compared to a decentralized system.
                So you can choose your desired exchange which is suitable for
                you.
              </p>
              <h3>End Words</h3>
              <p>
                Blockchain supports both users and service providers by
                providing two major options like{" "}
                <span className={styles.textBold}>
                  Centralized and Decentralized Digital Networks.
                </span>{" "}
                It is time to choose your desired blockchain technology and if
                you use or implement these technologies, then{" "}
                <span className={styles.textBold}>RedBlox</span> will be the
                perfect choice for you. It's time to move your business towards
                the updated technology with the guidance of RedBlox.
              </p>
            </div>
          </div>
        </section>

        <Footer/>
      </main>
    </>
  );
};

export default BlockchainCenVsDecen;
