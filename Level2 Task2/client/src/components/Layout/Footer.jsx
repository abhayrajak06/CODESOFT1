import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="bg-dark text-light p-3 footer"
      style={{
        minHeight: "20vh",
        textAlign: "center",
      }}
    >
      <h5>Copyright &copy; {new Date().getFullYear()} Job Board</h5>
      <p className="m-3 text-center">
        <Link to={"/about"}>About</Link> |<Link to={"/contact"}>Contact</Link> |
        <Link to={"/policy"}>Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
