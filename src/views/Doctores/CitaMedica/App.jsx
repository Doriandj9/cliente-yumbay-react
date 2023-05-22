import { useUserStore } from "../../../store/userStore";
import CitaMedica from "../../CitaMedica/CitaMedica";

const App = () => {
    const user = useUserStore((state) => state.user);
    return (
        <>
    <h2 className='title-list'>Agende una cita médica </h2>
        <CitaMedica recepcionista  cedula={user.cedula} />
        </>
    );
}

export default App;