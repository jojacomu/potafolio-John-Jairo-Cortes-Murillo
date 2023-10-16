import { Facebook, GitHub, LinkedIn } from "@mui/icons-material";
import styles from "./socialMedia.module.css"
import Link from "next/link";

export const SocialMedia = () => {
    return (
        <div>
            <Link href={'https://www.faceboo.com/johnjcortesm'}>
            <Facebook className={styles.socialMedia} />
            </Link>
            <Link href={'https://www.linkedin.com/in/johnjairocortesmurillo'}>
            <LinkedIn className={styles.socialMedia} />
            </Link>
            <Link href='https://github.com/jojacomu'>
            <GitHub className={styles.socialMedia} />
            </Link>
        </div>
    );
};
