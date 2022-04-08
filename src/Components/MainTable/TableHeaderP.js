import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'

function TableHeaderProducts() {
  return (
    <thead>
        <tr>
          <th scope='col'>Code</th>
          <th scope='col'>Name</th>
          <th scope='col'>Description</th>
          <th scope='col'>Quantity</th>
          <th scope='col'></th>
        </tr>
    </thead>
  )
}

export default TableHeaderProducts