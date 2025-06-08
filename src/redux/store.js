import { configureStore } from '@reduxjs/toolkit';
import { filtersSliceReducer } from './filtersSlice';
import { campersSliceReducer } from './campersSlice';
import { camperSliceReducer } from './camperSlice';
import { favoritesSliceReducer } from './favoritesSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['favoritesCampers'], // значення з ініт стейту улюблених в файлі favoritesSlice
};

const persistedReducer = persistReducer(persistConfig, favoritesSliceReducer);

export const store = configureStore({
  reducer: {
    campers: campersSliceReducer,
    camper: camperSliceReducer,
    filters: filtersSliceReducer,
    favorites: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
