import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ArrayState = string[];

const svgsSlice = createSlice({
  name: 'svgsArray',
  initialState: [] as ArrayState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    clear: () => [] as ArrayState,
  },
});

export const { add, clear } = svgsSlice.actions;

export default svgsSlice.reducer;


