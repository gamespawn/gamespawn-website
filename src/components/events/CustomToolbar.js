import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const CustomToolbar = (event) => {
  return (
    <div className="flex justify-center items-center font-russo font-bold text-2xl">
      <FaArrowLeft
        onClick={() => {
          console.log("prev");
          event.onNavigate("PREV");
        }}
        className="text-black hover:cursor-pointer "
      />
      <div className="text-center text-4xl p-4 text-black">
        {monthNames[event.date.getMonth()]}
        &nbsp;
        {event.date.getFullYear()}
      </div>
      <FaArrowRight
        onClick={() => event.onNavigate("NEXT")}
        className="text-game-black hover:cursor-pointer"
      />
    </div>
  );
};

export default CustomToolbar;
