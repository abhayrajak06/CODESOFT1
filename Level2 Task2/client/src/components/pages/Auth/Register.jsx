import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setDetails({ ...details, [e.target.name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const name = details.name;
      const email = details.email;
      const password = details.password;
      const phone = details.phone;
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_PORT}/api/v1/auth/register`,
        {
          name,
          email,
          password,
          phone,
        }
      );
      if (res?.data.success) {
        // toast.success("Register Successfully");
        console.log("Register Successfully");
        navigate("/login");
      }
    } catch (error) {
      //   toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <Layout title={"Job Board - Register"}>
      <div className="register">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center p-2 mb-3">Register</h1>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={details.name}
              className="form-control"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="mb-3">
            <input
              type="text"
              name="phone"
              value={details.phone}
              className="form-control"
              placeholder="Enter your phone number"
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
