
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertWeb = ({opened=false,buttonOpen=null,btnMenssage='', variantBtn='outlined',
durationHide=6000,severity='success',menssageAlert='Sin mensaje'
}) => {
  const [open, setOpen] = React.useState(opened);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      { buttonOpen && <Button variant={variantBtn} onClick={handleClick}>
        {btnMenssage}
      </Button> }
      <Snackbar open={open} autoHideDuration={durationHide} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {menssageAlert}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

export default AlertWeb;