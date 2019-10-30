import React from 'react';
import './MovieComponent.css';
import Modal from './Modal';

class MovieComponent {
    constructor(props) {
        super(props);
        this.movieInfo = props.movieInfo;
        this.renderModal = this.renderModal.bind(this);

    }

    renderModal() {
        return <Modal movieId={this.movieInfo.id} />;
    }

    render() {
        return (
            <div className="movie-container d-flex justify-content-between flex-column align-items-start m-2 p-2">
                <h3>{this.movieInfo.title}</h3>
                <p>{this.movieInfo.overview}</p>
                <button className="btn btn-danger" onClick={this.renderModal}>More</button>
            </div>
        )
    }
}

export default MovieComponent;