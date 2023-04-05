import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { CEDULA_REG_EXPRE, EMAIL_REG_EXPRE, NUMBER_REG_EXPRE } from '../../../utils/web/componentes/ConstExpres';
import { useAppConfig } from '../../../store/configAppStore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import DialogAlert from '../../../components/DialogAlert';
import TitleAlert from '../../../components/TitleAlert';
import DialogContentTexto from '../../../components/DialogContentTexto';
import DialogButtons from '../../../components/DialogButtons';
import { Form } from 'react-router-dom';
import { Button } from '@mui/material';
import {MdSend} from 'react-icons/md';
import { LoadingOne } from '../../../components/Loading';
import {IoIosCheckmarkCircle} from 'react-icons/io';
import {MdOutlineError} from 'react-icons/md';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Medicos = () => {
    const [data, setData] = useState(null);
    const [response,setReponse] = useState(null);
    const [send, setSend] = useState(false);
    const [open, setOpen] = useState(true);
    const [formData, setFormData] = useState(null);
    const [especialidades, setEspecialidades] = useState([]);
    const configApp = useAppConfig((state) => state.app);
    useEffect(()=>{
        fetch(configApp.hostServer + 'api/especialidades')
        .then(query => query.json())
        .then(setData)
        .catch(console.log);
    },[])

    // envio de datos de usuario
    useEffect(() => {
        if(send){
            fetch(configApp.hostServer + 'api/add/user/medico',{
                method: 'POST',
                body: formData
            })
            .then(query => query.json())
            .then(setReponse)
            .catch(console.log)
            .finally(() => {
                setSend(null);
                setOpen(true);
            })
        }
    },[send]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        form.append('especialidades',especialidades)
        setFormData(form);
        setSend(true);        
    }
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
        setReponse(null);
    }
    const handleClean = (e) => {
        document.querySelector('form')
        .querySelectorAll('input')
        .forEach(inp => inp.value = '');
        setOpen(false);
        setReponse(null);
    }
    return (
        <>
        {/* carga un loading si envio los datos */}

        { send && (<LoadingOne ancho={'50%'} />) } 
        {/* cargamos los errores de validacion del backend en una alerta */}
        { (response && response.ident === 0 && response.errores ) && (
            <DialogAlert
            open={open}
            handleClose={handleClose}
            handleClickOpen={handleOpen}
            >
                <DialogContentTexto 
                textContent={
                <>
                <MdOutlineError className='display-1 text-danger m-auto d-block' />
                <span className='h5 text-dark-50 m-0 ps-2 pe-5 '> Lista de errores </span>
                <ul className='list-group ps-2 pe-5 '>
                    {Object.entries(response.errores)
                    .map(([key,values],i) => {
                        return (
                            <li className='list-group-item d-flex justify-content-between align-items-center' key={i}>
                                {values[0]}
                                <span class="badge bg-danger rounded-pill ms-4">1</span>
                            </li>
                        ); 
                    })}
                </ul>
                </>
                }
                cssCont='ps-4 pe-4'
                />
                <DialogButtons 
                handleClose={handleClose}
                btnClose={true}
                btnTextClose='Regresar'
                css='mb-3'
                variantBtnClose='outlined'
                colorBtnClose='error'
                />
            </DialogAlert>
        )
    }
    {
     (response && response.ident === 0 && response.atributos)  && (
            <DialogAlert
            open={open}
            handleClose={handleClose}
            handleClickOpen={handleOpen}
            >
            <DialogContentTexto
            textContent={
                <span className='d-flex pt-4 flex-column align-items-center text-black'>
                    <MdOutlineError className='display-1 text-danger' /> 
                    {response.atributos[0] === '23000' ? 'El usuario ya existe en la base de datos': response.mensaje} 
                </span>
                }
                cssCont='pe-5 ps-5'
            />
             <DialogButtons 
                handleClose={handleClose}
                btnClose={true}
                btnTextClose='Regresar'
                css='mb-3'
                variantBtnClose='outlined'
                colorBtnClose='error'
                />
            </DialogAlert>
        )
    }
        {/* Rederiamos una alerta de que se ingreso correctamente el usuario  */}
        {
            (response && response.ident) && (
                <DialogAlert
                open={open}
                handleClose={handleClean}
                handleClickOpen={handleOpen}
                >
                <DialogContentTexto
                textContent={(
                    <>
                    <IoIosCheckmarkCircle style={{ fontSize: '5rem' }}
                    className='text-success' />
                    <span className='ps-5 pe-5'> {response.mensaje} </span>
                    </>
                    )}
                cssCont='d-flex flex-column gap-2 align-items-center'
                css='ps-4 pe-4'
                />
                <DialogButtons 
                btnClose={true}
                btnTextClose='Aceptar'
                variantBtnClose='contained'
                colorBtnClose='success'
                handleClose={handleClean}
                />
                </DialogAlert>
            )
        }
       <h3 className="text-center">Registrar Médico</h3>
      <Form 
      onSubmit={handleSubmit}
      >
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.25}>
            <Grid xs={6}>
            <Item>
                {<FormOne  />}
            </Item>
            </Grid>
            <Grid xs={6}>
            <Item>{<FormTwo data={data} boxEspe={setEspecialidades} />}</Item>
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
    );
}

const FormOne = ({setObjectInfo}) => {
    const [verificaciones, setVerificaciones] = useState({
        cedula: null,
        nombres: null,
        apellidos: null,
        direccion: null
    })
    /**
     * 
     * @param {Event} e 
     */
    const handleCedula = (e) => {
        if(CEDULA_REG_EXPRE.test(e.target.value.trim())){
            setVerificaciones({
                ...verificaciones,
                [e.target.name]: true
            })
        }else{
            setVerificaciones({
                ...verificaciones,
                [e.target.name]: false
            })
        }
    }
    
    const handleInputEmpty = (e) => {
        if(e.target.value.trim() !== ''){
            setVerificaciones({
                ...verificaciones,
                [e.target.name]: true
            })
        }else{
            setVerificaciones({
                ...verificaciones,
                [e.target.name]: false
            })
        }
    }
    return (<>
        <TextField className='w-100 mb-2' required placeholder='Por ejemplo: 0250123456'
        onInput={handleCedula}
        error={verificaciones.cedula === false ? true : false}
        label="Ingrese el número de cédula del médico" variant="outlined"
        name='cedula'
        />
        <TextField className='w-100 mb-2' placeholder='Por ejemplo: Dario Jose'
        required
        error={verificaciones.nombres === false ? true : false}
        onInput={handleInputEmpty}
        name='nombres'
        label="Ingrese los nombres del médico" variant="outlined" />
        <TextField className='w-100 mb-2' placeholder='Por ejemplo: Gaibor Torres'
        onInput={handleInputEmpty}
        error={verificaciones.apellidos === false ? true : false}
        name='apellidos'
        required
        label="Ingrese los apellidos del médico" variant="outlined" />
        <TextField className='w-100 mb-2' placeholder='Por ejemplo: Guaranda, Av Guayaquil y Puerto Arregui'
        onInput={handleInputEmpty}
        required
        error={verificaciones.direccion === false ? true : false}
        name='direccion'
        label="Ingrese la dirección del médico" variant="outlined" />
        <TextField className='w-100 mb-2' placeholder='Por ejemplo: 24518766'
        name='telefono'
        label="Ingrese el número de telefono del médico" variant="outlined" />
    </>)
}


const FormTwo = ({data,boxEspe,setObjectInfo}) => {
    const [opened, setOpened] = useState(false);
    const [verificaciones, setVerificaciones] = useState({
        celular: true,
        correo: null,
        especialidadesV: null,
        horario: null,
        numero_emergencia: null
    })
    const [valueEs, setValueEs] = useState('');
    const handleCelular = (e) => {
        if(e.target.value.trim() !== ''){
            if(NUMBER_REG_EXPRE.test(e.target.value.trim())){
                setVerificaciones({
                    ...verificaciones,
                    [e.target.name]: true
                })
            }else{
                setVerificaciones({
                    ...verificaciones,
                    [e.target.name]: false
                })
            }
        }else{
            setVerificaciones({
                ...verificaciones,
                [e.target.name]: true
            })
        }
    }
    const handleCorreo = (e) => {
            if(EMAIL_REG_EXPRE.test(e.target.value.trim())){
                setVerificaciones({
                    ...verificaciones,
                    [e.target.name]: true
                })

            }else{
                setVerificaciones({
                    ...verificaciones,
                    [e.target.name]: false
                })
            }
    }
    const handleInputEmpty = (e) => {
        if(e.target.value.trim() !== ''){
            setVerificaciones({
                ...verificaciones,
                [e.target.name]: true
            })

        }else{
            setVerificaciones({
                ...verificaciones,
                [e.target.name]: false
            })

        }
    }

    const handleEspecialidades = (e) => {
        setValueEs('');
        setOpened(true)

    }
    const handleCloseEspecialidades = (e) => {
        setOpened(false)        
    }
    const handleSave = (e) =>{
        const options = document.querySelectorAll('input[type=checkbox]:checked');
        if(options.length > 0){
            boxEspe(Array.from(options).map(inp => inp.value))
            let valores = Array.from(options).reduce((string,inp) => {
                return string + inp.parentElement.nextElementSibling.textContent.trim() + ','
            },'').slice(0,-1)
            valores = valores.length >= 43 ? valores.substring(0,43) + '...' : valores; 
            setValueEs(valores)
            setVerificaciones({
                ...verificaciones,
                especialidadesV: true
            })

        }else {
            setVerificaciones({
                ...verificaciones,
                especialidadesV: false
            })

        }
        setOpened(false);
    }
    return (<>
    <DialogAlert 
        open={opened}
        handleClickOpen={handleEspecialidades}
        handleClose={handleCloseEspecialidades}
    >
        <TitleAlert title={'Selecione las especialidades desplegadas a continuación.'} />
        <DialogContentTexto
        textContent={ <CheckboxLabels key={'0-01'} data={data?.data ?? []} /> }
        element={true}
        />
        <DialogButtons 
        handleClose={handleCloseEspecialidades}
        btnClose={true}
        btnSave={true}
        handleSave={handleSave}
        btnTextClose='Cerrar'
        btnTextSave='Guardar'
        />
    </DialogAlert>
     <TextField className='w-100 mb-2'  placeholder='Por ejemplo: 0989354012'
        label="Ingrese el número de celular del médico" variant="outlined"
        onInput={handleCelular}
        error={verificaciones.celular === false ? true : false}
        name='celular'
        />
        <TextField className='w-100 mb-2' placeholder='Por ejemplo: ejemplo@gmail.com'
        label="Ingrese el correo electronico del médico" variant="outlined" 
        required
        error={verificaciones.correo === false ? true : false}
        onInput={handleCorreo}
        name='correo'
        />

        <TextField className='w-100 mb-2' placeholder='(Click por favor)'
        label="Selecione una o más especialidades" variant="outlined" 
        onClick={handleEspecialidades}
        error={verificaciones.especialidadesV === false ? true : false}
        name='especialidadesV'
        value={valueEs}
        required
        />

        <TextField className='w-100 mb-2' placeholder='Por ejemplo: ...Pendiente'
        label="Ingrese el horario del médico" variant="outlined"
        onInput={handleInputEmpty}
        required
        error={verificaciones.horario === false ? true : false}
        name='horario'
         />
        <TextField className='w-100 mb-2' placeholder='Por ejemplo: 0986538564'
        label="Ingrese el número de emergencia del médico" variant="outlined"
        onInput={handleCelular}
        required
        error={verificaciones.numero_emergencia === false ? true : false}
        name='numero_emergencia'
        />
    </>)
}


const CheckboxLabels = ({data}) => {
    return (
      <FormGroup className='d-flex gap-3 flex-wrap flex-row'>
        {data.map(value => (
            <FormControlLabel name='especialidades[]'
            key={value.id} control={<Checkbox value={value.id} />} label={value.nombre} />
        ))};
      </FormGroup>
    );
  }

export default Medicos;