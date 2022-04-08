import React from 'react'
import { Modal } from 'react-bootstrap';

function EditModalC({showEditModal, handleCloseModal}) {
  return (
        <Modal show={showEditModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>EDIT CLIENTS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label className="form-label">Client Name</label>
                    <input type="text" class="form-control" placeholder="Client Name..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">Client Surname</label>
                    <input type="text" class="form-control"  placeholder="Client Surname..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">Genre</label>
                    <input type="text" class="form-control"  placeholder="Genre..." />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" placeholder="Email" />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" className='btn btn-warning' onClick={handleCloseModal}>Cancel</button>
                <button variant="primary" className='btn btn-success'>Confirm Edit</button>
            </Modal.Footer>
        </Modal>
  )
}

export default EditModalC