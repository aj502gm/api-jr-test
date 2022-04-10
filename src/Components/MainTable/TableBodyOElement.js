import React, {useState, useContext} from 'react'
import ModalEditOrders from '../Modals/ModalEditOrders'
import {APIDataCT} from "../../Context/APIDataCT"

function TableBodyOElement({id,clientID, name, productID, data, position}) {
    const [showEditModal, setShowEditModal] = useState(false);
    const handleCloseModal = () => setShowEditModal(false);
    const handleShowModal = () => setShowEditModal(true);
    const {deleteOrderData} = useContext(APIDataCT)
  return (
    <>
      <tr key = {position}>
                <td>{id}</td>
                <td>{clientID}</td>
                <td>{name}</td>
                <td>{productID}</td>
                <td>
                  <button type="button" className="btn btn-danger me-2" onClick={() => deleteOrderData(position)}>Delete</button>
                  <button value = {position} type="button" className="btn btn-warning" onClick={() => handleShowModal()}>Edit</button>
                </td>
                <ModalEditOrders showEditModal={showEditModal} handleCloseModal={handleCloseModal} data = {data} position = {position}/>
    </tr>
    </>
  )
}

export default TableBodyOElement