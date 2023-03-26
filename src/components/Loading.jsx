import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';


const LoadingOne = ({ancho}) => {
    return (
        <>
            <Box sx={{ width: ancho ?? '100%' }}>
            {/* <LoadingButton loading loadingIndicator="Cargando…" variant="outlined">
                Fetch data
            </LoadingButton> */}
                <LinearProgress />
            </Box>
        </>
    );
}

export {LoadingOne};