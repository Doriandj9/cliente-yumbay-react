import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Login from "./Login";
import './index.css';
import { useNavigate } from "react-router-dom";
import { pagesWeb } from "../../utils/web/redirectPagesWeb";
import { useUserStore } from "../../store/userStore";
import { useEffect } from "react";
import { useTitle } from "../../utils/hooks/useTitle";
const App = () => {
    useTitle('Iniciar Sesión');
    const navigate = useNavigate();
    const user = useUserStore((state) => state.user);
    useEffect(()=> {
        if(user) {
            const path = pagesWeb(user.permisos);
            navigate(path,{
                replace: true
            });
        }

    },[])

    return (
        <div className="container__min">
        <Header />
        <Login/>
        <Footer />
        </div>
    );
}

 
export default App;