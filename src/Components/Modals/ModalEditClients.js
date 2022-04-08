import React from 'react'
import { Modal } from 'react-bootstrap';

function EditModalC({showEditModal, handleCloseModal}) {
  return (
        <Modal show={showEditModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>EDIT CLIENTS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div classNameName="mb-3">
                    <label classNameName="form-label">Client Name</label>
                    <input type="text" className="form-control" placeholder="Client Name..." />
                </div>
                <div classNameName="mb-3">
                    <label classNameName="form-label">Client Surname</label>
                    <input type="text" className="form-control"  placeholder="Client Surname..." />
                </div>
                <div classNameName="mb-3">
                    <label classNameName="form-label">Genre</label>
                    <input type="text" className="form-control"  placeholder="Genre..." />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" classNameName='btn btn-warning' onClick={handleCloseModal}>Cancel</button>
                <button variant="primary" classNameName='btn btn-success'>Confirm Edit</button>
            </Modal.Footer>
        </Modal>
  )
}

export default EditModalC