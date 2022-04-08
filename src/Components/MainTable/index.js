import React from 'react'
import TableBody from './TableBody'
import TableHeaderProducts from './TableHeaderP'
import TableHeaderOrders from './TableHeaderO'
import TableHeaderClients from './TablerHeaderC'

function DataTable({data, type}) {
  return (
    <table class="table">
       {
         (type === 'PRODUCTS')? <TableHeaderProducts /> 
          : (type === 'ORDERS')? <TableHeaderOrders /> : <TableHeaderClients />
       }
        <TableBody dataName={data}></TableBody>
    </table>
  )
}

export default DataTable