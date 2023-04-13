import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Form } from 'react-router-dom';
import { Button } from '@mui/material';
import {MdSend} from 'react-icons/md';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useAppConfig } from './../../../store/configAppStore';

import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import AlertWeb from '../../../components/AlertWeb';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Registro = () => {
    const [img, setImage] = useState(null);
  const [formData, setFormData] = useState(null);
    const [messageWarning, setMessageWarning] = useState(null);
    const [open,setOpen] = useState(false);
    const [data,setData] = useState(null);
    const [error, setError] = useState(null);
    const [send, setSend] = useState(null);
    const [times, setTimes] = useState({
        start: null,
        end:null
    });
    const [days, setDays] = useState(new Set());
    const configApp = useAppConfig((state) => state.app);
    useEffect(() => {
        if(send){
            fetch(configApp.hostServer + 'api/add/especialidad',{method: 'POST', body: formData})
            .then(query => query.json())
            .then(setData)
            .catch(console.log)
        }
    },[send])
    const handleChange = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            const url = fileReader.result;
            setImage(url);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataForm = new FormData(e.target);
        const daysValues = [...days].join('-');
        if(dataForm.get('nombre').trim() === ''){
            setMessageWarning('Por favor, ingrese el campo nombre en el formulario.');
            setOpen(true);
            return;
        }
        if(dataForm.get('descripcion').trim() === ''){
            setMessageWarning('Por favor, ingrese el campo descripción en el formulario.');
            setOpen(true);
            return;
        }

        if(daysValues === ''){
            setMessageWarning('Por favor, ingrese el horario de la especialidad, selecione los dias laborales.');
            setOpen(true);
            return;
        }
        if(!times.start){
            setMessageWarning('Por favor, registre la hora de ingreso de los dias laborales.');
            setOpen(true);
            return;
        }
        if(!times.end){
            setMessageWarning('Por favor, registre la hora de salida de los dias laborales.');
            setOpen(true);
            return;
        }
        if(dataForm.get('imagen').size <= 0){
            setMessageWarning('Por favor, selecione una imagen para la especialiadad.');
            setOpen(true);
            return;
        }
        
        dataForm.append('dias',daysValues.toUpperCase());
        dataForm.append('hora_ingreso',times.start);
        dataForm.append('hora_salida',times.end);
        console.log([...dataForm]);
        setFormData(dataForm);
        setSend(true);

    }
    const handleTimes = (value,context,name) => {
        setTimes({
           ...times,
           [name]: context.validationError === null ? dayjs(value).format('HH:mm') : null
        })
    }

    const handleClickClose = () => {
        setOpen(false);
    }
    return <>
    {/* Alertas si no ingreso correctamente un dato del formulario */}
    {messageWarning && (
        <>
        <AlertWeb 
        opened={open}
        menssageAlert={messageWarning}
        severity='info'
        handleCloseAlert={handleClickClose}
        />
        </>
    )}
    <Box sx={ { margin: 2 } }>
        <Grid  spacing={0.5} >
            <Item className='text-center'>
                <h4>Ingrese una nueva especialidad.</h4>
            </Item>
        </Grid>
    </Box>
    <Form onSubmit={handleSubmit}
      >
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.25}>
            <Grid xs={6}>
            <Item>
            <TextField className='w-100 mb-2'  placeholder='Por ejemplo: Odontología'
                label="Ingrese el nombre de la especialidad" variant="outlined"
                name='nombre'
                />
             <TextField
            id="outlined-textarea"
            className='w-100 mb-2' 
            label="Ingrese la descripción de la especialidad"
            placeholder="¿ Qué es esa especialiadad ? (Se presentará en el inicio)"
            multiline
            name='descripcion'
            />
            {/* <Horario setDays={setDays} days={days} /> */}
            {/* Time input */}
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker', 'TimePicker']}>
                    <TimePicker
                    label="Registre la hora de ingreso"
                    onChange={(newValue,validator) => handleTimes(newValue,validator,'start')}
                    name='start'
                    />
                    <TimePicker
                    label="Registre la hora de salida"
                    onChange={(newValue,validator) => handleTimes(newValue,validator,'end')}
                    name='end'
                    />
                </DemoContainer>
            </LocalizationProvider> */}

            </Item>

            </Grid>
            <Grid xs={6}>
            <Item>
            <label className='text-start d-block mb-2' style={{fontSize: '1.05rem' }}  
            htmlFor="">Selecione una imagen que represente la especialidad</label>
            <input onChange={handleChange} type="file" accept='image/*' name='imagen' className='input__file' />
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