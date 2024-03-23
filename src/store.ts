import { configureStore } from '@reduxjs/toolkit';
import svgsSlice from './components/Redux/reducer';

export const store = configureStore({
    reducer: {
        svgsSlice: svgsSlice,
    },
  });
