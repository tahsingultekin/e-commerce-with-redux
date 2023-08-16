import React, { useEffect, useState } from "react";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);
  return (
    <div className="flex justify-between items-center h-12 tracking-wider mt-3">
      <p
        className="text-3xl font-semibold cursor-pointer "
        onClick={() => navigate("/")}
      >
        ShopMerkez
      </p>
      <div className="flex space-x-3 mr-4">
        <AiOutlineHeart className="text-2xl" />
        <div className="relative ">
          <SlBasket
            className="text-2xl cursor-pointer"
            onClick={() => navigate("/cart")}
          />
          <div className="bg-orange-500 w-4 h-4  rounded-full absolute -top-2 -right-3 text-white flex items-center justify-center text-xs ">
            {cart.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
