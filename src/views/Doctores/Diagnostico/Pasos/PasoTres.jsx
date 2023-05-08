import { makeStyles } from '@material-ui/core/styles';
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

const PasoTres = ({state, setState}) => {
    useEffect(() => {

        if(!state){
            setState({
                presion: '',
                frecuencia: '',
                respiracion: '',
                temperatura: '',
                peso: '',
                altura: '',
                cardiaco: '',
                pulmonar: '',
                otros_hallasgos: ''
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
                <Grid container spacing={0.05}>
                    <Grid xs={12}>
                    <Item className='d-flex gap-2 flex-wrap justify-content-around' style={{ fontSize: '2rem'}}>
                    <h3 className='flex-grow w-100'>Signos vitales</h3>
                    <TextField
                    style={{ fontSize: '1.8rem', width: '20%' }}
                    label='Presión arterial'
                    required
                    type='text'
                    className='mb-2'
                    name='presion'
                    onChange={handleChangeInput}
                    value={state?.presion ?? ''}
                    placeholder='Por ejemplo: 140/90'
                    />
                    <TextField
                    style={{ fontSize: '1.8rem', width: '20%' }}
                    label='Frecuencia cardiaca'
                    required
                    type='text'
                    name='frecuencia'
                    value={state?.frecuencia ?? ''}
                    onChange={handleChangeInput}
                    className='mb-2'
                    placeholder='Por ejemplo: 80 latidos/min'
                    />
                    <TextField
                    style={{ fontSize: '1.8rem', width: '20%' }}
                    label='Frecuencia respiratoria'
                    required
                    type='text'
                    className='mb-2'
                    name='respiracion'
                    onChange={handleChangeInput}
                    value={state?.respiracion ?? ''}
                    placeholder='Ejemplo: 18 respiraciones/min'
                    />
                    <TextField
                    style={{ fontSize: '1.8rem', width: '20%' }}
                    label='Temperatura'
                    required
                    type='text'
                    className='mb-2'
                    onChange={handleChangeInput}
                    name='temperatura'
                    value={state?.temperatura ?? ''}
                    placeholder='Por ejemplo: 36.5 °C'
                    />
                    <TextField
                    style={{ fontSize: '1.8rem', width: '20%' }}
                    label='Peso'
                    required
                    type='text'
                    className='mb-2'
                    onChange={handleChangeInput}
                    name='peso'
                    value={state?.peso ?? ''}
                    placeholder='Por ejemplo: 95 kg'
                    />
                    <TextField
                    style={{ fontSize: '1.8rem', width: '20%' }}
                    label='Altura'
                    required
                    type='text'
                    className='mb-2'
                    onChange={handleChangeInput}
                    name='altura'
                    value={state?.altura ?? ''}
                    placeholder='Por ejemplo: 1.75 m'
                    />
                </Item>
            </Grid>
            <Grid xs={12}>
                    <Item className='text-start d-flex flex-column gap-2 p-2' style={{ fontSize: '2rem'}}>
                    <TextField
                    style={{ fontSize: '1.8rem', width: '20%' }}
                    label='Auscultación cardiaca'
                    required
                    type='text'
                    className='w-100 mb-2'
                    onChange={handleChangeInput}
                    name='cardiaco'
                    value={state?.cardiaco ?? ''}
                    placeholder='Por ejemplo: Ruidos rítmicos, sin soplos ni frémitos'
                    />
                    <TextField
                    style={{ fontSize: '1.8rem', width: '20%' }}
                    label='Auscultación pulmonar'
                    required
                    type='text'
                    className='w-100 mb-2'
                    onChange={handleChangeInput}
                    name='pulmonar'
                    value={state?.pulmonar ?? ''}
                    placeholder='Por ejemplo: Murmullo vesicular presente en ambos campos, sin ruidos agregados'
                    />
                    <TextField
                    style={{ fontSize: '1.8rem', width: '20%' }}
                    label='Otros hallazgos relevantes'
                    required
                    type='text'
                    className='w-100 mb-2'
                    onChange={handleChangeInput}
                    name='otros_hallasgos'
                    value={state?.otros_hallasgos ?? ''}
                    placeholder='Por ejemplo: No se observan edemas en extremidades inferiores, no se palpan adenomegalias ni hepatomegalia'
                    />
                    </Item>
            </Grid>
            </Grid>
        </Box>
        </>
    );
}

export default PasoTres;