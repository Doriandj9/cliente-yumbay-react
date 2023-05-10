import { useEffect, useState } from "react";
import { useParams  } from 'react-router-dom';
import { useAppConfig } from './../../../../store/configAppStore';
import {AiOutlineSearch} from 'react-icons/ai';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from "dayjs";
import Ficha from "./Ficha";

const FichaMedica = () => {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const [day, setDay] = useState(dayjs());
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
   const handleFilter = (value,validation) => {
        setDay(value);
        const valueRes = data.data.filter((d) => d.fecha === value.format('YYYY-MM-DD'));
        console.log(valueRes);
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
                        >
                        <AiOutlineSearch className='text-secondary'
                        style={{ fontSize:'1.2rem' }}
                         /></span> 
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer sx={
                            {
                                fontSize: '0.5rem'                            }
                        }
                         components={['DatePicker']}>
                            <DatePicker sx={{
                                fontSize:'0.5rem'
                            }}
                             onChange={handleFilter}
                             className="w-100 mb-4"
                             value={day}
                            label="Filtrar por fecha" />
                        </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>
            </div>
            {data && (<Ficha data={data.data[0]} />)}
        </>
    );
}

export default FichaMedica;