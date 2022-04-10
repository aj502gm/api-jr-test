import React, {useState, useEffect} from 'react'
import { Modal } from 'react-bootstrap';
import axios from "axios";
function ModalCreateClient({showEditModal, handleCloseModal}) {
    const [clientsData, setclientsData] = useState({
        id: "",
        name: "",
        surname: "",
        genre: "",
        email: ""
    })
    const postData = () => {
        axios
        .post('http://localhost:5050/createclient', clientsData)
        .then(() => console.log('Client Created'))
        .catch(err => {
          console.error(err);
        });
      }
      
  return (
        <Modal show={showEditModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>CREATE CLIENT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label className="form-label">Client ID:</label>
                    <input class="form-control" value = {clientsData?.id} onChange={(e) => setclientsData({...clientsData ,id:  e.target.value}) } type="text" placeholder= "Client ID..."  />
                </div>
                <div className="mb-3">
                    <label className="form-label">Client Name</label>
                    <input type="text" value = {clientsData?.name} onChange={(e) => setclientsData({...clientsData ,name:  e.target.value}) }  className="form-control" placeholder="Client Name..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">Client Surname</label>
                    <input type="text" value = {clientsData?.surname} onChange={(e) => setclientsData({...clientsData ,surname:  e.target.value}) } className="form-control"  placeholder="Client Surname..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">Genre</label>
                    <input type="text" value = {clientsData?.genre} onChange={(e) => setclientsData({...clientsData ,genre:  e.target.value}) } className="form-control"  placeholder="Genre..." />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" value = {clientsData?.email} onChange={(e) => setclientsData({...clientsData ,email:  e.target.value}) } className="form-control" placeholder="Email..." />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" className='btn btn-warning' onClick={handleCloseModal}>Cancel</button>
                <button variant="primary" className='btn btn-success' onClick={postData}>Confirm creation</button>
            </Modal.Footer>
        </Modal>
  )
}

export default ModalCreateClient