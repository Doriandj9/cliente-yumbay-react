import CitaMedica from "./CitaMedica";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useTitle } from "../../utils/hooks/useTitle";

const App = () => {
    useTitle('Cita Medica');
    return (
        <>
         <div className="container__min">
         <Header></Header>
         <CitaMedica />
         <Footer className='mt-4'></Footer>
         </div>
        </>
    );
}

export default App;