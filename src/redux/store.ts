import { configureStore } from '@reduxjs/toolkit';
import { alertSlice } from './features';
import { appBarSlice, activeComponentSlice } from './dashboard'

export const store = configureStore({
    reducer: {
        alert: alertSlice.reducer,
        appBar: appBarSlice.reducer,
        activeComponent: activeComponentSlice.reducer,
    },
});

// Infer the RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;