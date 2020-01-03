import React from 'react'
import Movies from './Movies';

export default function Home(props) {
    return (
        <div>
            <Movies movies={props.movies} />   
        </div>
    )
}
