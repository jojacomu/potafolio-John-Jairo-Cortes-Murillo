import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./education.module.css";
import { MainButton } from "../../atomos/main-button/main-button";
import Link from "next/link";

export const CardEducation = ({ progEducative }) => {
    console.log(progEducative.name);
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    className={styles.imageProgEducative}
                    component="img"
                    alt={progEducative.name}
                    height="200"
                    image={progEducative.photo}
                    title={progEducative.name}
                />
                <CardContent className={styles.containerInfo}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={styles.nameProgEducative}
                    >
                        {progEducative.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.descriptionProgEducative}
                    >
                        {progEducative.description}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.institutionProgEducative}
                    >
                        Institution: {progEducative.institution}.
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.levelProgEducative}
                    >
                        Level: {progEducative.level}.
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.datePeriod}
                    >
                        From: {progEducative.dateStart}.
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.datePeriod}
                    >
                        To: {progEducative.dateEnd}.
                    </Typography>
                </CardContent>
                <CardActions className={styles.containerButton}>
                    <MainButton
                        size="small"
                        className={styles.buttonCardProgEducative}
                    >
                        <Link href={progEducative.link} className={styles.aDetail}>
                            Detail
                        </Link>
                    </MainButton>
                </CardActions>
            </Card>
        </>
    );
};
