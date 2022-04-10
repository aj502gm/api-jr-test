import React, {useContext} from 'react'
import { Modal } from 'react-bootstrap';
import {APIDataCT} from "../../Context/APIDataCT"

function ModalCreateClient({showEditModal, handleCloseModal}) {
  const {newClientData,setNewClientData,createClientData} = useContext(APIDataCT)
  return (
        <Modal show={showEditModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>CREATE CLIENT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label className="form-label">Client ID:</label>
                    <input class="form-control" value = {newClientData?.id} onChange={(e) => setNewClientData({...newClientData ,id:  e.target.value}) } type="text" placeholder= "Client ID..."  />
                </div>
                <div className="mb-3">
                    <label className="form-label">Client Name</label>
                    <input type="text" value = {newClientData?.name} onChange={(e) => setNewClientData({...newClientData ,name:  e.target.value}) }  className="form-control" placeholder="Client Name..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">Client Surname</label>
                    <input type="text" value = {newClientData?.surname} onChange={(e) => setNewClientData({...newClientData ,surname:  e.target.value}) } className="form-control"  placeholder="Client Surname..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">Genre</label>
                    <input type="text" value = {newClientData?.genre} onChange={(e) => setNewClientData({...newClientData ,genre:  e.target.value}) } className="form-control"  placeholder="Genre..." />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" value = {newClientData?.email} onChange={(e) => setNewClientData({...newClientData ,email:  e.target.value}) } className="form-control" placeholder="Email..." />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" className='btn btn-warning' onClick={handleCloseModal}>Cancel</button>
                <button variant="primary" className='btn btn-success' onClick={createClientData}>Confirm creation</button>
            </Modal.Footer>
        </Modal>
  )
}

export default ModalCreateClient