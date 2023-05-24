import { useEffect } from "react"

const useTitle = (title)=>{
    useEffect(() => {
        document.title = 'Fundación Arturo Yumbay | ' + title;
    },[]);
}


export {useTitle}