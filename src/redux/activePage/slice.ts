// src/store/reducers/activeComponent.js
import Profile from "../../pages/dashboard/pages/dashboardProfile/DashboardProfile";

const initialState = Profile;

export function  activePage(state = initialState, action: { type: any; payload: any; }){
    switch (action.type) {
        case "SET_ACTIVE_COMPONENT":
            return action.payload;
        default:
            return state;
    }
}

