import React from "react";
import Layout from "../Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row mt-5 p-2">
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=1060&t=st=1698516241~exp=1698516841~hmac=a3d64db8e3f4d623502ee2b417e31054f7152a474fdf1b5e23b04c3072a5e4cb"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-center mb-4">
              <u>About Us</u>
            </h3>
            <p className="p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium ipsum cupiditate labore quam possimus eveniet
              temporibus earum voluptas natus atque, blanditiis at modi illo
              obcaecati enim! Dolores corporis, recusandae aut iusto error velit
              necessitatibus debitis omnis totam vel similique tempore suscipit
              quaerat laboriosam laudantium, et adipisci tenetur ipsam ex nihil
              maxime a eum modi explicabo? Exercitationem, ratione aliquam
              molestias nulla fugit, consectetur vitae veritatis aut voluptates
              ut neque at cupiditate commodi, sed quisquam eveniet voluptatibus.
              Officia, et dolor. Dolores perspiciatis temporibus praesentium,
              expedita omnis magnam voluptatum ipsam eos totam dolorum aut
              laborum voluptatibus suscipit architecto minima. Reprehenderit
              maiores odit ducimus!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
