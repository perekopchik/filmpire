import React from "react";
import {Grid} from "@mui/material";
import useStyles from './styles.js';
import {Movie} from "../index";
const MovieList = ({movies,numberOfMovies,excludeFirst}) => {
    const classes = useStyles();
    const startFrom = excludeFirst ? 1 : 0 ;
    return (
        <Grid container className={classes.moviesContainer}>
            {movies.results.slice(startFrom,numberOfMovies).map((movie,index)=>(
            movie.poster_path &&
                (<Movie key={index} movie={movie} i={index}/>)
            ))}
        </Grid>
    )
}

export default MovieList;