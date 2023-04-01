import { useState } from 'react';
import logo from './../../assets/imgs/logo.jpg';
import {BsListUl} from 'react-icons/bs';
import {AiOutlineClose} from 'react-icons/ai';
import 'animate.css';
const Layout = ({navbar,content}) => {
    const [movil, setMovil] = useState(false);
    const handleMenu = (e) => {
        setMovil(true);
    }
    const handleClose = (e) => {
        setMovil(false);
    }
    return (
        <>
            <div className="container__layout">
                <div className="navbar__responsive">
                   { movil ? (<AiOutlineClose onClick={handleClose} className='icon__menu' />) :
                    <BsListUl onClick={handleMenu} className='icon__menu'></BsListUl>
                    }
                </div>
                <div className={ movil ? 'navbar__layout content-width w-75 d-block animate__animated animate__fadeInLeft animate__faster' 
                : "navbar__layout content-width"}>
                    {navbar}
                </div>
                <main className="main_layout">
                    <div className="content-width">

                    </div>
                    <div className="content__layout">
                        {content}
                    </div>
                </main>
                <img src={logo} className='img__layout' alt="" />
            </div>
        </>
    );
}

export default Layout;