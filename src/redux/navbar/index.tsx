import { combineReducers } from 'redux';

// import { alerts } from './slice.ts/alerts.slice.ts';
import { reducer } from '../auth/slice';
import { menubar } from './adminNavBar/slice';
// import { activeComponent } from './slice.ts/activeComponent.slice.ts';

interface AppState {
    alert: any;
    // slice.ts: any;
    // menubar: any;
    // activeComponent: any;
}

const appReducer = combineReducers<AppState>({
    alert,
    // slice.ts,
    // menubar,
    // activeComponent,
});

const rootReducer = (state: AppState, action: any) => {
    return appReducer(state, action);
};

export default rootReducer;