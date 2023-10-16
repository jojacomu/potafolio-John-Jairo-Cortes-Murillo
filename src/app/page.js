import { AboutTemplate } from "../../components/templates/about-template/aboutTemplate";
import { CardsFilterProjTemplate } from "../../components/templates/cardFilterProj-template/cardFilterProjTemplate";
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
                <CardsFilterProjTemplate />
            </section>
        </>
    );
}
