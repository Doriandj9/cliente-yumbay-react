import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";

const DialogAlert = ({
  bottonDialgo = false,
  textBotton = "",
  open = false,
  handleClickOpen = () => {},
  handleClose  = () => {},
  children,
}) => {
  return (
    <div>
      {bottonDialgo ? (
        <Button variant="outlined" onClick={handleClickOpen}>
          {textBotton}
        </Button>
      ) : (
        ""
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {children}
      </Dialog>
    </div>
  );
};

export default DialogAlert;
