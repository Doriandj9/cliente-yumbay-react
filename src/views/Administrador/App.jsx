import Home from './Home/Home';
import './../../styles/layout.css'
import { useUserStore } from './../../store/userStore';
import AuthNoPermission from "../../components/AuthNoPermission";
const App = () => {
    const user = useUserStore((state) => state.user);
    if(!user){
        //si no enviamos los permisos nos envia a ruta page-not-found
        return (<AuthNoPermission />)
    }
    //si no tiene los permisos tambien se le redirige a un page-not-permision 
    if(user && user.permisos !== 16){
       return (<AuthNoPermission />)
    }
    return (
        <Home datos={user} ></Home>
    );
}

export default App;