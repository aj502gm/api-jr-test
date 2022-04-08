import React from 'react'


function TableBodyOrders({data}) {
  return (
    <tbody>
       
            {data.map((value,index)=>
             <tr>
                <td>{value.orderID}</td>
                <td>{value.clientID}</td>
                <td>{value.clientName}</td>
                <td>{value.productID}</td>
                <td>
                  <button type="button" class="btn btn-danger">Danger</button>
                  <button type="button" class="btn btn-warning">Warning</button>
                </td>
             </tr>)}
    </tbody>
  )
}

export default TableBodyOrders