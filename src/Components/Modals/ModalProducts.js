import React, {useEffect, useState, useContext} from 'react'
import { Modal } from 'react-bootstrap';
import axios from "axios"
import {APIDataCT} from "../../Context/APIDataCT"

function EditModalP({showEditModal, handleCloseModal, data, position}) { 
  const {updateProductData,updateProductDataMethod,setUpdateProductData} = useContext(APIDataCT)

  const [productDatta, setproductDatta] = useState({
    id: "",
    name: "",
    description: "",
    quantity: 0
})
  
  useEffect(()=>{
      setproductDatta({
        id: data[position].id, 
        name: data[position].name,
        description: data[position].description,
        quantity: data[position].quantity})
  },[])
  return (
        <Modal show={showEditModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>EDIT PRODUCTS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label className="form-label">Edit product: </label>
                    <input class="form-control" type="text" placeholder={productDatta?.id} aria-label="Disabled input example" disabled />
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" value = {productDatta?.name} onChange={(e) => setproductDatta({...productDatta,name:  e.target.value}) } className="form-control" id="exampleFormControlInput1" placeholder="Name..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text"  value = {productDatta?.description} onChange={(e) => setproductDatta({...productDatta,description:  e.target.value}) }  className="form-control" id="exampleFormControlInput1" placeholder="Description..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantity</label>
                    <input type="text"  value = {productDatta?.quantity} onChange={(e) => setproductDatta({...productDatta,quantity:  e.target.value}) }  className="form-control" id="exampleFormControlInput1" placeholder="Quantity..." />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button variant="secondary" className='btn btn-warning' onClick={handleCloseModal}>Cancel</button>
                <button variant="primary" className='btn btn-success' onClick={() => updateProductDataMethod(productDatta,position)}>Confirm Edit</button>
            </Modal.Footer>
        </Modal>
  )
}

export default EditModalP