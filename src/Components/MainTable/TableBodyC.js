import React, {useState, useEffect, useContext} from 'react'
import TableBodyCElement from './TableBodyCElement'
import {APIDataCT} from "../../Context/APIDataCT"

function TableBodyClients() {

  const {clientsData, getClientsData} = useContext(APIDataCT)
  useEffect(()=>{
      getClientsData()
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