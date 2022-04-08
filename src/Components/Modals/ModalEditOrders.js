import React from 'react'
import { Modal } from 'react-bootstrap';

function EditModalO({showEditModal, handleCloseModal}) {
  return (
        <Modal show={showEditModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>EDIT ORDERS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label className="form-label">Edit Order: </label>
                    <input class="form-control" type="text" placeholder="Disabled input" aria-label="Disabled input example" disabled />
                </div>
                <div className="mb-3">
                    <label className="form-label">ClientID</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="ClientID..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">Client Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Client Name..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">ProductID</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="ProductID..." />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" className='btn btn-warning' onClick={handleCloseModal}>Cancel</button>
                <button variant="primary" className='btn btn-success'>Confirm Edit</button>
            </Modal.Footer>
        </Modal>
  )
}

export default EditModalO