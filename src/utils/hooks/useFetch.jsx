import { useState,useEffect } from "react";

const useFetch =  ({path, method, body=null}) => {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [data, setData] = useState(null);
    const [controller, setController] = useState(null);
    useEffect( () => {
        const abortController = new AbortController();
        setLoading(true);
        setController(abortController);
        if(body !== null){
        fetch(path,{method,body,signal: abortController.signal})
        .then(query => query.json())
        .then(values => {
            setData(values);
        })
        .catch(e => {
            if(e.name === 'AbortRequest'){
                console.log(e);
                return;
            }
            setError(e);
        })
        .finally(() => {
            setLoading(false);
        });

        return () => abortController.abort();
    }else{
        setLoading(false);
    }

    },[]);
    const handleAbortController = () => {
        if(controller){
            controller.abort();
        }
    }

    return  {data,loading,error,handleAbortController};    
}

export {useFetch};