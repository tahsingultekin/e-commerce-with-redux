import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";
import { GiHamburgerMenu } from "react-icons/gi";

const Category = ({ setCategory, toggle, setToggle }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className="w-1/6 pl-1 pr-1 pt-12 h-screen bg-slate-200">
      {categories.map((category, index) => {
        return (
          <div className="" key={index}>
            <div key={index} className="flex flex-col ">
              <p
                className="text-black py-3 pl-3 capitalize tracking-wider  hover:bg-black hover:text-white cursor-pointer rounded-md shadow-md"
                onClick={() => setCategory(category)}
              >
                {category}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
