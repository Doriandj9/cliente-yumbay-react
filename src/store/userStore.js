import { create } from 'zustand';
import './../../node_modules/jwt-decode/build/jwt-decode';
import jwtDecode from 'jwt-decode';
let init = null;
if(sessionStorage.__tok){
    init = jwtDecode(sessionStorage.getItem('__tok'))[0];
}


const useUserStore = create((set) => ({
    /**
     * @var {Object} user
     */
    user: init,
    /**
     * @param {Object} value
     */
    login: (value) => set((state) => ({
        user: value
    })),
    logout: () => set((state) => {
        sessionStorage.removeItem('__tok');
        return {
            user: null
        }
})
}))

export {useUserStore};