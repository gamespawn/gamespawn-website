import Checkbox from "./Checkbox";
const Filters = ({ options, filters, setFilters }) => {
  const selectedFilters = filters || [];

  const handleCheckboxChange = (itemOption) => {
    setFilters((prevFilters) =>
      prevFilters.includes(itemOption)
        ? prevFilters.filter((filter) => filter !== itemOption)
        : [...prevFilters, itemOption]
    );
  };

  return (
    <div className="bg-yellow-100">
      <div className="bg-green-100  border-2 border-black w-3/12">
        Filter By Year
      </div>
      <div className="w-fit grid grid-cols-1 gap-2 bg-green-100">
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
