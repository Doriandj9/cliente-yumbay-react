import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Form } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import user from './../../assets/imgs/user.png';
import {RiLockPasswordFill} from 'react-icons/ri';
import { useTitle } from "../../utils/hooks/useTitle";
import { useEffect, useState } from "react";
import { useAppConfig } from "../../store/configAppStore";
import { LoadingOne } from "../../components/Loading";
import AlertaExito from "../../components/AlertaExito";
import {MdOutlineError} from 'react-icons/md';
import DialogAlert from "../../components/DialogAlert";
import DialogContentTexto from "../../components/DialogContentTexto";
import DialogButtons from "../../components/DialogButtons";
const App = () =>{
    useTitle('Recuperar Contraseña');
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [send,setSend] = useState(false);
    const [formData,setformData] = useState(null);
    const [open,setOpen] = useState(false);
    const appConfig = useAppConfig((state) => state.app);
    useEffect(() => {
        if(send){
            setLoading(true);
            fetch(`${appConfig.hostServer}api/recovery/pass`,{ method:'POST', body: formData })
            .then(query => query.json())
            .then(setData)
            .catch(setError)
            .finally(() => {
                setSend(false);
                setLoading(false);
                setOpen(true);
            })
        }
    },[send]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        setformData(form);
        setSend(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    console.log(data,error);
    return (
        <div className="container__min">
            {
                loading && (<LoadingOne  ancho={'50%'} textInner="Procesando, enviando correo..." />)
            }
            {
                (data && data.ident) && (
                    <AlertaExito open={open} handleClose={handleClose} message={data.mensaje} />
                )
            }
            {
            (data && data.ident ===0) && (<DialogAlert
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
                </DialogAlert>)
        }
        <Header />
        <div className="container__login_app">
                <div className='d-flex justify-content-center align-items-center w-100 h-100'>                        
                        <Form onSubmit={handleSubmit}
                         className='bg-primary gap-2 formulario-init container__login p-4 d-flex flex-column align-items-center'>
                        <h6 className='fw-bold'>RECUPERE SU CONTRASEÑA</h6>
                        <div className='img__form'>
                            <RiLockPasswordFill className="text-secondary" 
                            style={{ fontSize: '7rem' }}
                            />
                            {/* <img src={user} alt="" /> */}
                        </div>
                            <input className='w-75' name='cedula' type="text" placeholder='Ingrese su número de cédula'/>
                            {/* </select> */}
                            <p className=' mt-2 item__end'>
                               <span> </span>
                            </p> 
                            <button className='btn btn-secondary text-white w-75  align-self-end me-5'>
                                Recuperar
                            </button>
                        </Form>
                </div>
            </div>
        <Footer />
        </div>
    );
}

export default App;