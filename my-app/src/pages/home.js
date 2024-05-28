import { useRef } from 'react';
import one from '../images/cusy.png';
import two from '../images/2.png';
import three from '../images/6.png';
import four from '../images/8.png';
import HomeScroll from '../components/homescroll.js';

export default function Home() {

    const section1 = useRef();
    const section2 = useRef();
    const section3 = useRef();
    const section4 = useRef();
    function scrollTo(section) {
      section.current.scrollIntoView({ behavior: "smooth"});
    }

return(
    <div className={`container ${styles.container}`}>
        <div ref={section1} >
            <HomeScroll image={one} headline={`howd`} scrollTo={scrollTo} goToSectionRef={section2} showArrow={true}  />
        </div>
        <div ref={section2}>
            <HomeScroll image={two} headline={`howd`} scrollTo={scrollTo} goToSectionRef={section3} showArrow={true}/>
        </div>
        <div ref={section3}>
            <HomeScroll image={three} headline={`four`} scrollTo={scrollTo} goToSectionRef={section4} showArrow={true}/>
        </div>
        <div ref={section4}>
            <HomeScroll image={four} headline={`sexy`} scrollTo={scrollTo} showArrow={false}/>
        </div>
    </div> 

);
}; 

