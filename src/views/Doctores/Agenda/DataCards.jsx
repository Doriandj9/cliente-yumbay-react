import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useAppConfig } from './../../../store/configAppStore';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { LoadingOne } from '../../../components/Loading';
import {FaLaptopMedical} from 'react-icons/fa';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { NavLink } from 'react-router-dom';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
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
const DataCards = ({data}) => {
    const [datos, setDatos] = useState(data);
    const [info, setInfo] = useState(null);
    const [send,setSend] = useState(false);
    const [error,setError] = useState(false);
    const [idState,setIdState] = useState(null);
    const [loading,setLoading] = useState(false);
    const appConfig = useAppConfig((state) => state.app);
    const colors = {
        1: 'red',
        2: 'black',
        3: '#5D8FC3',
        4: '#47C47F'
    };
    const format = Intl.DateTimeFormat('es',{
        month: 'long',
        year: 'numeric',
        day: 'numeric'
    }).format

    const handleClick = (e) => {
       const idRef = parseInt(e.target.dataset.id);
       const newDatos = datos.filter(dato => dato.id !== idRef);
       setDatos(newDatos);
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
    let index = 0;
    return (
        <>
        {
            loading && (
                <LoadingOne
                textInner='Espere por favor...'
                ancho={'50%'}
                />
            )
        }
        { datos &&
            // datos.map((dato) => {
            //     if(index > 4){
            //         index = 0;
            //     }
            //     index++;
            //            return (
            //            <Box key={dato.id}
            //             sx={{ minWidth: 275 }}>
            //                 <Card
            //                  variant="outlined">
            //                     <CardContent>
            //                     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            //                         Cita Médica Pendiente
            //                     </Typography>
            //                     <Typography variant="h5" component="div">
            //                     <Avatar sx={{ bgcolor: colors[index] }}>{dato.nombres.split(' ')[0].substring(0,2)}</Avatar>
            //                     </Typography>
            //                     <Typography sx={{ mb: 1.5 }} color="text.secondary">
            //                         Nombre: {dato.nombres}  {dato.apellidos} <br/>
            //                         Cédula: {dato.cedula}
            //                     </Typography>
            //                     <Typography variant="body2">
            //                         <span className='d-flex align-items-center gap-2'>
            //                         <BsFillCalendarDateFill style={{fontSize: '1.25rem' }}
            //                         className='text-black-50' /> {format(dayjs(dato.fecha))}
            //                         </span>
                                    
            //                         <br />
            //                         <span className='d-flex align-items-center gap-2'>
            //                         <MdAccessTimeFilled style={{fontSize: '1.25rem' }}
            //                         className='text-black-50' /> {dato.horas.split('|')[0]} a {dato.horas.split('|')[1]}
            //                         </span>
            //                     </Typography>
            //                     </CardContent>
            //                     <CardActions>
            //                         <Button data-id={dato.id} onClick={handleClick}
            //                          className='text-success' size="small">No mostrar</Button>
            //                     </CardActions>
            //                 </Card>
            //             </Box>
            //         )
            //     }
            // )

            ( 
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
                        <StyledTableCell align="center">Fecha</StyledTableCell>
                        <StyledTableCell align="center">Hora </StyledTableCell>
                        <StyledTableCell align="center"> </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((row,i) => (
                        <StyledTableRow key={i}>
                          <StyledTableCell style={{borderRight: '1px solid #ccc'  }} 
                           align="center">{row.cedula}</StyledTableCell>
                          <StyledTableCell style={{borderRight: '1px solid #ccc'  }}
                          align="center">{row.nombres}</StyledTableCell>
                          <StyledTableCell style={{borderRight: '1px solid #ccc'  }}
                          align="center">{row.apellidos}</StyledTableCell>
                          <StyledTableCell style={{borderRight: '1px solid #ccc'  }}
                          align="center">{format(dayjs(row.fecha))}</StyledTableCell>
                          <StyledTableCell style={{borderRight: '1px solid #ccc'  }}
                          align="center">{row.horas.split('|')[0]} a {row.horas.split('|')[1]}</StyledTableCell>
                          <StyledTableCell style={{ width: '5px'}}
                          align="center">
                            <NavLink to={`/doctores/diagnostico/${row.cedula}`}>
                                <FaLaptopMedical 
                                style={{ fontSize:'1.5rem', padding: 0 ,margin:0,cursor:'pointer'}} className='text-secondary' />
                                Diagnostico     
                            </NavLink>
                            </StyledTableCell>
                        </StyledTableRow>
                        
                        
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>)
            
        }
        {
            (datos.length === 0) && (
            <Box sx={ { margin: 2 } }>
                <Grid  spacing={0.5} >
                <Item className='text-center'>
                    <h4 className="text-secondary">EN ESTE MOMENTO NO CUENTA CON CITAS MÉDICAS AGENDADAS</h4>
                    <h5 className="text-black-50">GRACIAS POR USAR NUESTRO SISTEMA</h5>
                </Item>
                </Grid>
            </Box>
            )
        }

        </>
    );
}

export default DataCards;