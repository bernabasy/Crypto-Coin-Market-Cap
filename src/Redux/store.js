import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './Modeling';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});
export default store;
