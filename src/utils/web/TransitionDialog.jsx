import Slide from "@mui/material/Slide";
import { forwardRef } from "react";


const transitionDialog =  (direccion = 'up') => {
    return forwardRef(function Transition(props, ref) {
        return <Slide direction={direccion} ref={ref} {...props} />;
      }); 
}  


export default transitionDialog;