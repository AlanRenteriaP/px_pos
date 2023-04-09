// src/store/reducers/activeComponent.js
import DefaultComponent from "../../views/components/dashboard/pages/profile";

const initialState = DefaultComponent;

export function  activeComponent(state = initialState, action){
    switch (action.type) {
        case "SET_ACTIVE_COMPONENT":
            return action.payload;
        default:
            return state;
    }
}

