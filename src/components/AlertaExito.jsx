import DialogAlert from "./DialogAlert";
import DialogContentTexto from "./DialogContentTexto";
import DialogButtons from "./DialogButtons";
import {IoIosCheckmarkCircle} from 'react-icons/io';

const AlertaExito = ({message,open,handleClose,handleOpen}) => {
    return (<>
        <DialogAlert
                open={open}
                handleClose={handleClose}
                handleClickOpen={handleOpen}
                >
                <DialogContentTexto
                textContent={(
                    <>
                    <IoIosCheckmarkCircle style={{ fontSize: '5rem' }}
                    className='text-success' />
                    <span className='ps-5 pe-5'> {message} </span>
                    </>
                    )}
                cssCont='d-flex flex-column gap-2 align-items-center'
                css='ps-4 pe-4'
                />
                <DialogButtons 
                btnClose={true}
                btnTextClose='Aceptar'
                variantBtnClose='contained'
                colorBtnClose='success'
                handleClose={handleClose}
                />
        </DialogAlert>
    </>);
}

export default AlertaExito;