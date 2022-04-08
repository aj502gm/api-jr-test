import React, {useState} from 'react'
import ModalEditOrders from "../Modals/ModalEditOrders"

function TableBodyOrders({data}) {
    const [showEditModal, setShowEditModal] = useState(false);

    const handleCloseModal = () => setShowEditModal(false);
    const handleShowModal = () => setShowEditModal(true);
  return (
    <tbody>
            {data.map((value,index)=>
             <tr key = {index}>
                <td>{value.orderID}</td>
                <td>{value.clientID}</td>
                <td>{value.clientName}</td>
                <td>{value.productID}</td>
                <td>
                  <button type="button" className="btn btn-danger" >Delete</button>
                  <button type="button" className="btn btn-warning" onClick={() => handleShowModal()}>Edit</button>
                </td>
             </tr>)}
             <ModalEditOrders showEditModal={showEditModal} handleCloseModal={handleCloseModal} />
    </tbody>
  )
}

export default TableBodyOrders