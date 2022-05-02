import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';

// class QuizControl extends React.Component {
// }

const QuizControl = () => {
  const quizList = [quizzes, setQuiz] = useState({});

  const handleAddingQuiz = (quiz) => {
    // logic for adding quiz to firebase
  }
  
  const auth = this.props.firebase.auth();
  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1 className="text-center">Loading...</h1>
      </React.Fragment>
    )
  }
  if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
    <React.Fragment>
      <h1 className="text-center">You Must Be Signed In To Access The Quizzes!</h1>
    </React.Fragment>
    )}
  if ((isLoaded(auth)) && (auth.currentUser != null)) {
    return (
      
    )
  }
}

export default withFirestore(QuizControl);