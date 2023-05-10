import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {HiInformationCircle} from 'react-icons/hi';
import {FaFileMedical} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const  TablePacientes = ({data}) =>{
  const handleInformacion = (e) => {

  }
  const handleFicha = (e) => {

  }
  return (
    <> 
    {
     data && ( 
    <TableContainer style={{
      position: 'relative',
      width: '100%'
    }}
    component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> </StyledTableCell>
            <StyledTableCell align="center">Cédula</StyledTableCell>
            <StyledTableCell align="center">Nombres</StyledTableCell>
            <StyledTableCell align="center">Apellidos</StyledTableCell>
            <StyledTableCell align="center">Nº Celular</StyledTableCell>
            <StyledTableCell align="center"> </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.cedula}>
              <StyledTableCell
               style={{ width: '5px',borderRight: '1px solid #ccc', cursor: 'pointer'  }} component="th" scope="row">
              <HiInformationCircle style={{ fontSize:'1.5rem', padding: 0 ,margin:0}} className='text-primary' />
              </StyledTableCell>
              <StyledTableCell style={{borderRight: '1px solid #ccc'  }} 
               align="center">{row.cedula}</StyledTableCell>
              <StyledTableCell style={{borderRight: '1px solid #ccc'  }}
              align="center">{row.nombres}</StyledTableCell>
              <StyledTableCell style={{borderRight: '1px solid #ccc'  }}
              align="center">{row.apellidos}</StyledTableCell>
              <StyledTableCell style={{borderRight: '1px solid #ccc'  }}
              align="center">{row.celular}</StyledTableCell>
              <StyledTableCell style={{ width: '5px'}}
              align="center">
                <NavLink to={`fichas-medicas/${row.cedula}`}>
                    <FaFileMedical 
                    style={{ fontSize:'1.5rem', padding: 0 ,margin:0,cursor:'pointer'}} className='text-secondary' />     
                </NavLink>
                </StyledTableCell>
            </StyledTableRow>
            
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>)
    }
    </>
  );
}

export default TablePacientes;