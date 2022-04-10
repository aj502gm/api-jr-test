import React, {useContext,useState, useEffect} from 'react'
import ModalProducts from "../Modals/ModalProducts"
import TableBodyPElement from './TableBodyPElement';
import {APIDataCT} from "../../Context/APIDataCT"
const TableBodyProducts = () => {  
  
  const {productsData, getProductData} = useContext(APIDataCT)
  useEffect(()=>{
      getProductData()
  },[])
  return (
    <tbody>
            {productsData?.map((value,index)=> 
            <TableBodyPElement 
                name = {value.name} 
                code = {value.id}
                description = {value.description}
                quantity={value.quantity}
                data={productsData}
                position={index} /> )}
    </tbody>
  )
}

export default TableBodyProducts