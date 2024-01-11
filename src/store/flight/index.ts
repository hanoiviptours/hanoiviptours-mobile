import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFlightState } from 'types/flight';

const initialState: IFlightState = {
  customers: [],
  availableFares: [],
};
const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    setFlightInfo: (state, action: PayloadAction<Partial<IFlightState>>) => {
      return { ...state, ...action.payload };
    },
    clearFlightInfo: () => {
      return initialState;
    },
  },
});

export const { setFlightInfo, clearFlightInfo } = flightSlice.actions;

export default flightSlice.reducer;
