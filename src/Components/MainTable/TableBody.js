import React from 'react'
import TableBodyElement from './TableBodyElement'

function TableBody({dataName}) {
  return (
    <tbody>
            {dataName.map((value,index)=> <TableBodyElement  columnsName={value}/>)}
    </tbody>
  )
}

export default TableBody