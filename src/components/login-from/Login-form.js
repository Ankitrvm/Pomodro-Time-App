import React, { useState } from "react";
import classes from "./Login-form.module.css";

import app from "../../firebase/Firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const LoginForm = ({ setAuth }) => {
  const auth = getAuth(app);

  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    createUserWithEmailAndPassword(auth, userName, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setAuth({
          isAuthenticated: true,
          userInfo: user,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuth({
          isAuthenticated: false,
          userInfo: null,
        });
        alert(errorCode);
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, userName, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setAuth({
          isAuthenticated: true,
          userInfo: user,
        });
      })
      .catch((error) => {
        handleSignin();
      });
  };

  return (
    <div className={classes["login-container"]}>
      <div className={classes["login-box"]}>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={classes.buttonn}>
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
