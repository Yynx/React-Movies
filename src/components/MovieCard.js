import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';


const MovieCard = (props) => {
    
    const {id, name, year, img} = props;

    return (
        <div className="movie-card">
            {/* Whole card is a link to movie/(imdb of specific movie) you clicked */}
            <Link to={`/movie/${id}`}>
            <h2>{name}</h2>
            <p>{year}</p>
            <div>
                <img src={img}
                alt='{id}'
                width="200"/>
            </div>
            </Link>

        </div>
    
    )
}

export default MovieCard;

