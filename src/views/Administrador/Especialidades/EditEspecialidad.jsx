import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import {MdSend} from 'react-icons/md';
import { Form } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const EditEspecialidad = ({info,open,handleClose,handleSubmit}) => {
    const [data,setData] = useState(info);
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }
   
    return (
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
        <Form onSubmit={handleSubmit}>

            <input type="hidden" name='id' value={data.id} />

            <DialogTitle id="alert-dialog-title">
              EDITE LA INFORMACIÓN DE LA ESPECIALIDAD
            </DialogTitle>
            <DialogContent>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0.25}>
            <Grid xs={12}>
            <Item>
            <TextField className='w-100 mb-4'
            label="Nombre de la especialidad" variant="outlined"
            name='nombre'
            value={data.nombre}
            onChange={handleChange}
            />
            <TextField className='w-100 mb-4' 
            label="Descripción de la especialidad" variant="outlined"
            name='descripcion'
            value={data.descripcion}
            multiline
            onChange={handleChange}
            />
            </Item>
            </Grid>
        </Grid>
        </Box>
            </DialogContent>
            <DialogActions>
            <Button type='submit'>
                Guardar Cambios
              </Button>
              <Button onClick={handleClose}>
                Salir
              </Button>
            </DialogActions>
        </Form>
          </Dialog>
      );
}   

export default EditEspecialidad;