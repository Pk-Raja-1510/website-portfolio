import Image from 'next/image';
import React, {useEffect, useState} from 'react'
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
  return(
      <div>
        <FacebookShareButton url={url} title={title} >
              <FacebookIcon  size={40} round={true}/>
       </FacebookShareButton>

        <TwitterShareButton url={url} title={title} >
              <TwitterIcon  size={40} round={true} />
        </TwitterShareButton>

        <LinkedinShareButton url={url}title={title}  >
          <LinkedinIcon  size={40} round={true}/>
        </LinkedinShareButton>

        <RedditShareButton url={url} title={title} >
          <RedditIcon  size={40} round={true} />
        </RedditShareButton>

        <WhatsappShareButton url={url} title={title} >
             <WhatsappIcon  size={40} round={true}/>
         </WhatsappShareButton>
      </div>
    )

}
export const BlogSocialIcons = () => {

  const [SocialUrl, setSocialUrl] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    setPageTitle(document.title);
  }, []);
  setTimeout(() => {
    const href = window.location.href;
    setSocialUrl(href);
  }, 1000);
    const otherRoute = (url) => window?.open(url);
  return (
    <div className={styles.fixed_social_icons}>
      <h3>Share this Page on</h3>
        <ShareButtons url={SocialUrl} title={pageTitle}/>
    </div>
  )
}