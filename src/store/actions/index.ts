import { createAction } from '@reduxjs/toolkit';

interface UpdateAnswerPayload {
  questionId: string;
  answer: string | undefined;
}

export const updateAnswer = createAction<UpdateAnswerPayload>('UPDATE_ANSWER');
