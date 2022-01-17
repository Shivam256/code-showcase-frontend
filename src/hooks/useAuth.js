import {useCallback} from 'react';

import {useSelector} from 'react-redux';
import axios from '../utils/axios';

const useAuth = () => {
    const {isLoggedIn,token,user} = useSelector(state => state.auth);

    const register = useCallback(async (userData)=>{
        const response = await axios.get('/test');
        console.log(response,"i am from axios");
    })

    return {
        register
    }
}


export default useAuth;