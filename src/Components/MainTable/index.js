import React from 'react'
import TableBody from './TableBody'
import TableHeader from './TableHeader'

function DataTable({ columns, data}) {
  return (
    <table class="table">
        <TableHeader columns = {columns}></TableHeader>
        <TableBody dataName={data}></TableBody>
    </table>
  )
}

export default DataTable