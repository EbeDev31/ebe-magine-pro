import React from 'react';
import { withRouter } from 'react-router-dom';

const Movie = (props) => {

    const { movie } = props.location.state;

    const image = movie.url;
    const year = movie.id + movie.albumId;
    const title = movie.title;

    return (
        <div >
            <h1>Title:{" "}{title}</h1>
            <div className='single-movie'>
                <img src={image} />
                <div>
                    <h2>Year:{" "}<span>{year}</span></h2>
                    <h2>Cast:{" "}<span>{title}</span></h2>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Movie);
