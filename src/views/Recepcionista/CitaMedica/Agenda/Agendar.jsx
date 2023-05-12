import CitaMedica from "./../../../CitaMedica/CitaMedica";
import { useParams } from 'react-router-dom';

const Agendar = () => {
    const params = useParams();

    return (<>
        <CitaMedica recepcionista cedula={params.cedula} />
    </>);
}

export default Agendar;