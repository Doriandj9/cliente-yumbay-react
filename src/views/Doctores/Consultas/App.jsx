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
import { useTitle } from '../../../utils/hooks/useTitle';
import { LoadingOne } from '../../../components/Loading';
import { CEDULA_REG_EXPRE } from './../../../utils/web/componentes/ConstExpres';
const App = () => {
    useTitle('Consultas de Pacientes');
    const [loading,setLoading] = useState(false);
    const [loadingConsulta,setLoadingConsulta] = useState(false);
    const [data,setData] = useState(null);
    const [error,setError] = useState(false);
    const [consulta,setConsulta] = useState(false);
    const [paciente,setPaciente] = useState(null);
    const appConfig = useAppConfig((state) => state.app);
    const [cedula,setCedula] = useState(null);
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
    
    useEffect(() => {
        if(consulta){
            setLoadingConsulta(true);
            fetch(`${appConfig.hostServer}api/fichas/${user.id_especialidad}/${cedula}`)
            .then(query => query.json())
            .then(setData)
            .catch(setError)
            .finally(() => {
                setConsulta(false);
                setLoadingConsulta(false);
            })
        }
    },[consulta])

    const handleSearch = (e) => {
        if(CEDULA_REG_EXPRE.test(e.target.value.trim())){
            setCedula(e.target.value.trim());
            setConsulta(true);
        }
    }
    console.log(data);
    return(
        <>
        {
            loadingConsulta && <LoadingOne ancho={'50%'} textInner='Cargando fichas...' />
        }
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
                        <input  type="search" onChange={handleSearch}  placeholder='Ingrese el número de cédula del paciente...' />
                    </div>
                </div>
            </div>
            <div className='ps-3 pe-3 m-0'>
               {
                loading && (<Stack width={'100%'} spacing={0.25}>
                    {/* For variant="text", adjust the height via font-size */}
                    <Skeleton variant="rectangular" width={'100%'} height={60}/>
                    {/* For other variants, adjust the size with `width` and `height` */}
                    <Skeleton variant="rectangular" width={'100%'} height={60} />
                    <Skeleton variant="rectangular" width={'100%'} height={60} />
                    <Skeleton variant="rectangular" width={'100%'} height={60} />
                  </Stack>)
               }
               {
                (data && data.ident) && (
                    <TablePacientes data={data.data} />
                )
               } 
            </div>
        </>
    );
}

export default App;