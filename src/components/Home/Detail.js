import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Detail = ({ productDetail }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const decrement = () => {
    if (quantity <= 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    if (quantity >= productDetail.rating.count) {
      setQuantity(productDetail.rating.count);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        quantity,
        price: productDetail?.price,
      })
    );
  };

  return (
    <div className=" w-full flex justify-center items-center tracking-wide mt-7">
      <img className="w-64" src={productDetail.image} />
      <div className="flex flex-col justify-center items-center gap-5 px-5">
        <p className="font-semibold text-2xl">{productDetail.title}</p>
        <p className="text-lg">{productDetail.description}</p>
        <p className="font-bold text-4xl border-b-[5px] border-slate-500 rounded-lg ">
          {productDetail.price}$
        </p>
        <div className="w-full flex items-center justify-center my-5  relative">
          <div className=" absolute left-2 ">
            <div>
              <span className="text-2xl tracking-wider font-bold mr-2">
                Rating:
              </span>
              <span className="text-lg">{productDetail?.rating?.rate}</span>
            </div>
            <div>
              <span className="text-2xl tracking-wider font-bold mr-1">
                Count:{" "}
              </span>
              <span className="text-lg">{productDetail?.rating?.count}</span>
            </div>
          </div>
          <div
            className="text-6xl cursor-pointer hover:text-slate-600"
            onClick={decrement}
          >
            -
          </div>
          <input
            className="text-center text-3xl font-light outline-none"
            type="text"
            value={quantity}
            readOnly
          />
          <div
            className="hover:text-slate-600 text-5xl cursor-pointer"
            onClick={increment}
          >
            +
          </div>
        </div>
        <button
          className="w-4/6 border text-xl p-3 bg-orange-500 text-white rounded-md"
          onClick={addBasket}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Detail;
