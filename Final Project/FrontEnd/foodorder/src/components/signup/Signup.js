import React, { useState } from "react";
import "./signup.css";
import { useHistory } from "react-router-dom";
import background from "../images/img.png";
const Signup = () => {

  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const PostData = async (e) => {
    e.preventDefault();
    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        cpassword,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid");
    } else {
      window.alert("Registerd Succesfully");
      history.push("/login");
    }
  };

  return (
    <div id="body3">
      <img className="img" src={background} alt="jsx-a11y/alt-text"/>
      <div className="login1" id="#login">
        <h2>SIGN UP</h2>
        <form method="POST">
          <input
            className="input1"
            name="name"
            id="name"
            type="text"
            placeholder="FULL-NAME"
            title="ENTER YOUR FULL-NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            className="input1"
            type="email"
            name="email"
            id="email"
            placeholder="E-MAIL"
            title="ENTER YOUR E-MAIL ADDRESS"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="input1"
            type="password"
            name="password"
            id="password"
            placeholder="PASSWORD"
            title=" ENTER PASSWORD"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <br />
          <input
            className="input1"
            type="password"
            name="cpassword"
            id="cpassword"
            placeholder="RE-ENTER PASSWORD"
            title="RE-ENTER ABOVE PASSWORD"
            onChange={(e) => setCpassword(e.target.value)}
            value={cpassword}
          />
          <br />
          <input
            onClick={PostData}
            type="submit"
            name="signup"
            id="signup"
            className="buttons button4"
            value="Sign Up"
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
