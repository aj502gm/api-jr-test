import React, {useState, useEffect} from 'react'
import ModalEditOrders from "../Modals/ModalEditOrders"

function TableBodyOrders() {
    const [showEditModal, setShowEditModal] = useState(false);

    const handleCloseModal = () => setShowEditModal(false);
    const handleShowModal = () => setShowEditModal(true);
    const [ordersData, setOrdersData] = useState(undefined)

    useEffect(()=>{
        async function fetchData(){
          const response = await fetch("http://localhost:5050/orders");
          setOrdersData(await response.json())
          console.log(ordersData)
        }
        fetchData();
      },[])
  return (
    <tbody>
            {ordersData?.map((value,index)=>
             <tr key = {index}>
                <td>{value.orderID}</td>
                <td>{value.clientID}</td>
                <td>{value.clientName}</td>
                <td>{value.productID}</td>
                <td>
                  <button type="button" className="btn btn-danger" >Delete</button>
                  <button type="button" className="btn btn-warning" onClick={() => handleShowModal()}>Edit</button>
                </td>
                { ordersData ?<ModalEditOrders showEditModal={showEditModal} handleCloseModal={handleCloseModal} data = {ordersData} position = {index}/>:<></>}
             </tr>)}
    </tbody>
  )
}

export default TableBodyOrders