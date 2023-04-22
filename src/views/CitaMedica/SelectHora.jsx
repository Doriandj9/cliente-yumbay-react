import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import dayjs from 'dayjs';
import { getDatesHabilitis } from '../../utils/web/rangeDates';


const SelectHora = ({fecha,horario}) => {
  const [value,setValue] = useState(null);
  if(fecha !== null && horario !== null){
    const [days,hours] = fecha.split('|');
    const [h_i,h_f] = hours.split('-');
    getDatesHabilitis(fecha+h_i,fecha+h_f,[]);
  }
  const handleChange = (e) => {
    setValue(e.target.value);
  }
    return (<>
        {/* <FormControl variant="outlined" className='w-100 mb-2' style={{
          // border: 'none',
          // outline: 'none',
          // borderRadius: '0.5rem'
        }} >
          <InputLabel required id="demo-simple-select-standard-label">{'Selecione la hora disponible para la cita'}</InputLabel>
          <Select name='hora' 
            labelId="demo-simple-select-standard-label"
            value={value || ''}
            onChange={handleChange}
            label={'Selecione la hora disponible para la cita'}
            style={
              {
                  border: 'none',
                  outline: 'none'
              }
            }
          >
          {
              data.map((value) => (<MenuItem key={value.id} value={value.id}>{value.start} a {value.end}</MenuItem>))
          }
          </Select>
        </FormControl> */}
      </>);
}

export default SelectHora;