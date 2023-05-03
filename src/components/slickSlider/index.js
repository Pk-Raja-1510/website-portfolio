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
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
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
            {/* <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
            <div>Slide 4</div>
            <div>Slide 5</div>
            <div>Slide 6</div>
            <div>Slide 7</div> */}
          </Slider>
          </div>
	)
}