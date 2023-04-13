import Home from './Home/Home';
import './../../styles/layout.css'
import { useUserStore } from './../../store/userStore';
import { pagesWeb } from './../../utils/web/redirectPagesWeb';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const App = () => {
    const user = useUserStore((state) => state.user);
    const navigate = useNavigate();
    // useEffect(() => {
    //     if(!user){
    //         //si no enviamos los permisos nos envia a ruta page-not-found
    //         navigate(pagesWeb());
    //     }
    //     //si no tiene los permisos tambien se le redirige a un page-not-permision 
    //     if(user && user.permisos !== 16){
    //         navigate(pagesWeb());
    //     }
    // },[])
    return (
        <Home></Home>
    );
}

export default App;