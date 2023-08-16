import React, { useEffect, useState } from "react";
import Sorting from "./Sorting";
import Product from "./Product";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsCategories } from "../../redux/productSlice";
import ReactPaginate from "react-paginate";

const Products = ({ category, sort, setSort, toggle, setToggle }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.product);

  useEffect(() => {
    if (category) {
      dispatch(getProductsCategories(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="w-5/6 ">
      <Sorting sort={sort} setSort={setSort} />
      {productsStatus === "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap ml-12 ">
            {currentItems
              .sort((a, b) =>
                sort === "inc"
                  ? a.price - b.price
                  : sort === "dec"
                  ? b.price - a.price
                  : null
              )
              .map((product, index) => {
                return (
                  <Product
                    key={index}
                    product={product}
                    toggle={toggle}
                    setToggle={setToggle}
                  />
                );
              })}
          </div>
          <ReactPaginate
            className="paginate"
            breakLabel="..."
            nextLabel=" >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< "
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;
