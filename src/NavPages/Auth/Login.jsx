import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
    try {
      const res = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        alert(res.data.message);
        nav("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="container" style={{ marginTop: "100px", width: "60%" }}>
        <div className="login-head text-center">
          <h1>Sign-in on OnGrid</h1>
          View, Add, Manage individuals in your community
        </div>
        <div className="login-form my-3 text-center">
          <form onSubmit={handleSubmit}>
            <div className="input-field">
              <label htmlFor="myemail">Email*</label>
              <input
                className="forminput my-3"
                type="email"
                name="email"
                id="myemail"
                // placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="input-field">
              <label htmlFor="myemail">Password*</label>
              <input
                className="forminput my-3"
                type="password"
                name="pass"
                id="mypass"
                // placeholder="Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            <button type="submit" className="btn login-btn my-3">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
