import React, {useEffect, useState, useContext} from 'react'
import { Modal } from 'react-bootstrap';
import {APIDataCT} from "../../Context/APIDataCT"

function ModalCreateProducts({showEditModal, handleCloseModal}) { 
  const {newProductData,setNewProductData,createProductData} = useContext(APIDataCT)
  
  return (
        <Modal show={showEditModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>CREATE PRODUCT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label className="form-label">Product ID: </label>
                    <input class="form-control" value = {newProductData?.id} onChange={(e) => setNewProductData({...newProductData,id:  e.target.value}) } type="text" placeholder="Product ID..."  />
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" value = {newProductData?.name} onChange={(e) => setNewProductData({...newProductData,name:  e.target.value}) } className="form-control" id="exampleFormControlInput1" placeholder="Name..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text"  value = {newProductData?.description} onChange={(e) => setNewProductData({...newProductData,description:  e.target.value}) }  className="form-control" id="exampleFormControlInput1" placeholder="Description..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input type="text"  value = {newProductData?.quantity} onChange={(e) => setNewProductData({...newProductData,quantity:  e.target.value}) }  className="form-control" id="exampleFormControlInput1" placeholder="Quantity..." />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" className='btn btn-warning' onClick={handleCloseModal}>Cancel</button>
                <button variant="primary" className='btn btn-success' onClick={createProductData}>Confirm creation</button>
            </Modal.Footer>
        </Modal>
  )
}

export default ModalCreateProducts