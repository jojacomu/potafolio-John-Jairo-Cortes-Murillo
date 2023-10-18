import { AboutTemplate } from "../../components/templates/about-template/aboutTemplate";
import { CardsFilterProjTemplate } from "../../components/templates/cardFilterProj-template/cardFilterProjTemplate";
import { CardsFilterTechTemplate } from "../../components/templates/cardFilterTech-template copy/cardFilterTechTemplate";
import { CardsEducative } from "../../components/templates/education-template/educationTempate";
import { MenuTemplate } from "../../components/templates/menu-template/menuTemplate";
import { SocialMediaTemplate } from "../../components/templates/socialMedia-template/socialMediaTemplate";
import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <MenuTemplate />
            <section className={styles.resume}>
                <AboutTemplate />
                <SocialMediaTemplate />
            </section>
            <section className={styles.projectsContainer}>
                <h2 className={styles.h2Page}>Projects</h2>
                <CardsFilterProjTemplate />
            </section>
            <section className={styles.projectsContainer}>
                <h2 className={styles.h2Page}>Technical skills</h2>
                <CardsFilterTechTemplate />
            </section>
            <section className={styles.projectsContainer}>
            <h2 className={styles.h2Page}>Education</h2>
            <CardsEducative />
            </section>
            <section className={styles.projectsContainer}>
            <h2 className={styles.h2Page}>Recomendation</h2>
            </section>
            <section className={styles.projectsContainer}>
            <h2 className={styles.h2Page}>Work experience</h2>
            </section>

        </>
    );
}
