import { useEffect, useState } from "react";
import { useAppConfig } from './../../../store/configAppStore';
import DataCards from "./DataCards";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/material";
import { useUserStore } from './../../../store/userStore';
import {HiInformationCircle} from 'react-icons/hi';
import {FaLaptopMedical} from 'react-icons/fa';

const App = () => {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState(null);
    const [error,setError] = useState(false);
    const appConfing = useAppConfig((state) => state.app);
    const user = useUserStore((state) => state.user);
    const cedula = user.cedula;
    const especialidad = user.id_especialidad;
    useEffect(() => {
        setLoading(true);
        fetch(`${appConfing.hostServer}api/agenda/cita-medica/${cedula}/${especialidad}`)
        .then(query => query.json())
        .then(setData)
        .catch(setError)
        .finally(() => {
            setLoading(false)
        })
    },[])
    return (<>
    <h2 className='title-list'> Listado citas médica pendiente</h2>
            <h6 className='leyenda'> Leyenda de iconos </h6>
            <div className='d-flex gap-2'>
                <p className='d-flex align-items-center gap-1'>
                    
                    <FaLaptopMedical style={{ fontSize:'1.5rem' }} className='text-secondary'
                    /> Le envia a la vista para el realizar el diagnostico con los datos del paciente
                </p>
            </div>
    <div className="d-flex justify-content-around gap-2 flex-wrap p-2">
        {
            data && (<DataCards 
            data={data.data} />)
        }
    </div>
    {
        loading && (
        <div className="d-flex justify-content-around gap-2 flex-wrap p-2">
        {
        [1].map((i) => (
        <Stack width={'100%'} spacing={0.25} key={i} >
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="rounded" width={'100%'} height={60}  />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="rectangular" width={'100%'} height={60}  />
            <Skeleton variant="rectangular" width={'100%'} height={60} />
            <Skeleton variant="rectangular" width={'100%'} height={60} />
        </Stack>)
        )
        }
        </div>
          )
    }
    </>);
}

export default App;