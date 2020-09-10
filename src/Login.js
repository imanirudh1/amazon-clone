import React, { useState } from "react";
import "./Login.css";
import { Link,useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
    const history=useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(auth => {
        history.push('/')
    })
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => { 
        console.log(auth);
        if(auth){
            history.push('/')
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-logo"
          src="https://i.pinimg.com/originals/de/67/85/de6785ee60ba7879c39a279ddc0b034f.png"
        />
      </Link>

      <div className="login-container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn}>
            Sign-in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="register-button">
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
