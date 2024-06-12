import Checkbox from "./Checkbox";
import { IoIosArrowDown } from "react-icons/io";
const Filters = ({ text, options, filters, setFilters }) => {
  const selectedFilters = filters || [];

  const handleCheckboxChange = (itemOption) => {
    setFilters((prevFilters) =>
      prevFilters.includes(itemOption)
        ? prevFilters.filter((filter) => filter !== itemOption)
        : [...prevFilters, itemOption]
    );
  };

  return (
    <div class="relative text-left w-full h-full">
      <div>
        <div className="inline-flex w-full items-center justify-center border-2 bg-gray-300 text-3xl text-gray-900 py-3 font-semibold">
          <div className="w-10/12 font-monda pl-2">Filter by {text}</div>
          <IoIosArrowDown className="flex gray-300 items-end w-2/12" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 bg-white text-xl font-monda py-3 px-3">
        {options.map((itemName) => (
          <Checkbox
            key={itemName}
            text={itemName}
            toggle={selectedFilters.includes(itemName)}
            onClick={() => handleCheckboxChange(itemName)}
          />
        ))}
      </div>
    </div>
  );
};

export default Filters;
