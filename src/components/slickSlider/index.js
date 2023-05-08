import { useRouter } from 'next/router'
import React from 'react'
import Slider from 'react-slick'
import styles from './slickslider.module.css'
import { sliderData } from 'src/constants/home'
import Image from 'next/image'


export const SlickSlider = ({ props }) => {
    const slidercomingSoon = {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 976,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    }
	return (
          <div className={styles.slider_main_content}>
          <Slider {...slidercomingSoon}>
          {sliderData?.map((item) => (
                <div key={item?.id} className={styles.slider_main_content_box}>
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
          </Slider>
          </div>
	)
}