import React from "react";
import Quiz from "./Quiz";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';

function QuizList(props){
  
  useFirestoreConnect([
    { collection: 'quizzes' }
  ]);

  const quizzes = useSelector(state => state.firestore.ordered.quizzes);

  if(isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <div className="grid grid-cols-5">
          {quizzes.map((quiz) => {
            return <Quiz 
            whenQuizClicked = { props.onQuizSelection }
            name={quiz.name}
            question1={quiz.question1}
            options1={quiz.options1}
            answer1={quiz.answer1}
            question2={quiz.question2}
            options2={quiz.options2}
            answer2={quiz.answer2}
            id={quiz.id}
            key={quiz.id}/>
        })}
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1 className="text-center">Loading...</h1>
      </React.Fragment>
    )
  }
}

QuizList.propTypes = {
  onQuizSelection: PropTypes.func
};

export default QuizList;