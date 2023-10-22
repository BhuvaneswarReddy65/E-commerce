import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.dataList;

  // const backToHome = () => {
  //   navigate("/");
  // };
  return (
    <>
      <div className="flex justify-between bg-purple-200 shadow-md m-2 mb-3  ">
        <div>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dpielityo/image/upload/v1697904246/x7eogjrd9vivdexidn5u.png"
              alt="logo"
              className="w-16"
            />
          </Link>
        </div>
        <div className="">
          <Link to="/">
            <Button text="back " className="p-5 m-5" />
          </Link>
        </div>
      </div>
      <div className="flex m-7 ml-[28%] justify-center mt-[100px]  w-[670px] bg-white rounded-lg p-4 shadow-md">
        <div className="">
          <img src={data?.image} className=" w-56 h-60 p-3" alt="product-img" />
        </div>
        <div className="flex justify-center flex-col ml-9">
          <h3 mt-5>
            <span className="font-bold mr-4 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              Title:
            </span>{" "}
            {data?.title}
          </h3>
          <div className="mt-5">
            <span className="font-bold mr-4 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              category:
            </span>{" "}
            {data?.category}
          </div>
          <div className="mt-5">
            <span className="font-bold mr-4 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              Price:
            </span>{" "}
            {data?.price}-$
          </div>
          <div className="mt-5">
            <span className="font-bold mr-4 bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
              Rating:
            </span>{" "}
            {data?.rating?.rate}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
