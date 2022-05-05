import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from 'react-bootstrap';

function Quiz(props){
  return (
    <ListGroup.Item className="p-3" onClick = {() => props.whenQuizClicked(props.id)}>
      <h3 className="text-center">{props.name}</h3>
    </ListGroup.Item>
  );
}
export default Quiz;

Quiz.propType = {
  name: PropTypes.string,
  id: PropTypes.string,
  whenQuizClicked: PropTypes.func
}