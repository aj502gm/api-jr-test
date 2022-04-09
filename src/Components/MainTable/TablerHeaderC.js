import React, {useState} from 'react'
import ModalCreateClient from '../Modals/ModalCreateClient'
function TableHeaderClients() {
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseModal = () => setShowEditModal(false);
  const handleShowModal = () => setShowEditModal(true);
  return (
    <thead>
        <tr>
          <th scope='col'>ClientID</th>
          <th scope='col'>Name</th>
          <th scope='col'>Surname</th>
          <th scope='col'>Genre</th>
          <th scope='col'>Email</th>
          <th scope='col'>
            <button type="button" onClick={() => handleShowModal()} className="btn btn-primary" >Create</button>
          </th>
          <ModalCreateClient showEditModal={showEditModal} handleCloseModal={handleCloseModal}/>
        </tr>
    </thead>
  )
}

export default TableHeaderClients