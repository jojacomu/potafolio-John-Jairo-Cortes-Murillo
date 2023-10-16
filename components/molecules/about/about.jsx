import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import styles from "./about.module.css"

export const About = () => {
    return (
        <Card sx={{ maxWidth: 500 }} className={styles.cardAbout}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="500"
                    image="/009_PhotosNexuraMembers.png"
                    alt="john jairo cortes murillo"
                    title="john jairo cortes murillo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    John Jairo Cortes Murillo
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Frontend Developer || Marketer || Research economist || Techer. I like to generate value for users through the use of accessible and usable information and communication technologies. I am passionate about research and collaborative learning.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
