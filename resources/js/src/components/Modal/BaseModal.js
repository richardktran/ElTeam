import React from 'react'

const BaseModal = (props) => {
    const { children, modalId, modalName } = props;
    return (
        <div className="modal fade" tabIndex={-1} id={modalId}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <a href="#" className="close" data-dismiss="modal" aria-label="Close">
                        <em className="icon ni ni-cross" />
                    </a>
                    <div className="modal-header">
                        <h5 className="modal-title">{modalName}</h5>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BaseModal
