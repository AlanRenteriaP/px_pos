import { combineReducers } from 'redux';


import { alert } from './alert.reducer';
import {authReducer} from "./auth.reducer";
import {menubar} from './menubar.reducer';
import {activeComponent} from "./activeComponent.reducer";
const appReducer = combineReducers({
    alert,
    authReducer,
    menubar,
    activeComponent
});

const rootReducer = (state, action) => {


    return appReducer(state, action);
};

export default rootReducer;