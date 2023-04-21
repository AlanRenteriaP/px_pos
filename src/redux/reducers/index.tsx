import { combineReducers } from 'redux';

import { alert } from './alert.reducer';
import { authReducer } from './auth.reducer';
import { menubar } from './menubar.reducer';
import { activeComponent } from './activeComponent.reducer';

interface AppState {
    alert: any;
    authReducer: any;
    menubar: any;
    activeComponent: any;
}

const appReducer = combineReducers<AppState>({
    alert,
    authReducer,
    menubar,
    activeComponent,
});

const rootReducer = (state: AppState, action: any) => {
    return appReducer(state, action);
};

export default rootReducer;