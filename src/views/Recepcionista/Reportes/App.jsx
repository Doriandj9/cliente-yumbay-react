import {AiOutlineSearch} from 'react-icons/ai';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import {MdOutlineFilterList} from 'react-icons/md';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai';
import dayjs from 'dayjs';
const App = () => {

    return (<>
        <h2 className='title-list'>Sección de reportes </h2>
        <p className="p-3">
        Bienvenido a la interfaz de reportes de pacientes atendidos. 
        Esta herramienta ha sido diseñada para ayudar a los profesionales de la salud a  analizar
        la información de sus pacientes de manera fácil y eficiente mediante un documento pdf.
        Aquí podrás generar informes sobre tus pacientes y realizar un seguimiento de su progreso a lo largo del tiempo.
        Esperamos que esta herramienta te ayude a mejorar la calidad de atención que brindas a tus pacientes.
        </p>
        <div className='d-flex justify-content-between ps-3 pe-3 pb-2 m-0'>
                <div>
                <div>
                    <div className='busqueda d-flex flex-column'>
                        <span className='d-flex align-items-center gap-2'
                        >
                        <MdOutlineFilterList className='text-secondary'
                        style={{ fontSize:'2.5rem' }}
                         /> Filtre el reportes por fechas </span>

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
                                className="w-100 mb-4"
                                label="Fecha final" />
                            </DemoContainer>
                            </LocalizationProvider>
                        </div> 
                    </div>
                </div>
                </div>
            </div>
    </>);
}

export default App;