import { getValue } from '@testing-library/user-event/dist/utils'
import React from 'react'
import TableHeaderElement from './TableHeaderElement'

function TableHeader({columns}) {
  return (
    <thead>
        <tr>
            {columns.map((value,index) => <TableHeaderElement columnName = {value} /> )}
        </tr>
    </thead>
  )
}

export default TableHeader