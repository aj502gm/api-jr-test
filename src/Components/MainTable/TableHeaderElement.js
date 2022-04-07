import React from 'react'

function TableHeaderElement({columnName}) {
  return (
      <th scope='col'>{columnName}</th>
  )
}

export default TableHeaderElement