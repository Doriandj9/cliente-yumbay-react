import {AiOutlineSearch} from 'react-icons/ai';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import {AiFillCaretLeft, AiFillCaretRight,AiOutlineSelect} from 'react-icons/ai';
import dayjs from 'dayjs';
import { useFetch } from '../../../utils/hooks/useFetch';
import { useAppConfig } from '../../../store/configAppStore';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import {TbReportSearch}from 'react-icons/tb'; 
import { LoadingOne } from '../../../components/Loading';
import VisualizadorPDF from './../../../utils/web/componentes/VisualizadorPDF/VisualizadorPDF'

const App = () => {
    const [userSelect,setUserSelect] = useState('');
    const [fechaI,setFechaI] = useState(null);
    const [fechaF, setFechaF] = useState(null);
    const [blob,setBlob] = useState(null);
    const [send,setSend] = useState(null);
    const [loadingPDF,setLoadingPDF] = useState(false);
    const appConfig = useAppConfig(state => state.app);
    const {data, error, loading} = useFetch({
        path:`${appConfig.hostServer}api/especialidades`,
        method:'GET'
    });
    const handleChange = (e) => {
        setUserSelect(e.target.value);
    }

    const handelFecha1 = (value,valid) =>{
        console.log(value);
        setFechaI(dayjs(value).format('YYYY-MM-DD'));
    }
    const handelFecha2 = (value,valid) =>{
        console.log(value);
        setFechaF(dayjs(value).format('YYYY-MM-DD'));
    }

    const handleReport = () => {
        console.log(fechaI,fechaF,userSelect);

        if(fechaI && fechaF === null){
            alert('Para continuar debe ingresar la fecha final.');
            return;
        }
        if(fechaF && fechaI === null){
            alert('Para continuar debe ingresar la fecha inicial.');
            return;
        }
        if(userSelect === ''){
            setUserSelect('0');
        }

        if(fechaI === null && fechaF === null){
            setFechaI('0')
            setFechaF('0')
        }

        setSend(true);

    }

   useEffect(() => {
    if(send){
        setLoadingPDF(true);
        fetch(`${appConfig.hostServer}api/reportes/${fechaI}/${fechaF}/${userSelect}`)
        .then(query => query.blob())
        .then(setBlob)
        .catch(console.log)
        .finally(() => {
            setSend(false);
            setLoadingPDF(false);
        })
    }
   },[send]);
   window.addEventListener('close.viewpdf',e =>{
        e.detail.remove();
    })

    useEffect(() => {
        if(blob){
            const view = new VisualizadorPDF();
            view.habilitarESC();
            view.mostrar(blob);
        }
    },[blob]);

    return (<>
    {
        loadingPDF && (
            <LoadingOne ancho={'50%'} textInner='Cargando el reporte...' />
        )
    }
        <h2 className='title-list'>Sección de reportes </h2>
        <p className="p-3">
        Bienvenido a la interfaz de reportes de pacientes atendidos. 
        Esta herramienta ha sido diseñada para ayudar a los profesionales de la salud a  analizar
        la información de sus pacientes de manera fácil y eficiente mediante un documento pdf.
        Aquí podrás generar informes sobre tus pacientes y realizar un seguimiento de su progreso a lo largo del tiempo.
        Esperamos que esta herramienta te ayude a mejorar la calidad de atención que brindas a tus pacientes.
        </p>
        <div className='d-flex justify-content-between ps-3 pe-3 pb-2 m-0'>
                <div className='w-100'>
                <div className='w-100'>
                    <div className='busqueda d-flex flex-column' style={{ width:'100%' }}>
                        <span className='d-flex align-items-center gap-2'
                        >
                        <AiOutlineSelect className='text-secondary'
                        style={{ fontSize:'2.5rem' }}
                         />Selecione la especialidad y fechas, si no lo seleciona el reporte reflejara todos los datos </span>

                         <div className='d-flex gap-3 align-items-center'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer sx={
                                {
                                    fontSize: '0.5rem'                            }
                            }
                            components={['DatePicker']}>
                                <DatePicker sx={{
                                    fontSize:'0.5rem'
                                }}
                                onChange={handelFecha1}
                                className="w-100 mb-4"
                                label="Fecha inicial" />
                            </DemoContainer>
                            </LocalizationProvider>
                            <span> <AiFillCaretLeft /> <AiFillCaretRight /> </span>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer sx={
                                {
                                    fontSize: '0.5rem'                            }
                            }
                            components={['DatePicker']}>
                                <DatePicker sx={{
                                    fontSize:'0.5rem'
                                }}
                                onChange={handelFecha2}
                                className="w-100 mb-4"
                                label="Fecha final" />
                            </DemoContainer>
                            </LocalizationProvider>
                        </div>
                        <div className='w-50 mb-3'>
                        {
                                    (data && data.ident) ? (
                                        <FormSelect
                                        handleChange={handleChange}
                                        userSelect={userSelect}
                                        data={data.data}
                                        />
                                    ) : (
                                        <Box sx={{ width: '100%', borderRadius:1 }} >
                                            <FormControl style={{
                                                                    border: 'none',
                                                                    outline: 'none',
                                                                    borderRadius: '0.5rem'
                                                                }}
                                            className='w-10 bg-white' fullWidth>
                                                <InputLabel id="demo-simple-select-label">Cargando...</InputLabel>
                                                <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={''}
                                                label="Especialidad"
                                                >
                                                </Select>
                                            </FormControl> 
                                        </Box>
                                    )
                                } 
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-5'>
                            <Button onClick={handleReport}
                            variant='contained' className='d-flex align-items-center gap-2'>
                                <TbReportSearch style={{ fontSize: '2rem' }} /> Realizar Reporte
                            </Button>
                    </div>
                </div>
                </div>
            </div>
    </>);
}

const FormSelect = ({data , handleChange,userSelect}) => {

    const theme = createTheme({
        palette: {
          neutral: {
            main: '#000000ce',
            contrastText: '#fff',
          },
        },
      });
    
        return (<>
          <FormControl variant="filled" className='w-100 bg-white' style={{
            border: 'none',
            outline: 'none',
            borderRadius: '0.5rem'
          }} >
          <ThemeProvider theme={theme}>
            <InputLabel required id="demo-simple-select-standard-label">Selecione una especialidad</InputLabel>
            </ThemeProvider>
            <Select name='rol' 
              labelId="demo-simple-select-standard-label"
              value={userSelect}
              onChange={handleChange}
              label="Selecione una especialidad"
              style={
                {
                    border: 'none',
                    outline: 'none'
                }
              }
            >
                <MenuItem value={'0'} >Todos </MenuItem>
            {
                data.map((value) => (<MenuItem key={value.id} value={value.id}>{value.nombre}</MenuItem>))
            }
            </Select>
          </FormControl>
        </>);
    }
    

export default App;