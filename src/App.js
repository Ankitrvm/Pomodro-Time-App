import { useState } from "react";
import Header from "./components/Header/Header";
import LoginForm from "./components/login-from/Login-form";
import TimerDiv from "./components/timer/TimerDiv";

function App() {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    userInfo: null,
  });

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      userInfo: null,
    });
  };

  return (
    <>
      <Header
        userEmail={auth.userInfo?.email}
        isAuthenticated={auth.isAuthenticated}
        onClick = {logout}
      />
      {!auth.isAuthenticated ? <LoginForm setAuth={setAuth} /> : <TimerDiv />}
    </>
  );
}

export default App;
