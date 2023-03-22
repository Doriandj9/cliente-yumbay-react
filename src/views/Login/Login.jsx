import { Form } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import logo from './../../assets/imgs/logo.jpg';
import user from './../../assets/imgs/user.png';
import './index.css';
import { useEffect } from 'react';

const Login = () => {
    useEffect(() => {
        document.title = 'Clinica Yumbay | Iniciar Sesión';
    },[])
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
                        <Form
                         className='bg-primary gap-2 formulario-init w-75 p-4 d-flex flex-column align-items-center'>
                        <h6 className='fw-bold'>INICIO DE SESIÓN</h6>
                        <div className='img__form'>
                            <img src={user} alt="" />
                        </div>
                            <input className='w-75' name='cedula' type="text" placeholder='Ingrese su número de cédula'/>
                            <input className='w-75' name='clave' type="password" placeholder='Ingrese su contraseña'/>
                            <select name='option' className='w-75' id="">
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