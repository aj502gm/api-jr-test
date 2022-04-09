import React, {useState} from 'react'
import ModalCreateOrder from '../Modals/ModalCreateOrder';

function TableHeaderOrders() {
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseModal = () => setShowEditModal(false);
  const handleShowModal = () => setShowEditModal(true);

  return (
    <thead>
        <tr>
          <th scope='col'>OrderID</th>
          <th scope='col'>ClientID</th>
          <th scope='col'>ClientName</th>
          <th scope='col'>ProductID</th>
          <th scope='col'>
              <button type="button" onClick={() => handleShowModal()} className="btn btn-primary" >Create</button>
          </th>
          <ModalCreateOrder showEditModal={showEditModal} handleCloseModal={handleCloseModal}/>
        </tr>
    </thead>
  )
}

export default TableHeaderOrders