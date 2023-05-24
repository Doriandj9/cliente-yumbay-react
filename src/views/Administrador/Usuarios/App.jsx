import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import {MdOutlineAddCircle} from 'react-icons/md';
import {NavLink} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai';
import {MdSend} from 'react-icons/md';
import { Edit } from '@mui/icons-material'
import { useAppConfig } from "../../../store/configAppStore";
import { CEDULA_REG_EXPRE } from '../../../utils/web/componentes/ConstExpres';
import Button from '@mui/material/Button';
import { LoadingOne } from '../../../components/Loading';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const App = () => {
    const [loading, setLoading] = useState(false);
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [checkboxes,setCheckboxes] = useState(new Set());
    const [change,setChange] = useState(false);
    const [info,setInfo] = useState(null);
    const [update,setUpdate] = useState(true);
    const appConfig = useAppConfig((state) => state.app);
    const paginationNumber = 3;
    const [rowsDisplay, setRowsDisplay] = useState(null);
    const handleChange = (e,page) => {
              const init = (page - 1 ) * paginationNumber;
              const limit = init + paginationNumber;
              const newData = data.data.slice(init,limit);
              setRowsDisplay(newData);
    }
    useEffect(() => {
        if(update){
        setLoading(true);
        fetch(`${appConfig.hostServer}api/usuarios`)
        .then(query => query.json())
        .then(setData)
        .catch(setError)
        .finally(() => {
            setLoading(false);
            setUpdate(false)
        })
    }

    },[update])
    useEffect(() => {
        if(data){
          setRowsDisplay(data.data.slice(0,paginationNumber));
        }
      },[data])
      const handleSearch = (e) => {
        if(CEDULA_REG_EXPRE.test(e.target.value.trim())){
           if(data){
            const filter = data.data.filter(user => user.cedula === e.target.value.trim() );
            if(filter.length === 0){
                alert('Lo sentimos no existe este usuario');
            }
            setRowsDisplay(filter);
           }
        }
    }
    const handleCheck = (e) => {
        if(e.target.checked){
            checkboxes.add(e.target.value)
            const newValues = checkboxes.values();
            const values = new Set(newValues);
            setCheckboxes(values)
        }else{
            checkboxes.delete(e.target.value)
            const newValues = checkboxes.values();
            const values = new Set(newValues);
            setCheckboxes(values)
        }
    }
    const handleClink =() =>{
        setChange(true);
    }   

    useEffect(() => {
        if(change){
        setLoading(true);
        const formData = new FormData();
        formData.append('usuarios',[...checkboxes]);
        fetch(`${appConfig.hostServer}api/option/user`,{method: 'POST',body: formData})
        .then(query => query.json())
        .then(setInfo)
        .catch(setError)
        .finally(() => {
            setLoading(false);
            setChange(false);
            setUpdate(true);
        })
        }
    },[change])
    return (
        <>
        {
            loading && <LoadingOne textInner='Cargando...' ancho={'50%'} />
        }
        <Box sx={ { margin: 2 } }>
            <Grid  spacing={0.5} >
                <Item className='text-center'>
                    <h4>Lista de usuarios</h4>
                    <p className='p-2'>
                        Puede activar o desactivar a los usuarios, restringiendo o habilitando el acceso a la plataforma.
                    </p>
                </Item>
            </Grid>
        </Box>
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
                        <input  type="search" onChange={handleSearch}  placeholder='Ingrese el número de cédula del paciente...' />
                    </div>
                </div>
            </div>
        { rowsDisplay ?
        (
          <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align='center'>Nº Cédula</TableCell>
                <TableCell style={{ position: 'relative' }}  align="left">Nombres
                </TableCell>
                <TableCell align="left">Apellidos</TableCell>
                <TableCell align="left">Estado</TableCell>
                <TableCell align="left">Activar/Desactivar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsDisplay.map((row,i) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.cedula}
                   
                  </TableCell>
                  <TableCell align="left">{row.nombres}</TableCell>
                  <TableCell align="left">{row.apellidos}</TableCell>
                  <TableCell align="left">
                   {row?.estado}
                    </TableCell>
                  <TableCell align="center">  
                      
                        <input onChange={handleCheck} value={row.id}
                        className='btn btn-primary' type="checkbox" style={{
                            width:'1.2rem',
                            height: '1.2rem'
                        }} />
                      
                  </TableCell>
                </TableRow>
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
        <Grid xs={12}>
                    <Item>{
                        <Button type='button'
                        onClick={handleClink}
                        className='w-50 m-auto d-flex align-items-center gap-2'
                        variant="contained"
                        >
                        Guardar Cambios
                        <MdSend 
                        style={{
                            fontSize: '1.5rem'
                        }}
                        />
                    </Button>
                        }</Item>
                    </Grid>
        </>
        ) : (
          <>
            <Skeleton variant="rectangular" className='mt-2 w-50 m-auto' height={60} />
            <Stack spacing={ 0.25 } className='mt-2'>
    
            <Skeleton variant="rectangular" className='w-100' height={60} />
            <Skeleton variant="rectangular" className='w-100' height={60} />
            <Skeleton variant="rectangular" className='w-100' height={60} />
            <Skeleton variant="rectangular" className='w-100' height={60}>
            </Skeleton>
            <Stack spacing={0.25} className='w-100 justify-content-center align-items-center flex-row'>
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="circular" width={20} height={20} />
              <Skeleton variant="circular" width={20} height={20} />
            </Stack>
            </Stack>
          </>
        )}
        </>
      );
}

export default App;