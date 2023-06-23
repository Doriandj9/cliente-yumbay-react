import './../../styles/layout.css'
import { useUserStore } from './../../store/userStore';
import AuthNoPermission from "../../components/AuthNoPermission";

import Home from './Home/Home';
const App = () => {
    const user = useUserStore((state) => state.user);
    if(!user){
        //si no enviamos los permisos nos envia a ruta page-not-found
        return (<AuthNoPermission />)
    }
    //si no tiene los permisos tambien se le redirige a un page-not-permision 
    if(user && user.permisos !== 1){
       return (<AuthNoPermission />)
    }
    return (
        <>
            <Home datos={user} />
        </>
    );
}

export default App;