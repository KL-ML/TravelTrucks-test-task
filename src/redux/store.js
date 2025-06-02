import { configureStore } from '@reduxjs/toolkit';
// import { filtersSliceReducer } from './filtersSlice';
// import { contactsSliceReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    // contacts: contactsSliceReducer,
    // filters: filtersSliceReducer,
  },
});
