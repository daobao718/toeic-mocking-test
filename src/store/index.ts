import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index';
import { type RootState } from './state';

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const selectAnswers = (state: RootState) => state.answers;

export default store;