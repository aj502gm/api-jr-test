import React from 'react'
import TableHeaderProducts from './TableHeaderP'
import TableHeaderOrders from './TableHeaderO'
import TableHeaderClients from './TablerHeaderC'
import TableBodyProducts from './TableBodyP'
import TableBodyClients from './TableBodyC'
import TableBodyOrders from './TableBodyO'

function DataTable({data, type}) {
  return (
    <table class="table">
       {
         (type === 'PRODUCTS')? 
              <> 
                <TableHeaderProducts /> <TableBodyProducts data={data} />
              </>
          : (type === 'ORDERS')? 
              <>
                <TableHeaderOrders /> <TableBodyOrders data={data} />
              </> : 
              <>
                <TableHeaderClients /> <TableBodyClients data={data} />
              </>
       }
    </table>
  )
}

export default DataTable