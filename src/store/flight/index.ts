import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAirlineInfo } from '@/screens/PlaneList/ulities';

interface FlightState extends IAirlineInfo {}

const initialState: FlightState = {
  name: '',
  airport: '',
  landingAirport: '',
  icon: '',
  aircraftName: '',
  durationTime: '',
  takeOffTime: '',
  landingTime: '',
  airportLocation: '',
  landingAirportLocation: '',
  flightCodeNumber: '',
  flightTotalPrice: '',
  flightDateTime: '',
};
const flightSlice = createSlice({
  name: 'flight',
  initialState,
  reducers: {
    setFlightInfo: (state, action: PayloadAction<Partial<FlightState>>) => {
      return { ...state, ...action.payload };
    },
    clearFlightInfo: () => {
      return initialState;
    },
  },
});

export const { setFlightInfo, clearFlightInfo } = flightSlice.actions;

export default flightSlice.reducer;
