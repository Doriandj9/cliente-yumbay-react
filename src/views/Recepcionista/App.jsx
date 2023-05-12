import './../../styles/layout.css'
import { useUserStore } from './../../store/userStore';
import { pagesWeb } from './../../utils/web/redirectPagesWeb';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home/Home';
const App = () => {
    const user = useUserStore((state) => state.user);
    const navigate = useNavigate();
    useEffect(() => {
        if(!user){
            //si no enviamos los permisos nos envia a ruta page-not-found
            navigate(pagesWeb());
        }
        //si no tiene los permisos tambien se le redirige a un page-not-permision 
        if(user && user.permisos !== 1){
            navigate(pagesWeb());
        }
    },[])
    return (
        <>
            <Home datos={user} />
        </>
    );
}

export default App;