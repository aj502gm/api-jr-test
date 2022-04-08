import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'

function TableHeaderClients() {
  return (
    <thead>
        <tr>
          <th scope='col'>ClientID</th>
          <th scope='col'>Name</th>
          <th scope='col'>Surname</th>
          <th scope='col'>Genre</th>
          <th scope='col'>Email</th>
          <th scope='col'></th>
        </tr>
    </thead>
  )
}

export default TableHeaderClients