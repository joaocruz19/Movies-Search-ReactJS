import React from 'react';
import SearchService from '../services/SearchService';

function Modal(props) {
    const SearchService = new SearchService();
    return SearchService.getMovie(props.movieId)
        .then(response => {
            return (
                <div className="modal">
                    <div className="modal-content">

                    </div>
                </div>
            )
        });

}

export default Modal;