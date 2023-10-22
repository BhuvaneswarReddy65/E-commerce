import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { dataList } = props;
  console.log(dataList, typeof dataList);
  const { image, title, price, rating, category } = dataList;
  const navigate = useNavigate();

  const openDetailsCard = () => {
    navigate("/product/" + dataList?.id, {
      state: { dataList },
    });
  };
  return (
    <>
      <div
        className="border-white-400 border  m-3 border-solid w-[250px]  text-clip h-[400px] text-center max-w-md mx-auto bg-white rounded-xl p-8 shadow-2xl"
        onClick={openDetailsCard}
      >
        {/* <Link to={"/product/" + dataList} key={dataList.id}> */}{" "}
        <img
          src={image}
          className="w-[190px] h-[150px] p-3"
          alt="product-img"
        />
        <h3>{title}</h3>
        <div>{category}</div>
        <div>{price}-$</div>
        <div>{rating?.rate}*</div>
        {/* </Link> */}
      </div>
    </>
  );
};
export default ProductCard;
