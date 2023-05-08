import React, { useState } from "react";
import styles from "./imageSlider.module.css";
import { teckData } from "./mock";
const ImageSliders = () => {
  const [activeTech, setActiveTech] = useState("Blockchain");
  const [currentIndex, setCurrentIndex] = useState(teckData);


  const onNext = (id) => {
		if (id === 'TechList') {
			const NextTech = [...currentIndex]
      console.log(NextTech,'NextTechNextTech');
			NextTech.push(NextTech.shift())
			setCurrentIndex([...NextTech])
		}
	
	}

	const onPrev = (id) => {
		if (id === 'TechList') {
			const NextTech = [...currentIndex]
			NextTech.unshift(NextTech.splice(NextTech.length - 1, 1)[0])
			setCurrentIndex([...NextTech])
		}
		
	}

  return (
    <>
      <div className={styles.tech_container}>
        <div className={styles.titles}>
          {currentIndex?.map((i) => (
            <h3
              className={
                activeTech === i?.title
                  ? styles.head_title_select
                  : styles.head_title
              }
              key={i?.id}
              onClick={() => setActiveTech(i?.title)}
            >
              {i?.title}
            </h3>
          ))}
        </div>
        <div className={styles.tech_img}>
          {currentIndex?.map((i) =>
            i?.img?.map(
              (i1) =>
                activeTech === i?.title && (
                  <img src={i1?.img} alt="" key={i1?.id} />
                )
            )
          )}
        </div>
        <div className={styles.arrows}>
              <span className="material-icons" id="arrows" onClick={() => onPrev('TechList')}>
                arrow_back_ios
              </span>
              <span className="material-icons" id="arrowsR" onClick={() => onNext('TechList')}>
                arrow_forward_ios
              </span>
            </div>
      </div>
    </>
  );
};

export default ImageSliders;
