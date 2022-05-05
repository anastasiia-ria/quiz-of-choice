import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import { getAuth } from "firebase/auth";


function QuizDetail(props){

  const {quiz, handleSubmittingQuizScore, onClickingDelete, onClickingEdit} = props;
  const firestore = useFirestore();

  function handleSubmittingQuiz(event) {
    event.preventDefault();
    const answer1 = document.querySelector('input[type=radio][name=question1]:checked').value;
    const answer2 = document.querySelector('input[type=radio][name=question2]:checked').value;
    let score = 0;
    if (answer1 === quiz.answer1) {
      score ++;
    }
    if (answer2 === quiz.answer2) {
      score ++;
    }
    handleSubmittingQuizScore({score: score, name: quiz.name});

    const auth = getAuth();
    const uid = auth.currentUser.uid;

    return firestore.collection('user-scores').add(
      {
        uid: uid,
        quizId: quiz.id,
        score: score
      }
    )
  }

  return (
    <div className="grid grid-cols-5 w-50 m-auto p-4">
      <Form id={quiz.id}>
        <h3>{quiz.name}</h3>
        <Form.Label>{quiz.question1}</Form.Label>
        <Row className="mb-5">
          <Col>
            <Form.Check type="radio" value={quiz.option1_1} name="question1" label={quiz.option1_1} defaultChecked />
            <Form.Check type="radio" value={quiz.option1_2} name="question1" label={quiz.option1_2}/>
          </Col>
          <Col>
            <Form.Check type="radio" value={quiz.option1_3} name="question1" label={quiz.option1_3}/>
            <Form.Check type="radio" value={quiz.option1_4} name="question1" label={quiz.option1_4}/>
          </Col>
        </Row>
        <Form.Label>{quiz.question2}</Form.Label>
        <Row className="mb-5">
          <Col>
            <Form.Check type="radio" value={quiz.option2_1} name="question2" label={quiz.option2_1} defaultChecked />
            <Form.Check type="radio" value={quiz.option2_2} name="question2" label={quiz.option2_2}/>
          </Col>
          <Col>
            <Form.Check type="radio" value={quiz.option2_3} name="question2" label={quiz.option2_3}/>
            <Form.Check type="radio" value={quiz.option2_4} name="question2" label={quiz.option2_4}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="submit" className="btn btn-success m-2" onClick={handleSubmittingQuiz}>Submit</Button>
          </Col>
        </Row>
      </Form>
      <Button className="btn btn-info m-2" onClick={ onClickingEdit }>Edit Quiz</Button>
      <Button className="btn btn-danger m-2" onClick={()=> onClickingDelete(quiz.id) }>Delete Quiz</Button>
    </div>
  )
}

QuizDetail.propTypes = {
  quiz: PropTypes.object,
  handleSubmittingQuizScore: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default QuizDetail;