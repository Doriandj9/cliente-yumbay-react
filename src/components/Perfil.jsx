import { Form } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { TextField } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import {MdSend} from 'react-icons/md';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useTitle } from "../utils/hooks/useTitle";
import { useAppConfig } from  './../store/configAppStore';
import { LoadingOne } from './../components/Loading';
import AlertaExito from "./AlertaExito";
import DialogAlert from "./DialogAlert";
import DialogButtons from "./DialogButtons";
import DialogContentTexto from "./DialogContentTexto";
import {MdOutlineError} from 'react-icons/md';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Perfil = () => {
    useTitle('Perfil');
    const userStore = useUserStore((state) => state.user);
    const [img, setImage] = useState(null);
    const [changePassword,setChangePassword] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [dataUpdate,setDataUpdate] = useState(null);
    const [formData,setFormData] = useState(null);
    const [sendUpdate,setSendUpdate] = useState(false);
    const [sendPassword,setSendPassword]= useState(false);
    const [user,setUser] = useState(userStore);
    const [open, setOpen] = useState(false);
    const actionLogin = useUserStore((state) => state.login)
    const appConfig = useAppConfig((state) => state.app);
    const [pass, setPass] = useState({
        password: '',
        new_password: ''
    });

    useEffect(() => {
        if(sendUpdate){
            setLoading(true);
            fetch(`${appConfig.hostServer}api/update/user`,{ method:'POST',body: formData })
            .then(query => query.json())
            .then(setDataUpdate)
            .catch(setError)
            .finally(() => {
                setSendUpdate(false);
                setLoading(false);
                setOpen(true);

            })
        }
    },[sendUpdate]);

    useEffect(() => {
        if(sendPassword){
            setLoading(true);
            fetch(`${appConfig.hostServer}api/change/password`,{ method:'POST',body: formData })
            .then(query => {
                
               return query.json()
            })
            .then(setChangePassword)
            .catch(setError)
            .finally(() => {
                setSendPassword(false);
                setLoading(false);
                setOpen(true);
            })
        }
    },[sendPassword]);

    const handleChange = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            const url = fileReader.result;
            setImage(url);
        }
    }


    const handleSubmitPersonal = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        setFormData(form);
        setSendUpdate(true);
        
    }

    const handleSubmitPassword = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        setFormData(form);
        setSendPassword(true);
    }

    const handleChangeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
   const handleClosePass = () => {
    setOpen(false);
    setPass({
        password:'',
        new_password:''
    });
   }
   const handleClose = () => {
    setOpen(false);
   }
   const handleChangePass = (e) => {
    setPass({
        ...pass,
        [e.target.name]: e.target.value
    });
   }
   const handleCloseUpdate = () => {
    setOpen(false);
    setImage(null);
    document.getElementById('file_up').value = '';
    setDataUpdate(null);
   }
   if(dataUpdate && dataUpdate.ident){
    const {permisos, playload,token} = dataUpdate.data;
    playload.id_especialidad = user.id_especialidad;
    playload.nombre_especialidad = user.nombre_especialidad;
    actionLogin(playload);
    sessionStorage.setItem('__tok',token);
   }
    return (
        <>
        {
            loading && (<LoadingOne ancho={'50%'} textInner="Cargando..." />)
        }
        {
            (dataUpdate && dataUpdate.ident) && 
            (<AlertaExito message={dataUpdate.mensaje} open={open} handleClose={handleCloseUpdate} />)
        }
        {
            (changePassword && changePassword.ident) && 
            (<AlertaExito message={changePassword.mensaje} open={open} handleClose={handleClosePass} />)
        }
        {
            (changePassword && changePassword.ident ===0) && (<DialogAlert
                bottonDialgo={false}
                textBotton = ''
                open={open}
                handleClose={handleClose}
                >
                  {/* <TitleAlert
                  title={''}
                  /> */}
                  <DialogContentTexto
                  textContent={
                  <span className='d-flex pt-4 flex-column align-items-center text-black'>
                      <MdOutlineError className='display-1 text-danger' /> 
                      {changePassword.mensaje} 
                  </span>}
                  css="p-3"
                  cssCont='text-white ps-2 pe-2'
                  />
                  <DialogButtons
                      handleClose={handleClose}
                      btnClose={true}
                      btnTextClose='Regresar'
                      variantBtnClose='outlined'
                      colorBtnClose='error'
                  />
                </DialogAlert>)
        }
    <h2 className='title-list'>Datos personales</h2>
    <Form onSubmit={handleSubmitPersonal} >
    <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0.25}>
                <input type="hidden" value={user.cedula} name='cedula'/>

                    <Grid xs={6}>
                    <Item>
                    <TextField className="w-100 mb-4"
                        label='Número de cédula'
                        placeholder="Por ejemplo: 01234556789"
                        name="cedula"
                        value={user.cedula}
                        onChange={handleChangeInput}
                        disabled
                        />
                        <TextField className="w-100 mb-4"
                        label='Nombres'
                        required
                        placeholder="Por ejemplo: Juan Lucas"
                        onChange={handleChangeInput}
                        name="nombres"
                        value={user.nombres}
                        />
                        <TextField className="w-100 mb-4"
                        label='Apellidos'
                        required
                        placeholder="Por ejemplo: Arias Segura"
                        onChange={handleChangeInput}
                        name="apellidos"
                        value={user.apellidos}
                        />
                        <TextField className="w-100 mb-4"
                        label='Correo electronico'
                        placeholder="Por ejemplo: ejemplo@mail.com"
                        onChange={handleChangeInput}
                        name="email"
                        value={user.email}
                        />
                        <TextField className="w-100 mb-5"
                        label='Dirección'
                        onChange={handleChangeInput}
                        value={user.direccion}
                        placeholder="Por ejemplo: Guaranda, Av. Los Trigales"
                        name="direccion"
                        />
                                              
                    </Item>
                    </Grid>
                    <Grid xs={6}>
                    <Item>
                    <TextField className="w-100 mb-2"
                        onChange={handleChangeInput}
                        label='Titulo'
                        value={user.titulo ?? 'Pendiente'}
                        placeholder="Por ejemplo: Doctor Cirujano"
                        name="titulo"
                        />
                    <TextField className="w-100 mb-2"
                        label='Número de celular'
                        placeholder="Por ejemplo: 098776543"    
                        onChange={handleChangeInput}
                        value={user.celular}
                        required
                        name="celular"
                        />
                    <TextField className="w-100 mb-2"
                        label='Contacto de emergencia'
                        onChange={handleChangeInput}
                        value={user.contacto_emergencia}
                        placeholder="Por ejemplo: 098776543"
                        name="contacto_emergencia"
                        />
                     <label className='text-start d-block mb-1' style={{fontSize: '1.05rem' }}  
            htmlFor="">Selecione una imagen </label>
            <input id="file_up" onChange={handleChange} type="file" accept='image/*' name='imagen' className='input__file' />
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
                        Guardar Cambios
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
    <h2 className='title-list'>Cambiar contraseña actual</h2>
    <Form onSubmit={ handleSubmitPassword } >
<Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0.25}>
                    <Grid xs={6}>
                    <Item>
                    <input  type="hidden" value={user.cedula} name='cedula'/>
                    <TextField className="w-100 mb-2"
                        label='Ingrese la contraseña actual'
                        value={pass.password}
                        onChange={handleChangePass}
                        placeholder="*****"
                        name="password"                       
                        />                                              
                    </Item>
                    </Grid>
                    <Grid xs={6}>
                    <Item>
                    <TextField className="w-100 mb-2"
                        label='Ingrese la nueva contraseña'
                        placeholder="******"
                        onChange={handleChangePass}
                        value={pass.new_password}
                        name="new_password"
                        />
                    </Item>
                    </Grid>
                    <Grid xs={12}>
                    <Item>{
                        <Button type='submit'
                        className='w-50 m-auto d-flex align-items-center gap-2'
                        variant="contained"
                        >
                        Actualizar Contraseña
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

export default  Perfil;