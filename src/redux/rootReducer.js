import { combineReducers } from 'redux';

import auth from './slices/auth';
import project from './slices/project.slice';


const rootReducer = combineReducers({
    auth,
    project
})

export default rootReducer;