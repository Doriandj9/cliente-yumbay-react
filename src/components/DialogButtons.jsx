import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const DialogButtons = ({handleClose,handleSave = () =>{}, bgColor= null,  btnClose=null,btnSave=null, colorBtnClose = '' , colorBtnSave='',
    btnTextClose = 'Cerrar', btnTextSave = 'Guardar',css ='',
    variantBtnClose='text', variantBtnSave='text'
}) => {
    return (

        <DialogActions className={css}>
            {btnClose && <Button
            color={colorBtnClose ? colorBtnClose : 'primary'}
            onClick={handleClose}
            variant={variantBtnClose}
            >
                {btnTextClose}
            </Button>}
            {btnSave && <Button color={colorBtnSave ? colorBtnSave : 'primary'}
            onClick={handleSave}
            variant={variantBtnSave}
            >
                {btnTextSave}
            </Button>}
        </DialogActions>

    );
}

export default DialogButtons;