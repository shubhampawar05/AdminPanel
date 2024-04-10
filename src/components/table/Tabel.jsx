import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react'

const Tabel = () => {
    
  const rows= [
    {
      id:25465,
      product: "abc",
      img:"",
      customer:"abc",
      date:"1 march",
      amoutnt:555,
      method: "Cash on Delivery",
      status:"Approved"

    },
    {
      id:25465,
      product: "abc",
      img:"",
      customer:"abc",
      date:"1 march",
      amoutnt:555,
      method: "Cash on Delivery",
      status:"Approved"

    }, {
      id:25465,
      product: "abc",
      img:"",
      customer:"abc",
      date:"1 march",
      amoutnt:555,
      method: "Cash on Delivery",
      status:"Approved"

    }, {
      id:25465,
      product: "abc",
      img:"",
      customer:"abc",
      date:"1 march",
      amoutnt:555,
      method: "Cash on Delivery",
      status:"Approved"

    }
  ];
  
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Transactions</TableCell>
          <TableCell className="tableCell">products</TableCell>
          <TableCell className="tableCell">customer</TableCell>
          <TableCell className="tableCell">Date</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Payment Method</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
           key={row.id}
          >
            <TableCell className="tableCell" >
              {row.product}
            </TableCell>
            <TableCell className="tableCell">{row.status}</TableCell>
            <TableCell className="tableCell">{row.customer}</TableCell>
            <TableCell className="tableCell">{row.date}</TableCell>
            <TableCell className="tableCell">{row.amoutnt}</TableCell>
            <TableCell className="tableCell">{row.method}</TableCell>
            <TableCell className="tableCell">{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Tabel