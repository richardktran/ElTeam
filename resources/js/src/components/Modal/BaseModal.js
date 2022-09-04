import React from 'react'
import { Modal } from 'react-bootstrap';

const BaseModal = (props) => {
    const { children, modalName, isShow, handleCloseModal } = props;
    return (
        <Modal show={isShow} className="fade" tabIndex={-1}>
            <a href="#" onClick={handleCloseModal} className="close" data-dismiss="modal" aria-label="Close">
                <em className="icon ni ni-cross" />
            </a>
            <Modal.Header>
                <Modal.Title>{modalName}</Modal.Title>
            </Modal.Header>
            <div className="modal-body">
                {children}
            </div>
        </Modal>
    )
}

export default BaseModal
