import React, {useEffect, useState} from 'react'
import { Modal } from 'react-bootstrap';
import axios from 'axios';

function ModalCreateProducts({showEditModal, handleCloseModal}) { 
  
  const [productDatta, setproductDatta] = useState({
    id: "aj54j",
    name: "Samsung",
    description: "45 inches",
    quantity: "15"
})

  const postData = () => {
    axios
    .post('http://localhost:5050/createProduct', productDatta)
    .then(() => console.log('Book Created'))
    .catch(err => {
      console.error(err);
    });
  }
  
  return (
        <Modal show={showEditModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title>CREATE PRODUCT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3">
                    <label className="form-label">Product ID: </label>
                    <input class="form-control" value = {productDatta?.id} onChange={(e) => setproductDatta({...productDatta,id:  e.target.value}) } type="text" placeholder="Product ID..."  />
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
                <button variant="primary" className='btn btn-success' onClick={postData}>Confirm creation</button>
            </Modal.Footer>
        </Modal>
  )
}

export default ModalCreateProducts