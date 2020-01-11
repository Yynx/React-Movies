import React from 'react'
import MovieCard from './MovieCard';


export default function Movies(props) {

    // console.log(props.movies)
    const { movies } = props;

    return (
        <div className='movies'>
            {/* IF movies EXISTS then map over movies and pass down props to MovieCard component, else null */}
            {movies ? movies.map(movie => <MovieCard key={movie.imdbID} id={movie.imdbID} name={movie.Title} img={movie.Poster} year={movie.Year} />)
            : null}
        </div>
    )
}
