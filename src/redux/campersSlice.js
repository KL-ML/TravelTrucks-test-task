import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps';

const INITIAL_STATE = { items: [], isLoading: false, error: null };

const campersSlice = createSlice({
  name: 'campers',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.items = [];
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});



export const campersSliceReducer = campersSlice.reducer;
export const selectCampers = state => state.campers.items;
export const selectIsLoading = state => state.campers.isLoading;
export const selectError = state => state.campers.error;
