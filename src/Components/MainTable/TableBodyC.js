import React, {useState} from 'react'
import ModalEditClients from '../Modals/ModalEditClients'

function TableBodyClients({data}) {
    const [showEditModal, setShowEditModal] = useState(false);

    const handleCloseModal = () => setShowEditModal(false);
    const handleShowModal = () => setShowEditModal(true);
  return (
    <tbody>
       
            {data.map((value,index)=>
             <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.surname}</td>
                <td>{value.genre}</td>
                <td>{value.email}</td>
                <td>
                  <button type="button" class="btn btn-danger">Delete</button>
                  <button type="button" class="btn btn-warning" onClick={() => handleShowModal()}>Edit</button>
                </td>
             </tr>)}
             <ModalEditClients showEditModal={showEditModal} handleCloseModal={handleCloseModal} />
    </tbody>
  )
}

export default TableBodyClients