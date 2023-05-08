import { useEffect, useState } from "react";
import { useAppConfig } from './../../../store/configAppStore';
import DataCards from "./DataCards";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/material";

const App = () => {
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState(null);
    const [error,setError] = useState(false);
    const appConfing = useAppConfig((state) => state.app);
    const cedula = '0250186664';
    const especialidad = 2;
    useEffect(() => {
        setLoading(true);
        fetch(`${appConfing.hostServer}api/agenda/cita-medica/${cedula}/${especialidad}`)
        .then(query => query.json())
        .then(setData)
        .catch(setError)
        .finally(() => {
            setLoading(false)
        })
    },[])
    return (<>
    {
        data && (
            <div key={'agn-001'}
             className="d-flex justify-content-around gap-2 flex-wrap p-2">
                <DataCards  key={'card-001'}
                data={data.data} />
            </div>
        )
    }
    {
        loading && (
        <div className="d-flex justify-content-around gap-2 flex-wrap p-2">
        {
        [1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
        <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
        </Stack>)
        )
        }
        </div>
          )
    }
    </>);
}

export default App;