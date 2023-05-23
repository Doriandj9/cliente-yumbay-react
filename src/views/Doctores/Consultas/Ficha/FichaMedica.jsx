import { useEffect, useState } from "react";
import { useParams  } from 'react-router-dom';
import { useAppConfig } from './../../../../store/configAppStore';
import {AiOutlineSearch} from 'react-icons/ai';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from "dayjs";
import Ficha from "./Ficha";
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {FaFileMedical} from 'react-icons/fa';

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
const FichaMedica = () => {
  const paginationNumber = 2;
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [day, setDay] = useState(dayjs());
    const [dataResult,setDataResult] = useState(null);
    const [rowsDisplay, setRowsDisplay] = useState([]);
    const {cedula} = useParams();


    const handleChange = (e,page) => {
    const init = (page - 1 ) * paginationNumber;
    const limit = init + paginationNumber;
    const newData = data.data.slice(init,limit);
    setRowsDisplay(newData);
    }
    useEffect(() => {
    if(data){
    setRowsDisplay(data.data.slice(0,paginationNumber));
    }
    },[data])
   
  const appConfig = useAppConfig((state) => state.app);

   useEffect(() => {
    setLoading(true);
    fetch(`${appConfig.hostServer}api/doctor/fichas/medicas/${cedula}`)
    .then(query => query.json())
    .then((res) =>{
        setData(res)
        if(res.ident){
          setDataResult(res.data[0]);
        }
    })
    .catch(setError)
    .finally(() => {
        setLoading(false);
    })

   }, []);
   const handleFilter = (value,validation) => {
        setDay(value);
        const valueRes = data.data.filter((d) => d.fecha_control === value.format('YYYY-MM-DD'));
        setDataResult(valueRes[0]);
    }
    
    const handleFicha = (e,dato) => {
      setDataResult(dato);
    }
    return (
        <>
        <h2 className='title-list '>Listado de fichas médicas </h2>

            <div className='d-flex justify-content-between ps-3 pe-3 pb-2 m-0'>
                <div>
                    Total de resultados {data?.data?.length ?? 'ninguna'}
                </div>
                <div>
                    <div className='busqueda'>
                        <span className='d-flex align-items-center gap-2'
                        >
                        <AiOutlineSearch className='text-secondary'
                        style={{ fontSize:'1.2rem' }}
                         /></span> 
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer sx={
                            {
                                fontSize: '0.5rem'                            }
                        }
                         components={['DatePicker']}>
                            <DatePicker sx={{
                                fontSize:'0.5rem'
                            }}
                             onChange={handleFilter}
                             className="w-100 mb-4"
                             value={day}
                            label="Filtrar por fecha" />
                        </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>
            </div>
        { data && (
    <>  
    <TableContainer style={{
      position: 'relative',
      width: '100%',
      fontSize: '0.5rem',
    }} className='mb-3'
    component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  style={{ fontSize: '0.75rem' }}  align="center">Fecha de control </StyledTableCell>
            <StyledTableCell style={{ fontSize: '0.75rem' }} align="center">Cédula</StyledTableCell>
            <StyledTableCell  style={{ fontSize: '0.75rem' }}  align="center">Nombres</StyledTableCell>
            <StyledTableCell  style={{ fontSize: '0.7rem5' }}  align="center">Apellidos</StyledTableCell>
            <StyledTableCell  style={{ fontSize: '0.75rem' }}  align="center">Motivo de consulta</StyledTableCell>
            <StyledTableCell  style={{ fontSize: '0.75rem' }}  align="center"> </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.length === 0 ?
            <TableRow className='text-end'>
            <TableCell colSpan={3}>
            <span className="text-primary display-6"> No se encontro fichas médicas </span>
            </TableCell>
          </TableRow>
            :
          rowsDisplay.map((row) => (
            <StyledTableRow key={row.cedula}>
                <StyledTableCell style={{borderRight: '1px solid #ccc', fontSize: '0.75rem',height: '1.5rem', padding:0  }} 
               align="center">{row.fecha_control}</StyledTableCell>
              <StyledTableCell style={{borderRight: '1px solid #ccc', fontSize: '0.75rem' ,height: '1.5rem', padding:0  }} 
               align="center">{row.cedula}</StyledTableCell>
              <StyledTableCell style={{borderRight: '1px solid #ccc', fontSize: '0.75rem' ,height: '1.5rem', padding:0  }}
              align="center">{row.nombres}</StyledTableCell>
              <StyledTableCell style={{borderRight: '1px solid #ccc', fontSize: '0.75rem' ,height: '1.5rem', padding:0  }}
              align="center">{row.apellidos}</StyledTableCell>
              <StyledTableCell style={{borderRight: '1px solid #ccc', fontSize: '0.75rem'  }}
              align="center">{row.motivo_consulta}</StyledTableCell>
              <StyledTableCell style={{ width: '5px', fontSize: '0.75rem' ,height: '1.5rem', padding:0 }}
              align="center">
               
                    <FaFileMedical onClick={(e) => handleFicha(e,row)}
                    style={{ fontSize:'1.5rem', padding: 0 ,margin:0,cursor:'pointer'}} className='text-secondary' />     
                    Ver
                </StyledTableCell>
            </StyledTableRow>
            
            
          ))}
          <TableRow className='text-end'>
            <TableCell colSpan={3}>
            <Pagination  onChange={handleChange}
            className='d-flex justify-content-center' count={Math.ceil(data.data.length / paginationNumber)} size="small" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <h2 className='title-list mt-2 mb-2'> Información de la ficha médica </h2>
    </>)
    }
            {data && (<Ficha data={dataResult} />)}
        </>
    );
}

export default FichaMedica;