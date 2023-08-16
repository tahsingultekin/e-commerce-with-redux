import React, { useState } from "react";
import SliderPage from "./SliderPage";
import Category from "./Category";
import Products from "./Products";

const Home = () => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <SliderPage />
      <div className="flex">
        <Category
          setCategory={setCategory}
          toggle={toggle}
          setToggle={setToggle}
        />
        <Products
          category={category}
          sort={sort}
          setSort={setSort}
          toggle={toggle}
          setToggle={setToggle}
        />
      </div>
    </div>
  );
};

export default Home;
