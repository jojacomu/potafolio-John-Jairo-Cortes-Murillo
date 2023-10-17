import { About } from "../../molecules/about/about";
import styles from "../aboutOrg/abouOrg.module.css"

export const AboutOrg = ({children}) => {
    return <>
                <div className={styles.cardAbout}>
                    <About>{children}</About>
                </div>
            </>
};
