import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SVGProperties = {
  scaleX: number;
  scaleY: number;
  x: number;
  y: number;
  rotate: number;
  borderWight: number;
};


const initialState: SVGProperties = {
  scaleX: 0,
  scaleY: 0,
  x: 0,
  y: 0,
  rotate: 0,
  borderWight: 0,
};

const svgPropertiesSlice = createSlice({
  name: 'svgProperties',
  initialState,
  reducers: {
    setWidth: (state, action: PayloadAction<number>) => {
      state.scaleX = action.payload;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.scaleY = action.payload;
    },
    setX: (state, action: PayloadAction<number>) => {
      state.x = action.payload;
    },
    setY: (state, action: PayloadAction<number>) => {
      state.y = action.payload;
    },
    setRotate: (state, action: PayloadAction<number>) => {
      state.rotate = action.payload;
    },
    setBorderWight: (state, action: PayloadAction<number>) => {
      state.borderWight = action.payload;
    },
  },
});

export const { setWidth, setHeight, setX, setY, setRotate, setBorderWight } = svgPropertiesSlice.actions;

export default svgPropertiesSlice.reducer;
