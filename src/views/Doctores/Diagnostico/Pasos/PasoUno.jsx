import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useAppConfig } from './../../../../store/configAppStore';
import { CEDULA_REG_EXPRE } from './../../../../utils/web/componentes/ConstExpres';
import { useParams } from 'react-router-dom';
import { LoadingOne } from "../../../../components/Loading";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const PasoUno = ({state,setState}) => {
    const [consulta, setConsulta] = useState(null);
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);
    const appConfing = useAppConfig(state => state.app);
    const [value, setValue] = useState(null);
    const [loading,setLoading] = useState(false);
    const params = useParams();
    useEffect(() => {
        if(consulta){
            setLoading(true);
            fetch(appConfing.hostServer + 'api/info/paciente/' + value)
            .then(query => query.json())
            .then(setInfo)
            .catch(setError)
            .finally(() =>{
                setConsulta(false);
                setLoading(false);
            })
        }
    },[consulta])
    useEffect(() => {
        if(!state)
        setState({
            cedula: '',
            nombres: '',
            apellidos: '',
            fecha_nacimiento_fake: '',
            correo: '',
            direccion: '',
            celular: '',
            edad: '',
            sexo: '',
            estado_civil: ''
        });
    },[])
    useEffect(()=>{
        if(params.cedula && !state){
            setValue(params.cedula);
            setConsulta(true);
        }
    },[])
    useEffect(()=>{
        if(info && info.ident){
            const datos = info.paciente;
            //console.log(datos.fecha_nacimiento_fake);
            setState({
                cedula: datos?.cedula ?? '',
                nombres: datos?.nombres ?? '',
                apellidos: datos?.apellidos ?? '',
                fecha_nacimiento_fake: dayjs(datos?.fecha_nacimiento_fake) ?? '',
                correo: datos?.email ?? '',
                direccion: datos?.direccion ?? '',
                celular: datos?.celular ?? '',
                edad: '',
                sexo: '',
                estado_civil: ''
            })
            setInfo(null);
        }
    },[info])
    const handleChange =(e) => {
        if(CEDULA_REG_EXPRE.test(e.target.value.trim())){
            setValue(e.target.value.trim());
            setConsulta(true);
        }
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleChangeInput =(e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleChangeDate = (value,validation) => {
        setState({
            ...state,
            fecha_nacimiento_fake: value
        })
   }
    return (
        <>
        {loading && (<LoadingOne ancho={'50%'} textInner='Espere por favor, cargando los datos del paciente...' />)}
        <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0.25}>
                    <Grid xs={6}>
                    <Item>
                    <TextField className="w-100 mb-2"
                        label='Nº cédula de cuidadania'
                        placeholder="Por ejemplo: 01234556789"
                        name="cedula"
                        value={state?.cedula ?? ''}
                        required
                        onChange={handleChange}
                        />
                        <TextField className="w-100 mb-2"
                        label='Primer y segundo nombre'
                        required
                        placeholder="Por ejemplo: Juan Lucas"
                        name="nombres"
                        onChange={handleChangeInput}
                        value={state?.nombres ?? ''}
                        />
                        <TextField className="w-100 mb-2"
                        label='Primer y segundo apellido'
                        required
                        placeholder="Por ejemplo: Arias Segura"
                        onChange={handleChangeInput}
                        name="apellidos"
                        value={state?.apellidos ?? ''}
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                         components={['DatePicker']}>
                            <DatePicker onChange={handleChangeDate}
                             className="w-100 mb-2"
                             value={state?.fecha_nacimiento_fake ?? ''}
                            label="Fecha de nacimiento" />
                        </DemoContainer>
                        </LocalizationProvider>
                        <input type="hidden" name="fecha_nacimiento_fake"
                         value={dayjs(state?.fecha_nacimiento_fake ?? '').format('YYYY-MM-DD')} />
                        <TextField className="w-100 mb-2"
                        label='Ingrese su correo electronico'
                        placeholder="Por ejemplo: ejemplo@mail.com"
                        onChange={handleChangeInput}
                        name="correo"
                        value={state?.correo ?? ''}
                        />
                    </Item>
                    </Grid>
                    <Grid xs={6}>
                    <Item>
                    <TextField className="w-100 mb-2"
                        label='Ingrese su dirección'
                        onChange={handleChangeInput}
                        value={state?.direccion ?? ''}
                        placeholder="Por ejemplo: Guaranda, Av. Los Trigales"
                        name="direccion"
                        />
                    <TextField className="w-100 mb-2"
                        label='Número de celular'
                        placeholder="Por ejemplo: 098776543"    
                        onChange={handleChangeInput}
                        value={state?.celular ?? ''}
                        required
                        name="celular"
                        />
                    <TextField className="w-100 mb-3"
                        label='Edad en años cumplidos'
                        placeholder="Por ejemplo: 45"    
                        onChange={handleChangeInput}
                        value={state?.edad ?? ''}
                        required
                        type="number"
                        name="edad"
                        />
                    <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth className="mb-2">
                                <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={state?.sexo ?? ''}
                                label="Sexo"
                                name="sexo"
                                className="text-start"
                                onChange={handleChangeInput}
                                >
                                <MenuItem value={'masculino'}>Masculino</MenuItem>
                                <MenuItem value={'Femenino'}>Femenino</MenuItem>
                                </Select>
                            </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth className="mb-2">
                                <InputLabel id="demo-simple-select-label">Estado civil</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={state?.estado_civil ?? ''}
                                label="Estado Civil"
                                className="text-start"
                                name="estado_civil"
                                onChange={handleChangeInput}
                                >
                                <MenuItem value={'Soltero/a'}>Soltero/a</MenuItem>
                                <MenuItem value={'Casado/a'}>Casado/a</MenuItem>
                                <MenuItem value={'Viudo/a'}>Viudo/a</MenuItem>
                                <MenuItem value={'Divorciado/a'}>Divorciado/a</MenuItem>
                                <MenuItem value={'Separado/a'}>Separado/a</MenuItem>
                                <MenuItem value={'Conviviente'}>Conviviente</MenuItem>
                                </Select>
                            </FormControl>
                    </Box>
                    </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default PasoUno;