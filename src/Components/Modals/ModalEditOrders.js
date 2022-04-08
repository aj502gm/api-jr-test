import React, {useEffect, useState} from 'react'
import { Modal } from 'react-bootstrap';

function EditModalO({showEditModal, handleCloseModal, data, position}) {
    const [ordersData, setordersData] = useState({
        orderID: "",
        id: "",
        name: "",
        productID: "",
    })
      
      useEffect(()=>{
        setordersData({
            orderID: data[position].id,
            id: data[position].orderID, 
            name: data[position].clientName,
            productID: data[position].productID})
      },[])
  return (
        <Modal show={showEditModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>EDIT ORDERS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               
                <div className="mb-3">
                    <label className="form-label">Order ID</label>
                    <input type="text" placeholder={ordersData?.id} className="form-control" id="exampleFormControlInput1"   disabled/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Client Name</label>
                    <input type="text" value = {ordersData?.name} onChange={(e) => setordersData({name:  e.target.value}) } className="form-control" id="exampleFormControlInput1" placeholder="Client Name..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">ProductID</label>
                    <input type="text" value = {ordersData?.productID} onChange={(e) => setordersData({productID:  e.target.value}) } className="form-control" id="exampleFormControlInput1" placeholder="ProductID..." />
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