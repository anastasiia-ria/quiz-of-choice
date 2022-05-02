import React from "react";
import Header from "./Header";
import QuizControl from "./QuizControl";
import Signin from "./SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route exact path="/" element={<QuizControl />} />
      </Routes>
    </Router>
  );
}

export default App;