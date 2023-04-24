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
import { useAppConfig } from "../../store/configAppStore";
import { CEDULA_REG_EXPRE } from './../../utils/web/componentes/ConstExpres';
import dayjs from "dayjs";
import { LoadingOne } from "../../components/Loading";
import AlertaExito from "../../components/AlertaExito";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const CitaMedica = () => {
    const [value, setValue] = useState(null);
    const [consulta, setConsulta] = useState(null);
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);
    const [errorCita,setErrorCita] = useState(null);
    const [alertSend,setAlertSend] = useState(false);
    const [data,setData] = useState(null);
    const [send,setSend] = useState(null);
    const [formData,setFormData] = useState(null);
    const {reset, setReset} = useState(false);
    const [inputsDatas, setInputsDatas] = useState({
        cedula: '',
        nombres: '',
        apellidos: '',
        fecha_nacimiento: dayjs(),
        correo: '',
        direccion: '',
        celular: '',
        clave: '',
        signal: false
    });
    const appConfing = useAppConfig(state => state.app);
    useEffect(() => {
        document.title = 'Clinica Yumbay | Cita Medica';
    },[])

    useEffect(() => {
        if(consulta){
            fetch(appConfing.hostServer + 'api/info/paciente/' + value)
            .then(query => query.json())
            .then(setInfo)
            .catch(setError)
            .finally(() =>{
                setConsulta(false);
            })
        }
    },[consulta])

    useEffect(()=>{
        if(send){
            fetch(appConfing.hostServer + 'api/cita-medica/save',{
                method: 'POST',
                body: formData
            })
            .then(query => query.json())
            .then(setData)
            .catch(setErrorCita)
            .finally(()=>{
                setSend(false);
                setAlertSend(true);
            })
        }
    },[send])
    const handleChange = (e) => {
        if(CEDULA_REG_EXPRE.test(e.target.value.trim())){
            setValue(e.target.value.trim());
            setConsulta(true);
        }

        setInputsDatas({
            ...inputsDatas,
            cedula: e.target.value.trim()
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        setFormData(form);
        setSend(true);
    }

    useEffect(()=>{
        if(info){
            const datos = info.paciente;
            console.log(datos.fecha_nacimiento);
            setInputsDatas({
                cedula: datos?.cedula ?? '',
                nombres: datos?.nombres ?? '',
                apellidos: datos?.apellidos ?? '',
                fecha_nacimiento: dayjs(datos?.fecha_nacimiento) ?? '',
                correo: datos?.email ?? '',
                direccion: datos?.direccion ?? '',
                celular: datos?.celular ?? '',
                clave: '',
                signal: false
            })
            setInfo(null);
        }
    },[info])
   const handleChangeInput = (e) => {
        setInputsDatas({
            ...inputsDatas,
            [e.target.name]: e.target.value
        })
   }
   const handleChangeDate = (value,validation) => {
        setInputsDatas({
            ...inputsDatas,
            fecha_nacimiento: value
        })
   }
    const handleClose = () => {
        setAlertSend(false);
        setInputsDatas({
            cedula: '',
            nombres: '',
            apellidos: '',
            fecha_nacimiento: dayjs(),
            correo: '',
            direccion: '',
            celular: '',
            clave: '',
            signal: true
        });
    }
    return (
        <>
        {/* cargando de ui */}
        {
            send && (<LoadingOne 
                ancho={'50%'}
                textInner="Agendando cita médica, espere por favor..."
            />)
        }
        {/*ALertas de exitos o errores */}
        {
            (data && data.ident) && (<AlertaExito 
                message={data.mensaje}
                open={alertSend}
                handleClose={handleClose}
            />)
        }

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
            <Form onSubmit={handleSubmit}
             className="w-75 m-auto">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0.25}>
                    <Grid xs={6}>
                    <Item>
                    <TextField className="w-100 mb-2"
                        label='Ingrese su número de cédula'
                        placeholder="Por ejemplo: 01234556789"
                        name="cedula"
                        value={inputsDatas.cedula}
                        required
                        onChange={handleChange}
                        />
                        <TextField className="w-100 mb-2"
                        label='Ingrese sus nombres'
                        required
                        placeholder="Por ejemplo: Juan Lucas"
                        name="nombres"
                        onChange={handleChangeInput}
                        value={inputsDatas.nombres}
                        />
                        <TextField className="w-100 mb-2"
                        label='Ingrese sus apellidos'
                        required
                        placeholder="Por ejemplo: Arias Segura"
                        onChange={handleChangeInput}
                        name="apellidos"
                        value={inputsDatas.apellidos}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                         components={['DatePicker']}>
                            <DatePicker onChange={handleChangeDate}
                             className="w-100 mb-2"
                             value={inputsDatas.fecha_nacimiento}
                            label="Ingrese su fecha de nacimiento" />
                        </DemoContainer>
                        </LocalizationProvider>
                        <input type="hidden" name="fecha_nacimiento"
                         value={dayjs(inputsDatas.fecha_nacimiento).format('YYYY-MM-DD')} />
                        <TextField className="w-100 mb-2"
                        label='Ingrese su correo electronico'
                        placeholder="Por ejemplo: ejemplo@mail.com"
                        onChange={handleChangeInput}
                        name="correo"
                        value={inputsDatas.correo}
                        />
                        <TextField className="w-100 mb-2"
                        label='Ingrese su dirección'
                        onChange={handleChangeInput}
                        value={inputsDatas.direccion}
                        placeholder="Por ejemplo: Guaranda, Av. Los Trigales"
                        name="direccion"
                        />
                        <TextField className="w-100 mb-2"
                        label='Ingrese su número de celular'
                        placeholder="Por ejemplo: 098776543"    
                        onChange={handleChangeInput}
                        value={inputsDatas.celular}
                        required
                        name="celular"
                        />
                        <TextField className="w-100 mb-5"
                        required
                        label='Ingrese su contraseña'
                        name="clave"
                        onChange={handleChangeInput}
                        value={inputsDatas.clave}
                        type="password"
                        />
                    </Item>
                    </Grid>
                    <Grid xs={6}>
                    <Item>
                    <label className='text-start d-block mb-2' style={{fontSize: '1.05rem' }}  
                        htmlFor="">Selecione la fecha para la cita medica en el calendario</label>
                    <Calendario reset={inputsDatas} setReset={setInputsDatas}  />
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