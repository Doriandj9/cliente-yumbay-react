import { useState,useEffect } from "react";

const useFetch =  ({path, method, body=null}) => {

    const [route, setRoute] = useState(null);
    const [value, setValue] = useState(null);
    useEffect( () => {
        fetch(path,{method,body})
        .then(query => query.json())
        .then(setValue)
        .catch(console.log)

    },[route]);


    return  [value,setRoute];    
}

export {useFetch};