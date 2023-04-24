import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import SelectEspecialidades from './SelectEspecialidades';
import { useEffect, useState } from 'react';

const Calendario = ({reset,setReset}) => {
const [value, setValue] = useState(null);
const [valueDef, setValueDef] = useState(null);
    const handelChange = (value) => {
        setValue(dayjs(value).format('YYYY/MM/DD'));
        setValueDef(value);
    }
    useEffect(()=>{
      if(reset.signal){  
        setValue(null);
        setValueDef(null);
      }
    },[reset.signal])
    return (
      <>
        <LocalizationProvider
        dateAdapter={AdapterDayjs}>
          <DateCalendar
          value={valueDef}
          onChange={handelChange}
          />
        </LocalizationProvider>
        <SelectEspecialidades fecha={value}
        reset={reset}
        setReset={setReset}
        />
      </>
      );
    
}

export default Calendario;