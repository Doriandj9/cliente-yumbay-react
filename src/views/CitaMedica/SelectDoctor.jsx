import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { useAppConfig } from './../../store/configAppStore';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import SelectHora from './SelectHora';

const SelectDoctor = ({fecha,especialidad}) => {
    const [loading, setLoading] = useState(false) ;
    const [data, setData] = useState(null) ;
    const [error, setError] = useState(false);
    const [value, setValue] = useState(null);
    
    const configApp = useAppConfig((state) => state.app);

    useEffect(() => {
      if(especialidad){
        setLoading(true)
        fetch( configApp.hostServer + 'api/users/medicos/especialidad/' + especialidad)
        .then(query => query.json())
        .then(setData)
        .catch(setError)
        .finally(() => {
          setLoading(false);
        });
      }
    },[especialidad])
    const handleChange = (e) => {
      setValue(e.target.value);
    }
    return (<>
      {
        (data && !loading) ? (
        <FormControl variant="outlined" className='w-100 mb-2' style={{
          // border: 'none',
          // outline: 'none',
          // borderRadius: '0.5rem'
        }} >
          <InputLabel required id="demo-simple-select-standard-label">{'Selecione al doctor'}</InputLabel>
          <Select name='doctor' 
          className='text-start'
            labelId="demo-simple-select-standard-label"
            value={value || ''}
            onChange={handleChange}
            label={'Selecione al doctor'}
            style={
              {
                  border: 'none',
                  outline: 'none'
              }
            }
          >
          {
            data.data.length === 0 ? 
              (<MenuItem selected key='0' value='none'> Lo sentimos no existen doctores en está especialiadad.</MenuItem>)
            :  data.data.map((value) => 
              (<MenuItem key={value.id} value={value.horario}>{value.nombres+ ' ' + value.apellidos.split(' ')[0]}</MenuItem>))
          }
          </Select>
        </FormControl>
        ) : (
        <TextField 
        label={especialidad ? 'Cargando...' : 'Selecione al doctor'}
        disabled
        className='w-100'
        />
        )
      }
      <SelectHora 
      fecha={fecha}
      horario={value}
/>
      </>);
}


export default SelectDoctor;