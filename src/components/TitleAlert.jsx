import DialogTitle from '@mui/material/DialogTitle';


const TitleAlert = ({title=null,css='' }) => {
return (
    <DialogTitle className={css} id="alert-dialog-title">
          {title ? title : ''}
        </DialogTitle>
);
}

export default TitleAlert;