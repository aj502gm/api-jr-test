import React from 'react'


function TableBodyClients({data}) {
  return (
    <tbody>
       
            {data.map((value,index)=>
             <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.surname}</td>
                <td>{value.genre}</td>
                <td>{value.email}</td>
                <td>
                  <button type="button" class="btn btn-danger">Danger</button>
                  <button type="button" class="btn btn-warning">Warning</button>
                </td>
             </tr>)}
    </tbody>
  )
}

export default TableBodyClients