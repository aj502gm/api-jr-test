import React, {useState, useEffect, useContext} from 'react'
import { Modal } from 'react-bootstrap';
import {APIDataCT} from "../../Context/APIDataCT"

function EditModalC({showEditModal, handleCloseModal, data, position}) {
    const {updateClientData, setUpdateClientData,UpdateClientDataMethod} = useContext(APIDataCT)

    const [clientsData, setclientsData] = useState({
        id: "",
        name: "",
        surname: "",
        genre: "",
        email: ""
    })
      
      useEffect(()=>{
          console.log(data[position])
        setclientsData({
            id: data[position].id, 
            name: data[position].name,
            surname: data[position].surname,
            genre: data[position].genre,
            email: data[position].email})
      },[])
  return (
        <Modal show={showEditModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>EDIT CLIENTS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label className="form-label">Edit client: </label>
                    <input class="form-control" type="text" placeholder= {clientsData?.id} aria-label="Disabled input example" disabled />
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
                    <input type="email" value = {clientsData?.email} onChange={(e) => setclientsData({...clientsData ,email:  e.target.value}) } className="form-control" placeholder="Email" />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" className='btn btn-warning' onClick={handleCloseModal}>Cancel</button>
                <button variant="primary" className='btn btn-success' onClick={()=>UpdateClientDataMethod(clientsData,position)}>Confirm Edit</button>
            </Modal.Footer>
        </Modal>
  )
}

export default EditModalC