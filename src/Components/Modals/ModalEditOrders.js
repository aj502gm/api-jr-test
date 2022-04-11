import React, {useEffect, useState, useContext} from 'react'
import { Modal } from 'react-bootstrap';
import {APIDataCT} from "../../Context/APIDataCT"

function EditModalO({showEditModal, handleCloseModal, data, position}) {
    const {updateOrderData, setUpdateOrderData,UpdateOrderDataMethod} = useContext(APIDataCT)
    const [ordersData, setordersData] = useState({
        orderID: "",
        clientId: "",
        name: "",
        productID: "",
    })
      
      useEffect(()=>{
          console.log(data[position])
        setordersData({
            orderID: data[position].id,
            clientId: data[position].clientId,
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
                    <input type="text" placeholder={ordersData?.orderID} className="form-control" id="exampleFormControlInput1"   disabled/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Client ID</label>
                    <input type="text" placeholder={ordersData?.clientId} className="form-control" id="exampleFormControlInput1"   disabled/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Client Name</label>
                    <input type="text" value = {ordersData?.name} onChange={(e) => setordersData({...ordersData,name:  e.target.value}) } className="form-control" id="exampleFormControlInput1" placeholder="Client Name..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">ProductID</label>
                    <input type="text" value = {ordersData?.productID} onChange={(e) => setordersData({...ordersData,productID:  e.target.value}) } className="form-control" id="exampleFormControlInput1" placeholder="ProductID..." />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" className='btn btn-warning' onClick={handleCloseModal}>Cancel</button>
                <button variant="primary" className='btn btn-success' onClick = {()=> UpdateOrderDataMethod(ordersData,position)}>Confirm Edit</button>
            </Modal.Footer>
        </Modal>
   )
}

export default EditModalO