import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import { useDispatch } from 'react-redux'

// class QuizControl extends React.Component {
// }

const QuizControl = () => {
  const quizzes = [quizList, setQuiz] = useState({});
  const selectedQuiz = [state, setSelectedQuiz] = useState({});
  
  const handleAddingQuiz = (quiz) => {
    // logic for adding quiz to firebase
    // should take the new quiz and use setQuiz function defined above
  }

  function handleClick() {
    if (selectedQuiz.state != null) {
      selectedQuiz.setSelectedQuiz({
        selectedQuiz: null,
        editing: false
      });
    } else {
      const dispatch = useDispatch();
      const action = a.toggleForm();
      dispatch(action);
    }
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
    )
  }
  if ((isLoaded(auth)) && (auth.currentUser != null)) {
    let currentlyVisibleState = null;
    let buttonText = null;
    currentlyVisibleState = <QuizList onTicketSelection={handleChangingSelectedTicket} />
    buttonText = "Add Quiz";
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <div className="flex justify-center">  
          <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full mt-2" onClick={handleClick}>{buttonText}</button>
        </div>
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}
QuizControl = connect(mapStateToProps)(QuizControl);
export default withFirestore(QuizControl);