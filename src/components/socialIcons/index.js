import Image from 'next/image';
import React from 'react'
import styles from './socialicons.module.css'
export const SocialIcons = () => {
    const otherRoute = (url) => window?.open(url);
  return (
    <div className={styles.fixed_social_icons}>
        <Image
          onClick={() => otherRoute("https://www.instagram.com/redblox.io/")}
          src="/static/icons/gmail_clr.png"
          height={25}
          width={25}
          layout="fixed"
        />
        <Image
          onClick={() =>
            otherRoute("https://www.linkedin.com/company/redblox-io/")
          }
          src="/static/icons/whatsapp_clr.png"
          height={25}
          width={25}
          layout="fixed"
        />
        <Image
          onClick={() => otherRoute("https://twitter.com/RedBloxIO")}
          src="/static/icons/linkedin.png"
          height={25}
          width={25}
          layout="fixed"
        />
        <Image
          onClick={() => otherRoute("https://github.com/Redblox-io")}
          src="/static/icons/skype.png"
          height={25}
          width={25}
          layout="fixed"
        />
    </div>
  )
}
