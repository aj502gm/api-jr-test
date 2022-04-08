import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'

function TableHeaderOrders() {
  return (
    <thead>
        <tr>
          <th scope='col'>OrderID</th>
          <th scope='col'>ClientID</th>
          <th scope='col'>ClientName</th>
          <th scope='col'>ProductID</th>
          <th scope='col'></th>
        </tr>
    </thead>
  )
}

export default TableHeaderOrders