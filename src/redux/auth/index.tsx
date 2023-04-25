import { combineReducers } from 'redux';

import { alert } from './reducer/alert.reducer';
import { reducer } from './reducer';
import { menubar } from '../navBar/adminNavBar/reducer';
import { activeComponent } from './reducer/activeComponent.reducer';

interface AppState {
    alert: any;
    // reducer: any;
    // menubar: any;
    // activeComponent: any;
}

const appReducer = combineReducers<AppState>({
    alert,
    // reducer,
    // menubar,
    // activeComponent,
});

const rootReducer = (state: AppState, action: any) => {
    return appReducer(state, action);
};

export default rootReducer;