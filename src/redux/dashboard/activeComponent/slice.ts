import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActiveComponentState } from './types';

const initialState: ActiveComponentState = {
    componentName: 'Profile', // default component
}

const activeComponentSlice = createSlice({
    name: 'activeComponent',
    initialState,
    reducers: {
        setActiveComponent: (state, action: PayloadAction<string>) => {
            state.componentName = action.payload;
        },
    },
});

export const { setActiveComponent } = activeComponentSlice.actions;
export default activeComponentSlice.reducer;

export { activeComponentSlice };