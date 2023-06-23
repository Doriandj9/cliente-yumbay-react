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
const Antecedentes = ({state,setState}) => {
    useEffect(() => {
        if(!state){
            setState({
                antecedentes_paso: ''
            });
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
                    label='Descripción de antecendentes'
                    required
                    type='text'
                    multiline
                    className='w-100 mb-2'
                    name='antecedentes_paso'
                    value={state?.antecedentes_paso ?? ''}
                    onChange={handleChangeInput}
                    placeholder='Ingrese la descripción de los antecedentes.'
                    />
                </Item>
            </Grid>
            </Grid>
        </Box>
        </>
    );
}

export default Antecedentes;