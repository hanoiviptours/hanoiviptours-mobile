import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFlightSearch {
  data: any[];
  isLoading?: boolean;
  isSuccess?: boolean;
}

const initialState: IFlightSearch = {
  data: [],
  isLoading: false,
  isSuccess: false,
};
const flightSearchSlice = createSlice({
  name: 'flightSearching',
  initialState,
  reducers: {
    setFlightSearch: (state, action: PayloadAction<Partial<IFlightSearch>>) => {
      return { ...state, ...action.payload };
    },
    clearFlightSearch: () => {
      return initialState;
    },
  },
});

export const { setFlightSearch, clearFlightSearch } = flightSearchSlice.actions;

export default flightSearchSlice.reducer;
