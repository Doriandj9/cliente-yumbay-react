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
import { useAppConfig } from './../../../store/configAppStore';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { LoadingOne } from '../../../components/Loading';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const DataCards = ({data}) => {
    const [datos, setDatos] = useState(data);
    const [info, setInfo] = useState(null);
    const [send,setSend] = useState(false);
    const [error,setError] = useState(false);
    const [idState,setIdState] = useState(null);
    const [loading,setLoading] = useState(false);
    const appConfig = useAppConfig((state) => state.app);
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
       setIdState(idRef);
       setSend(true);
    }
    useEffect(() => {
        if(send){
            setLoading(true);
            fetch(appConfig.hostServer + `api/citas-medicas/estado/${idState}`)
            .then(query => query.json())
            .then(setInfo)
            .catch(setError)
            .finally(() => {
                setLoading(false);
                setSend(false);
            })
        }
    },[send]);
    let index = 0;
    return (
        <>
        {
            loading && (
                <LoadingOne
                textInner='Espere por favor...'
                ancho={'50%'}
                />
            )
        }
        { datos &&
            datos.map((dato) => {
                if(index > 4){
                    index = 0;
                }
                index++;
                       return (
                       <Box key={dato.id}
                        sx={{ minWidth: 275 }}>
                            <Card
                             variant="outlined">
                                <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    Cita Médica Pendiente
                                </Typography>
                                <Typography variant="h5" component="div">
                                <Avatar sx={{ bgcolor: colors[index] }}>{dato.nombres.split(' ')[0].substring(0,2)}</Avatar>
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
                    )
                }
            )
        }
        {
            (datos.length === 0) && (
            <Box sx={ { margin: 2 } }>
                <Grid  spacing={0.5} >
                <Item className='text-center'>
                    <h4 className="text-secondary">EN ESTE MOMENTO NO CUENTA CON CITAS MÉDICAS AGENDADAS</h4>
                    <h5 className="text-black-50">GRACIAS POR USAR NUESTRO SISTEMA</h5>
                </Item>
                </Grid>
            </Box>
            )
        }

        </>
    );
}

export default DataCards;