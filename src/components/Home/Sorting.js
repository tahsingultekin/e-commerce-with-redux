import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className=" flex justify-end items-center p-2 bg-slate-200 ">
      <select className="p-1" onChange={(e) => setSort(e.target.value)}>
        <option disabled>Seçiniz</option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
