import React, { useState, useEffect } from 'react';
import MovieThumbnail from './MovieThumbnail';
import { API_URL } from '../environment/api';

const Movies = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(API_URL)
            .then(res => (res.json()))
            .then(data => {
                setMovies(data);
            })
    }, [])

    return (
        <div>
            <h1>..............WELCOME TO CHRIS' CRISP MOVIE LIBRARY...............</h1>
            <section className="content-wrapper">
                {
                    movies.map(movie =>
                        <MovieThumbnail
                            key={movie.id}
                            movie={movie}
                        />
                    )
                }
            </section>
        </div>
    )
}
export default Movies;