import React from "react";
// import PropTypes from "prop-types";

function QuizResults(props) {
  return (
    <div className="grid grid-cols-5 w-50 m-auto p-5 text-center">
      <h3 className="mb-5">{props.name}</h3>
      <p>You got a score of: <span>{props.score}</span></p>
    </div>
  )
}
export default QuizResults;