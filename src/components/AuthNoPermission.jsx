import Header from './Header';
import Footer from './Footer';
import img from './../assets/imgs/undraw_security_re_a2rk.svg';
import { Link } from 'react-router-dom';

const AuthNoPermission = () => {
    return (
        <>
            <Header />
                <h1 className='text-primary text-center'>Error 403</h1>
                <img height={350} src={img} 
                style={{ margin: 'auto', display: 'block' }}
                alt="403" />
                <p className='text-center'>
                    El recurso que intenta acceder no se encuentra disponible <Link to='/'>
                         Regresar
                    </Link>
                </p>
            <Footer />
        </>
    );
}

export default AuthNoPermission;