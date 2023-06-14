import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");

  const nav = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/signup", {
        name,
        email,
        password,
      });
      if (res && res.data.success) {
        alert(res.data.message);
        nav("/login");
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
      <form onSubmit={handleSubmit}>
        <div className="container" style={{ marginTop: "100px", width: "60%" }}>
          <div className="login-head text-center">
            <h1>Sign-up on OnGrid</h1>
            Register yourself for the benefits
          </div>
          <div className="login-form my-3 text-center">
            <div className="input-field">
              <label htmlFor="myname">Name* </label>
              <input
                className="forminput my-3"
                type="text"
                name="name"
                id="myname"
                // placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="input-field">
              <label htmlFor="myemail">Email*</label>
              <input
                className="forminput my-3"
                type="email"
                name="email"
                id="myemail"
                // placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="input-field">
              <label htmlFor="mypass">Password*</label>
              <input
                className="forminput my-3"
                type="password"
                name="pass"
                id="mypass"
                // placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            {/* <label htmlFor="mycon">Phone:</label>
        <input
        type="text"
        name="phone"
        id="mycon"
        placeholder="phone number"
        value={phone}
        onChange={(e)=> setPhone(e.target.value)}
        required
      /> */}
            <button type="submit" className="btn login-btn my-3">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Signup;
