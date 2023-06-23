import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useAppConfig } from './../../store/configAppStore';
import { useState, useEffect } from 'react';
import { getDatesHabilitis } from '../../utils/web/rangeDates';
import { TextField } from '@mui/material';
import AlertWeb from '../../components/AlertWeb';

const SelectHora = ({fecha,info,especialidad,reset}) => {
  const [loading, setLoading] = useState(true) ;
    const [data, setData] = useState(null) ;
    const [error, setError] = useState(false);
    const [horas, setHoras] = useState(null);
    const [value, setValue] = useState(null);
    const [alert, setAlert] = useState(false);
    const [open, setOpen] = useState(false);
    let [horario, cedula] = [null,null];
    if(fecha !== null && info !== null){
      horario = info.split('&&')[0];
      cedula = info.split('&&')[1];
    }
    const configApp = useAppConfig((state) => state.app);
    useEffect(() => {
    if(fecha !== null && horario !== null && especialidad !== null){
      setLoading(true);
        fetch( configApp.hostServer + 'api/citas/medico/' + cedula + '/' + fecha.replaceAll('/','-') + '/' + especialidad) 
        .then(query => query.json())
        .then(setData)
        .catch(setError)
        .finally(() => {
          setValue('');
        });
      }
    },[fecha,horario,especialidad])

useEffect(()=>{
  //console.log(fecha,horario,data);
  if(fecha !== null && horario !== null && data){
    if(info === 'none') return;
    const [days,hours] = horario.split('|');
    const [h_i,h_f] = hours.split('-');
    const resp = getDatesHabilitis(fecha+h_i,fecha+h_f,days,data.citas);
    setLoading(false);
    if(resp){
      setHoras(resp);
      setData(null);
      setAlert(false);
    }else{
        setAlert(true);
        setOpen(true);
    }
  }
},[fecha,horario,data])

useEffect(() => {
  if(reset.signal){
    setHoras(null);
    // setReset({
    //   ...reset,
    //   signal: false
    //  })
  }
},[reset.signal])

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleClose = () => {
    setOpen(false);
  }
    return (<>
        {/* Alerta por si no tiene ese dia el medico habilitado para citas */}
        {
          alert && (<AlertWeb 
            menssageAlert='Este día el médico no proporciona citas medicas, por favor selecione otro día.'
            severity='warning'
            handleCloseAlert={handleClose}
            opened={open}
          />)
        }
        {
        (horas && !loading &&  info !== 'none') ? (
        <FormControl variant="outlined" className='w-100 mb-2' style={{
          // border: 'none',
          // outline: 'none',
          // borderRadius: '0.5rem'
        }} >
          <input type="hidden" value={cedula} name='cedula_doctor' />
          <input type="hidden" name='fecha' value={fecha ? fecha.replaceAll('/','-') : ''} />
          <InputLabel required id="demo-simple-select-standard-label">Selecione la hora</InputLabel>
          <Select name='horas' 
          className='text-start'
            labelId="demo-simple-select-standard-label"
            value={value || ''}
            onChange={handleChange}
            label={'Selecione al doctor'}
            disabled={alert}
            style={
              {
                  border: 'none',
                  outline: 'none'
              }
            }
          >
          {
           horas.length === 0 ? 
              (<MenuItem selected key='0' value='none'> Lo sentimos ya no existen citas para este día.</MenuItem>)
            : horas.map((value,i) => 
              (<MenuItem key={i} value={value}>{'Selecione: ➡️ ' + value.replace('|',' a ')}</MenuItem>))
          }
          </Select>
        </FormControl>
        ) : (
        <TextField 
        label={(info && info !== 'none' )? 'Cargando...' : 'Selecionar la hora'}
        disabled
        className='w-100 mb-2'
        />
        )
      }
      </>);
}

export default SelectHora;