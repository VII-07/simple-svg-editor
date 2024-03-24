import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SVGProperties = {
    width: number;
    height: number;
    x: number;
    y: number;
    rotate: number;
    radius: number;
    [key: string]: number;
  };
  

const initialState: SVGProperties = {
  width: 0,
  height: 0,
  x: 0,
  y: 0,
  rotate: 0,
  radius: 0,
};

const svgPropertiesSlice = createSlice({
  name: 'svgProperties',
  initialState,
  reducers: {
    setWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
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
    setRadius: (state, action: PayloadAction<number>) => {
      state.radius = action.payload;
    },
  },
});

export const { setWidth, setHeight, setX, setY, setRotate, setRadius } = svgPropertiesSlice.actions;

export default svgPropertiesSlice.reducer;
