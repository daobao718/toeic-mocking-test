// src/store/reducers/index.js
import { createReducer } from '@reduxjs/toolkit';
import initialState from '../state';

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase('UPDATE_ANSWER', (state, action) => {
    const { questionId, answer } = action.payload;
    state.answers[questionId] = answer;
  });
  // Các case khác có thể được thêm vào sau này
});

export default rootReducer;