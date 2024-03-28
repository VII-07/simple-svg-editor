import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ColorPropertiesType = {
  color: string;
  colorBorder: string;
};


const initialState: ColorPropertiesType = {
  color: '#ffff',
  colorBorder: '#000000',
};

export const colorProperties = createSlice({
  name: 'colorProperties',
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    setBorderColor: (state, action: PayloadAction<string>) => {
      state.colorBorder = action.payload;
    },
  },
});

export const {setColor, setBorderColor} = colorProperties.actions;

export default colorProperties.reducer;
