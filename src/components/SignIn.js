import React from "react";
import firebase from "firebase/compat/app";
import { Form, Button, Row, Col} from "react-bootstrap";
import { getAuth } from "firebase/auth";
// import { useFirestore } from 'react-redux-firebase';
import { isLoaded } from 'react-redux-firebase';

function Signin(props) {
  // const firestore = useFirestore();
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        console.log("Successfully Signed Up!");
        const auth = getAuth();
        // onAuthStateChanged(auth, (user) => {
        //   if (user) {
        //     const uid = user.uid;
        //     firestore.collection('users-score').add(
        //       {
        //         userId: uid,
        //         score: 0,
        //         completedQuizzes: []
        //       }
        //     )
        //   } 
        // });
      })
      .catch(function (error) {
        console.log(error.message);
      });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        console.log("Successfully Signed In!");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        console.log("Successfully Signed In!");
        // props.successfullySignin();
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("Successfully signed out!");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  const auth = firebase.auth();
  if (isLoaded(auth) && (auth.currentUser == null)) {
    return (
      <div className = "w-50 m-auto">
        <Row>
          <Col>
            <h1>Sign Up</h1>
            <Form onSubmit={doSignUp}>
              <Form.Group className="mb-3">
                <Form.Control type="text" name="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
              <Button type="submit">
                Sign Up
              </Button>
            </Form></Col>
          <Col>
            <h1>Sign In</h1>
            <Form onSubmit={doSignIn}>
            <Form.Group className="mb-3">
              <Form.Control type="text" name="signinEmail" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control type="password" name="signinPassword" placeholder="Password" />
            </Form.Group>
              <Button type="submit">
                Sign In
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  } else {
    return (
      <div className = "w-50 m-auto">
        <h1>Sign Out</h1>
        <Button onClick={doSignOut}>
          Sign Out
        </Button>
      </div>
    )
  }
}

export default Signin;
