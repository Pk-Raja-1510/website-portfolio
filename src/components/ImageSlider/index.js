import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import styles from "./imageSlider.module.css";
const ImageSlider = () => {

    const images = [
        { url: "/static/icons/slider_one.webp" },
        { url: "/static/icons/slider_two.webp" },
        { url: "/static/icons/slider_three.webp" },
      ];
  return (
    <div className={styles.image_container_slider}>
        <SimpleImageSlider
        width={'87%'}
        height={600}
        images={images}
        showNavs={true}
        bgColor={'#fff'}
      />
    </div>
  )
}

export default ImageSlider