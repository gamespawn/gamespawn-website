import "./index.css";

const CustomHeader = ({ label }) => {
  return (
    <div className="flex justify-left px-2 rounded-l-xl font-russo text-white bg-game-black text-winc-white text-2xl py-1 md:py-3">
      {label}
    </div>
  );
};

export default CustomHeader;
