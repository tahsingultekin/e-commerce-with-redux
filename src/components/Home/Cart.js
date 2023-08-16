import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, getCartTotal } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, totalAmount, itemCount } = useSelector((state) => state.cart);

  console.log(cart, totalAmount, itemCount);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex justify-around">
          <div>
            {cart.map((cartItem, i) => {
              return (
                <CartItem
                  key={i}
                  cartItem={cartItem}
                  totalAmount={totalAmount}
                  itemCount={itemCount}
                />
              );
            })}
          </div>

          <div className="border border-slate-500 flex flex-col w-[320px] h-[230px] flex flex-col justify-between">
            <p className="ml-5 my-3 font-bold ">
              Seçili Ürünler
              <span className="text-slate-500">({itemCount})</span>
            </p>

            <div className="flex flex-col items-center">
              <div className="flex justify-around items-center w-full my-3 capitalize">
                <p className="capitalize text-lg font-semibold">ürünler</p>
                <p>{totalAmount}$</p>
              </div>
              <div className="border-b border-2 my-3 border-slate-300 w-3/4"></div>
              <div className="my-3 space-x-2">
                <span className="text-xl font-bold ">Toplam :</span>
                <span className="text-2xl font-extrabold text-green-600">
                  {totalAmount} $
                </span>
              </div>
            </div>
            <button
              className="bg-orange-300 p-2 tracking-wider font-bold text-white hover:bg-orange-400 transition-all duration-300 "
              onClick={() => dispatch(clearCart())}
            >
              Clear All Item
            </button>
          </div>
        </div>
      ) : (
        <div className="capitalize flex justify-center">
          <EmptyCart />
        </div>
      )}
    </div>
  );
};

export default Cart;
