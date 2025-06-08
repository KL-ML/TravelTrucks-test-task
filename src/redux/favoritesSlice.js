import { createSlice } from '@reduxjs/toolkit';

const initialState = { favoritesCampers: [] };

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    changeFavorites(state, { payload }) {
      state.favoritesCampers =
        state.favoritesCampers.length !== 0 &&
        state.favoritesCampers.find(camper => camper.id === payload.id)
          ? state.favoritesCampers.filter(item => item.id !== payload.id)
          : [...state.favoritesCampers, payload];
    },
  },
});

export const { changeFavorites } = favoritesSlice.actions;
export const selectFavorites = state => state.favorites.favoritesCampers;
export const favoritesSliceReducer = favoritesSlice.reducer;
