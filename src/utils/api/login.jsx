import { useFetch } from "../hooks/useFetch";


const loginUser = async ({request}) => {
    const values = [...await request.formData()];

    // const res = useFetch({
    //    path:'http://127.0.0.1:8000/api/user',
    //    method: 'GET'
    // })

    return values;
}

export {loginUser};