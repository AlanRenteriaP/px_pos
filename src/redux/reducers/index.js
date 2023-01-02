import { combineReducers } from 'redux';


import { alert } from './alert.reducer';
import {authReducer} from "./auth.reducer";
import {menubar} from './menubar.reducer';
const appReducer = combineReducers({
    alert,
    authReducer,
    menubar
});

const rootReducer = (state, action) => {


    return appReducer(state, action);
};

export default rootReducer;