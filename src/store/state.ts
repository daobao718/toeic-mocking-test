interface AnswerState {
  [questionId: string]: string | undefined;
}

export interface RootState {
  answers: AnswerState;
}

const initialState: RootState = {
  answers: {},
};

export default initialState;