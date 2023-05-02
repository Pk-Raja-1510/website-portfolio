import Image from 'next/image';
import React from 'react'
import styles from './socialicons.module.css'
export const SocialIcons = () => {
    const otherRoute = (url) => window?.open(url);
  return (
    <div className={styles.fixed_social_icons}>
      <h3>Share this Page on</h3>
      <div>
        <Image
          onClick={() => otherRoute("https://www.facebook.com/Redblox.io")}
          src="/static/icons/fb.png"
          height={25}
          width={25}
          layout="fixed"
        />
        <Image
          onClick={() =>
            otherRoute("https://https://twitter.com/RedBloxIO")
          }
          src="/static/icons/twitter.png"
          height={25}
          width={25}
          layout="fixed"
        />
        <Image
          onClick={() => otherRoute("")}
          src="/static/icons/medium.png"
          height={25}
          width={25}
          layout="fixed"
        />
        <Image
          onClick={() => otherRoute("")}
          src="/static/icons/reddit.png"
          height={25}
          width={25}
          layout="fixed"
        />
        </div>
    </div>
  )
}
