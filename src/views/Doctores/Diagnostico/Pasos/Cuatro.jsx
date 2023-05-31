import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Cuatro = ({state,setState}) => {
    const [inputs,setInputs] = useState(state?.inputs ?? null);
    useEffect(() => {
        if(!state){
            setState({
                medicamento_0: '',
                tratamiento_0: '',
                inputs: [],
                
            })
        }
    },[]); 

    const handleChangeInput =(e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const handleClick = () => {
        const inptNew = inputs ? [...inputs] : [];
        inptNew.push(inputs ? (inputs.length -1 ) + 1 : 0);
        setInputs(inptNew);
        setState({
            ...state,
            inputs: inptNew
        })
    }

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0.05}>
                    <Grid xs={12}>
                    <Item className='d-flex flex-column gap-2 flex-wrap justify-content-start' style={{ fontSize: '2rem'}}>
                    <h3 className='flex-grow w-100'>Medicamentos y Posología o tratamiento</h3>
                    <div className='d-flex gap-2'>
                        <TextField
                        style={{ fontSize: '1.8rem', width: '50%' }}
                        label='Medicamento 1'
                        required
                        type='text'
                        className='mb-2'
                        name='medicamento_0'
                        onChange={handleChangeInput}
                        value={state?.medicamento_0 ?? ''}
                        placeholder='Ejemplo: Paracetamol 500mg'
                        />
                        <TextField
                        style={{ fontSize: '1.8rem', width: '50%' }}
                        label={`Indicación para ${state?.medicamento_0 ?? ''}`}
                        required
                        type='text'
                        className='w-100 mb-2'
                        onChange={handleChangeInput}
                        name='tratamiento_0'
                        value={state?.tratamiento_0 ?? ''}
                        placeholder='Ejemplo: Tomar una tableta cada 6 horas según sea necesario para el dolor.'
                        />
                    </div>
                    {/* <div className='d-flex gap-2'> */}
                    {inputs && inputs.map((element,i) => {
                        return (
                    <div className='d-flex gap-2'>
                        <TextField key={element}
                        style={{ fontSize: '1.8rem', width: '50%' }}
                        label={`Medicamento ${i + 2}`}
                        required
                        type='text'
                        className='mb-2'
                        name={`medicamento${i+2}_${i+1}`}
                        onChange={handleChangeInput}
                        value={state[`medicamento${i+2}_${i+1}`] ?? ''}
                        placeholder='Ejemplo: Paracetamol 500mg'
                        />

                        <TextField key={element + 'tratamiento'}
                        style={{ fontSize: '1.8rem', width: '50%' }}
                        label={`Instrucciones para ${state[`medicamento${i+2}_${i+1}`] ?? ''}`}
                        required
                        type='text'
                        className='w-100  mb-2'
                        name={`tratamiento${i+2}_${i+1}`}
                        onChange={handleChangeInput}
                        value={state[`tratamiento${i+2}_${i+1}`] ?? ''}
                        placeholder='Ejemplo: Tomar una tableta cada 6 horas según sea necesario para el dolor.'
                        />
                    </div>
                        
                        );
                    })}
                    {/* {inputs && inputs.map((element,i) => {
                        return (
                        <TextField key={element + 'tratamiento'}
                        style={{ fontSize: '1.8rem', width: '50%' }}
                        label={`Instrucciones para ${state[`medicamento${i+2}_${i+1}`] ?? ''}`}
                        required
                        type='text'
                        className='w-100  mb-2'
                        name={`tratamiento${i+2}_${i+1}`}
                        onChange={handleChangeInput}
                        value={state[`tratamiento${i+2}_${i+1}`] ?? ''}
                        placeholder='Ejemplo: Tomar una tableta cada 6 horas según sea necesario para el dolor.'
                        />);
                    })} */}
                    {/* </div> */}
                    <Fab onClick={handleClick} color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Item>
            </Grid>
            {/* <Grid xs={12}>
                    <Item className='text-start d-flex flex-column gap-2 p-2' style={{ fontSize: '2rem'}}>
                    <h3 className='flex-grow w-100'>Posología o tratamiento</h3>

                    <TextField
                    style={{ fontSize: '1.8rem', width: '20%' }}
                    label={`Instrucciones para ${state?.medicamento_0 ?? ''}`}
                    required
                    type='text'
                    className='w-100 mb-2'
                    onChange={handleChangeInput}
                    name='tratamiento_0'
                    value={state?.tratamiento_0 ?? ''}
                    placeholder='Ejemplo: Tomar una tableta cada 6 horas según sea necesario para el dolor.'
                    />
                    {inputs && inputs.map((element,i) => {
                        return (
                        <TextField key={element + 'tratamiento'}
                        style={{ fontSize: '1.8rem', width: '20%' }}
                        label={`Instrucciones para ${state[`medicamento${i+2}_${i+1}`] ?? ''}`}
                        required
                        type='text'
                        className='w-100  mb-2'
                        name={`tratamiento${i+2}_${i+1}`}
                        onChange={handleChangeInput}
                        value={state[`tratamiento${i+2}_${i+1}`] ?? ''}
                        placeholder='Ejemplo: Tomar una tableta cada 6 horas según sea necesario para el dolor.'
                        />);
                    })}
                    </Item>
            </Grid> */}
            </Grid>
        </Box>
        </>
    );
}

export default Cuatro;