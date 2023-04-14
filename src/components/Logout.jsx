import { useNavigate } from 'react-router-dom';
import { useUserStore } from './../store/userStore';
import { useEffect } from 'react';

const Logout = () => {

    const logout = useUserStore((state) => state.logout);
    const navigate = useNavigate();
    useEffect(()=>{
        logout();
        navigate('/');
    },[navigate])
    return (
        <>
            <p>
                Si recive este mensaje algo salio mal por favor recargue la pagina <a href="/salir"> Recargar </a>
            </p>
        </>
    );
}

export default Logout;