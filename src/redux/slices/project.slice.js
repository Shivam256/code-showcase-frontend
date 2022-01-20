import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    projects:[],

}

const slice = createSlice({
    name:'project',
    initialState,
    reducers:{
        getProjectsSuccess(state,action){
            state.projects = action.payload;
            return state;
        }
    }

})

export default slice.reducer;

export const { getProjectsSuccess} = slice.actions;
