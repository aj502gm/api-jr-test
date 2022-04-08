import React from 'react'
import { Modal } from 'react-bootstrap';

function EditModalO({showEditModal, handleCloseModal}) {
  return (
        <Modal show={showEditModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>EDIT ORDERS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div classNameName="mb-3">
                    <label classNameName="form-label">ClientID</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="ClientID..." />
                </div>
                <div classNameName="mb-3">
                    <label classNameName="form-label">Client Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Client Name..." />
                </div>
                <div classNameName="mb-3">
                    <label classNameName="form-label">ProductID</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="ProductID..." />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" classNameName='btn btn-warning' onClick={handleCloseModal}>Cancel</button>
                <button variant="primary" classNameName='btn btn-success'>Confirm Edit</button>
            </Modal.Footer>
        </Modal>
  )
}

export default EditModalO