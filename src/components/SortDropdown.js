import React from "react";

const SortDropdown = ({ handleSortChange }) => {
  return (
    <div className="text-center h-10 mt-2 border-spacing-10 flex justify-center">
      <select
        onChange={handleSortChange}
        className="w-[170px] block  p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 "
      >
        <option className="text-gray-600" value="lowToHigh">
          Low to High
        </option>
        <option className="text-gray-600" value="highToLow">
          High to Low
        </option>
        <option className="text-gray-600" selected>
          Sort By Price
        </option>
      </select>
    </div>
  );
};

export default SortDropdown;
