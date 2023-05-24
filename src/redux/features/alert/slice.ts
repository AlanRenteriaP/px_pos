import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Alert } from './types';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

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
        setAlert: (state, action: PayloadAction<Omit<Alert, 'id'>>) => {
            const id = uuidv4(); // Generate a unique ID
            const newAlert: Alert = { ...action.payload, id }; // Create a new alert with the generated ID
            state.notification.push(newAlert);
        },
        removeAlert: (state, action: PayloadAction<string>) => {
            state.notification = state.notification.filter((alert) => alert.id !== action.payload);
        },
    },
});

export const { setAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
export { alertSlice };