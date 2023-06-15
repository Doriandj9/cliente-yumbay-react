import Header from './Header';
import Footer from './Footer';
import img from './../assets/imgs/undraw_page_not_found_re_e9o6.svg';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
            <Header />
                <h1 className='text-primary text-center'>Error 404</h1>
                <img height={350} src={img} 
                style={{ margin: 'auto', display: 'block' }}
                alt="404" />
                <p className='text-center'>
                    El recurso que intenta acceder no existe <Link to='/'>
                         Regresar
                    </Link>
                </p>
            <Footer />
        </>
    );
}

export default PageNotFound;