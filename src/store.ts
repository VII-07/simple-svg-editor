import { configureStore } from '@reduxjs/toolkit';
import svgsSlice from './components/Redux/svgReducer';
import svgPropertiesReducer from './components/Redux/inputReducer';
import canvasSvgReducer from './components/Redux/downloadSvgReducer';

export const store = configureStore({
    reducer: {
        svgsSlice: svgsSlice,
        inputReducer: svgPropertiesReducer,
        canvasSvg: canvasSvgReducer,
    },
});
