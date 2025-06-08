import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperById } from './operations';

const INITIAL_STATE = { item: [], isLoading: false, error: null };

const camperSlice = createSlice({
  name: 'camper',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      .addCase(fetchCamperById.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.item = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const camperSliceReducer = camperSlice.reducer;
export const selectCamper = state => state.camper.item;
export const selectIsLoading = state => state.camper.isLoading;
export const selectError = state => state.camper.error;
