import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// *API Services Imports*
import PostProduct from "../api_services/PostProduct";

const Create = () => {
  // const [createSword, setCreateSword] = useState({
  //   name: "",
  //   type: "",
  //   length: "",
  //   mass: "",
  //   price: "",
  //   description: "",
  //   image_url: "",
  // });
  // const POST = PostProduct();
  const [createName, setCreateName] = useState("");
  const [createType, setCreateType] = useState("");
  const [createLength, setCreateLength] = useState("");
  const [createMass, setCreateMass] = useState("");
  const [createPrice, setCreatePrice] = useState("");
  const [createDescription, setCreateDescription] = useState("");
  const [createImageUrl, setCreateImageUrl] = useState("");
  const navigate = useNavigate();

  // const POST = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log(createName);
  //     console.log(createPrice);
  //     const res = await axios({
  //       method: "POST",
  //       url: "http://localhost:8080/api/sword",
  //       data: {
  //         name: createName,
  //         type: createType,
  //         length: createLength,
  //         mass: createMass,
  //         price: createPrice,
  //         description: createDescription,
  //         image_url: createImageUrl,
  //       },
  //     });
  //     console.log(res.data);
  //   } catch (error) {
  //     console.error(error);
  //     navigate("/error500");
  //   }
  // };

  // const handleName = (e) => {
  //   let updatedValue = { name: e.target.value };
  //   setCreateSword((prevData) => ({
  //     ...prevData,
  //     ...updatedValue,
  //   }));
  // };

  // const handleType = (e) => {
  //   let updatedValue = { type: e.target.value };
  //   setCreateSword((prevData) => ({
  //     ...prevData,
  //     ...updatedValue,
  //   }));
  // };

  // const handleLength = (e) => {
  //   let updatedValue = { length: e.target.value };
  //   setCreateSword((prevData) => ({
  //     ...prevData,
  //     ...updatedValue,
  //   }));
  // };

  // const handleMass = (e) => {
  //   let updatedValue = { mass: e.target.value };
  //   setCreateSword((prevData) => ({
  //     ...prevData,
  //     ...updatedValue,
  //   }));
  // };

  // const handlePrice = (e) => {
  //   let updatedValue = { price: e.target.value };
  //   setCreateSword((prevData) => ({
  //     ...prevData,
  //     ...updatedValue,
  //   }));
  // };

  // const handleDescription = (e) => {
  //   let updatedValue = { description: e.target.value };
  //   setCreateSword((prevData) => ({
  //     ...prevData,
  //     ...updatedValue,
  //   }));
  // };

  // const handleImageUrl = (e) => {
  //   let updatedValue = { image_url: e.target.value };
  //   setCreateSword((prevData) => ({
  //     ...prevData,
  //     ...updatedValue,
  //   }));
  //   console.log(createSword);
  // };

  // FIXME:
  const handleSubmit = () => {
    const POST = PostProduct();
    console.log("handle: " + createName);
    <PostProduct
      name={createName}
      type={createType}
      length={createLength}
      mass={createMass}
      price={createPrice}
      description={createDescription}
      imageUrl={createImageUrl}
    />;
    POST();
  };

  return (
    <div>
      <Link to="/admin">Back</Link>
      <div className="createContainer">
        <h4>headers: application/json</h4>
        <br />
        <p>"sword": &#123;</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">"name":</label>{" "}
            <input
              name="name"
              type="text"
              placeholder="Name"
              // onChange={(e) => handleName(e)}
              onChange={(e) => setCreateName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="type">"type":</label>{" "}
            <input
              name="type"
              type="text"
              placeholder="Type"
              // onChange={(e) => handleType(e)}
              onChange={(e) => setCreateType(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="length">"length":</label>{" "}
            <input
              name="length"
              type="number"
              placeholder="Length"
              // onChange={(e) => handleLength(e)}
              onChange={(e) => setCreateLength(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mass">"mass":</label>{" "}
            <input
              name="mass"
              type="number"
              placeholder="Mass"
              // onChange={(e) => handleMass(e)}
              onChange={(e) => setCreateMass(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">"price":</label>{" "}
            <input
              name="price"
              type="number"
              placeholder="Price"
              // onChange={(e) => handlePrice(e)}
              onChange={(e) => setCreatePrice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">"description":</label>{" "}
            <textarea
              name="description"
              cols="20"
              rows="1"
              // onChange={(e) => handleDescription(e)}
              onChange={(e) => setCreateDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label htmlFor="image_url">"image_url":</label>{" "}
            <input
              name="image_url"
              type="image_url"
              placeholder="Image Url"
              // onChange={(e) => {
              //   handleImageUrl(e);
              // }}
              onChange={(e) => setCreateImageUrl(e.target.value)}
            />
          </div>
          <p>&#125;</p>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
