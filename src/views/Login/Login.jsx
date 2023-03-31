import { Form } from 'react-router-dom';
import logo from './../../assets/imgs/logo.jpg';
import user from './../../assets/imgs/user.png';
import Backdrop from '@mui/material/Backdrop';
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
    useEffect(() => {
        document.title = 'Clinica Yumbay | Iniciar Sesión';
    },[]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        const rolInp = e.target.querySelector('select');
        if(cedulaInp.value.trim() === '' ||
        claveInp.value.trim() === '' ||
        rolInp.value == 'none'
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
            severity='warning'
            menssageAlert='Algunos de los campos de ingreso estan vacios'
            />}
            <div className="flex-grow-1">
                <div className='d-flex justify-content-around'>
                    <div className='w-50 ms-5'>
                        <img src={logo} 
                            style={
                                {
                                    width: 500,
                                    height: 500,
                                    maxWidth: '100%'
                                }
                            }
                        alt="" />
                    </div>
                    <div className='w-35 d-flex align-items-center me-5'>
                        {(login && loading) && <Backdrop
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 ,flexDirection: 'column'}}
                                    open={true}
                                                        >
                                {/* <CircularProgress color="inherit" /> */}
                                <p>Cargando...</p>
                                <LoadingOne ancho='50%'  />
                            </Backdrop>
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
                         className='bg-primary gap-2 formulario-init w-75 p-4 d-flex flex-column align-items-center'>
                        <h6 className='fw-bold'>INICIO DE SESIÓN</h6>
                        <div className='img__form'>
                            <img src={user} alt="" />
                        </div>
                            <input className='w-75' name='cedula' type="text" placeholder='Ingrese su número de cédula'/>
                            <input className='w-75' name='clave' type="password" placeholder='Ingrese su contraseña'/>
                            <select name='rol' className='w-75' id="">
                                {carga && (<option value="none">Cargando...</option>)}
                                
                                {
                                    (dataEs && dataEs.ident) && (
                                        <>
                                            <option value="none">Especialidad/Cargo</option>
                                            <option value="user:16">Administrador</option>  
                                            {
                                                dataEs.data.map(value => {
                                                    return (
                                                        <option key={value.id} value={'doc:' + value.id}>{value.nombre}</option>  
                                                    );
                                                })
                                            }     
                                        </>
                                    )
                                }    
                            </select>
                            <p className=' mt-2 item__end'>
                               <a href="#" className='text-white'>Recuperar contraseña</a> 
                            </p> 
                            <button className='btn btn-secondary text-white w-75  align-self-end me-5'>
                                Ingresar
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;