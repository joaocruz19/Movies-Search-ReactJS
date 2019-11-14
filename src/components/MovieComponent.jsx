import React, { Component } from 'react';
import './MovieComponent.css';
import Modal from './Modal';
import SearchService from '../services/SearchService';

class MovieComponent extends Component {
    constructor(props) {
        super(props);
        this.movieInfo = props.movieInfo;
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.state = { showModal: false };
        this.SearchService = new SearchService();
    }

    showModal() {
        this.setState({ showModal: true });

    }

    hideModal() {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <React.Fragment>
                <div className="movie-container d-flex justify-content-between flex-column align-items-start m-2 p-2">
                    <h3>{this.movieInfo.title}</h3>
                    <p>{this.movieInfo.overview}</p>
                    <button className="btn btn-danger" onClick={this.showModal}>More</button>
                </div>
				<Modal
                    shouldShow={this.state.showModal}
                    closeModal={this.hideModal} 
                    movieInfo={this.movieInfo}
                />
            </React.Fragment>
        )
    }
}

export default MovieComponent;
