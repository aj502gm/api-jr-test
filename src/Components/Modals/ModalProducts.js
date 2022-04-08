import React from 'react'
import { Modal } from 'react-bootstrap';

function EditModalP({showEditModal, handleCloseModal}) {
  return (
        <Modal show={showEditModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>EDIT PRODUCTS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div classNameName="mb-3">
                    <label classNameName="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name..." />
                </div>
                <div classNameName="mb-3">
                    <label classNameName="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Description..." />
                </div>
                <div classNameName="mb-3">
                    <label classNameName="form-label">Quantity</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Quantity..." />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" classNameName='btn btn-warning' onClick={handleCloseModal}>Cancel</button>
                <button variant="primary" classNameName='btn btn-success'>Confirm Edit</button>
            </Modal.Footer>
        </Modal>
  )
}

export default EditModalP