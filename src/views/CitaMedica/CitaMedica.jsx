import { Form } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Calendario from "./Calendario";
import './index.css';
import { useEffect, useState } from 'react';
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import {MdSend} from 'react-icons/md';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const datas = [
    {
        id: 1,
        start: '8:00',
        end: '8:30'
    },
    {
        id: 2,
        start: '8:30',
        end: '9:00'
    },
    {
        id: 3,
        start: '9:00',
        end: '9:30'
    },
    {
        id: 4,
        start: '9:30',
        end: '10:00'
    }
]
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const CitaMedica = () => {
    const [hora, setHora] = useState(null);
    useEffect(() => {
        document.title = 'Clinica Yumbay | Cita Medica';
    },[])

    const handleChange = (newValue) => {
        setHora(newValue)
    }
    console.log(hora);
    return (
        <>
        <div className="container__min">
            <Header></Header>
            <div className="flex-grow-1">
            <Box sx={ { margin: 2 } }>
            <Grid  spacing={0.5} >
                <Item className='text-center'>
                    <h4 className="text-secondary">TU SALUD NO PUEDE ESPERAR</h4>
                    <h5 className="text-black-50">SOLICITA TU CITA MEDICA AHORA, LLENA EL SIGUIENTE FORMULARIO Y DA CLICK EN SOLICITAR CITA MEDICA</h5>
                </Item>
            </Grid>
            </Box>
            <Form className="w-75 m-auto">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0.25}>
                    <Grid xs={6}>
                    <Item>
                    <TextField className="w-100 mb-2"
                        label='Ingrese su número de cédula'
                        placeholder="Por ejemplo: 01234556789"
                        name="cedula"
                        />
                        <TextField className="w-100 mb-2"
                        label='Ingrese sus nombres'
                        placeholder="Por ejemplo: Juan Lucas"
                        name="nombres"
                        />
                        <TextField className="w-100 mb-2"
                        label='Ingrese sus apellidos'
                        placeholder="Por ejemplo: Arias Segura"
                        name="apellidos"
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker className="w-100 mb-2"
                            label="Ingrese su fecha de nacimiento" />
                        </DemoContainer>
                        </LocalizationProvider>
                        <TextField className="w-100 mb-2"
                        label='Ingrese su correo electronico'
                        placeholder="Por ejemplo: ejemplo@mail.com"
                        name="correo"
                        />
                        <TextField className="w-100 mb-2"
                        label='Ingrese su dirección'
                        placeholder="Por ejemplo: Guaranda, Av. Los Trigales"
                        name="direccion"
                        />
                        <TextField className="w-100 mb-2"
                        label='Ingrese su número de telefono'
                        placeholder="Por ejemplo: 098776543"
                        name="telefono"
                        />
                        <TextField className="w-100 mb-5"
                        label='Ingrese su contraseña'
                        name="clave"
                        type="password"
                        />
                    </Item>
                    </Grid>
                    <Grid xs={6}>
                    <Item>
                    <label className='text-start d-block mb-2' style={{fontSize: '1.05rem' }}  
                        htmlFor="">Selecione la fecha para la cita medica en el calendario</label>
                    <Calendario />
                    </Item>
                    </Grid>
                    <Grid xs={12}>
                    <Item>{
                        <Button type='submit'
                        className='w-50 m-auto d-flex align-items-center gap-2'
                        variant="contained"
                        >
                        Guardar Cita
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
            </div>
            <Footer className='mt-4'></Footer>
        </div>
        </>
    );
}



// const FormSelect = ({data , handleChange,userSelect,label}) => {
//         return (<>
//           <FormControl variant="outlined" className='w-100 mb-2' style={{
//             // border: 'none',
//             // outline: 'none',
//             // borderRadius: '0.5rem'
//           }} >
//             <InputLabel required id="demo-simple-select-standard-label">{label}</InputLabel>
//             <Select name='hora' 
//               labelId="demo-simple-select-standard-label"
//               value={userSelect}
//               onChange={handleChange}
//               label={label}
//               style={
//                 {
//                     border: 'none',
//                     outline: 'none'
//                 }
//               }
//             >
//             {
//                 data.map((value) => (<MenuItem key={value.id} value={value.id}>{value.start} a {value.end}</MenuItem>))
//             }
//             </Select>
//           </FormControl>
//         </>);
//     }
    

export default CitaMedica;