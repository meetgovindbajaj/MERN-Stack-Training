import React, { useState} from "react";
import background from "../images/img.png";
import "./login.css";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid");
    } else {
      window.alert("Logged in");
      history.push("/loggedin")
      document.location.pathname="/loggedin";
    }
  };
  return (
    <div id="body2">
      <img className="img1" src={background} alt="jsx-a11y/alt-text"/>
      <div className="login" id="#login">
        <h2>LOG IN</h2>
        <form method="POST">
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-MAIL"
            title="E-MAIL"
          />
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="PASSWORD"
            title="PASSWORD"
          />
          <br />
          <input
            type="submit"
            name="signin"
            id="signin"
            className="buttons button3"
            value="LogIn"
            onClick={LoginUser}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
