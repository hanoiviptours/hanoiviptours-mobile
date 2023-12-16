import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAirlineInfo } from '@/screens/PlaneList/ulities';

export interface ICustomerInfomations {
  id: number;
  gender: 'MALE' | 'FEMALE';
  firstName: string;
  lastName: string;
  key: 'adult' | 'children' | 'baby';
}

interface FlightState extends IAirlineInfo {
  customers: ICustomerInfomations[];
}

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
  customers: [],
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
