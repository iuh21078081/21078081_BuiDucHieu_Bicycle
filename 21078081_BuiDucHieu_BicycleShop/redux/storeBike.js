// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import bikesReducer from './sliceBike';

const store = configureStore({
  reducer: {
    bikes: bikesReducer,
  },
});

export default store;
