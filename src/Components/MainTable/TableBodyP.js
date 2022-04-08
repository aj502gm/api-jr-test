import React from 'react'
import TableBodyElement from './TableBodyElement'

function TableBodyProducts({data}) {
  return (
    <tbody>
       
            {data.map((value,index)=>
             <tr>
                <td>{value.id}</td>
                <td>{value.description}</td>
                <td>{value.name}</td>
                <td>{value.quantity}</td>
                <td>
                  <button type="button" class="btn btn-danger">Danger</button>
                  <button type="button" class="btn btn-warning">Warning</button>
                </td>
             </tr>)}
    </tbody>
  )
}

export default TableBodyProducts