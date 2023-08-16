import React, { useEffect } from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

const CartItem = ({ cartItem, totalAmount, itemCount }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-around tracking-wider  border px-2 py-3 gap-7 my-2 w-[600px]">
      <img src={cartItem.image} className="w-36 h-36" />

      <p>{cartItem.title.substr(0, 30)}</p>

      <button className="text-orange-600 bg-orange-100 p-2 rounded-full hover:border hover:border-orange-600 hover:bg-white ">
        <BsTrash
          size={23}
          onClick={() => dispatch(removeFromCart(cartItem.id))}
        />
      </button>
    </div>
  );
};

export default CartItem;
