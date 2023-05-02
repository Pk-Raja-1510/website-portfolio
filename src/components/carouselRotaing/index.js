import React from "react";
import styles from "./carouselRotaing.module.css";
import { industryCoveredData } from "src/constants/home";
import Image from "next/image";
export const CarouselRotaing = (props) => {
  return (
    <div className={styles.container_carousel}>
      <div className={styles.carousel}>
        {industryCoveredData?.map((item) => (
          <div className={styles.carousel__face} key={item?.id}>
            <div>
              <Image src={item?.img} height="40" width="40" layout="fixed" />
              <h4>{item?.title}</h4>
            </div>
            <p>{item?.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
