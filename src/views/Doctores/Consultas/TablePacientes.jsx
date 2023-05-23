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
import Pagination from '@mui/material/Pagination';
import Informacion from './Informacion';

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



const  TablePacientes = ({data}) =>{
  const paginationNumber = 6;
  const [rowsDisplay, setRowsDisplay] = useState([]);
  const [info,setInfo] = useState(false); 
  const [paceinte,setPaciente] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e,page) => {
            const init = (page - 1 ) * paginationNumber;
            const limit = init + paginationNumber;
            const newData = data.slice(init,limit);
            setRowsDisplay(newData);
    }
    useEffect(() => {
      if(data){
        setRowsDisplay(data.slice(0,paginationNumber));
      }
    },[data])
  const handleInformacion = (e,cedula) => {
    const res = data.filter(pacein => pacein.cedula === cedula)[0];
    console.log(cedula,res);
    setPaciente(res);
    setInfo(true);
    setOpen(true);
  }
  console.log(paceinte);
  return (
    <> 
    {
     rowsDisplay && ( 
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
          {rowsDisplay.map((row) => (
            <StyledTableRow key={row.cedula}>
              <StyledTableCell data-cedula={row.cedula} 
              onClick={(e) => handleInformacion(e,row.cedula)}
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
          <TableRow className='text-end'>
            <TableCell colSpan={3}>
            <Pagination  onChange={handleChange}
            className='d-flex justify-content-center' count={Math.ceil(data.length / paginationNumber)} size="small" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>)
    }

    {
      /**Informacion del paciente */
      (info && paceinte) && <Informacion info={paceinte} open={open} handleClose={handleClose} />

    }
    </>
  );
}

export default TablePacientes;