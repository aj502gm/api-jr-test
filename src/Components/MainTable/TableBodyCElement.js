import React, {useState} from 'react'
import ModalEditClients from '../Modals/ModalEditClients'
function TableBodyCElement({id, name, surname, genre, email, data, position}) {
    const [showEditModal, setShowEditModal] = useState(false);

    const handleCloseModal = () => setShowEditModal(false);
    const handleShowModal = () => setShowEditModal(true);
  return (
    <tr key = {position}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{genre}</td>
                <td>{email}</td>
                <td>
                  <button value = {position} type="button" className="btn btn-warning" onClick={() => handleShowModal()}>Edit</button>
                </td>
                <ModalEditClients showEditModal={showEditModal} handleCloseModal={handleCloseModal} data = {data} position = {position}/>
    </tr>
  )
}

export default TableBodyCElement