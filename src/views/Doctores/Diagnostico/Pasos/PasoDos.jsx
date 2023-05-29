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
                        {/* <TextField
                        style={{ fontSize: '1.8rem' }}
                            id="time"
                            required
                            name='hora'
                            label="Hora de atención"
                            type="time"
                            value={state?.hora ?? ''}
                            defaultValue="00:00"
                            onChange={handleChangeInput}
                            className={' w-100 mb-2'}
                            InputLabelProps={{
                            shrink: true,
                            }}
                            inputProps={{
                            step: 300, // 5 min
                            }}
                        /> */}
                    <TextField
                    style={{ fontSize: '1.8rem' }}
                    label='Motivo de consulta'
                    required
                    type='text'
                    className='w-100 mb-2'
                    name='motivo'
                    value={state?.motivo ?? ''}
                    onChange={handleChangeInput}
                    placeholder='Por ejemplo: Dolor en el pecho y dificultad para respirar'
                    />
                    {
                        (user?.nombre_especialidad?.toUpperCase()?.includes('ODONTOLOGIA')) ? '' :
                        
                    (
                    <>
                    <TextField
                    style={{ fontSize: '1.8rem' }}
                    label='Antecedentes médicos'
                    required
                    type='text'
                    className='w-100 mb-2'
                    name='antecendentes'
                    onChange={handleChangeInput}
                    value={state?.antecendentes ?? ''}

                    placeholder='Por ejemplo: Hipertensión arterial, diabetes mellitus tipo 2, hipercolesterolemia, obesidad'
                    />
                    <TextField
                    style={{ fontSize: '1.8rem' }}
                    label='Tratamiento actual'
                    required
                    type='text'
                    name='tratamiento'
                    value={state?.tratamiento ?? ''}
                    onChange={handleChangeInput}
                    className='w-100 mb-2'
                    placeholder='Por ejemplo: Metformina, losartán, simvastatina'
                    />
                    <TextField
                    style={{ fontSize: '1.8rem' }}
                    label='Alergias'
                    required
                    type='text'
                    className='w-100 mb-2'
                    name='alergias'
                    onChange={handleChangeInput}
                    value={state?.alergias ?? ''}

                    placeholder='Por ejemplo: Ninguna conocida'
                    />
                    <TextField
                    style={{ fontSize: '1.8rem' }}
                    label='Hábitos tóxicos'
                    required
                    type='text'
                    className='w-100 mb-2'
                    onChange={handleChangeInput}
                    name='habitos'
                    value={state?.habitos ?? ''}
                    placeholder='Por ejemplo: No fuma, no consume alcohol ni drogas'
                    />
                    <TextField
                    style={{ fontSize: '1.8rem' }}
                    label='Otros antecedentes relevantes'
                    required
                    type='text'
                    className='w-100 mb-2'
                    onChange={handleChangeInput}
                    name='otros_antecedentes'
                    value={state?.otros_antecedentes ?? ''}
                    placeholder='Por ejemplo: Padre y abuelo paterno fallecidos por enfermedad cardiovascular'
                    />
                    </>
                    )
                    }
                </Item>
            </Grid>
            </Grid>
        </Box>
        </>
    );
}

export default PasoDos;