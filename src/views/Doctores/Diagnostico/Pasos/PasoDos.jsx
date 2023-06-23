import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useUserStore } from '../../../../store/userStore';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



const PasoDos = ({state,setState}) => {
    const user = useUserStore((state) => state.user);
    useEffect(() => {

        if(!state){
            setState({
                hora: '',
                motivo: '',
                antecendentes: '',
                tratamiento: '',
                alergias: '',
                habitos: '',
                otros_antecedentes: ''
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
                    style={{ fontSize: '1.8rem' }}
                    label='Motivo de consulta'
                    required
                    type='text'
                    className='w-100 mb-2'
                    name='motivo'
                    value={state?.motivo ?? ''}
                    onChange={handleChangeInput}
                    multiline
                    placeholder='Por ejemplo: Dolor en el pecho y dificultad para respirar'
                    />
                </Item>
            </Grid>
            </Grid>
        </Box>
        </>
    );
}

export default PasoDos;