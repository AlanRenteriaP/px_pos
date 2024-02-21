// src/redux/auth/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';

const token = localStorage.getItem('token');

const initialState: AuthState = {
    token: token,
    isAuthenticated: !!token, //token ? true : false,
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
            console.log('logout reducer called');
            localStorage.removeItem('token');
            state.token = null;
            state.isAuthenticated = false;
        },
        registerSuccess: (state, action: PayloadAction<string>) => {
            localStorage.setItem('token', action.payload);
            state.token = action.payload;
            state.isAuthenticated = true;
        },
    },
});

export const { loginSuccess, loginFail, logout } = authSlice.actions;
export const { registerSuccess } = authSlice.actions;

export { authSlice };