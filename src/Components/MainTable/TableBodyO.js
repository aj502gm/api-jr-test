import React, {useState, useEffect} from 'react'
import ModalEditOrders from "../Modals/ModalEditOrders"
import TableBodyOElement from "./TableBodyOElement"
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
            <TableBodyOElement 
                id={value.orderID}
                name = {value.clientName} 
                clientID = {value.clientID} 
                productID= {value.productID} 
                data={ordersData}
                position={index} />)}
    </tbody>
  )
}

export default TableBodyOrders