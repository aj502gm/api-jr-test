import React, {useState, useEffect} from 'react'
import ModalProducts from "../Modals/ModalProducts"

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
             <tr key = {index}>
                <td>{value.id}</td>
                <td>{value.description}</td>
                <td>{value.name}</td>
                <td>{value.quantity}</td>
                <td>
                  <button type="button" className="btn btn-danger">Delete</button>
                  <button type="button" className="btn btn-warning" onClick={() => handleShowModal()}>Edit</button>
                </td>
                { productsData ? <ModalProducts showEditModal={showEditModal} handleCloseModal={handleCloseModal} data = {productsData} position = {index} /> : <></>}
             </tr>)}
             
    </tbody>
  )
}

export default TableBodyProducts