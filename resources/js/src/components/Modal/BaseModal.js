import React from 'react'
import { Modal } from 'react-bootstrap';

const BaseModal = (props) => {
    const { children, modalName, isShow } = props;
    return (
        <Modal show={isShow} className="fade" tabIndex={-1}>
            <Modal.Header closeButton>
                <Modal.Title>{modalName}</Modal.Title>
            </Modal.Header>
            <div className="modal-body">
                {children}
            </div>
        </Modal>
    )
}

export default BaseModal
