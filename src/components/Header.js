import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-purple-200 shadow-md m-2 mb-3">
        <div>
          <img
            src="https://res.cloudinary.com/dpielityo/image/upload/v1697904246/x7eogjrd9vivdexidn5u.png"
            alt="logo"
            className="w-16"
          />
        </div>

        <div className="flex m-2">
          <Link to="/addproduct">
            <Button text="Add Product" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
