import { AboutTemplate } from "../../components/templates/about-template/aboutTemplate";
import { MenuTemplate } from "../../components/templates/menu-template/menuTemplate";
import { SocialMediaTemplate } from "../../components/templates/socialMedia-template/socialMediaTemplate";
import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <MenuTemplate />
            <div className={styles.resume}> 
            <AboutTemplate />
            <div>
            <SocialMediaTemplate />
            </div>
            </div>
        </>
    );
}
