import { technicalData } from "../../../services/getTechnical.js";
import { CardTechnical } from "../../molecules/technical/cardTechnical.jsx";
import styles from "./cardFilerTech.module.css";

export const CardFilterTech = () => {
    console.log(technicalData);
    return (
        <>
            <div className={styles.cardsContainer}>
                {technicalData.map((technical, index) => (
                    <CardTechnical key={index} technical={technical} />
                ))}
            </div>
        </>
    );
};
