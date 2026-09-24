import React from "react";
import { FiCalendar, FiFilm, FiHash, FiTag } from "react-icons/fi";
import styles from "./styles.movie-card.module.scss";
import fallbackPoster from "./images/no-image.jpg";

const MovieCard = ({ Poster, Title, Type, Year, imdbID }) => {
    const hasPoster = Poster && Poster !== "N/A";
    return <article className={styles.container}><div className={styles.imageContainer}><img src={hasPoster ? Poster : fallbackPoster} alt={hasPoster ? `${Title} poster` : "Poster unavailable"} className={styles.image} onError={(event) => { event.currentTarget.src = fallbackPoster; }} /></div><div className={styles.textContainer}><h3>{Title}</h3><div className={styles.meta}><span><FiHash /> {imdbID || "Unknown ID"}</span><span><FiTag /> {Type || "Movie"}</span><span><FiCalendar /> {Year || "Unknown year"}</span></div><div className={styles.cardFooter}><FiFilm /> Movie result</div></div></article>;
};

export default MovieCard;