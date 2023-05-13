import { useEffect } from "react"

const useTitle = (title)=>{
    useEffect(() => {
        document.title = 'Clinica Yumbay | ' + title;
    },[]);
}


export {useTitle}