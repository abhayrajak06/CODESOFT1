import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setDetails({ ...details, [e.target.name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const email = details.email;
      const password = details.password;
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_PORT}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      if (res?.data.success) {
        console.log("Login Successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Job Board - Login"}>
      <div className="register">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center p-2 mb-3">Login</h1>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={details.email}
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              value={details.password}
              className="form-control"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
