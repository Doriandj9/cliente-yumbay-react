import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';

const  Informacion = ({info,open,handleClose}) => {
  return (
    <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          INFORMACIÓN DEL PACIENTE
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className='ps-5 pe-5'>
          <span className='mb-3 d-block'>
                <strong>Nº Cédula: </strong> {info.cedula}
            </span>
            <span className='mb-3 d-block'>
                <strong>Nombres: </strong> {info.nombres}
            </span>
            <span className='mb-3 d-block'>
                <strong>Apellidos: </strong> {info.apellidos}
            </span>
            <span className='mb-3 d-block'>
                <strong>Direccion: </strong> {info?.direccion}
            </span>
            <span className='mb-3 d-block'>
                <strong>Correo Electronico: </strong> {info?.email}
            </span>
            <span className='mb-3 d-block'>
                <strong>Nº Celular: </strong> {info?.celular}
            </span>
            <span className='mb-3 d-block'>
                <strong>Fecha de Nacimiento: </strong> {info?.fecha_nacimiento}
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Regresar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Informacion;