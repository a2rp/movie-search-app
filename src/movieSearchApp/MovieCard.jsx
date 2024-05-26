import React from 'react'
import styles from "./styles.movie-card.module.scss";

const MovieCard = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img
                    src={props.Poster}
                    alt=""
                    className={styles.image}
                />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.idContainer}>
                    <span className={styles.key}>ID:</span>
                    <span className={styles.value}>{props.imdbID}</span>
                </div>
                <div className={styles.titleContainer}>
                    <span className={styles.key}>Title:</span>
                    <span className={styles.value}>{props.Title}</span>
                </div>
                <div className={styles.typeContainer}>
                    <span className={styles.key}>Type:</span>
                    <span className={styles.value}>{props.Type}</span>
                </div>
                <div className={styles.yearContainer}>
                    <span className={styles.key}>Year:</span>
                    <span className={styles.value}>{props.Year}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard


