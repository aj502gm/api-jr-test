import React, {useState} from 'react'
import ModalEditOrders from '../Modals/ModalEditOrders'
function TableBodyOElement({id,clientID, name, productID, data, position}) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [isAvailable, setIsAvailable] = useState(true)
    const handleCloseModal = () => setShowEditModal(false);
    const handleShowModal = () => setShowEditModal(true);
    const handleDeleteButton = async () => {
       let response2 = await fetch(`http://localhost:5050/deleteOrder/${data[position].orderID}`)
       setIsAvailable(false)
    }
  return (
    <>
      {isAvailable ? <tr key = {position}>
                <td>{id}</td>
                <td>{clientID}</td>
                <td>{name}</td>
                <td>{productID}</td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={handleDeleteButton}>Delete</button>
                  <button value = {position} type="button" className="btn btn-warning" onClick={() => handleShowModal()}>Edit</button>
                </td>
                <ModalEditOrders showEditModal={showEditModal} handleCloseModal={handleCloseModal} data = {data} position = {position}/>
    </tr>:<></>}
    </>
  )
}

export default TableBodyOElement