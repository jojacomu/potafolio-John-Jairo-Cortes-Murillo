import { projectsData } from "../../../services/getProject";
import { CardProject } from "../../molecules/card/card";
import styles from "./cardsFilterProj.module.css";

export const CardsFilerProj = () => {
    console.log(projectsData);
    return (
        <>
            <div className={styles.cardsContainer}>
                {projectsData.map((project, index) => (
                    <CardProject key={index} project={project} />
                ))}
            </div>
        </>
    );
};
