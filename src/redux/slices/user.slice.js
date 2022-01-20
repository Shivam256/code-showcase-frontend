import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    users:[],

}

const slice = createSlice({
    name:'user',
    initialState,
    reducers:{
        getUsersSuccess(state,action){
            state.users = action.payload;
            return state;
        }
    }

})

export default slice.reducer;

export const { getUsersSuccess} = slice.actions;