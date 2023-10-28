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
        <Link
          to={"/about"}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          About
        </Link>{" "}
        |
        <Link
          to={"/contact"}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Contact
        </Link>{" "}
        |
        <Link
          to={"/policy"}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
