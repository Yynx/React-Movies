import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";
const axios = require('axios');

const MovieDetails = () => {

    let {id} = useParams(); // instead of using useParams, can also just use {match.params.id}

    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetchSpecificMovie();
    }, []);

    // Another fetch to get details of the SPECIFIC movie by IMDb ID
    const fetchSpecificMovie = () => {
        axios.get(`http://www.omdbapi.com/?i=${id}&plot=full&apiKey=2cb2d6d8&s`)
        .then(response => {
            console.log(response.data);
            setMovie(response.data); // sets movie to response.data
            // console.log(movie)
        });
    }

    return (
        <div className="movie-details">
            <img src={movie.Poster} alt={movie.Title}></img>
            <h1>Name of Movie: {movie.Title}</h1>
            <p>Year of release: {movie.Year}</p>
            <p>Runtime: {movie.Runtime}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Director: {movie.Director}</p>
            <p>Writer: {movie.Writer}</p>
            <p>Plot: {movie.Plot}</p>
            <p>Actors: {movie.Actors}</p>
            <p>imdb Rating: {movie.imdbRating}</p>
            <p>This is information for the movie with id: {id}</p>
        </div>
    )
}


// http://www.omdbapi.com/?i=tt3707958&plot=full&apiKey=2cb2d6d8&s

export default MovieDetails;