import { combineReducers } from 'redux';


import { alert } from './alert.reducer';
import {authReducer} from "./auth.reducer";

const appReducer = combineReducers({
    alert,
    authReducer
});

const rootReducer = (state, action) => {


    return appReducer(state, action);
};

export default rootReducer;