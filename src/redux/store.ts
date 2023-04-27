import { configureStore } from '@reduxjs/toolkit';
import { alertSlice } from './features/alert';

export const store = configureStore({
    reducer: {
        alert: alertSlice.reducer,
        // Add other reducers here as needed
    },
});

// Infer the RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;