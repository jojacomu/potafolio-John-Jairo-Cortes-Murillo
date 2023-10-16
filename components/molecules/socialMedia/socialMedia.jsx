import { Facebook, LinkedIn } from "@mui/icons-material";
import styles from "./socialMedia.module.css"

export const SocialMedia = () => {
    return (
        <div>
            <Facebook className={styles.socialMedia}/>
            <LinkedIn className={styles.socialMedia}/>
        </div>
    );
};
