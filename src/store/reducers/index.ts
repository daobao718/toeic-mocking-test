import { createReducer } from '@reduxjs/toolkit';
import initialState, { type RootState } from '../state';
import { updateAnswer } from '../actions';

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateAnswer, (state, action) => {
    const { questionId, answer } = action.payload;
    state.answers[questionId] = answer;
  });
});

export default rootReducer; 