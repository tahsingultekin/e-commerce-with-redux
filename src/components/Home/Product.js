import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`products/${product.id}`)}
      className="  my-2 mx-2 px-3  space-y-5 border flex justify-center items-center flex-col flex-wrap w-60 h-96 cursor-pointer relative "
    >
      <img
        src={product.image}
        className=" w-48 h-52 object-contain absolute top-3 cursor-pointer"
      />
      <div
        className="flex
       flex-col justify-center items-center absolute bottom-3 space-y-3"
      >
        <p className="tracking-wide text-center font-semibold text-md">
          {product.title}
        </p>
        <button className="tracking-wider text-2xl  text-white bg-slate-500 py-1 px-3 rounded-lg cursor-pointer">
          {product.price} $
        </button>
      </div>
    </div>
  );
};

export default Product;
