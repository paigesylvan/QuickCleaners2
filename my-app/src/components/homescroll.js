import React from 'react';



function HomeScroll({image, headline, scrollTo, goToSectionRef, showArrow,}) {


  return (
    <div className="text-3xl font-bold underline">
        <div> 
            <h2>{headline}</h2>
        </div>
        <img src={image} alt='images' layout={`fill`} />
        {/* {showArrow && (<SlArrowDown className={styles.downarrow} onClick={() => scrollTo(goToSectionRef)}/>)} */}
    </div>
  );
}

export default HomeScroll;