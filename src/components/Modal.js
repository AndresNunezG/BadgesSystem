import React from 'react';
import ReactDOM from 'react-dom';

import './styles/Modal.css'

function Modal(props) {
    if (!props.isOpen) {
        return (
            null
        )
    }
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container">
                <button onClick={props.onCloseModal} className="Modal__close">
                    <i class="far fa-times-circle"></i>
                </button>
                {props.children}
            </div>
        </div>
        ,
        document.getElementById('modal')
    );
}

export default Modal;