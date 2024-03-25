import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CanvasSvgState {
  svg: string;
}

const initialState: CanvasSvgState = {
  svg: '',
};

export const canvasSvgSlice = createSlice({
  name: 'canvasSvg',
  initialState,
  reducers: {
    setSvg: (state, action: PayloadAction<string>) => {
      state.svg = action.payload;
    },
  },
});

export const { setSvg } = canvasSvgSlice.actions;

export default canvasSvgSlice.reducer;
