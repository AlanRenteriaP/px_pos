// src/redux/auth/types.ts

export interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
}
