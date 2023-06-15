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
import {FaUserCheck} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

const stydisable = {
  width:' 100%',
  height:' 100%',
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.5) ',}

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
    const day = dayjs();
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
    /**
     * @param {Event} e
     */
    const handleClick = (e,id) => {
       const idRef =  parseInt(id);
       const newDatos = datos.filter(dato => dato.id !== idRef);
       setDatos([...newDatos]);
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
        { (datos && datos.length !== 0) &&
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
                        <StyledTableCell align="center"> </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {datos.map((row,i) => {
                        const valid = day.format('YYYY-MM-DD') === row.fecha;
                        return (
                        <StyledTableRow 
                        className={ valid ? '' : 'disable-row'}
                        key={i}>
                          <StyledTableCell 
                        className={ valid ? '' : 'position-relative'}
                          style={{borderRight: '1px solid #ccc'  }} 
                           align="center">
                            {row.cedula}
                            {
                              valid ? '' : <div style={stydisable}></div>
                            }
                          </StyledTableCell>
                          <StyledTableCell
                        className={ valid ? '' : 'position-relative'}
                        style={{borderRight: '1px solid #ccc'  }}
                          align="center">{row.nombres}
                          {
                              valid ? '' : <div style={stydisable}></div>
                            }
                          </StyledTableCell>
                          <StyledTableCell 
                        className={ valid ? '' : 'position-relative'}
                        style={{borderRight: '1px solid #ccc'  }}
                          align="center">
                            {row.apellidos}
                            {
                              valid ? '' : <div style={stydisable}></div>
                            }
                            </StyledTableCell>
                            
                          <StyledTableCell 
                        className={ valid ? '' : 'position-relative'}
                        style={{borderRight: '1px solid #ccc'  }}
                          align="center">{format(dayjs(row.fecha))}
                          {
                              valid ? '' : <div style={stydisable}></div>
                            }
                          </StyledTableCell>
                          <StyledTableCell 
                        className={ valid ? '' : 'position-relative'}
                        style={{borderRight: '1px solid #ccc'  }}
                          align="center">{row.horas.split('|')[0]} a {row.horas.split('|')[1]}
                          {
                              valid ? '' : <div style={stydisable}></div>
                            }
                          </StyledTableCell>
                          <StyledTableCell 
                        className={ valid ? '' : 'position-relative'}
                        style={{ width: '5px',borderRight: '1px solid #ccc' }}
                          align="center">
                            <NavLink to={`/doctores/diagnostico/${row.cedula}`}>
                                <FaLaptopMedical 
                                style={{ fontSize:'1.5rem', padding: 0 ,margin:0,cursor:'pointer'}} className='text-secondary' />
                                Diagnostico     
                            </NavLink>
                            {
                              valid ? '' : <div style={stydisable}></div>
                            }
                            </StyledTableCell>
                            <StyledTableCell 
                        className={ valid ? '' : 'position-relative'}
                        style={{borderRight: '1px solid #ccc'  }}
                          align="center">
                            
                            <Button disabled={(valid || dayjs(row.fecha).unix() < day.unix() ) ? false : true}
                             onClick={(e) =>  handleClick(e,row.id)} variant='contained'
                            color='primary'
                                      className='' size="small">
                                        <FaUserCheck 
                                style={{ fontSize:'1.5rem', padding: 0,cursor:'pointer'}} className='me-1' />
                                        Atendido
                            </Button>
                            {
                              (valid || dayjs(row.fecha).unix() < day.unix() ) ? '' : <div style={stydisable}></div>
                            }
                          </StyledTableCell>
                        </StyledTableRow>
                        
                        
                      )})}
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