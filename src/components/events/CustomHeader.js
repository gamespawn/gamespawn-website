import "./index.css";

const CustomHeader = ({ label }) => {
  return (
    <div className="flex justify-left font-russo text-white bg-game-black text-2xl px-2 py-1 md:py-3">
      {label}
    </div>
  );
};

export default CustomHeader;
