import { configureStore, combineSlices } from '@reduxjs/toolkit';
import { counterSlice } from '../slices/counterSlice';

const rootReducer = combineSlices(counterSlice);

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;