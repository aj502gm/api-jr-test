import React, {useContext, useEffect} from 'react'
import { Modal } from 'react-bootstrap';
import {APIDataCT} from "../../Context/APIDataCT"
function ModalCreateOrder({showEditModal, handleCloseModal}) {
    const {newOrderData,setNewOrderData,createOrderData} = useContext(APIDataCT)
    
  return (
        <Modal show={showEditModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>CREATE ORDER</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label className="form-label">Order ID</label>
                    <input type="text" value={newOrderData?.orderID} onChange={(e) => setNewOrderData({...newOrderData,orderID:  e.target.value}) }  className="form-control" placeholder="Order ID..."   />
                </div>
                <div className="mb-3">
                    <label className="form-label">Client ID</label>
                    <input type="text" value = {newOrderData?.clientId} onChange={(e) => setNewOrderData({...newOrderData,clientId:  e.target.value}) } className="form-control"  placeholder="Client Name..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">Client Name</label>
                    <input type="text" value = {newOrderData?.clientName} onChange={(e) => setNewOrderData({...newOrderData,clientName:  e.target.value}) } className="form-control" placeholder="Client Name..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">ProductID</label>
                    <input type="text" value = {newOrderData?.productID} onChange={(e) => setNewOrderData({...newOrderData,productID:  e.target.value}) } className="form-control"  placeholder="ProductID..." />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" className='btn btn-warning' onClick={handleCloseModal}>Cancel</button>
                <button variant="primary" className='btn btn-success' onClick={createOrderData}>Confirm creation</button>
            </Modal.Footer>
        </Modal>
   )
}

export default ModalCreateOrder