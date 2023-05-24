import { combineReducers } from 'redux';

import { alert } from './slice/alerts.slice';
import { reducer } from './slice';
import { menubar } from '../navBar/adminNavBar/slice';
import { activeComponent } from './slice/activeComponent.slice';

interface AppState {
    alert: any;
    // slice: any;
    // menubar: any;
    // activeComponent: any;
}

const appReducer = combineReducers<AppState>({
    alert,
    // slice,
    // menubar,
    // activeComponent,
});

const rootReducer = (state: AppState, action: any) => {
    return appReducer(state, action);
};

export default rootReducer;