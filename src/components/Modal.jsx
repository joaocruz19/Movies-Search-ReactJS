import React from 'react';
import './Modal.css';

function Modal(props) {
    	const displayClass = props.shouldShow ? 'd-flex' : 'd-none';
		const closeModal = props.closeModal;
        const movieInfo = props.movieInfo;

    return (
        <div className={displayClass} id="modal">
            <div className=" p-3" id="modal-content">
               	<button onClick={closeModal} className="close-btn">
                   	<i className="fa fa-times"></i>
               	</button>
                   <h1>{movieInfo.title}</h1>
                   <p>{movieInfo.overview}</p>
           	 </div>
       	</div>
    )			
}

export default Modal;
