import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Form } from 'react-router-dom';
import { Button } from '@mui/material';
import {MdSend} from 'react-icons/md';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Horario from './Horario';


import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Registro = () => {
    const [img, setImage] = useState(null);
    const [value, setValue] = useState(dayjs('2022-04-17T15:30'));
    const handleChange = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            const url = fileReader.result;
            setImage(url);
        }
    }

    return <>
    <Box sx={ { margin: 2 } }>
        <Grid  spacing={0.5} >
            <Item className='text-center'>
                <h4>Ingrese una nueva especialidad.</h4>
            </Item>
        </Grid>
    </Box>
    <Form 
      >
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.25}>
            <Grid xs={6}>
            <Item>
            <TextField className='w-100 mb-2'  placeholder='Por ejemplo: Odontología'
                label="Ingrese el nombre de la especialidad" variant="outlined"
                name='celular'
                />
             <TextField
            id="outlined-textarea"
            className='w-100 mb-2' 
            label="Ingrese la descripción de la especialidad"
            placeholder="¿ Qué es esa especialiadad ? (Se presentará en el inicio)"
            multiline
            />
            <Horario />
            {/* Time input */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker', 'TimePicker']}>
                    <TimePicker
                    label="Ingrese la hora de partida"
                    />
                    <TimePicker
                    label="Ingrese la hora de limite"
                    />
                </DemoContainer>
            </LocalizationProvider>

            </Item>

            </Grid>
            <Grid xs={6}>
            <Item>
            <label className='text-start d-block mb-2' style={{fontSize: '1.05rem' }}  
            htmlFor="">Selecione una imagen que represente la especialidad</label>
            <input onChange={handleChange} type="file" accept='image/*' className='input__file' />
            <Box component="div" sx={
                { p: 2, border: '1px dashed grey', 
                 width: '12rem', height: '8rem', margin: 'auto',marginTop: '0.5rem' }
        }>
              { img ? (<img src={img} alt="preve" style={{ maxWidth: '100%' , maxHeight: '100%' , width: '100%',height:'100%'}} />)
              :  (<p className='w-100 h-100 d-flex justify-content-center align-items-center'>
                    Aquí se presentará un previsualización de la imagen selecionada. 
               </p>)}
            </Box>
            </Item>
            </Grid>
            <Grid xs={12}>
            <Item>{
                <Button type='submit'
                className='w-50 m-auto d-flex align-items-center gap-2'
                variant="contained"
                >
                Registrar
                <MdSend 
                style={{
                    fontSize: '1.5rem'
                }}
                />
              </Button>
                }</Item>
            </Grid>
        </Grid>
        </Box>
      </Form>
    </>
}

export default Registro;