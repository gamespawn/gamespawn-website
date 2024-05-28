import Checkbox from "./Checkbox";
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
    <div className="bg-yellow-10 w-full">
      <div className="bg-green-100  border-2 border-black ">
        Filter By {text}
      </div>
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
    </div>
  );
};

export default Filters;
