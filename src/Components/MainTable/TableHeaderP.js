import React, {useState} from 'react'
import ModalCreateProducts from '../Modals/ModalCreateProducts';

function TableHeaderProducts() {
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseModal = () => setShowEditModal(false);
  const handleShowModal = () => setShowEditModal(true);
  return (
    <thead>
        <tr>
          <th scope='col'>Code</th>
          <th scope='col'>Name</th>
          <th scope='col'>Description</th>
          <th scope='col'>Quantity</th>
          <th scope='col'>
            <button type="button" onClick={() => handleShowModal()} className="btn btn-primary" >Create</button>
          </th>
          <ModalCreateProducts showEditModal={showEditModal} handleCloseModal={handleCloseModal}/>
        </tr>
    </thead>
  )
}

export default TableHeaderProducts