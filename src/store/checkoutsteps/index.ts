import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICheckoutstepsState {
  steps?: number;
}
const initialState: ICheckoutstepsState = {
  steps: 0,
};

const checkoutstepsSlice = createSlice({
  name: 'checkoutsteps',
  initialState,
  reducers: {
    setSteps: (state, action: PayloadAction<Partial<ICheckoutstepsState>>) => {
      state.steps = action.payload.steps;
    },
    clearSteps: () => {
      return initialState;
    },
  },
});

export const { setSteps, clearSteps } = checkoutstepsSlice.actions;

export default checkoutstepsSlice.reducer;
