import * as c from './../actions/ActionTypes';

const quizListReducer = (state = {}, action) => {
  const { id } = action;
  switch (action.type) {
  case c.DELETE_QUIZ:
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

export default quizListReducer;