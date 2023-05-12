import { useEffect, useState } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
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
import { useAppConfig } from './../../../../store/configAppStore' ;
import { CEDULA_REG_EXPRE } from './../../../../utils/web/componentes/ConstExpres';
import { LoadingOne } from './../../../../components/Loading';
import {AiFillEdit} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
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
  
const App = () => {
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [consulta,setConsulta] = useState(false);
    const [cedula, setCedula] = useState(null);
    const appConfig = useAppConfig((state) => state.app);
    const [send,setSend] = useState(false);
    const [idState,setIdState] = useState(null);
    const [info, setInfo] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if(consulta){
          setLoading(true);
          fetch(`${appConfig.hostServer}api/citas-medicas/agendadas/${cedula}`)
          .then(query => query.json())
          .then(setData)
          .catch(setError)
          .finally(() => {
            setConsulta(false);
            setLoading(false);
          });
        }
    },[consulta])
      const handleClick = (e) => {
        const idRef = parseInt(e.target.dataset.id);
        
        //peticion
        setIdState(idRef);
        setSend(true);
    }
   useEffect(() => {
       if(send){
           setLoading(true);
           fetch(appConfig.hostServer + `api/citas-medicas/estado/${idState}`)
           .then(query => query.json())
           .then(setInfo)
           .catch(setError)
           .finally(() => {
               setLoading(false);
               setSend(false);
           })
       }
   },[send]);
    const handleChange = (e) => {
      if(CEDULA_REG_EXPRE.test(e.target.value.trim())){
        setCedula(e.target.value.trim());
        setConsulta(true);
      }
    }

    const handleSearch = (e) => {
      if(CEDULA_REG_EXPRE.test(e.target.value.trim())){
        setCedula(e.target.value.trim());
        setConsulta(true);
      }else{
        alert('Ingrese un número de cédula válido')
      }
    }
   
   if(info){
    if(info.ident){
      navigate(`/recepcionista/cita-medica/agendar/${cedula}`);
    }else{
      alert('Ocurrio un error intentelo más tarde');
    }
   }
   if(error){
    alert('Ocurrio un error intentelo más tarde');
   }
    return (
        <>
        {
          loading && (<LoadingOne ancho={'50%'} textInner='Cargando información...' /> )
        }
        <h2 className='title-list'>Listado de citas médicas del paciente.</h2>
        <div className='d-flex justify-content-between ps-3 pe-3 pb-2 m-0'>
                <div>
                    Total de resultados {data?.data?.length ?? 'ninguna'}
                </div>
                <div>
                    <div className='busqueda'>
                        <span className='d-flex align-items-center gap-2'
                        > Buscar
                        <AiOutlineSearch className='text-secondary'
                        style={{ fontSize:'1.2rem' }}
                         /></span> 
                        <input onChange={handleChange}
                         type="search"  placeholder='Ingrese el número de cédula del paciente...' />
                    </div>
                </div>
            </div>
            <TableContainer style={{
      position: 'relative',
      width: '100%'
    }}
    component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Cédula</StyledTableCell>
            <StyledTableCell align="center">Nombres</StyledTableCell>
            <StyledTableCell align="center">Apellidos</StyledTableCell>
            <StyledTableCell align="center">Especialidad</StyledTableCell>
            <StyledTableCell align="center">Fecha y hora</StyledTableCell>
            <StyledTableCell align="center"> Editar </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.data.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell style={{borderRight: '1px solid #ccc'  }} 
               align="center">{row.cedula}</StyledTableCell>
              <StyledTableCell style={{borderRight: '1px solid #ccc'  }}
              align="center">{row.nombres}</StyledTableCell>
              <StyledTableCell style={{borderRight: '1px solid #ccc'  }}
              align="center">{row.apellidos}</StyledTableCell>
              <StyledTableCell style={{borderRight: '1px solid #ccc'  }}
              align="center">{row.nombre}</StyledTableCell>
              <StyledTableCell style={{borderRight: '1px solid #ccc'  }}
              align="center">{row.fecha} y {row.hora.split('|')[0]} Hasta {row.hora.split('|')[1]} </StyledTableCell>
              <StyledTableCell
              style={{ width: '5px'}}
              align="center">
                    <AiFillEdit data-id={row.id} onClick={handleClick}
                    style={{ fontSize:'1.5rem', padding: 0 ,margin:0,cursor:'pointer'}} className='text-secondary' />  
                  Editar
                </StyledTableCell>
            </StyledTableRow>
            
            
          ))}
          {
            (!data && !cedula) && (
              <StyledTableRow >
                <StyledTableCell colSpan={6}>
                  Ingrese un número de cédula en la parte superior del buscador.
                </StyledTableCell>
              </StyledTableRow>
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
        </>
    );
}

export default App;