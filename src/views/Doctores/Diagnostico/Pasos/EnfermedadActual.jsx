import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const EnfermedadActual = ({state,setState}) => {
    useEffect(() => {

        if(!state){
            setState({
                enfermedad_actual: ''
            })
        }
    },[]);

    const handleChangeInput =(e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0.25}>
                    <Grid xs={12}>
                    <Item className='text-start d-flex flex-column gap-2 p-2' style={{ fontSize: '2rem'}}>
                    <TextField
                    style={{ fontSize: '1.8rem'}}
                    label='Descripción'
                    required
                    type='text'
                    className='w-100 mb-2'
                    name='enfermedad_actual'
                    value={state?.enfermedad_actual ?? ''}
                    onChange={handleChangeInput}
                    placeholder='Ingrese la descripcion de la enfermedad actual'
                    />
                </Item>
            </Grid>
            </Grid>
        </Box>
        </>
    );
}


export default EnfermedadActual;