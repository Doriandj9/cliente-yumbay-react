import './index.css';
import {HiInformationCircle} from 'react-icons/hi';
import {FaFileMedical} from 'react-icons/fa';
import TablePacientes from './TablePacientes';
import {AiOutlineSearch} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useAppConfig } from './../../../store/configAppStore';
import { useUserStore  } from './../../../store/userStore';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const App = () => {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState(null);
    const [error,setError] = useState(false);
    const [consulta,setConsulta] = useState(false);
    const appConfig = useAppConfig((state) => state.app);
    const user = useUserStore((state) => state.user)
    useEffect(() => {
        setLoading(true);
        fetch(`${appConfig.hostServer}api/doctor/${user.cedula}/pacientes/especialidad/${user.id_especialidad}`)
        .then(query => query.json())
        .then(setData)
        .catch(setError)
        .finally(() => {
            setLoading(false);
        })
    },[])
    
    return(
        <>
            <h2 className='title-list'> Listado de pacientes registrados </h2>
            <h6 className='leyenda'> Leyenda de iconos </h6>
            <div className='d-flex gap-2'>
                <p className='d-flex align-items-center gap-1'>
                    <HiInformationCircle style={{ fontSize:'1.5rem' }} className='text-primary'
                    /> Mostrar más información del paciente
                </p>
                <p className='d-flex align-items-center gap-1'>
                    
                    <FaFileMedical style={{ fontSize:'1.5rem' }} className='text-secondary'
                    /> Mostrar las fichas médicas del paciente
                </p>
            </div>
            <div className='d-flex justify-content-between ps-3 pe-3 pb-2 m-0'>
                <div>
                    Total de resultados {data?.data?.length ?? 'ninguna'}
                </div>
                <div>
                    <div className='busqueda'>
                        <span className='d-flex align-items-center gap-2'
                        > Buscar
                        <AiOutlineSearch className='text-secondary'
                        style={{ fontSize:'1.2rem' }}
                         /></span> 
                        <input  type="search"  placeholder='Ingrese el número de cédula del paciente...' />
                    </div>
                </div>
            </div>
            <div className='ps-3 pe-3 m-0'>
               {
                loading && (<Stack spacing={0.25}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="text" width={'100%'} height={80}/>
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton variant="text" width={'100%'} height={80} />
                    <Skeleton variant="text" width={'100%'} height={80} />
                    <Skeleton variant="text" width={'100%'} height={80} />
                  </Stack>)
               }
               {
                (data && data.ident) && (
                    <TablePacientes data={data.data.slice(0,10)} />
                )
               } 
            </div>
        </>
    );
}

export default App;