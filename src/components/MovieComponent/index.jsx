import React, { useState } from 'react';
import './styles.css';
import imageNotFound from "../../assets/image-not-found.jpg";
import Modal from '../Modal';

function MovieComponent(props) {
    const [showModal, setShowModal] = useState(false);
    const { movieInfo } = props;
    const posterPath = movieInfo.poster_path &&`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`;
    const date = new Date(movieInfo.release_date);

    return (
        <>
            <div className="movie-container d-flex justify-content-around align-items-center m-3 py-2 px-3">
                <div className="poster-wrapper">
                    <img src={posterPath || imageNotFound} alt="poster"/>
                </div>
                <div className="movie-info d-flex flex-column justify-content-around">
                <h3>{movieInfo.title}</h3>
                <small>Lauched: {date.toLocaleDateString()}</small>
                <p>{movieInfo.overview}</p>
                <button className="btn btn-danger btn-more" onClick={() => setShowModal(true)}>More</button>
                </div>
            </div>
            <Modal
                shouldShow={showModal}
                closeModal={setShowModal}
                movieInfo={movieInfo}
            />
        </>
    )
}

export default MovieComponent;