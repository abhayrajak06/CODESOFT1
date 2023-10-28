import React from "react";
import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row mt-5 p-2">
          <div className="col-md-6">
            <img
              src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1698516487~exp=1698517087~hmac=ed51526c57261a9c4d4309e5741c7f5ffe8d093d3c80870c1c4fe948416c0853"
              alt=""
              style={{ width: "100%", height: "80%" }}
            />
          </div>
          <div className="col-md-6">
            <h3 className="text-center mb-4">
              <u>Contact Us</u>
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

export default Contact;
