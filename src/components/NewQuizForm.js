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
        name: event.target.name.value, 
        question1: event.target.question1.value, 
        answer1: event.target.answer1.value, 
        option1_1: event.target.option1_1.value, 
        option1_2: event.target.option1_2.value, 
        option1_3: event.target.option1_3.value, 
        option1_4: event.target.option1_4.value, 
        question2: event.target.question2.value, 
        answer2: event.target.answer2.value, 
        option2_1: event.target.option2_1.value, 
        option2_2: event.target.option2_2.value, 
        option2_3: event.target.option2_3.value, 
        option2_4: event.target.option2_4.value
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={addQuizToFirestore}
        buttonText="Create!"
        quiz = {{}} />
    </React.Fragment>
  );
}

NewQuizForm.propTypes = {
  onNewQuizCreation: PropTypes.func
};

export default NewQuizForm;