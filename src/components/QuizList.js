import React from "react";
import Quiz from "./Quiz";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { ListGroup } from 'react-bootstrap';

function QuizList(props){
  
  useFirestoreConnect([
    { collection: 'quizzes' }
  ]);

  const quizzes = useSelector(state => state.firestore.ordered.quizzes);

  if(isLoaded(quizzes)) {
    return (
      <React.Fragment>
        <ListGroup>
          {quizzes.map((quiz) => {
            return <Quiz 
            whenQuizClicked = { props.onQuizSelection }
            name={quiz.name}
            id={quiz.id}
            key={quiz.id}/>
        })}
        </ListGroup>
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