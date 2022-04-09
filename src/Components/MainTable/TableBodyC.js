import React, {useState, useEffect} from 'react'
import TableBodyCElement from './TableBodyCElement'
function TableBodyClients() {

    const [clientsData, setClientsData] = useState(undefined)

    useEffect(()=>{
        async function fetchData(){
          const response = await fetch("http://localhost:5050/clients");
          setClientsData(await response.json())
          console.log(clientsData)
        }
        fetchData();
      },[])
  return (
    <tbody>
            {clientsData?.map((value,index)=> 
            <TableBodyCElement 
                name = {value.name} 
                id = {value.id} 
                surname = {value.surname} 
                email = {value.email} 
                genre={value.genre}
                data={clientsData}
                position={index} />)}
    </tbody>
  )
}

export default TableBodyClients