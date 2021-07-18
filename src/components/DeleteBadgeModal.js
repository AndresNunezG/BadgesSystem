import React from 'react';

import Modal from './Modal';

function DeleteBadgeModal(props) {
    return <Modal isOpen={props.isOpen} onCloseModal={props.onCloseModal}>
        <div className="DeleteBadgeModal">
            <h1>Are you sure?</h1>
            <p>you are about to delete this badge.</p>
            <div>
                <button onClick={props.onDeleteBadge} className="btn btn-danger me-3">Delete</button>
                <button onClick={props.onCloseModal} className="btn btn-primary">Cancel</button>
            </div>
        </div>
    </Modal>
}

export default DeleteBadgeModal;