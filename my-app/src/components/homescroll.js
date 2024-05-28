import React from 'react';
import styles from '../styles/home.module.scss';
import { SlArrowDown } from "react-icons/sl";



function HomeScroll({image, headline, scrollTo, goToSectionRef, showArrow,}) {


  return (
    <div className={styles.section}>
        <div className={styles.copy}> 
            <h2>{headline}</h2>
        </div>
        <img src={image} alt='images' layout={`fill`} />
        {showArrow && (<SlArrowDown className={styles.downarrow} onClick={() => scrollTo(goToSectionRef)}/>)}
    </div>
  );
}

export default HomeScroll;