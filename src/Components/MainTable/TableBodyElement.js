import React from 'react'

function TableBodyElement({columnsName}) {
  return (
      <tr>
          {columnsName.map((value,index)=> <td> {columnsName[index]} </td>)}
          <td>
            <button type="button" class="btn btn-danger">Danger</button>
            <button type="button" class="btn btn-warning">Warning</button>
          </td>
      </tr>
  )
}

export default TableBodyElement