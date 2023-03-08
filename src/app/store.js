import { configureStore } from '@reduxjs/toolkit';
import figuresReducer from '../features/components/figuresSlice';
import filtersReducer from '../features/components/filterSlice';

export const store = configureStore({
  reducer: {
    figures: figuresReducer,
    filters: filtersReducer,
  }
});