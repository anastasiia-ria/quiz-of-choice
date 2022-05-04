import formVisibleReducer from './form-visible-reducer';
import quizListReducer from './quiz-list-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainQuizList: quizListReducer,
  firestore: firestoreReducer
});

export default rootReducer;