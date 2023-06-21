// src/redux/auth/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';

const initialState: AuthState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<string>) => {
            localStorage.setItem('token', action.payload);
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        loginFail: state => {
            localStorage.removeItem('token');
            state.token = null;
            state.isAuthenticated = false;
        },
        logout: state => {
            localStorage.removeItem('token');
            state.token = null;
            state.isAuthenticated = false;
        },
    },
});

export const { loginSuccess, loginFail, logout } = authSlice.actions;

export { authSlice };