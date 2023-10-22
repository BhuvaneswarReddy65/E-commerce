import React, { useState } from "react";

const AddProduct = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSave = () => {
    onAddProduct(product);
    console.log(product);
    // Reset the input fields
    setProduct({
      image: "",
      title: "",
      description: "",
      price: 0,
    });
  };

  return (
    <div className="flex border-solid border-violet-900  justify-center w-[500px] ml-[36%] mt-[50px] p-16 max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <div>
        <div className="popup">
          <div className="p-3 mt-4">
            <input
              className="border p-2 hover:border-blue-500"
              type="text"
              name="image"
              placeholder="Image URL"
              value={product.image}
              onChange={handleChange}
            />
          </div>
          <div className="p-3 mt-4">
            <input
              className="border p-2 hover:border-blue-500"
              type="text"
              name="title"
              placeholder="Title"
              value={product.title}
              onChange={handleChange}
            />
          </div>
          <div className="p-3 mt-4">
            <textarea
              className="border p-2 hover:border-blue-500"
              name="description"
              placeholder="Description"
              value={product.description}
              onChange={handleChange}
            />
          </div>
          <div className="p-3 mt-4">
            <input
              className="border p-2 hover:border-blue-500"
              type="number"
              name="price"
              placeholder="Price"
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div className="p-3 mt-4 j ml-[85px] bg-blue-500 text-white w-[60px] rounded-md">
            <button className="text-center" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
