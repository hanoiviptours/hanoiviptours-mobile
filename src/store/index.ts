import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
  Storage,
} from 'redux-persist';
import { MMKV } from 'react-native-mmkv';

import { api } from '../services/baseApi';
import { amadeusApi } from '../services/amadeusApi';

import theme from './theme';
import auth from './auth';
import amadeus from './amadeus';
import flight from './flight';
import flightSearch from './flightSearch';
import steps from './checkoutsteps';

const baseReducers = combineReducers({
  theme,
  amadeus,
  auth,
  flight,
  flightSearch,
  steps,
  [api.reducerPath]: api.reducer,
  [amadeusApi.reducerPath]: amadeusApi.reducer,
});

const storage = new MMKV();
export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['theme', 'auth'],
};

const persistedBaseReducer = persistReducer(persistConfig, baseReducers);

const store = configureStore({
  reducer: persistedBaseReducer,

  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware, amadeusApi.middleware);

    if (__DEV__ && !process.env.JEST_WORKER_ID) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
    }

    return middlewares;
  },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { persistor, store };
