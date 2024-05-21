import React from 'react'
import { useMemo } from 'react';
import { 
  MaterialReactTable,
  useMaterialReactTable
 } from 'material-react-table'
import {data, res} from '../data/data'
import {FaSearch, FaUser} from 'react-icons/fa'
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Rmt() {

  //Defining column headers.
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //simple recommended way to define a column
        header: 'Name',
        Header: <div><FaUser/> Name</div>,
      },
      {
        accessorKey: 'age',
        header: 'Age',
      },
      {
        accessorKey: 'sex',
        header: 'Sex',
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'account_id',
        header: 'Account',
      },
      {
        accessorKey: 'type',
        header: 'Account Type',
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableRowSelection: false, //enable some features
    enableColumnOrdering: true, //enable a feature for all columns
    muiTableContainerProps: { sx: { maxHeight: '75vh', background: 'rgb(36, 36, 36)'}},
    muiTopToolbarProps: {sx: { background: 'rgb(108, 0, 141)'}},
    muiTableBodyCellProps: {sx: {background: 'rgb(36, 36, 36)'}},
    muiBottomToolbarProps: {sx: {background: 'rgb(36, 36, 36)'}},
    muiTableHeadCellProps: {sx: {background: 'rgb(36, 36, 36)'}},
    enableColumnActions: false
  });

  const tableTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'dark',
          background: {
            default: "#000"
          }
        }
      })
  );

  return (
    <div className="contentWrapper">
        <ThemeProvider theme={tableTheme}>
        <MaterialReactTable
          table={table}
        />
      </ThemeProvider>
    </div>
  )
}

export default Rmt