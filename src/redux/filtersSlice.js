import { createSlice } from '@reduxjs/toolkit';

const initialState = { params: {} };

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.params = { ...payload };
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectFilter = state => state.filters.params;
export const filtersSliceReducer = filtersSlice.reducer;
