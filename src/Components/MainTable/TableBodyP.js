import React, {useState} from 'react'
import ModalProducts from "../Modals/ModalProducts"

function TableBodyProducts({data}) {
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseModal = () => setShowEditModal(false);
  const handleShowModal = () => setShowEditModal(true);

  return (
    <tbody>
       
            {data.map((value,index)=>
             <tr>
                <td>{value.id}</td>
                <td>{value.description}</td>
                <td>{value.name}</td>
                <td>{value.quantity}</td>
                <td>
                  <button type="button" class="btn btn-danger">Delete</button>
                  <button type="button" class="btn btn-warning" onClick={() => handleShowModal()}>Edit</button>
                </td>
             </tr>)}
             <ModalProducts showEditModal={showEditModal} handleCloseModal={handleCloseModal} />
    </tbody>
  )
}

export default TableBodyProducts