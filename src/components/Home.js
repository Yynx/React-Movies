import React from 'react'
import Movies from './Movies';

export default function Home(props) {
    return (
        <div>
            This is the Home component.
            <Movies movies={props.movies} />   
        </div>
    )
}
