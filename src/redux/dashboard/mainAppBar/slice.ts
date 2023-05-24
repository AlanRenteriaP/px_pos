// appBarSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: boolean = true; // Initially, the AppBar is not open

const appBarSlice = createSlice({
    name: 'appBar',
    initialState,
    reducers: {
        toggleAppBar: (state) => !state, // Toggle the AppBar
    },
});

export const { toggleAppBar } = appBarSlice.actions;

export { appBarSlice };