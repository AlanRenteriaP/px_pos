import { menubarConstants } from '../constants';


export const menubarActions = {
    toggle_menu,
};


function toggle_menu(isOpen) {
    return dispatch => {
        if(isOpen){
            dispatch(close());
        }else{
            dispatch(open());
        }
    };
    function open() {  return { type: menubarConstants.TOGGLE_MENU, payload: true }}
    function close() {  return { type: menubarConstants.TOGGLE_MENU, payload:false }}
}
