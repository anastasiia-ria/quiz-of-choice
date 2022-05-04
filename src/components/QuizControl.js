import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import QuizList from './QuizList';
import QuizDetail from './QuizDetail';
import EditQuizForm from './EditQuizForm';
import NewQuizForm from './NewQuizForm';

class QuizControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedQuiz: null,
      editing: false
    }
  }

  handleClick() {
    if (this.state.selectedQuiz != null) {
      this.setState({
        selectedQuiz: null,
        editing: false
      });
    } else {
      const {dispatch} = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }
  
  handleAddingNewQuizToList = () => {
    const {dispatch} = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
  
  handleChangingSelectedQuiz = (id) => {
    this.props.firestore.get({collection: 'quizzes', doc: id}).then((quiz) => {
      const firestoreQuiz = {
        names: quiz.get("names"),
        location: quiz.get("location"),
        issue: quiz.get("issue"),
        id: quiz.id
      }
      this.setState({selectedQuiz: firestoreQuiz});
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingQuizInList = () => {
    this.setState({
      editing: false,
      selectedQuiz: null
    });
  }

  handleDeletingQuiz = (id) => {
    this.props.firestore.delete({ collection: 'quizzes', doc: id});
    this.setState({selectedQuiz: null});
  }

  render(){
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
        <h1 className="text-center">You Must Be Signed In To Access The Queue!</h1>
      </React.Fragment>
      )}
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing) {
        currentlyVisibleState = <EditQuizForm quiz = {this.state.selectedQuiz} onEditQuiz = {this.handleEditingQuizInList} />
        buttonText = "Return to Quiz List";
      } else if (this.state.selectedQuiz != null) {
        currentlyVisibleState = <QuizDetail quiz = {this.state.selectedQuiz} onClickingDelete = {this.handleDeletingQuiz} 
        onClickingEdit= {this.handleEditClick} />
        buttonText = "Return to Quiz List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewQuizForm onNewQuizCreation={this.handleAddingNewQuizToList} />
        buttonText = "Return To Quiz List";
      } else {
        currentlyVisibleState = <QuizList onQuizSelection={this.handleChangingSelectedQuiz} />
        buttonText = "Add Quiz";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

QuizControl.propTypes = {
  mainQuizList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

QuizControl = connect(mapStateToProps)(QuizControl);

export default withFirestore(QuizControl);