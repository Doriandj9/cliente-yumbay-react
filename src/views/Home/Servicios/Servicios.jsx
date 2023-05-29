import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { useEffect, useState } from 'react';
import { useTitle } from "../../../utils/hooks/useTitle";
import { useAppConfig } from "../../../store/configAppStore";
import Skeleton from '@mui/material/Skeleton';
const loadings = [1,2,3,4,5,6,7,8,9];
const Servicios = () => {
    useTitle('Servicios');
    const [loading, setLoading] = useState(false);
    const [data,setData] = useState(null);
    const [error,setError] = useState(null);
    const appConfig = useAppConfig((state) => state.app);
    useEffect(() => {
        setLoading(true);
        fetch(`${appConfig.hostServer}api/especialidades`)
        .then(query => query.json())
        .then(setData)
        .catch(setError)
        .finally(() => {
            setLoading(false);
        });
    },[]);


    return (
        <>
        <Header></Header>
            <div className="border border-1 w-100 mt-4"></div>
            <div className="mt-2">
                    <h2 className="text-white text-center bg-secondary p-2" >Servicios clinicos.</h2>
            </div>

            {
                loading && (<>
                    <div>
                        <div className='containers__cards p-3 d-flex gap-1 justify-content-around flex-wrap'>
                            {
                                loadings.map((i) => (
                                    <div key={i} className="card" style={{width:'12rem'}}>
                                        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                                        <div className="card-body">
                                        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                        <Skeleton animation="wave" height={10} width="80%" />
                                            </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </>)
            }
            <div>
            <div className='containers__cards p-3 d-flex gap-1 justify-content-around flex-wrap'>
                {
                    (!loading && data && data.ident) && 
                    data.data.map((element) => (
                        <div key={element.id} className="card" style={{width:'12rem'}}>
                            <img src={`${element.img.includes('http') ? '' : appConfig.hostServer.slice(0,-1)}${element.img}`}  alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{element.nombre}</h5>
                                <p className="card-text altura__1">{element.descripcion}</p>
                                </div>
                        </div>
                    ))
                }
            </div>
            </div>
        <Footer></Footer>
        </>
    );
}

export default Servicios;