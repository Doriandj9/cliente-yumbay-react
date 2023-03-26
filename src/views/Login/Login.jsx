import { Form } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import logo from './../../assets/imgs/logo.jpg';
import user from './../../assets/imgs/user.png';
import Backdrop from '@mui/material/Backdrop';
import { useDispatch } from 'react-redux';
import { useFetch } from './../../utils/hooks/useFetch';
import { login } from '../../redux/userSlice';
import './index.css';
import { useEffect, useState } from 'react';
import { LoadingOne } from '../../components/Loading';
import Alert from '../../components/Alert';


const Login = () => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [formRes, setForm] = useState(null);
    const [alerta, setAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        document.title = 'Clinica Yumbay | Iniciar Sesión';
    },[]);
    
    useEffect(() => {
        if(login){
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
        setForm(e.target);
        setLogin(true);
        setLoading(true);
    }

    if(data){
        if(data.ident){
            // redireccion
            console.log(login);
        }
    }


    return (
        <>
        <div className="container__min">
            <Header></Header>
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
                          (!login && data && data.ident == 0) ? <Alert opened={true}  /> : ''
                        }
                         {
                          error && <Alert opened={true}  />
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
                                <option value="none">Especialidad/Cargo</option>
                                <option value="1">Odontologia</option>
                                <option value="16">Administrador</option>    
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
            <Footer></Footer>
        </div>
        </>
    );
}

export default Login;