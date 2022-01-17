import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn:false,
    user:null,
    token:null
}

const slice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        registerSuccess(state,action){
            return state
        }
    }
});

export const {registerSuccess} = slice.actions;

export default slice.reducer;