import React from 'react'
import { Modal } from 'react-bootstrap';

const BaseModal = (props) => {
    const { children, modalName, isShow, handleCloseModal, modalSize = 'xs' } = props;
    return (
        <Modal show={isShow} className="fade" size={modalSize} tabIndex={-1} backdrop='true'>
            <a onClick={handleCloseModal} className="close" data-dismiss="modal" aria-label="Close">
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
