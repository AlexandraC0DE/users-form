import React from 'react';
import './Modal.css'


const Modal = ({ isOpen, closeModal, title, children }) => {

    const handleModalDialogClick = e => {
        e.stopPropagation();
    }

    return (
        <div className= {`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className='modal__dialog' onClick={handleModalDialogClick}>
            <button className='btn-close' onClick={closeModal}>
                X
            </button>
            {/* <h1>{title}</h1> */}
            {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Neque alias reiciendis, voluptate magni optio amet facere voluptatem.
                 Non, dolor distinctio autem reprehenderit, molestiae ducimus laboriosam 
                 quis totam iste quam .</p> */}
            {children}
            </div>
        
        </div>
    );
};

export default Modal;