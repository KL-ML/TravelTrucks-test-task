import { configureStore } from '@reduxjs/toolkit';
// import { filtersSliceReducer } from './filtersSlice';
import { campersSliceReducer } from './campersSlice';

export const store = configureStore({
  reducer: {
    campers: campersSliceReducer,
    // filters: filtersSliceReducer,
  },
});
