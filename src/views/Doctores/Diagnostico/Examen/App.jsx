import { Button } from "@mui/material";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Medication }  from '@mui/icons-material';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Report from './Reporte/App';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useUserStore } from "../../../../store/userStore";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const App = ({state}) =>{
    const [open,setOpen] = useState(false);
    const [pdf ,setPdf] = useState(false);
    const [data,setData] = useState(null);
  const user = useUserStore((state) => state.user);

    const handleClick = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
    useEffect(() => {
        setData({
          ...state,
          motivo_examen: data?.motivo_examen ? data.motivo_examen : '',
          examen_solicitud: data?.examen_solicitud ? data.examen_solicitud : '',
          examen_indicaciones: data?.examen_indicaciones ? data.examen_indicaciones : '',
        });
    },[state])
    const pdfView = () => {
        setOpen(false);
        setPdf(true);
    }
    const handleChangeDate = (value,validation) => {
      setData({
          ...data,

          fecha_nacimiento_fake: value
      })
 }
    return (<>
    <div className='w-100 text-end mb-2'>
              <Button startIcon={<Medication />}
              endIcon={<Medication />}
               onClick={handleClick} style={{ marginRight: '1rem' }}
              variant='contained' color='primary'  >
                  solicitud de exámenes de laboratorio clínico
              </Button>
    </div>
    <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              INGRESE LA INFORMACIÓN PARA GENERAR UNA SOLICITUD DE EXÁMEN CLÍNICO
            </DialogTitle>
            <DialogContent>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0.25}>
                    <Grid xs={6}>
                    <Item>
                    <TextField className="w-100 mb-2"
                        label='Nº cédula de cuidadania'
                        placeholder="Por ejemplo: 01234556789"
                        name="cedula"
                        value={data?.cedula ?? ''}
                        required
                        onChange={handleChange}
                        />
                        <TextField className="w-100 mb-2"
                        label='Primer y segundo nombre'
                        required
                        placeholder="Por ejemplo: Juan Lucas"
                        name="nombres"
                        onChange={handleChange}
                        value={data?.nombres ?? ''}
                        />
                        <TextField className="w-100 mb-3"
                        label='Primer y segundo apellido'
                        required
                        placeholder="Por ejemplo: Arias Segura"
                        onChange={handleChange}
                        name="apellidos"
                        value={data?.apellidos ?? ''}
                        />
                        
                        <input type="hidden" name="fecha_nacimiento_fake"
                         value={dayjs(data?.fecha_nacimiento_fake ?? '').format('YYYY-MM-DD')} />
                    </Item>
                    </Grid>
                    <Grid xs={6}>
                    <Item>
                    <TextField className="w-100 mb-2"
                        label='Ingrese su dirección'
                        onChange={handleChange}
                        value={data?.direccion ?? ''}
                        placeholder="Por ejemplo: Guaranda, Av. Los Trigales"
                        name="direccion"
                        />
                    <TextField className="w-100 mb-2"
                        label='Número de celular'
                        placeholder="Por ejemplo: 098776543"    
                        onChange={handleChange}
                        value={data?.celular ?? ''}
                        required
                        name="celular"
                        />
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                         components={['DatePicker']}>
                            <DatePicker onChange={handleChangeDate}
                             className="w-100 mb-2"
                             value={data?.fecha_nacimiento_fake ?? ''}
                            label="Fecha de nacimiento" />
                        </DemoContainer>
                        </LocalizationProvider>
                    </Item>
                    </Grid>
                </Grid>
                    <Grid sx={12}>
                      <Item>
                        <TextField className="w-100"
                        onChange={handleChange}
                        label='Motivo de la solicitud'
                        multiline
                        placeholder=" Especificar los síntomas, signos o razones médicas por las cuales se están solicitando los exámenes de laboratorio."
                        name="motivo_examen"

                        />
                        </Item>
                      <Item>
                        <TextField className="w-100"
                        onChange={handleChange}
                        label='Exámenes específicos solicitados'
                        multiline
                        placeholder="Enumerar claramente los exámenes de laboratorio que se necesitan. Es importante ser específico y utilizar los nombres correctos de los exámenes para evitar confusiones."
                        name="examen_solicitud"
                        />
                        </Item>
                      <Item>
                        <TextField className="w-100"
                        onChange={handleChange}
                        label=' Indicaciones especiales'
                        multiline
                        placeholder="Si hay alguna instrucción especial para el paciente antes de realizar los exámenes, como ayuno, suspensión de medicamentos u otras preparaciones, deben incluirse en la solicitud."
                        name="examen_indicaciones"
                        />
                      </Item>
                    </Grid>
            </Box>
            </DialogContent>
            <DialogActions>
            <Button onClick={pdfView} type='submit'>
                Generar
              </Button>
              <Button onClick={handleClose}>
                Salir
              </Button>
            </DialogActions>
          </Dialog>

        {
            pdf && (<Report datos={data} setPdf={setPdf} user={user} />)
        }
    </>)
}

export default App;