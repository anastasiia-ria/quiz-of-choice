import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function NewQuizForm(props){

  const firestore = useFirestore();

  function addQuizToFirestore(event) {
    event.preventDefault();
    props.onNewQuizCreation();
    return firestore.collection('quizzes').add(
      {
        question1: event.target.question1.value,
        options1: event.target.options1.value, 
        answer1: event.target.answer1.value,
        question1: event.target.question2.value,
        options2: event.target.options2.value, 
        answer2: event.target.answer2.value,
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addQuizToFirestore}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewQuizForm.propTypes = {
  onNewQuizCreation: PropTypes.func
};

export default NewQuizForm;