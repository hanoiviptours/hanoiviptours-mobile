import { createSlice } from '@reduxjs/toolkit';

const amadeusSlice = createSlice({
  name: 'amadeus',
  initialState: {
    amadeusAccessToken: null,
  } as AmadeusState,
  reducers: {
    setAmadeusToken: (
      state,
      { payload: { amadeusAccessToken } }: TokenPayload,
    ) => {
      state.amadeusAccessToken = amadeusAccessToken;
    },
    clearAmadeusToken: state => {
      state.amadeusAccessToken = null;
    },
  },
});

export const { setAmadeusToken, clearAmadeusToken } = amadeusSlice.actions;

export default amadeusSlice.reducer;

export type AmadeusState = {
  amadeusAccessToken?: string | null;
};

type TokenPayload = {
  payload: Partial<AmadeusState>;
};
