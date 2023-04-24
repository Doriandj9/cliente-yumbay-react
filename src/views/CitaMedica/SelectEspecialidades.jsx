import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { useAppConfig } from './../../store/configAppStore';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import SelectDoctor from './SelectDoctor';

const SelectEspecialidades = ({fecha,reset,setReset}) => {
  const [loading, setLoading] = useState(false) ;
    const [data, setData] = useState(null) ;
    const [error, setError] = useState(false);
    const [value, setValue] = useState(null);
 const configApp = useAppConfig((state) => state.app);
    useEffect(() => {
      if(fecha){
        fetch( configApp.hostServer + 'api/especialidades')
        .then(query => query.json())
        .then(setData)
        .catch(setError)
        .finally(() => {
          setLoading(false);
        });
      }
    },[fecha])
    useEffect(() => {
      if(reset.signal){
        setData(null);
        setReset({
          ...reset,
          signal: false
         })
      }
    },[reset.signal])

    const handleChange = (e) => {
      setValue(e.target.value);
    }
    return (<>
      {
        data ? (
        <FormControl variant="outlined" className='w-100 mb-2' style={{
        }} >
          <InputLabel required id="demo-simple-select-standard-label">{'Selecione la especialiadad para su cita'}</InputLabel>
          <Select name='especialidad' 
            labelId="demo-simple-select-standard-label"
            label={'Selecione la especialiadad para su cita'}
            onChange={handleChange}
            className='text-start'
            disabled={fecha ? false : true}
            value={value || ''}
            style={
              {
                  border: 'none',
                  outline: 'none'
              }
            }
          >
          {
            data.data.map((value) => 
              (<MenuItem key={value.id} value={value.id}>{value.nombre}</MenuItem>)
              )
          }
          </Select>
        </FormControl>
        ) : <TextField 
          label={fecha ? 'Cargando...' : 'Selecione la especialidad'}
          disabled
          className='w-100 mb-2'
        />
  }
  <SelectDoctor 
  fecha={fecha}
  reset={reset}
  especialidad={value}
  />
      </>);
}

export default SelectEspecialidades;

