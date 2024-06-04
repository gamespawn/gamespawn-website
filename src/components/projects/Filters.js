import Checkbox from "./Checkbox";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Filters = ({ text, options, filters, setFilters }) => {
  const selectedFilters = filters || [];
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCheckboxChange = (itemOption) => {
    setFilters((prevFilters) =>
      prevFilters.includes(itemOption)
        ? prevFilters.filter((filter) => filter !== itemOption)
        : [...prevFilters, itemOption]
    );
  };

  return (
    <div className="bg-yellow-10 w-full">
      <div className="bg-green-100  border-2 border-black flex">
        Filter By {text}{" "}
        <IoIosArrowDown
          className={`hover:cursor-pointer ${
            showDropdown ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setShowDropdown(!showDropdown)}
        />
      </div>
      {showDropdown && (
        <div className="grid grid-cols-1 gap-2 bg-green-100">
          {options.map((itemName) => (
            <Checkbox
              key={itemName}
              text={itemName}
              toggle={selectedFilters.includes(itemName)}
              onClick={() => handleCheckboxChange(itemName)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Filters;
