import React from 'react';
import { NavLink } from "react-router-dom";
import MovieCard from '../styles/MovieCard'

const MovieThumbnail = ({ movie }) => {

    const image = movie.thumbnailUrl;
    const year = movie.id + movie.albumId;
    const title = movie.title;

    return (
        <MovieCard>
            <NavLink style={{ color: 'inherit', textDecoration: 'inherit' }}
                to={{
                    pathname: './movie',
                    state: { movie }
                }}
            >
                <div>
                    <img src={image} alt='movie-thumbnail'/>
                    <div>
                        <p>Title :{title}</p>
                        <p>Year :{year}</p>
                    </div>
                </div>
            </NavLink>
        </MovieCard>
    )
}
export default MovieThumbnail;