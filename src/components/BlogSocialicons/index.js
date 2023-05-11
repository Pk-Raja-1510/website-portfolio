import Image from 'next/image';
import React, {useState} from 'react'
import styles from './blogSocialIcons.module.css'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share'

const ShareButtons = ({title, url, twitterHandle, tags}) => {

console.log(url);
  return(
      <div>
        <FacebookShareButton url={url} >
              <FacebookIcon  size={40} round={true}/>
       </FacebookShareButton>

        <TwitterShareButton url={url} >
              <TwitterIcon  size={40} round={true} />
        </TwitterShareButton>

        <LinkedinShareButton url={url} >
          <LinkedinIcon  size={40} round={true}/>
        </LinkedinShareButton>

        <RedditShareButton url={url} >
          <RedditIcon  size={40} round={true} />
        </RedditShareButton>

        <WhatsappShareButton url={url}>
             <WhatsappIcon  size={40} round={true}/>
         </WhatsappShareButton>
      </div>
    )

}
export const BlogSocialIcons = () => {
  const [SocialUrl, setSocialUrl] = useState('');
  setTimeout(() => {
    const href = window.location.href;
    setSocialUrl(href);
    console.log(href,'hrefhrefhref');
  }, 1000);
    const otherRoute = (url) => window?.open(url);
  return (
    <div className={styles.fixed_social_icons}>
      <h3>Share this Page on</h3>
      {/* <div>
      <Image
          onClick={() => otherRoute("https://www.linkedin.com/company/redblox-io/")}
          src="/static/icons/linkedin.png"
          height={40}
          width={40}
          layout="fixed"
        />
        <Image
          onClick={() => otherRoute("https://www.facebook.com/Redblox.io")}
          src="/static/icons/fb.png"
          height={40}
          width={40}
          layout="fixed"
        />
        <Image
          onClick={() =>
            otherRoute("https://https://twitter.com/RedBloxIO")
          }
          src="/static/icons/twitter.png"
          height={40}
          width={40}
          layout="fixed"
        />
        <Image
          onClick={() => otherRoute("")}
          src="/static/icons/medium.png"
          height={40}
          width={40}
          layout="fixed"
        />
        <Image
          onClick={() => otherRoute("")}
          src="/static/icons/reddit.png"
          height={40}
          width={40}
          layout="fixed"
        />
        </div> */}
        <ShareButtons url={SocialUrl}/>
    </div>
  )
}