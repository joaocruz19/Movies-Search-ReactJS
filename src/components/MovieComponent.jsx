import React from 'react';
import './MovieComponent.css';

function MovieComponent(props) {
    const movieInfo = props.movieInfo;
    return (
        <div className="movie-container d-flex justify-content-between flex-column align-items-start m-2 p-2">
            <h3>{movieInfo.title}</h3>
            <p>{movieInfo.overview}</p>
            <button className="btn btn-danger">More</button>
        </div>
    )
}

export default MovieComponent;