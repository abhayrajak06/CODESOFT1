import React from "react";
import Layout from "../Layout/Layout";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div
          className="row mb-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0",
          }}
        >
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7982.jpg?w=740&t=st=1698518803~exp=1698519403~hmac=0db33e0563705183e514d81e0bbc1916251d397afa72a59ff1991f55d602c02e"
              alt=""
              style={{
                width: "100%",
                height: "80%",
              }}
            />
          </div>
          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontWeight: "800", fontSize: "6rem" }}>404</h1>
            <h4>Oops! Page Not Found</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
