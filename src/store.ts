import { configureStore } from '@reduxjs/toolkit';
import svgsSlice from './components/Redux/svgReducer';
import svgPropertiesReducer from './components/Redux/inputReducer';

export const store = configureStore({
    reducer: {
        svgsSlice: svgsSlice,
        inputReducer: svgPropertiesReducer,
    },
});
