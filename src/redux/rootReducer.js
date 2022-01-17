import { combineReducers } from 'redux';

import auth from './slices/auth';

const rootReducer = combineReducers({
    auth,
})

export default rootReducer;