import { progEducative } from "../../../services/getEducation.js";
import { CardEducation } from "../../molecules/education/education";
import styles from './educationOrg.module.css'

export const EducationOrg = () => {
    console.log(progEducative);
    return (
        <>
            <div className={styles.cardsContainer}>
                {progEducative.map((progEducative, index) => (
                    <CardEducation key={index} progEducative={progEducative} />
                ))}
            </div>
        </>
    );
};