import Paper from '@mui/material/Paper';
import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Horario = ({setDays,days}) => {
    const [select, setSelect] = useState({
        lunes: false,
        martes: false,
        miercoles: false,
        jueves: false,
        viernes: false,
        sabado:false,
        domingo: false
    });
    const handleSelect = (e) => {
        const containerSelected = document.getElementById('container-selected');
        const containerOptions = document.getElementById('container-options');
        const nameInput = e.target.getAttribute('valor').toLowerCase();
        const element = e.target.parentElement;
        const dataDays = new Set([...days]);

        if(!select[nameInput]){

            containerSelected.append(element);
            element.children[0].classList.add('selected__day')
            setSelect({
                ...select,
                [nameInput]: true
            })
            dataDays.add(nameInput);
            setDays(dataDays);
        }else{

            containerOptions.append(element);
            element.children[0].classList.remove('selected__day')
            setSelect({
                ...select,
                [nameInput]: false
            })
            dataDays.delete(nameInput);
            setDays(dataDays);
        }
        
    }   

    return (
        <>
            <Box width={'100%'}>
                <label className='text-start d-block mb-2' style={{fontSize: '1.05rem' }}  
            htmlFor="">Selecione los días laborales de la especialiadad</label>
            <Grid id='container-options' style={{ gridAutoRows: 'auto' }}
             width={'100%'} container spacing={0.5}
             columnSpacing={0.5} alignContent={'center'} alignSelf={'center'}
             alignItems={'center'}
             gridAutoRows={true}
             >
            <Grid  onClick={handleSelect} item xs={2} >
                <Item valor='Lunes' className='text-uppercase day__select' >
                    LUNES
                </Item>
            </Grid>
            <Grid  onClick={handleSelect} item xs={2}>
                <Item valor='Martes' className='text-uppercase day__select' >
                    Martes
                </Item>
            </Grid>
            <Grid  onClick={handleSelect} item xs={3} >
                <Item  valor='Miercoles' className='text-uppercase day__select' >
                Miércoles
                </Item>
            </Grid>
            <Grid  onClick={handleSelect} item xs={2} >
                <Item valor='Jueves' className='text-uppercase day__select' >
                Jueves
                </Item>
            </Grid>
            <Grid  onClick={handleSelect} item xs={2} >
                <Item valor='Viernes'  className='text-uppercase day__select' >
                Viernes
                </Item>
            </Grid>
            <Grid onClick={handleSelect} item xs={2} >
                <Item  valor='Sabado'  className='text-uppercase day__select' >
                Sábado
                </Item>
            </Grid>
            <Grid  onClick={handleSelect} item xs={2} >
                <Item  valor='Domingo' className='text-uppercase day__select' >
                Domingo
                </Item>
            </Grid>
            </Grid>
            <label className='text-start d-block mb-2' style={{fontSize: '1.05rem' }}  
            htmlFor="">Días selecionados de la especialiadad</label>

            <Grid width={'100%'} container spacing={0.5}
             columnSpacing={0.5} alignContent={'center'} alignSelf={'center'}
             alignItems={'center'}
             gridAutoRows={true} 
             className='mb-2'
             style={{ minHeight: '2rem' }}
             id='container-selected'
             >
            </Grid>
            </Box>
        </>
    );
}


export default Horario;