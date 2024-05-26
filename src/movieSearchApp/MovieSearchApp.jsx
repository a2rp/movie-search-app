import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import MovieCard from "./MovieCard";

const MovieSearchApp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [movies, setMovies] = useState(null);

    const handleSearchInput = (event) => {
        const value = event.target.value;
        setSearchInput(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (searchInput.trim().length < 3) {
            return toast.warn("Search term is less than 3 characters");
        }

        try {
            const options = {
                method: "POST",
                url: process.env.REACT_APP_MOVIE_SEARCH_URL,
                data: {
                    movieName: searchInput
                }
            };
            setIsLoading(true);
            setMovies(null);
            const response = await axios(options);
            // console.log(response);
            if (response?.data?.movies?.Response === "True") {
                setMovies(response?.data?.movies?.Search);
            } else if (response?.data?.movies?.Response === "False") {
                toast.error(response?.data?.movies?.Error);
            }
        } catch (error) {
            // console.log(error, "error");
            if (error?.response?.status === 429) {
                return toast.error(error?.response?.data);
            }
            toast.error(error?.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.heading}>Movie Search App</div>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <TextField
                        value={searchInput}
                        onChange={handleSearchInput}
                        label="Search movie here"
                        placeholder="Search movie here"
                        className={styles.searchInput}
                    />
                    <Button
                        type="submit"
                        disabled={isLoading}
                        variant="contained"
                        className={styles.submitButton}
                    >{isLoading ? <CircularProgress /> : "Submit"}</Button>
                </form>

                <div className={styles.outputContainer}>
                    <div className={styles.moviesContainer}>
                        {isLoading ? <CircularProgress sx={{ marginLeft: "50%" }} /> : <>
                            {movies && movies.map((movie, index) => (
                                <MovieCard
                                    key={index}
                                    Poster={movie.Poster}
                                    Title={movie.Title}
                                    Type={movie.Type}
                                    Year={movie.Year}
                                    imdbID={movie.imdbID}
                                />
                            ))}
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieSearchApp


