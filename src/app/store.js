import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import arrayListReducer from '../features/arrays/ListArraySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    arraylist:arrayListReducer,
  },
});
