import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import "./SignIn.css";
import { auth } from "../firebase/firebase.utilies";
import logo from "../assets/logo.png";


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(()=> history.push("./main"))
      .catch((error) => alert(error.message));
  };

  const handleRegister = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((ahmet) => {
        // it successfully created a new user with email and password
        if (auth) {
          alert("hello");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
        <img src={logo} className="login__logo"/>
      <div className="login__container">
        <h1>Lighthouse</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleSignIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <button className="login__registerButton" onClick={handleRegister}>
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default SignIn;
