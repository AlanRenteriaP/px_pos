// src/store/reducers/activeComponent.js
import Profile from "../../views/components/dashboard/pages/Profile";

const initialState = Profile;

export function  activePage(state = initialState, action){
    switch (action.type) {
        case "SET_ACTIVE_COMPONENT":
            return action.payload;
        default:
            return state;
    }
}

