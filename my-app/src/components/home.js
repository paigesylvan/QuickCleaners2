import styles from './home.module.scss'
import { SlArrowDown } from "react-icons/sl";

export default function MySection({
    image, 
    headline, 
    scrollTo, 
    goToSectionRef, 
    showArrow,
}){
 
    return(
        <div className={styles.section}>
            <div className={styles.copy}> 
                <h2>{headline}</h2>
            </div>
            <img src={image} alt='images' layout={`fill`} />
            {showArrow && (<SlArrowDown className={styles.downarrow} onClick={() => scrollTo(goToSectionRef)}/>)}
            
        </div>
    );
} 