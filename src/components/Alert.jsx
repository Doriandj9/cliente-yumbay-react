import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Alert = ({bottonDialgo=false,textBotton='',opened=false,numButtons = 2, buttonsOp={
    textButtonOne: 'Cerrar',
    textButtonTwo: 'Guardar',
    handleOp: null
}}) =>  {
  const [open, setOpen] = React.useState(opened);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        {
            bottonDialgo ? 
            <Button variant="outlined" onClick={handleClickOpen}>
              {textBotton}
            </Button>: ''
        }
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        {
            numButtons === 2 ? (<>
            <Button onClick={handleClose}>
            {buttonsOp.textButtonOne}
          </Button>
          <Button onClick={buttonsOp.handleOp ? buttonsOp.handleOp : handleClose} autoFocus>
            {buttonsOp.textButtonTwo}
          </Button> </>):(<>
          <Button onClick={handleClose}>
          {buttonsOp.textButtonOne}
        </Button>
        </>)
        }
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Alert;