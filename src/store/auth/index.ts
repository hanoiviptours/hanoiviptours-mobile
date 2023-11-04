import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    refreshToken: null,
    accessToken: null,
    isAuthenticated: false,
  } as AuthState,
  reducers: {
    setToken: (
      state,
      { payload: { accessToken, refreshToken } }: TokenPayload,
    ) => {
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.isAuthenticated = true;
    },
    clearToken: state => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;

export type AuthState = {
  refreshToken?: string | null;
  accessToken?: string | null;
  isAuthenticated?: boolean;
};

type TokenPayload = {
  payload: Partial<AuthState>;
};
