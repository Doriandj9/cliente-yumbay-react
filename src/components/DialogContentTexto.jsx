import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const DialogContentTexto = ({textContent = 'Sin contexto',css='',cssCont=''}) => {
    return (
        <DialogContent className={css}>
          <DialogContentText className={cssCont} id="alert-dialog-description">
            {textContent}
          </DialogContentText>
        </DialogContent>
    );
}

export default DialogContentTexto;