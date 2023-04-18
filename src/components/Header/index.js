import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import cx from "classnames";

const Header = () => {
  const navigate = useRouter();
  const [isMenu, setMenu] = useState(false);
  const otherRoute = (url) => window?.open(url);

  useEffect(() => {
    setMenu(false);
  }, [navigate?.pathname]);

  return (
    <main
      className={cx(styles.wrapper, {
        [styles.active]: isMenu,
      })}
    >
      <nav
        className={cx(styles.navLinks, {
          [styles.active_header]: isMenu,
        })}
      >
        <Image
          src="/static/icons/redblox-metaverse.svg"
          height={40}
          width={100}
          layout="fixed"
          onClick={() => navigate?.push("/")}
          alt="redblox-metaverse"
        />
        <Link href="/">Home</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/metaverse">Metaverse HQ </Link>
        <Link href="/blog">Blogs</Link>
        <Link href="/contact-us">Contact Us</Link>
      </nav>
      <div className={styles.menu}>
        {/* <Image
          onClick={() => otherRoute("https://www.instagram.com/redblox.io/")}
          src="/static/icons/instagram.svg"
          height={25}
          width={25}
          layout="fixed"
        />
        <Image
          onClick={() =>
            otherRoute("https://www.linkedin.com/company/redblox-io/")
          }
          src="/static/icons/linkedin-b.webp"
          height={25}
          width={25}
          layout="fixed"
        />
        <Image
          onClick={() => otherRoute("https://twitter.com/RedBloxIO")}
          src="/static/icons/twitter.svg"
          height={25}
          width={25}
          layout="fixed"
        />
        <Image
          onClick={() => otherRoute("https://github.com/Redblox-io")}
          src="/static/icons/github.svg"
          height={25}
          width={25}
          layout="fixed"
        />
        <Image
          onClick={() => setMenu(!isMenu)}
          src={isMenu ? "/static/icons/close.svg" : "/static/icons/menu.svg"}
          height={35}
          width={35}
          layout="fixed"
        /> */}
        <a href="/#contact" className={styles.header_button}>Connect with us</a>
      </div>
    </main>
  );
};

export default Header;
