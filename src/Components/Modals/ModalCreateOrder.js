import React, {useEffect, useState} from 'react'
import { Modal } from 'react-bootstrap';
import axios from "axios";
function ModalCreateOrder({showEditModal, handleCloseModal}) {
    const [ordersData, setordersData] = useState({
        orderID: "",
        id: "",
        name: "",
        productID: "",
    })

    const postData = () => {
        axios
        .post('http://localhost:5050/createOrder', ordersData)
        .then(() => console.log('Order Created'))
        .catch(err => {
          console.error(err);
        });
      }
      
  return (
        <Modal show={showEditModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>CREATE ORDER</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label className="form-label">Order ID</label>
                    <input type="text" placeholder={ordersData?.orderID} onChange={(e) => setordersData({...ordersData,orderID:  e.target.value}) }  className="form-control" placeholder="Order ID..."   />
                </div>
                <div className="mb-3">
                    <label className="form-label">Client ID</label>
                    <input type="text" value = {ordersData?.id} onChange={(e) => setordersData({...ordersData,id:  e.target.value}) } className="form-control" id="exampleFormControlInput1" placeholder="Client Name..." />
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
                <button variant="primary" className='btn btn-success' onClick={postData}>Confirm creation</button>
            </Modal.Footer>
        </Modal>
   )
}

export default ModalCreateOrder