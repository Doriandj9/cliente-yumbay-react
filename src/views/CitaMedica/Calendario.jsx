import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

const Calendario = () => {
    const handelChange = (value) => {
        console.log(dayjs(value).format('DD/MM/YYYY'));
    }
    return (
        <LocalizationProvider
        dateAdapter={AdapterDayjs}>
          <DateCalendar  
          onChange={handelChange}
          />
        </LocalizationProvider>
      );
    
}

export default Calendario;