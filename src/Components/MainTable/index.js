import React from 'react'
import TableHeaderProducts from './TableHeaderP'
import TableHeaderOrders from './TableHeaderO'
import TableHeaderClients from './TablerHeaderC'
import TableBodyProducts from './TableBodyP'
import TableBodyClients from './TableBodyC'
import TableBodyOrders from './TableBodyO'

function DataTable( {type}) {
  return (
    <table className="table">
       {
         (type === 'PRODUCTS')? 
              <> 
                <TableHeaderProducts /> <TableBodyProducts />
              </>
          : (type === 'ORDERS')? 
              <>
                <TableHeaderOrders /> <TableBodyOrders />
              </> : 
              <>
                <TableHeaderClients /> <TableBodyClients  />
              </>
       }
    </table>
  )
}

export default DataTable