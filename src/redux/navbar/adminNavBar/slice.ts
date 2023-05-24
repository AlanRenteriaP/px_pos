import { menubarConstants } from '../constants';

const initialState = {
    isOpen: false
}
export function menubar(state = initialState, action) {
    switch (action.type) {
        case menubarConstants.TOGGLE_MENU:
            return {
                isOpen: action.payload
            };
        default:
            return state;
    }
}