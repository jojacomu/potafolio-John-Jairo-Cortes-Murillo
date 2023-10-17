import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./cardTechnical.module.css";
import { MainButton } from "../../atomos/main-button/mainButton";
import Link from "next/link";

export const CardTechnical = ({ technical }) => {
    console.log(technical.name);
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    className={styles.imageTechnology}
                    component="img"
                    alt={technical.name}
                    height="200"
                    image={technical.photo}
                    title={technical.name}
                />
                <CardContent className={styles.containerInfo}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={styles.nameTechnology}
                    >
                        {technical.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.descriptionTechnology}
                    >
                        {technical.description}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.tipoTechnology}
                    >
                        Type: {technical.type}.
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.datePeriod}
                    >
                        From: {technical.dateStart}.
                    </Typography>
                </CardContent>
                <CardActions className={styles.containerButton}>
                    <MainButton
                        size="small"
                        className={styles.buttonCardTechnology}
                    >
                        <Link href={technical.link} className={styles.aDetail}>
                            Detail
                        </Link>
                    </MainButton>
                </CardActions>
            </Card>
        </>
    );
};
