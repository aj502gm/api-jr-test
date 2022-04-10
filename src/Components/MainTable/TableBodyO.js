import React, {useState, useEffect, useContext} from 'react'
import ModalEditOrders from "../Modals/ModalEditOrders"
import TableBodyOElement from "./TableBodyOElement"
import {APIDataCT} from "../../Context/APIDataCT"

function TableBodyOrders() {
  const {ordersData, getOrdersData} = useContext(APIDataCT)
  useEffect(()=>{
      getOrdersData()
  },[])
  return (
    <tbody>
            {ordersData?.map((value,index)=>
            <TableBodyOElement 
                id={value.orderID}
                name = {value.clientName} 
                clientID = {value.clientId} 
                productID= {value.productID} 
                data={ordersData}
                position={index} />)}
    </tbody>
  )
}

export default TableBodyOrders