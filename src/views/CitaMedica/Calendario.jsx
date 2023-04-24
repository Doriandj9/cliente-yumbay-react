import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import SelectEspecialidades from './SelectEspecialidades';
import { useEffect, useState } from 'react';

const Calendario = ({reset,setReset}) => {
const [value, setValue] = useState(null);
    const handelChange = (value) => {
        setValue(dayjs(value).format('YYYY/MM/DD'));
    }
    // useEffect(()=>{
    //   if(reset){  
    //    // setValue(null);
    //     //setReset(false)
    //   }
    // },[reset])
    return (
      <>
        <LocalizationProvider
        dateAdapter={AdapterDayjs}>
          <DateCalendar
          onChange={handelChange}
          />
        </LocalizationProvider>
        <SelectEspecialidades fecha={value}/>
      </>
      );
    
}

export default Calendario;