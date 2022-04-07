import React from 'react'
import TableHeader from './TableHeader'

function DataTable({ columns}) {
  return (
    <table class="table">
        <TableHeader columns = {columns}></TableHeader>
    </table>
  )
}

export default DataTable