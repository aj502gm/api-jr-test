import React, {useState} from 'react'
import ModalProducts from '../Modals/ModalProducts'
function TableBodyPElement({code, name,description,quantity, data, position}) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [isAvailable, setIsAvailable] = useState(true)
    const handleCloseModal = () => setShowEditModal(false);
    const handleShowModal = () => setShowEditModal(true);
    const handleDeleteButton = async () => {
      let response2 = await fetch(`http://localhost:5050/deleteProduct/${data[position].code}`)
      //DELETE OK... HOW TO DESTROY PRODUCT CHILD
      setIsAvailable(false)
    }
  return (
    <>
      {isAvailable ? <tr key = {position}>
                <td>{code}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>
                  <button type="button" className="btn btn-danger" onClick={handleDeleteButton}>Delete</button>
                  <button value = {position} type="button" className="btn btn-warning" onClick={() => handleShowModal()}>Edit</button>
                </td>
                <ModalProducts showEditModal={showEditModal} handleCloseModal={handleCloseModal} data = {data} position = {position}/>
    </tr>:<></>}
    </>
  )
}

export default TableBodyPElement