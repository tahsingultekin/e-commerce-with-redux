import React from "react";
import { BsFillCartXFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[600px] tracking-wider space-y-5 flex flex-col justify-center items-center  h-screen">
      <p className=" uppercase text-3xl font-bold">shopping cart</p>

      <BsFillCartXFill size={150} className=" text-gray-200" />
      <div className="space-y-10 flex flex-col justify-center items-center">
        <p className=" capitalize text-2xl font-bold">
          your cart is currently empty!
        </p>
        <p className=" text-slate-400 text-md">
          Before proceed to checkout you must add some products to your shopping
          cart. You will find a lot of interesting products on our "Shop" page
        </p>
        <button
          className="capitalize rounded-full bg-blue-500 text-white py-3 px-4"
          onClick={() => navigate("/")}
        >
          return to shop
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
