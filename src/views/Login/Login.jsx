import { Form } from 'react-router-dom';
import logo from './../../assets/imgs/logo.jpg';
import user from './../../assets/imgs/user.png';
import { useEffect, useState } from 'react';
import { LoadingOne } from '../../components/Loading';
import DialogAlert from '../../components/DialogAlert';
import DialogContentTexto from '../../components/DialogContentTexto';
import DialogButtons from '../../components/DialogButtons';
import {MdOutlineError} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../utils/hooks/useFetch';
import TitleAlert from '../../components/TitleAlert';
import AlertWeb from '../../components/AlertWeb';
import { useUserStore } from '../../store/userStore';
import { pagesWeb } from '../../utils/web/redirectPagesWeb';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Login = () => {
    const navigate = useNavigate();
    const actionLogin = useUserStore((state) => state.login)
    const [open, setOpen] = useState(true);
    const [login, setLogin] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [formRes, setForm] = useState(null);
    const [invalidInp, setInvalidInp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userSelect,setUserSelect] = useState('');

    useEffect(() => {
        document.title = 'Clinica Yumbay | Iniciar Sesión';
    },[]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setUserSelect(e.target.value);
}
    useEffect(() => {
        if(login){
        setError(null);
        fetch('http://127.0.0.1:8000/api/aut',{
            method: 'POST',
            body: login ? new FormData(formRes) : null,
        })
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
        .catch(e => {
            setError(e)
        })
        .finally(() => {
            setLogin(false);
            setLoading(false);
        })
    }
    },[login])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const [cedulaInp, claveInp] = e.target.querySelectorAll('input');
        if(cedulaInp.value.trim() === '' ||
        claveInp.value.trim() === '' ||
        userSelect == ''
        ){
            setInvalidInp(true);
            return;
        }
        setInvalidInp(false);
        setForm(e.target);
        setLogin(true);
        setLoading(true);
        setOpen(true);
    }

    if(data){
        if(data.ident){
            const {permisos, playload,token} = data.body;
            actionLogin(playload);
           sessionStorage.setItem('__tok',token);
           const path = pagesWeb(permisos);
           navigate(path);
        }
    }

    const {data:dataEs, error:eEs, loading:carga} = useFetch({
        path:'http://localhost:8000/api/especialidades',
        method:'GET'
    });
    return (
        <>
        {invalidInp &&  <AlertWeb 
            buttonOpen={null}
            opened={true}
            severity='info'
            menssageAlert='Por favor, ingrese todos los campos para iniciar sesión.'
            />}
            <div className="container__login_app">
                <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                        {(login && loading) && <LoadingOne 
                        ancho={'50%'}
                        />
                         }
                        {
                          (!login && data && data.ident == 0) ? <DialogAlert
                          bottonDialgo={false}
                          textBotton = ''
                          open={open}
                          handleClickOpen={handleClickOpen}
                          handleClose={handleClose}
                          >
                            {/* <TitleAlert
                            title={''}
                            /> */}
                            <DialogContentTexto
                            textContent={
                            <span className='d-flex pt-4 flex-column align-items-center text-black'>
                                <MdOutlineError className='display-1 text-danger' /> 
                                {data.mensaje} 
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
                          </DialogAlert> : ''
                        }
                         {
                          error && <DialogAlert
                          bottonDialgo={false}
                          open={open}
                          handleClickOpen={handleClickOpen}
                          handleClose={handleClose}
                          >
                            <TitleAlert title={'Error de servidor (500)'} />
                            <DialogContentTexto textContent={
                                <span className='d-flex pt-4 flex-column align-items-center text-black'>
                                    <MdOutlineError className='display-1 text-danger' /> 
                                    Lo sentimos mucho a ocurrido un error desconocido,
                                    por favor intentelo más tarde.
                                </span>
                            } />
                            <DialogButtons 
                            handleClose={handleClose}
                            btnClose={true}
                            btnTextClose='Cerrar'
                            colorBtnClose='error'
                            variantBtnClose='outlined'
                            />
                          </DialogAlert>
                        }
                        
                        <Form onSubmit={handleSubmit}
                         className='bg-primary gap-2 formulario-init container__login p-4 d-flex flex-column align-items-center'>
                        <h6 className='fw-bold'>INICIO DE SESIÓN</h6>
                        <div className='img__form'>
                            <img src={user} alt="" />
                        </div>
                            <input className='w-75' name='cedula' type="text" placeholder='Ingrese su número de cédula'/>
                            <input className='w-75' name='clave' type="password" placeholder='Ingrese su contraseña'/>
                                
                                {
                                    (dataEs && dataEs.ident) ? (

                                        <FormSelect
                                        handleChange={handleChange}
                                        userSelect={userSelect}
                                        data={dataEs.data}
                                        />
                                    ) : (
                                        <Box sx={{ width: '75%', borderRadius:1 }} >
                                            <FormControl style={{
                                                                    border: 'none',
                                                                    outline: 'none',
                                                                    borderRadius: '0.5rem'
                                                                }}
                                            className='w-10 bg-white' fullWidth>
                                                <InputLabel id="demo-simple-select-label">Cargando...</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={''}
                                                label="Age"
                                                >
                                                </Select>
                                            </FormControl> 
                                        </Box>
                                    )
                                }    
                            {/* </select> */}
                            <p className=' mt-2 item__end'>
                               <a href="#" className='text-white'>Recuperar contraseña</a> 
                            </p> 
                            <button className='btn btn-secondary text-white w-75  align-self-end me-5'>
                                Ingresar
                            </button>
                        </Form>
                </div>
            </div>
        </>
    );
}


const FormSelect = ({data , handleChange,userSelect}) => {

const theme = createTheme({
    palette: {
      neutral: {
        main: '#000000ce',
        contrastText: '#fff',
      },
    },
  });

    return (<>
      <FormControl variant="filled" className='w-75 bg-white' style={{
        border: 'none',
        outline: 'none',
        borderRadius: '0.5rem'
      }} >
      <ThemeProvider theme={theme}>
        <InputLabel required id="demo-simple-select-standard-label">Especialidad o Cargo</InputLabel>
        </ThemeProvider>
        <Select name='rol' 
          labelId="demo-simple-select-standard-label"
          value={userSelect}
          onChange={handleChange}
          label="Especialidad o Cargo"
          style={
            {
                border: 'none',
                outline: 'none'
            }
          }
        >
            <MenuItem key='000-0' value='user:16'>Director</MenuItem>
            <MenuItem key='000-1' value='user:1'>Recepcionista</MenuItem>
        {
            data.map((value) => (<MenuItem key={value.id} value={'doc' + value.id}>{value.nombre}</MenuItem>))
        }
        </Select>
      </FormControl>
    </>);
}


export default Login;