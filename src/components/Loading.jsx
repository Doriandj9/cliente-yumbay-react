import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Backdrop from '@mui/material/Backdrop';


const LoadingOne = ({ancho,flexDirection='column',textInner='Cargando...',cssTextInner=''}) => {
    return (
        <>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 ,flexDirection: flexDirection}}
                                    open={true}
                                                        >
                                {/* <CircularProgress color="inherit" /> */}
                <p className={cssTextInner}>{textInner}</p>
            <Box sx={{ width: ancho ?? '100%' }}>
                <LinearProgress />
            </Box>
            </Backdrop>
        </>
    );
}

export {LoadingOne};