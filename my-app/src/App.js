import { useRef } from 'react';
import styles from './components/home.module.scss';
import MySection from './components/home';
import one from './images/cusy.png';
import two from './images/2.png';
import three from './images/6.png';
import four from './images/8.png';


function App() {
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  function scrollTo(section) {
    section.current.scrollIntoView({ behavior: "smooth"});
  }

  return (
    <div className={`container ${styles.container}`}>
      <div ref={section1} >
        <MySection image={one} headline={`howd`} scrollTo={scrollTo} goToSectionRef={section2} showArrow={true} />
      </div>
      <div ref={section2}>
        <MySection image={two} headline={`howd`} scrollTo={scrollTo} goToSectionRef={section3} showArrow={true}/>
      </div>
      <div ref={section3}>
        <MySection image={three} headline={`four`} scrollTo={scrollTo} goToSectionRef={section4} showArrow={true}/>
      </div>
      <div ref={section4}>
        <MySection image={four} headline={`sexy`} scrollTo={scrollTo} showArrow={false}/>
      </div>
    </div> 
  );
}

export default App;
