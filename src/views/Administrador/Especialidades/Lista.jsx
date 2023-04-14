import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import { useFetch } from '../../../utils/hooks/useFetch';
import { useAppConfig } from './../../../store/configAppStore'
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import {MdOutlineAddCircle} from 'react-icons/md';
import {NavLink} from 'react-router-dom';
import { Edit } from '@mui/icons-material'
import Button from '@mui/material/Button';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Lista = () =>{
  const paginationNumber = 3;
  const appConfig = useAppConfig((state) => state.app);
  const { data,error } = useFetch({ path: appConfig.hostServer + 'api/especialidades', method: 'GET' });
    const [rowsDisplay, setRowsDisplay] = useState(null);
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
  return (
    <>
    { rowsDisplay ?
    (
      <>
      <Box sx={ { margin: 2 } }>
        <Grid  spacing={0.5} >
            <Item className='text-center'>
                <h4>Lista de especialiadades.</h4>
            </Item>
        </Grid>
    </Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Nº</TableCell>
            <TableCell style={{ position: 'relative' }}  align="left">Nombre de especialiadad
            <NavLink to='/director/especialidades/registro'>
                <MdOutlineAddCircle className='add__new' title='Agregar una nueva especialidad' />
                </NavLink>
            </TableCell>
            <TableCell align="left">Descripción de especialiadad</TableCell>
            <TableCell align="left">Editar de especialiadad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsDisplay.map((row,i) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i + 1}
               
              </TableCell>
              <TableCell align="left">{row.nombre}</TableCell>
              <TableCell align="left">{row.descripcion}</TableCell>
              <TableCell align="center">  
                  <Button variant="outlined" startIcon={<Edit />}>
                    Editar
                  </Button> 
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

export default Lista;