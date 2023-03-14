import { configureStore } from '@reduxjs/toolkit';
import figuresReducer from '../features/reducers/figuresSlice';
import filtersReducer from '../features/reducers/filterSlice';
import columnsReducer from '../features/reducers/columnsSlice';

export const store = configureStore({
  reducer: {
    figures: figuresReducer,
    filters: filtersReducer,
    columns: columnsReducer
  }
});