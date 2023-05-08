import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import {BsFillCalendarDateFill} from 'react-icons/bs';
import {MdAccessTimeFilled} from 'react-icons/md';
import dayjs from 'dayjs';
import { useState } from 'react';

const DataCards = ({data}) => {
    const [datos, setDatos] = useState(data);
    const colors = {
        1: 'red',
        2: 'black',
        3: '#5D8FC3',
        4: '#47C47F'
    }; 
    const format = Intl.DateTimeFormat('es',{
        month: 'long',
        year: 'numeric',
        day: 'numeric'
    }).format

    const handleClick = (e) => {
       const idRef = parseInt(e.target.dataset.id);
       const newDatos = datos.filter(dato => dato.id !== idRef);
       setDatos(newDatos);
       //peticion
    }
    return (
        <>
        { datos &&
            datos.map((dato) => {
                const color = Math.ceil(Math.random() * 4);
                       return (
                        <>
                       <Box key={dato.id}
                        sx={{ minWidth: 275 }}>
                            <Card
                             variant="outlined">
                                <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Cita Médica Pendiente
                                </Typography>
                                <Typography variant="h5" component="div">
                                <Avatar sx={{ bgcolor: colors[color] }}>{dato.nombres.split(' ')[0].substring(0,2)}</Avatar>
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Nombre: {dato.nombres}  {dato.apellidos} <br/>
                                    Cédula: {dato.cedula}
                                </Typography>
                                <Typography variant="body2">
                                    <span className='d-flex align-items-center gap-2'>
                                    <BsFillCalendarDateFill style={{fontSize: '1.25rem' }}
                                    className='text-black-50' /> {format(dayjs(dato.fecha))}
                                    </span>
                                    
                                    <br />
                                    <span className='d-flex align-items-center gap-2'>
                                    <MdAccessTimeFilled style={{fontSize: '1.25rem' }}
                                    className='text-black-50' /> {dato.horas.split('|')[0]} a {dato.horas.split('|')[1]}
                                    </span>
                                </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button data-id={dato.id} onClick={handleClick}
                                     className='text-success' size="small">No mostrar</Button>
                                </CardActions>
                            </Card>
                        </Box>
                    </>)
                }
            )
        }

        </>
    );
}

export default DataCards;