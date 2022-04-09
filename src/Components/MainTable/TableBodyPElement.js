import React, {useState} from 'react'
import ModalProducts from '../Modals/ModalProducts'
function TableBodyPElement({code, name,description,quantity, data, position}) {
    const [showEditModal, setShowEditModal] = useState(false);

    const handleCloseModal = () => setShowEditModal(false);
    const handleShowModal = () => setShowEditModal(true);
  return (
    <tr key = {position}>
                <td>{code}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>
                  <button type="button" className="btn btn-danger">Delete</button>
                  <button value = {position} type="button" className="btn btn-warning" onClick={() => handleShowModal()}>Edit</button>
                </td>
                <ModalProducts showEditModal={showEditModal} handleCloseModal={handleCloseModal} data = {data} position = {position}/>
    </tr>
  )
}

export default TableBodyPElement