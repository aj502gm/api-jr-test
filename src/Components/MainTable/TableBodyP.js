import React, {useState, useEffect} from 'react'
import ModalProducts from "../Modals/ModalProducts"
import TableBodyPElement from './TableBodyPElement';
function TableBodyProducts() {
  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseModal = () => setShowEditModal(false);
  const [productsData, setProductsData] = useState(undefined)
  const handleShowModal = () => setShowEditModal(true);
  
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch("http://localhost:5050/products");
      setProductsData(await response.json())
      console.log(productsData)
    }
    fetchData();
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