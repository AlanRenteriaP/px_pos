import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Alert } from './types';

interface AlertState {
    notification: Alert[];
}

const initialState: AlertState = {
    notification: [],
};

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlert: (state, action: PayloadAction<Alert>) => {
            state.notification.push(action.payload);
        },
        removeAlert: (state, action: PayloadAction<string>) => {
            state.notification = state.notification.filter((alert) => alert.id !== action.payload);
        },
    },
});

export const { setAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;