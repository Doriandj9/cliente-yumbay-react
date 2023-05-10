import { useEffect, useState } from "react";
import { useParams  } from 'react-router-dom';
import { useAppConfig } from './../../../../store/configAppStore';
import {HiInformationCircle} from 'react-icons/hi';
import {FaFileMedical} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai';

const FichaMedica = () => {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
   const {cedula} = useParams();
  const appConfig = useAppConfig((state) => state.app);

   useEffect(() => {
    setLoading(true);
    fetch(`${appConfig.hostServer}api/doctor/fichas/medicas/${cedula}`)
    .then(query => query.json())
    .then(setData)
    .catch(setError)
    .finally(() => {
        setLoading(false);
    })

   }, []);
  const handleFilter = () => {
    
  }
    return (
        <>
        <h2 className='title-list'> Listado de fichas médicas </h2>

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
        </>
    );
}

export default FichaMedica;