import React, {useState, useContext} from 'react'
import ModalProducts from '../Modals/ModalProducts'
import {APIDataCT} from "../../Context/APIDataCT"

function TableBodyPElement({code, name,description,quantity, data, position}) {
    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseModal = () => setShowEditModal(false);
    const handleShowModal = () => setShowEditModal(true);
    const {deleteProductData} = useContext(APIDataCT)
  return (
    <>
     <tr key = {position}>
                <td>{code}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>
                  <button type="button" className="btn btn-danger me-2" onClick={() => deleteProductData(position)}>Delete</button>
                  <button value = {position} type="button" className="btn btn-warning" onClick={() => handleShowModal()}>Edit</button>
                </td>
                <ModalProducts showEditModal={showEditModal} handleCloseModal={handleCloseModal} data = {data} position = {position}/>
    </tr>
    </>
  )
}

export default TableBodyPElement