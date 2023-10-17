import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./card.module.css";
import { MainButton } from "../../atomos/main-button/mainButton";
import Link from "next/link";

export const CardProject = ({ project }) => {
    console.log(project.name);
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    className={styles.imageProject}
                    component="img"
                    alt={project.name}
                    height="200"
                    image={project.photo}
                    title={project.name}
                />
                <CardContent className={styles.containerInfo}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={styles.nameProject}
                    >
                        {project.name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.descriptionProject}
                    >
                        {project.description}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.year}
                    >
                        Año: {project.year}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.tipoProject}
                    >
                        Tipo: {project.type}. Empresa: {project.enterprise}.
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.datePeriod}
                    >
                        Fecha inicio: {project.dateStart}. Fecha fin:{" "}
                        {project.dateEnd}
                    </Typography>
                </CardContent>
                <CardActions className={styles.containerButton}>
                    <MainButton
                        size="small"
                        className={styles.buttonCardProject}
                    >
                        <Link href={project.link} className={styles.aDetail}>
                            Detalles
                        </Link>
                    </MainButton>
                </CardActions>
            </Card>
        </>
    );
};
