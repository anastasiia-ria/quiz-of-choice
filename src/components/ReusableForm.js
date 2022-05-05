import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Col, Row} from "react-bootstrap";

function ReusableForm(props) {
  const {formSubmissionHandler, buttonText, quiz} = props;
  return (
    <React.Fragment>
      <Form onSubmit={formSubmissionHandler} className='w-50'>
      <Form.Group className="mb-3">
        <Form.Control type='text' name='name' placeholder='Quiz Name' defaultValue={quiz.name}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control  type='text' name='question1' placeholder='Question 1' defaultValue={quiz.question1}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control  type='text' name='answer1' placeholder='Answer for the first question' defaultValue={quiz.answer1}/>
      </Form.Group>
      <Row>
        <Col>
          <Form.Control  className="mb-3" type='text' name='option1_1' placeholder='Option 1' defaultValue={quiz.option1_1}/>
          <Form.Control  className="mb-3" type='text' name='option1_2' placeholder='Option 2' defaultValue={quiz.option1_2}/>
        </Col>
        <Col>
          <Form.Control  className="mb-3" type='text' name='option1_3' placeholder='Option 3' defaultValue={quiz.option1_3}/>
          <Form.Control  className="mb-3" type='text' name='option1_4' placeholder='Option 4' defaultValue={quiz.option1_4}/>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Control  type='text' name='question2' placeholder='Question 2' defaultValue={quiz.question2}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control  type='text' name='answer2' placeholder='Answer for the second question' defaultValue={quiz.answer2}/>
      </Form.Group>
      <Row>
        <Col>
          <Form.Control  className="mb-3" type='text' name='option2_1' placeholder='Option 1' defaultValue={quiz.option2_1}/>
          <Form.Control  className="mb-3" type='text' name='option2_2' placeholder='Option 2' defaultValue={quiz.option2_2}/>
        </Col>
        <Col>
          <Form.Control  className="mb-3" type='text' name='option2_3' placeholder='Option 3' defaultValue={quiz.option2_3}/>
          <Form.Control  className="mb-3" type='text' name='option2_4' placeholder='Option 4' defaultValue={quiz.option2_4}/>
        </Col>
      </Row>
        <Button type='submit'>{buttonText}</Button>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  quiz: PropTypes.object
};

export default ReusableForm;