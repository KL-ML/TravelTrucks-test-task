import { configureStore } from '@reduxjs/toolkit';
// import { filtersSliceReducer } from './filtersSlice';
import { campersSliceReducer } from './campersSlice';
import { camperSliceReducer } from './camperSlice';

export const store = configureStore({
  reducer: {
    campers: campersSliceReducer,
    camper: camperSliceReducer,
    // filters: filtersSliceReducer,
  },
});
