import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import QuizList from './QuizList';
import QuizDetail from './QuizDetail';
import EditQuizForm from './EditQuizForm';
import NewQuizForm from './NewQuizForm';
import { Button} from "react-bootstrap";
import QuizResults from './QuizResults';

class QuizControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // currentlySignin: false,
      selectedQuiz: null,
      editing: false,
      submittedAnswer: false,
      quiz: null
    };
  }

  // handleSuccessfulSignin() {
  //   this.setState({
  //     currentlySignin: true,
  //   });
  // }

  handleClick = () => {
    if (this.state.selectedQuiz != null) {
      this.setState({
        selectedQuiz: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  } 

  handleAddingNewQuizToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedQuiz = (id) => {
    this.props.firestore.get({collection: 'quizzes', doc: id}).then((quiz) => {
      const firestoreQuiz = {
        name: quiz.get("name"),
        question1: quiz.get("question1"),
        answer1: quiz.get("answer1"),
        option1_1: quiz.get("option1_1"),
        option1_2: quiz.get("option1_2"),
        option1_3: quiz.get("option1_3"),
        option1_4: quiz.get("option1_4"),
        question2: quiz.get("question2"),
        answer2: quiz.get("answer2"),
        option2_1: quiz.get("option2_1"),
        option2_2: quiz.get("option2_2"),
        option2_3: quiz.get("option2_3"),
        option2_4: quiz.get("option2_4"),
        id: quiz.id
      }
      this.setState({selectedQuiz: firestoreQuiz});
    });
  }

  handleSubmittingQuizScore = (quiz) => {
    this.setState({
      submittedAnswer: true,
      selectedQuiz: null,
      quiz: quiz
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
      } else if (this.state.submittedAnswer) {
        currentlyVisibleState = <QuizResults score = {this.state.quiz.score} name = {this.state.quiz.name}/>
        buttonText = "Return to Quiz List";
        this.state.submittedAnswer = false;
      } else if (this.state.selectedQuiz != null) {
        currentlyVisibleState = <QuizDetail quiz = {this.state.selectedQuiz} onClickingDelete = {this.handleDeletingQuiz} 
        onClickingEdit= {this.handleEditClick} handleSubmittingQuizScore= {this.handleSubmittingQuizScore} />
        buttonText = "Return to Quiz List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewQuizForm onNewQuizCreation={this.handleAddingNewQuizToList}/>
        buttonText = "Return To Quiz List";
      } else {
        currentlyVisibleState = <QuizList onQuizSelection={this.handleChangingSelectedQuiz} />
        buttonText = "Add Quiz";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <Button className="m-5" onClick={this.handleClick}>{buttonText}</Button>
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